import { groupByArtikel, groupByFehler } from './groupData'

import type { Record } from 'types/Record'
import type { Filter, FilterAction } from '../Auswertung/Auswertung'

export type GroupingProps = {
  list: Record[]
  filter: Filter
  setFilter: (payload: FilterAction) => void
}

const ArtikelGrouping = ({ list, filter, setFilter }: GroupingProps) => {
  const first = groupByArtikel(list)

  const data = first.map(([toplevel, records]) => {
    const second = groupByFehler(records)
    const count = second.reduce(
      (acc, [_label, current]) => acc + current.length,
      0
    )

    return { toplevel, count, records: second }
  })

  const handleToplevel = (artikel: string) =>
    setFilter({ type: 'setArtikel', artikel })
  const handleSecondlevel = (artikel: string, fehler: string) => {
    setFilter({ type: 'setFehler', fehler })
    setFilter({ type: 'setArtikel', artikel })
  }

  return (
    <div>
      {data.map(({ toplevel, count, records }) => (
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
              {count}x {toplevel}
            </span>
          </summary>
          <ol>
            {records.map(([secondlevel, records]) => (
              <li key={secondlevel}>
                <span
                  className={
                    secondlevel === filter.fehler ? 'font-bold' : 'font-thin'
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

export default ArtikelGrouping
