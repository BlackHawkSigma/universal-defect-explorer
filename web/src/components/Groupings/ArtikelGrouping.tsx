import { descending } from 'd3'
import { t } from 'i18next'
import type { SumByGeometrie } from 'types/graphql'
import type { Record } from 'types/Record'

import type { Filter, FilterAction } from '../Auswertung/Auswertung'

import { groupByArtikel, groupByFehler } from './groupData'

export type GroupingProps = {
  list: Record[]
  sums: SumByGeometrie[]
  filter: Filter
  setFilter: (payload: FilterAction) => void
}

const ArtikelGrouping = ({ list, filter, setFilter, sums }: GroupingProps) => {
  const first = groupByArtikel(list)

  const data = first
    .map(([toplevel, records]) => {
      const second = groupByFehler(records)
      const count = second.reduce(
        (acc, [_label, current]) => acc + current.length,
        0
      )
      const sum = sums.find((d) => d.bezeichnung === toplevel).sum
      const percent = count / sum

      const secondRecords = second.map(([label, entries]) => ({
        label,
        count: entries.length,
        percent: entries.length / sum,
      }))

      return { toplevel, count, records: secondRecords, sum, percent }
    })
    .sort((a, b) => descending(a.percent, b.percent))

  const handleToplevel = (artikel: string) =>
    setFilter({ type: 'setArtikel', artikel })
  const handleSecondlevel = (artikel: string, fehler: string) => {
    setFilter({ type: 'setFehler', fehler })
    setFilter({ type: 'setArtikel', artikel })
  }

  return (
    <div className="overflow-y-scroll">
      {data.map(({ toplevel, count, records, percent }) => (
        <details key={toplevel}>
          <summary>
            <span
              className={
                toplevel === filter.artikel ? 'font-bold' : 'font-thin'
              }
              role={'button'}
              tabIndex={0}
              onKeyDown={() => handleToplevel(toplevel)}
              onClick={() => handleToplevel(toplevel)}
            >
              {t('intlPercent', { val: percent })} {toplevel} ({count})
            </span>
          </summary>
          <ol>
            {records.map(({ label, percent, count }) => (
              <li key={label}>
                <span
                  className={
                    label === filter.fehler ? 'font-bold' : 'font-thin'
                  }
                  role={'button'}
                  tabIndex={0}
                  onKeyDown={() => handleSecondlevel(toplevel, label)}
                  onClick={() => handleSecondlevel(toplevel, label)}
                >
                  {t('intlPercent', { val: percent })} {label} ({count})
                </span>
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  )
}

export default ArtikelGrouping
