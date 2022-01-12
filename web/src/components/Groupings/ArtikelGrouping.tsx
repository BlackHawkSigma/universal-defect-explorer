import { groupByArtikel, groupByFehler } from './groupData'

import type { Record } from 'types/Record'
import type { FilterAction } from '../Auswertung/Auswertung'

export type GroupingProps = {
  list: Record[]
  setFilter: (payload: FilterAction) => void
}

const ArtikelGrouping = ({ list, setFilter }: GroupingProps) => {
  const first = groupByArtikel(list)

  const data = first.map(([toplevel, records]) => {
    const second = groupByFehler(records)
    const count = second.reduce(
      (acc, [_label, current]) => acc + current.length,
      0
    )

    return { toplevel, count, records: second }
  })

  return (
    <div>
      {data.map(({ toplevel, count, records }) => (
        <details key={toplevel}>
          <summary>
            <span
              role={'button'}
              tabIndex={0}
              onKeyDown={() =>
                setFilter({ type: 'setArtikel', artikel: toplevel })
              }
              onClick={() =>
                setFilter({ type: 'setArtikel', artikel: toplevel })
              }
            >
              {count}x {toplevel}
            </span>
          </summary>
          <ol>
            {records.map(([secondlevel, records]) => (
              <li key={secondlevel}>
                <span
                  role={'button'}
                  tabIndex={0}
                  onKeyDown={() =>
                    setFilter({ type: 'setFehler', fehler: secondlevel })
                  }
                  onClick={() =>
                    setFilter({ type: 'setFehler', fehler: secondlevel })
                  }
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
