import { descending } from 'd3-array'
import { t } from 'i18next'

import { getColorFor } from 'src/utils/getColorFor'

type DefectsPerSkidProps = {
  skids: Map<number, number>
  onClick?: (skid: number) => void
}

const DefectsPerSkid = ({ skids, onClick }: DefectsPerSkidProps) => {
  const getColor = getColorFor(Math.max(...skids.values()))
  const clickable = onClick !== undefined

  return (
    <div className="p-1 border rounded shadow w-32">
      <table className="w-full table-auto text-lg">
        <caption className="font-heading font-semibold">Skid IDs</caption>
        <thead className="text-center">
          <tr>
            <td>Skid</td>
            <td>{t('Anzahl')}</td>
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
                  } bg-white hover:brightness-75 border-b border-b-white`}
                  style={{ backgroundColor }}
                  onClick={() => onClick(skid)}
                >
                  <td>
                    <small>{skid}</small>
                  </td>
                  <td>
                    <b>{count}</b>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DefectsPerSkid
