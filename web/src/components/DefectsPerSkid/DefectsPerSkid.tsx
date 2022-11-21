import { descending } from 'd3-array'

import { getColorFor } from 'src/utils/getColorFor'

type DefectsPerSkidProps = {
  skids: Map<number, number>
  onClick?: (skid: number) => void
}

const DefectsPerSkid = ({ skids, onClick }: DefectsPerSkidProps) => {
  const getColor = getColorFor(Math.max(...skids.values()))
  const clickable = onClick !== undefined

  return (
    <table className="w-full table-auto">
      <caption>Skidnummer Verteilung</caption>
      <thead>
        <tr>
          <th>Anzahl</th>
          <th>Skid</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {[...skids]
          .sort(([_a, a], [_b, b]) => descending(a, b))
          .map(([skid, count]) => {
            const backgroundColor = getColor(count)

            return (
              <tr
                key={skid}
                className={`${
                  clickable ? 'cursor-pointer' : ''
                } bg-white hover:brightness-75`}
                onClick={() => onClick(skid)}
              >
                <td style={{ backgroundColor }}>{count}</td>
                <td>{skid}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default DefectsPerSkid
