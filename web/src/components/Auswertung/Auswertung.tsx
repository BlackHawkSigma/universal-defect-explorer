import { useReducer } from 'react'

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

  return (
    <div className="grid grid-cols-6 gap-5 justify-items-stretch">
      <div className="col-span-full">
        <h2 className="text-2xl text-center font-heading">
          {filter.artikel} - {filter.fehler}
        </h2>
      </div>

      <div className="flex flex-col max-h-[500px]">
        <h3 className="text-xl font-bold font-content">nach Artikel</h3>
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

      <div className="flex flex-col max-h-[500px]">
        <h3 className="text-xl font-bold font-content">nach Fehler</h3>
        <Fehler
          list={list}
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
