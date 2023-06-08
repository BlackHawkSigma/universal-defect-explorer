import { db } from 'src/lib/db'

export const getAllCodes = () => {
  return db.buchung.findMany({
    distinct: ['artikelcode', 'artikelbezeichnung'],
  })
}
