import { groupByArtikel, groupByFehler } from './groupData'

import type { Record } from 'types/Record'

export type GroupingProps = {
  list: Record[]
}

const ArtikelGrouping = ({ list }: GroupingProps) => {
  const first = groupByArtikel(list)

  const data = first.map(([toplevel, records]) => {
    const second = groupByFehler(records)

    return { toplevel, records: second }
  })

  return (
    <div>
      {data.map(({ toplevel, records }) => (
        <details key={toplevel}>
          <summary>
            {records.length}x {toplevel}
          </summary>
          <ol>
            {records.map(([secondlevel, records]) => (
              <li key={secondlevel}>
                {records.length}x {secondlevel}
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  )
}

export default ArtikelGrouping
