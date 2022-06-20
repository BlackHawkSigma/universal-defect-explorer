import type { ArtikelsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Artikels from 'src/components/Artikels/Artikels'

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
  return <Artikels artikels={artikels} />
}
