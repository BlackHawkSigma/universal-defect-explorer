import {
  geometries,
  geometrieById,
  createGeometrie,
  updateGeometrie,
  deleteGeometrie,
} from './geometries'
import type { StandardScenario } from './geometries.scenarios'

describe('geometries', () => {
  scenario('returns all geometries', async (scenario: StandardScenario) => {
    const result = await geometries()

    expect(result.length).toEqual(Object.keys(scenario.geometrie).length)
  })

  scenario('returns a single geometrie', async (scenario: StandardScenario) => {
    const result = await geometrieById({ id: scenario.geometrie.one.id })

    expect(result).toEqual(scenario.geometrie.one)
  })

  scenario('creates a geometrie', async () => {
    const result = await createGeometrie({
      input: { Bezeichnung: 'String', image: '' },
    })

    expect(result.Bezeichnung).toEqual('String')
  })

  scenario('updates a geometrie', async (scenario: StandardScenario) => {
    const original = await geometrieById({ id: scenario.geometrie.one.id })
    const result = await updateGeometrie({
      id: original.id,
      input: { Bezeichnung: 'String2' },
    })

    expect(result.Bezeichnung).toEqual('String2')
  })

  scenario('deletes a geometrie', async (scenario: StandardScenario) => {
    const original = await deleteGeometrie({ id: scenario.geometrie.one.id })
    const result = await geometrieById({ id: original.id })

    expect(result).toEqual(null)
  })
})
