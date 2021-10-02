import { buchungs } from './buchungs'
import type { StandardScenario } from './buchungs.scenarios'

describe('buchungs', () => {
  scenario('returns all buchungs', async (scenario: StandardScenario) => {
    const result = await buchungs()

    expect(result.length).toEqual(Object.keys(scenario.buchung).length)
  })
})
