import { convertRaw } from './convertRawData'
import type { Record } from 'types/Record'
import type { GridData } from 'types/grid'

describe('Util um Cosmino Daten zusammen zu fassen', () => {
  test('convert like expected', () => {
    expect(convertRaw(rawData)).toStrictEqual(expectedResult)
  })

  test('handle double digit rows', () => {
    expect(
      convertRaw([{ fehlerOrt: 'A1001', fehlerText: 'Foo' }] as Record[])
    ).toStrictEqual([{ row: 10, col: 1, label: '1' }])
  })

  test('handle double digit columns', () => {
    expect(
      convertRaw([{ fehlerOrt: 'A0110', fehlerText: 'Foo' }] as Record[])
    ).toStrictEqual([{ row: 1, col: 10, label: '1' }])
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
