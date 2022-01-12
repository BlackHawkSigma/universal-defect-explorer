import { useReducer } from 'react'

import FehlerTable from 'src/components/FehlerTable'
// import Grid from 'src/components/Grid'
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

  return (
    <div className="grid">
      <div className="flex justify-around">
        <div>
          <h2 className="text-xl font-bold">nach Artikel</h2>
          <Artikel list={list} setFilter={(filter) => setFilter(filter)} />
        </div>
        <div>
          <h2 className="text-xl font-bold">nach Fehler</h2>
          <Fehler list={list} setFilter={(filter) => setFilter(filter)} />
        </div>
      </div>
      {/* <Grid data={[]} /> */}
      <div>
        <FehlerTable list={list} filter={filter} />
      </div>
    </div>
  )
}

export default Auswertung
