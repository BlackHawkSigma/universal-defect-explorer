import { getAllCodes } from './buchungs'
import type { StandardScenario } from './buchungs.scenarios'

describe('getAllCodes', () => {
  scenario(
    'returns distinct "artikelcode" & "artikelbezeichnung" combinations',
    async (_scenario: StandardScenario) => {
      const result = await getAllCodes()

      expect(result.length).toEqual(1)
    }
  )
})
