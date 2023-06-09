import { rollups, sum } from 'd3'
import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const getAllCodes = () => {
  return db.buchung.findMany({
    select: {
      artikelcode: true,
      artikelbezeichnung: true,
    },
    distinct: ['artikelcode', 'artikelbezeichnung'],
  })
}

export const sumsByCode: QueryResolvers['sumsByCode'] = ({ start, end }) =>
  db.buchung
    .groupBy({
      by: ['artikelcode'],
      _sum: {
        io_poliert: true,
        io_notouch: true,
        nacharbeit: true,
        ausschuss: true,
      },
      where: { datum: { gte: start, lt: end } },
    })
    .then((rows) =>
      rows.map((row) => ({
        artikelcode: row.artikelcode,
        sums: { ...row._sum },
      }))
    )

export const sumByGeometrie: QueryResolvers['sumByGeometrie'] = async ({
  start,
  end,
}) => {
  const artikelList = await db.artikel.findMany({
    include: { Geometrie: true },
  })

  return db.buchung
    .groupBy({
      by: ['artikelcode'],
      _sum: {
        io_poliert: true,
        io_notouch: true,
        nacharbeit: true,
        ausschuss: true,
      },
      where: { datum: { gte: start, lt: end } },
    })
    .then((rows) =>
      rows.map((row) => {
        const artikel = artikelList.find(
          (geo) => geo.artikelcode === row.artikelcode
        )

        return {
          bezeichnung:
            artikel.Geometrie?.Bezeichnung ?? artikel.artikelbezeichnung,
          sum: sum(Object.values(row._sum)),
        }
      })
    )
    .then((groups) =>
      rollups(
        groups,
        (v) => sum(v, (d) => d.sum),
        (d) => d.bezeichnung
      ).map(([bezeichnung, sum]) => ({ bezeichnung, sum }))
    )
}
