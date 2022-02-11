import { Link, routes } from '@redwoodjs/router'

type ArtikelsProps = {
  artikels: {
    name: string
    id: number
    code: string
    geo?: { Bezeichnung: string }
  }[]
}

const Artikels = ({ artikels }: ArtikelsProps) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive overflow-x-auto">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Scoop Code</th>
            <th>Scoop Bez.</th>
            <th>Geometrie</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {artikels.map(({ id, code, name, geo }) => (
            <tr key={id}>
              <td>{code}</td>
              <td>{name}</td>
              <td>{geo?.Bezeichnung}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.editArtikel({ id })}
                    title="bearbeiten"
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    zuordnen
                  </Link>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Artikels
