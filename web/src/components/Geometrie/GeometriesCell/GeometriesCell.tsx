import type { FindGeometries } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Geometries from 'src/components/Geometrie/Geometries'

export const QUERY = gql`
  query FindGeometries {
    geometries {
      id
      Bezeichnung
      image
    }
  }
`

export const Loading = () => <div>Lade...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Es sind noch keine Geometiren angelegt. '}
      <Link to={routes.newGeometrie()} className="rw-link">
        {'Wollen Sie eine erstellen?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ geometries }: CellSuccessProps<FindGeometries>) => {
  return <Geometries geometries={geometries} />
}
