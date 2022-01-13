import type { EditGeometrieById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GeometrieForm from 'src/components/Geometrie/GeometrieForm'

export const QUERY = gql`
  query EditGeometrieById($id: Int!) {
    geometrie: geometrieById(id: $id) {
      id
      Bezeichnung
      image
      rows
      columns
      pixels
    }
  }
`
const UPDATE_GEOMETRIE_MUTATION = gql`
  mutation UpdateGeometrieMutation($id: Int!, $input: UpdateGeometrieInput!) {
    updateGeometrie(id: $id, input: $input) {
      id
      Bezeichnung
    }
  }
`

export const Loading = () => <div>Lade...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ geometrie }: CellSuccessProps<EditGeometrieById>) => {
  const [updateGeometrie, { loading, error }] = useMutation(
    UPDATE_GEOMETRIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Geometrie updated')
        navigate(routes.geometries())
      },
    }
  )

  const onSave = (input, id) => {
    updateGeometrie({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Geometrie &quot;{geometrie.Bezeichnung}&quot; bearbeiten
        </h2>
      </header>
      <div className="rw-segment-main">
        <GeometrieForm
          geometrie={geometrie}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
