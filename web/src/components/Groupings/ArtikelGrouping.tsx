import { groupByArtikel, groupByFehler } from './groupData'

import type { Record } from 'types/Record'

export type GroupingProps = {
  list: Record[]
}

const ArtikelGrouping = ({ list }: GroupingProps) => {
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
            {count}x {toplevel}
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
