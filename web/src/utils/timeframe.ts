import { setMinutes, setHours, startOfDay, subBusinessDays } from 'date-fns'

import type { Timeframe } from 'types/timeframe'

export const setInitalTime = (now: Date): Timeframe => {
  const end =
    now.getHours() >= 6
      ? setMinutes(setHours(startOfDay(now), 6), 0)
      : subBusinessDays(setMinutes(setHours(startOfDay(now), 6), 0), 1)

  const start = subBusinessDays(end, 1)

  return { start, end }
}
