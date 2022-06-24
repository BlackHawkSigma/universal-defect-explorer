import type { Record } from 'types/Record'

import { getSkidSideAndPosition } from './getSkidSideAndPosition'

describe('Returns the Skidside and Skidpostion for a given `Record`', () => {
  test('Handle missing data', () => {
    expect(() => getSkidSideAndPosition({} as Record)).not.toThrow()
    expect(getSkidSideAndPosition({} as Record)).toStrictEqual({})
  })

  test.each([
    [{ skidseite: 1, skidposition: 1 }, 12, { side: 1, position: 1 }],
    [{ skidseite: 1, skidposition: 12 }, undefined, { side: 1, position: 12 }],
    [{ skidseite: 2, skidposition: 13 }, 12, { side: 2, position: 13 }],
    [{ skidseite: 2, skidposition: 15 }, null, { side: 2, position: 15 }],
    [{ skidseite: 2, skidposition: 22 }, 12, { side: 2, position: 22 }],
  ])('Everything is given', (record, partsPerSide, expected) => {
    expect(
      getSkidSideAndPosition(record as Record, partsPerSide)
    ).toStrictEqual(expected)
  })

  test.each([
    [{ skidposition: 1 }, 12, { side: 1, position: 1 }],
    [{ skidposition: 5 }, 12, { side: 1, position: 5 }],
    [{ skidposition: 12 }, 12, { side: 1, position: 12 }],
    [{ skidposition: 13 }, 12, { side: 2, position: 13 }],
    [{ skidposition: 24 }, 12, { side: 2, position: 24 }],
  ])(
    'Has to determin `side` from `partsPerSide`',
    (record, partsPerSide, expected) => {
      expect(
        getSkidSideAndPosition(record as Record, partsPerSide)
      ).toStrictEqual(expected)
    }
  )
})
