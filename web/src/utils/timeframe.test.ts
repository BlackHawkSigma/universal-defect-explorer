import { setInitalTime } from './timeframe'

describe('Return "start" and "end" for given Date', () => {
  test('early shift', () => {
    const timeframe = setInitalTime(new Date('2020-12-16 12:50:00'))

    expect(timeframe).toStrictEqual({
      start: new Date('2020-12-15 06:00:00'),
      end: new Date('2020-12-16 06:00:00'),
    })
  })

  test('night shift', () => {
    const timeframe = setInitalTime(new Date('2020-12-17 04:50:00'))

    expect(timeframe).toStrictEqual({
      start: new Date('2020-12-15 06:00:00'),
      end: new Date('2020-12-16 06:00:00'),
    })
  })
})
