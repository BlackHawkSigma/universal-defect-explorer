import { buchungs, getAllCodes } from './buchungs'
import type { StandardScenario } from './buchungs.scenarios'

describe('buchungs', () => {
  scenario('returns all buchungs', async (scenario: StandardScenario) => {
    const result = await buchungs()

    expect(result.length).toEqual(Object.keys(scenario.buchung).length)
  })
})

describe('getAllCodes', () => {
  scenario(
    'returns distinct "artikelcode" & "artikelbezeichnung" combinations',
    async (_scenario: StandardScenario) => {
      const result = await getAllCodes()

      expect(result.length).toEqual(1)
    }
  )
})
