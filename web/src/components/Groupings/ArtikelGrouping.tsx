import { descending } from 'd3'
import type { SumByGeometrie } from 'types/graphql'
import type { Record } from 'types/Record'

import type { Filter, FilterAction } from '../Auswertung/Auswertung'

import { groupByArtikel, groupByFehler } from './groupData'
import GroupingSkeleton from './GroupingSkeleton'

export type GroupingProps = {
  list: Record[]
  sums: SumByGeometrie[]
  filter: Filter
  setFilter: (payload: FilterAction) => void
}

const ArtikelGrouping = ({ list, filter, setFilter, sums }: GroupingProps) => {
  const first = groupByArtikel(list)

  const data = first
    .map(([label, records]) => {
      const second = groupByFehler(records)
      const count = second.reduce(
        (acc, [_label, current]) => acc + current.length,
        0
      )
      const sum = sums.find((d) => d.bezeichnung === label)?.sum ?? 0
      const percent = count / sum

      const secondRecords = second.map(([label, entries]) => ({
        label,
        count: entries.length,
        percent: entries.length / sum,
      }))

      return { alphaItem: { label, count, percent }, betaList: secondRecords }
    })
    .sort((a, b) => descending(a.alphaItem.percent, b.alphaItem.percent))

  const handleUpdate = (level: 'alpha' | 'beta', label: string) => {
    switch (level) {
      case 'alpha':
        return setFilter({ type: 'setArtikel', artikel: label })
      case 'beta':
        return setFilter({ type: 'setFehler', fehler: label })
    }
  }

  return (
    <div className="overflow-y-scroll">
      <GroupingSkeleton
        list={data}
        alphaFilter={filter.artikel}
        betaFilter={filter.fehler}
        updateFilter={handleUpdate}
      />
    </div>
  )
}

export default ArtikelGrouping
