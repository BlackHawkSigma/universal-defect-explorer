import { useReducer } from 'react'

import FehlerTable from 'src/components/FehlerTable'
import GridCell from 'src/components/GridCell'
import Artikel from 'src/components/Groupings/ArtikelGrouping'
import Fehler from 'src/components/Groupings/FehlerGrouping'

import { Record } from 'types/Record'

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
}

const Auswertung = ({ list }: AuswertungProps) => {
  const [filter, setFilter] = useReducer(filterReducer, initialFilter)

  const filteredList = list.filter(
    ({ bezeichnung, fehlerText }) =>
      bezeichnung === filter.artikel && fehlerText === filter.fehler
  )

  return (
    <div className="grid grid-cols-4 gap-5 justify-items-stretch">
      <div className="col-span-full">
        <h1 className="text-2xl text-center">
          {filter.artikel} - {filter.fehler}
        </h1>
      </div>

      <div>
        <h2 className="text-xl font-bold">nach Artikel</h2>
        <Artikel
          list={list}
          filter={filter}
          setFilter={(filter) => setFilter(filter)}
        />
      </div>

      <div className="col-span-2 object-center">
        <GridCell name={filter.artikel} list={filteredList} />
      </div>

      <div>
        <h2 className="text-xl font-bold">nach Fehler</h2>
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
