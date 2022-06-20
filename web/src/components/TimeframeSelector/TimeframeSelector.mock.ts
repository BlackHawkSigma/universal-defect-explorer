import { addBusinessDays } from 'date-fns'

import type { TimeframeSelectorProps } from './TimeframeSelector'

export const standart = (): TimeframeSelectorProps => {
  const start = new Date()
  const end = addBusinessDays(start, 1)

  return {
    disabled: false,
    initialTimeframe: {
      start,
      end,
    },
    onChange() {},
  }
}
