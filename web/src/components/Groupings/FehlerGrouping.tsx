import type { Record } from 'types/Record'

import type { Filter, FilterAction } from '../Auswertung/Auswertung'

import { groupByArtikel, groupByFehler } from './groupData'

export type FehlerGroupingProps = {
  list: Record[]
  filter: Filter
  setFilter: (payload: FilterAction) => void
}

const FehlerGrouping = ({ list, filter, setFilter }: FehlerGroupingProps) => {
  const first = groupByFehler(list)

  const data = first.map(([toplevel, records]) => {
    const second = groupByArtikel(records)
    const count = second.reduce(
      (acc, [_label, current]) => acc + current.length,
      0
    )

    return { toplevel, count, records: second }
  })
  const handleToplevel = (fehler: string) =>
    setFilter({ type: 'setFehler', fehler })

  const handleSecondlevel = (fehler: string, artikel: string) => {
    setFilter({ type: 'setArtikel', artikel })
    setFilter({ type: 'setFehler', fehler })
  }

  return (
    <div className="overflow-y-scroll">
      {data.map(({ toplevel, count, records }) => (
        <details key={toplevel}>
          <summary>
            <span
              className={toplevel === filter.fehler ? 'font-bold' : 'font-thin'}
              role={'button'}
              tabIndex={0}
              onKeyDown={() => handleToplevel(toplevel)}
              onClick={() => handleToplevel(toplevel)}
            >
              {count}x {toplevel}
            </span>
          </summary>
          <ol>
            {records.map(([secondlevel, records]) => (
              <li key={secondlevel}>
                <span
                  className={
                    secondlevel === filter.artikel ? 'font-bold' : 'font-thin'
                  }
                  role={'button'}
                  tabIndex={0}
                  onKeyDown={() => handleSecondlevel(toplevel, secondlevel)}
                  onClick={() => handleSecondlevel(toplevel, secondlevel)}
                >
                  {records.length}x {secondlevel}
                </span>
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  )
}

export default FehlerGrouping
