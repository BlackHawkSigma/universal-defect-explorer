import { db } from 'src/lib/db'

export const buchungs = () => {
  return db.buchung.findMany()
}

export const getAllCodes = () => {
  return db.buchung.findMany({
    distinct: ['artikelcode', 'artikelbezeichnung'],
  })
}
