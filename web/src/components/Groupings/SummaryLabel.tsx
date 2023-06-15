import { t } from 'i18next'

export type SummaryLabelProps = {
  count: number
  label: string
  euros?: string
  percent?: number
}

const SummaryLabel = ({ count, label, euros, percent }: SummaryLabelProps) => {
  const percentString = t('intlPercent', { val: percent })

  return (
    <div className="pb-1 pl-1 pr-2 shadow">
      <p className="truncate text-base font-semibold" title={label}>
        {label}
      </p>

      <div className="flex items-baseline justify-between gap-2">
        <span className="tracking-tighter">
          {percent ? percentString : count}
        </span>
        {percent && <span className="grow justify-self-start">({count})</span>}
        <span>
          <small>{euros}</small>
        </span>
      </div>
    </div>
  )
}

export default SummaryLabel
