import type { Maybe } from 'types/graphql'

type Fehler = {
  datum: string
  auslauf: string
  bezeichnung: string
  lack: string
  skid: Maybe<number>
  skidseite: Maybe<number>
  skidposition: Maybe<number>
  fehlerText: string
  fehlerOrt?: string
}

export type FehlerTablePros = {
  list: Fehler[]
}

const timeTag = (datetime: string) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const FehlerTable = ({ list }: FehlerTablePros) => {
  return (
    <div className="container flex">
      <table className="w-full table-auto border-collapse border border-solid border-gray-200">
        <thead>
          <tr className="space-x-4">
            <th>Auslaufzeit</th>
            <th>Buchung</th>
            <th>Bezeichnung</th>
            <th>Farbe</th>
            <th>Skid</th>
            <th>Seite</th>
            <th>Position</th>
            <th>Fehler</th>
            <th>Ort</th>
          </tr>
        </thead>
        <tbody>
          {list.map((row: Fehler, index) => (
            <tr
              key={index}
              className="text-center hover:brightness-75 odd:bg-gray-100 even:bg-gray-200"
            >
              <td>{timeTag(row.auslauf)}</td>
              <td>{timeTag(row.datum)}</td>
              <td>{row.bezeichnung}</td>
              <td>{row.lack}</td>
              <td>{row.skid}</td>
              <td>{row.skidseite}</td>
              <td>{row.skidposition}</td>
              <td>{row.fehlerText}</td>
              <td>{row.fehlerOrt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FehlerTable
