import { useReducer } from 'react'

import { t } from 'i18next'
import type { SumByGeometrie } from 'types/graphql'
import type { Record } from 'types/Record'

import AuswertungArtikelCell from 'src/components/AuswertungArtikelCell'
import FehlerTable from 'src/components/FehlerTable'
import Artikel from 'src/components/Groupings/ArtikelGrouping'
import Fehler from 'src/components/Groupings/FehlerGrouping'

export type Filter = {
  artikel: string
  fehler: string
}

export type FilterAction =
  | { type: 'setArtikel'; artikel: string }
  | { type: 'setFehler'; fehler: string }

const initialFilter: Filter = { artikel: '', fehler: '' }
const filterReducer = (state: Filter, action: FilterAction): Filter => {
  switch (action.type) {
    case 'setArtikel':
      return { ...state, artikel: action.artikel }
    case 'setFehler':
      return { ...state, fehler: action.fehler }
    default:
      throw new Error()
  }
}

export type AuswertungProps = {
  list: Record[]
  sumByGeometrie: SumByGeometrie[]
}

const Auswertung = ({ list, sumByGeometrie }: AuswertungProps) => {
  const [filter, setFilter] = useReducer(filterReducer, initialFilter)

  const filteredList = list.filter(
    ({ bezeichnung, fehlerText }) =>
      bezeichnung === filter.artikel && fehlerText === filter.fehler
  )

  const sumProduced = sumByGeometrie.reduce(
    (accu, current) => accu + current.sum,
    0
  )

  return (
    <div className="grid grid-cols-6 justify-items-stretch gap-5">
      <div className="col-span-full">
        <h2 className="font-heading text-center text-2xl">
          {filter.artikel} - {filter.fehler}
        </h2>
      </div>

      <div className="flex max-h-[500px] flex-col rounded border p-1 shadow">
        <h3 className="font-heading text-center text-lg font-semibold">
          nach Artikel ({list.length} Stück)
        </h3>
        <Artikel
          list={list}
          sums={sumByGeometrie}
          filter={filter}
          setFilter={(filter) => setFilter(filter)}
        />
      </div>

      <div className="col-span-4 min-h-[420px]">
        <AuswertungArtikelCell name={filter.artikel} list={filteredList} />
      </div>

      <div className="flex max-h-[500px] flex-col rounded border p-1 shadow">
        <h3 className="font-heading text-center text-lg font-semibold">
          nach Fehler {t('intlPercent', { val: list.length / sumProduced })}
        </h3>
        <Fehler
          list={list}
          sumProduced={sumProduced}
          filter={filter}
          setFilter={(filter) => setFilter(filter)}
        />
      </div>

      <div className="col-span-full">
        <FehlerTable list={filteredList} />
      </div>
    </div>
  )
}

export default Auswertung
