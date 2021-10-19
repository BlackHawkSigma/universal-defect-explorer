import type { ArtikelsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArtikelsQuery {
    artikels {
      id
      code: artikelcode
      name: artikelbezeichnung
      geo: Geometrie {
        id
        Bezeichnung
      }
    }
  }
`

export const Loading = () => <div>Durchsuche Datenbank...</div>

export const Empty = () => <div>keine Einträge gefunden</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ artikels }: CellSuccessProps<ArtikelsQuery>) => {
  return (
    <>
      {artikels.length === 1 ? (
        <p>einen Code gefunden:</p>
      ) : (
        <p>{artikels.length} Codes gefunden:</p>
      )}
      <ul>
        {artikels.map(({ id, code, name, geo }) => {
          return (
            <li key={id}>
              <Link
                className="underline text-blue-500 font-content"
                to={routes.editArtikel({ id })}
                title="bearbeiten"
              >
                {name}: ({code}) - {geo.Bezeichnung}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
