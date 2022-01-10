import type { FindGeometrieById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Geometrie from 'src/components/Geometrie/Geometrie'

export const QUERY = gql`
  query FindGeometrieById($id: Int!) {
    geometrie: geometrie(id: $id) {
      id
      Bezeichnung
      image
      rows
      columns
      pixels
    }
  }
`

export const Loading = () => <div>Lade...</div>

export const Empty = () => <div>Geometrie nicht gefunden</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ geometrie }: CellSuccessProps<FindGeometrieById>) => {
  return <Geometrie geometrie={geometrie} />
}
