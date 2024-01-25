import { useState } from 'react'

// @ts-expect-error wrong module resolution
import { de } from 'date-fns/locale/de'
import DatePicker, { registerLocale } from 'react-datepicker'
import type { Timeframe } from 'types/timeframe'

import 'react-datepicker/dist/react-datepicker.css'

export type TimeframeSelectorProps = {
  initialTimeframe: Timeframe
  onChange: (timeframe: Timeframe) => void
  disabled?: boolean
}

registerLocale('de', de)

const TimeframeSelector = ({
  initialTimeframe: { start: initStart, end: initEnd },
  onChange,
  disabled = false,
}: TimeframeSelectorProps) => {
  const [start, setStart] = useState<Date>(initStart)
  const [end, setEnd] = useState<Date>(initEnd)

  return (
    <div className="flex items-baseline space-x-1">
      <div className="flex space-x-1">
        <label htmlFor="start">von</label>
        <DatePicker
          className="rounded border border-gray-400 disabled:opacity-50"
          popperPlacement="bottom-start"
          disabled={disabled}
          locale="de"
          dateFormat="dd.MM.yyyy HH:mm"
          showWeekNumbers
          showTimeSelect
          selectsStart
          timeIntervals={60}
          timeCaption="Zeit"
          startDate={start}
          endDate={end}
          selected={start}
          onChange={(date: Date) => setStart(date)}
          name="start"
        />
      </div>

      <div className="flex space-x-1">
        <label htmlFor="end">bis</label>
        <DatePicker
          className="rounded border border-gray-400 disabled:opacity-50"
          popperPlacement="bottom-start"
          disabled={disabled}
          locale="de"
          dateFormat="dd.MM.yyyy HH:mm"
          showWeekNumbers
          showTimeSelect
          selectsEnd
          timeIntervals={60}
          timeCaption="Zeit"
          startDate={start}
          endDate={end}
          selected={end}
          onChange={(date: Date) => setEnd(date)}
          name="end"
        />
      </div>

      <button
        className="rw-button rw-button-green disabled:pointer-events-none disabled:opacity-50"
        disabled={disabled}
        onClick={() => onChange({ start, end })}
      >
        {!disabled ? 'Zeitraum festlegen' : 'lade...'}
      </button>
    </div>
  )
}

export default TimeframeSelector
