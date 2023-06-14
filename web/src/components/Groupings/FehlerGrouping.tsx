import { descending } from 'd3'
import type { Record } from 'types/Record'

import type { Filter, FilterAction } from '../Auswertung/Auswertung'

import { groupByArtikel, groupByFehler } from './groupData'
import GroupingSkeleton from './GroupingSkeleton'

export type FehlerGroupingProps = {
  list: Record[]
  sumProduced: number
  filter: Filter
  setFilter: (payload: FilterAction) => void
}

const FehlerGrouping = ({
  list,
  sumProduced,
  filter,
  setFilter,
}: FehlerGroupingProps) => {
  const first = groupByFehler(list)

  const data = first
    .map(([label, records]) => {
      const second = groupByArtikel(records)
      const count = second.reduce(
        (acc, [_label, current]) => acc + current.length,
        0
      )
      const percent = count / sumProduced

      const secondRecords = second.map(([label, entries]) => ({
        label,
        count: entries.length,
        percent: entries.length / sumProduced,
      }))

      return { alphaItem: { label, count, percent }, betaList: secondRecords }
    })
    .sort((a, b) => descending(a.alphaItem.percent, b.alphaItem.percent))

  const handleUpdate = (level: 'alpha' | 'beta', label: string) => {
    switch (level) {
      case 'alpha':
        return setFilter({ type: 'setFehler', fehler: label })
      case 'beta':
        return setFilter({ type: 'setArtikel', artikel: label })
    }
  }

  return (
    <div className="overflow-y-scroll">
      <GroupingSkeleton
        list={data}
        alphaFilter={filter.fehler}
        betaFilter={filter.artikel}
        updateFilter={handleUpdate}
      />
    </div>
  )
}

export default FehlerGrouping
