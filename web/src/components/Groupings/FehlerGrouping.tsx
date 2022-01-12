import { groupByArtikel, groupByFehler } from './groupData'

import type { Record } from 'types/Record'
import type { FilterAction } from '../Auswertung/Auswertung'

export type FehlerGroupingProps = {
  list: Record[]
  setFilter: (payload: FilterAction) => void
}

const FehlerGrouping = ({ list, setFilter }: FehlerGroupingProps) => {
  const first = groupByFehler(list)

  const data = first.map(([toplevel, records]) => {
    const second = groupByArtikel(records)
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
                setFilter({ type: 'setFehler', fehler: toplevel })
              }
              onClick={() => setFilter({ type: 'setFehler', fehler: toplevel })}
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
                    setFilter({ type: 'setArtikel', artikel: secondlevel })
                  }
                  onClick={() =>
                    setFilter({ type: 'setArtikel', artikel: secondlevel })
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

export default FehlerGrouping
