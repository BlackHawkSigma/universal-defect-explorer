export type SummaryLabelProps = {
  count: number
  label: string
  euros: string
  percent?: string
}

const SummaryLabel = ({ count, label, euros, percent }: SummaryLabelProps) => {
  return (
    <div className="pb-1 pl-1 pr-2">
      <span className="truncate text-base font-semibold">{label}</span>

      <div className="flex items-baseline justify-between gap-2">
        <span className="tracking-tighter">{percent ? percent : count}</span>
        {percent && <span className="grow justify-self-start">({count})</span>}
        <span>
          <small>{euros}</small>
        </span>
      </div>
    </div>
  )
}

export default SummaryLabel
