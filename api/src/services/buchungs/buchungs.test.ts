import { getAllCodes, sumsByCode, sumByGeometrie } from './buchungs'
import type { ScenarioGeometie, StandardScenario } from './buchungs.scenarios'

describe('getAllCodes', () => {
  scenario(
    'returns distinct "artikelcode" & "artikelbezeichnung" combinations',
    async (scenario: StandardScenario) => {
      const received = await getAllCodes()
      const expected = [
        {
          artikelcode: scenario.buchung.Front_Rot.artikelcode,
          artikelbezeichnung: scenario.buchung.Front_Rot.artikelbezeichnung,
        },
        {
          artikelcode: scenario.buchung.Heck_Rot.artikelcode,
          artikelbezeichnung: scenario.buchung.Heck_Rot.artikelbezeichnung,
        },
      ]

      expect(received).toEqual(expected)
    }
  )
})

describe('sumsByCode', () => {
  scenario(
    'sums up all numbers for given date range',
    async (scenario: StandardScenario) => {
      const received = await sumsByCode({
        start: '2021-10-02T06:00:00Z',
        end: '2021-10-03T06:00:00Z',
      })

      expect(received).toContainEqual({
        artikelcode: scenario.buchung.Front_Rot.artikelcode,
        sums: {
          io_notouch: null,
          io_poliert: scenario.buchung.Front_Rot.io_poliert,
          nacharbeit: null,
          ausschuss: null,
        },
      })
    }
  )
})

describe('sumsByGeometrie', () => {
  scenario(
    'sums up all numbers for given date range',
    async (scenario: ScenarioGeometie) => {
      const received = await sumByGeometrie({
        start: '2021-10-02T06:00:00Z',
        end: '2021-10-03T06:00:00Z',
      })

      expect(received).toContainEqual({
        bezeichnung: scenario.geometrie.Front.Bezeichnung,
        sum: 5,
      })
    }
  )
})
