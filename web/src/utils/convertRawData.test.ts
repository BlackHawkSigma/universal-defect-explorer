import { convertRaw } from './convertRawData'
import type { Record } from 'types/Record'
import type { GridData } from 'types/grid'

describe('Util um Cosmino Daten zusammen zu fassen', () => {
  test('convert like expected', () => {
    expect(convertRaw(rawData)).toStrictEqual(expectedResult)
  })
})

const rawData = [
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },
  { fehlerOrt: 'A0101', fehlerText: 'Foo' },

  { fehlerOrt: 'B0201', fehlerText: 'Foo' },
  { fehlerOrt: 'B0201', fehlerText: 'Foo' },
  { fehlerOrt: 'B0201', fehlerText: 'Foo' },
  { fehlerOrt: 'B0201', fehlerText: 'Foo' },
] as Record[]

const expectedResult: GridData[] = [
  { row: 1, col: 1, label: '6' },
  { row: 2, col: 1, label: '4' },
]
