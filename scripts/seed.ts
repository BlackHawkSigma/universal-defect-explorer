/* eslint-disable no-console */
import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

import { subHours } from 'date-fns'

export default async () => {
  try {
    console.log('Start seeding...')

    const data: Prisma.BuchungUncheckedCreateInput[] = [
      {
        datum: new Date(),
        uhrzeit: new Date(),
        artikelcode: '12345678',
        artikelbezeichnung: 'Foo',
        auslaufzeit: subHours(new Date(), 1),
      },
    ]

    Promise.all(
      data.map(async (item) => {
        const record = await db.buchung.create({
          data: {
            datum: item.datum,
            uhrzeit: item.uhrzeit,
            artikelcode: item.artikelcode,
            artikelbezeichnung: item.artikelbezeichnung,
            auslaufzeit: item.auslaufzeit,
          },
        })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
