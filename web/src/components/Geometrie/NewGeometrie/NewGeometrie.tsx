import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GeometrieForm from 'src/components/Geometrie/GeometrieForm'

const CREATE_GEOMETRIE_MUTATION = gql`
  mutation CreateGeometrieMutation($input: CreateGeometrieInput!) {
    createGeometrie(input: $input) {
      id
    }
  }
`

const NewGeometrie = () => {
  const [createGeometrie, { loading, error }] = useMutation(
    CREATE_GEOMETRIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Geometrie angelegt')
        navigate(routes.geometries())
      },
    }
  )

  const onSave = (input) => {
    createGeometrie({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Neue Geometrie anlegen
        </h2>
      </header>
      <div className="rw-segment-main">
        <GeometrieForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGeometrie
