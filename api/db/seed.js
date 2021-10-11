/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

const { subHours } = require('date-fns')

dotenv.config()
const db = new PrismaClient()

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */
async function main() {
  console.log('Start seeding...')

  const exportData = [
    {
      datum: new Date(),
      artkelcode: '12345678',
      artikelbezeichnung: 'Foo',
    },
  ]

  // // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
  // // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
  return Promise.all(
    exportData.map(async (item) => {
      const record = await db.buchung.create({
        data: {
          datum: item.datum,
          uhrzeit: item.datum,
          artikelcode: item.artkelcode,
          artikelbezeichnung: item.artikelbezeichnung,
          auslaufzeit: subHours(item.datum, 1),
        },
      })
      console.log(record)
    })
  )
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
