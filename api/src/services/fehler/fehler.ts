// import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

interface FehlerInTimeframeArgs {
  start: Date
  end: Date
}

export const fehlerInTimeframe = async ({
  start,
  end,
}: FehlerInTimeframeArgs) => {
  const raw = await db.buchung.findMany({
    include: { Artikel: { include: { Geometrie: true } }, FehlerText: true },
    where: {
      AND: [
        { datum: { gte: start } },
        { datum: { lt: end } },
        { fehlerart_code: { not: null } },
      ],
    },
  })

  return raw.map((row) => {
    const bezeichnung =
      row.Artikel.Geometrie?.Bezeichnung || row.artikelbezeichnung

    return {
      bezeichnung,
      datum: row.datum,
      auslauf: row.auslaufzeit,
      lack: row.farbton,
      skid: row.skid,
      skidseite: row.skidseite,
      skidposition: row.lackierposition,
      fehlerText: row.FehlerText.fehlerart_text,
      fehlerOrt: row.fehlerort_code,
    }
  })
}
