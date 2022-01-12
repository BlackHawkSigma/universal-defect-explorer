import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import type { FindGeometrieById } from 'types/graphql'

import Grid from 'src/components/Grid'

const DELETE_GEOMETRIE_MUTATION = gql`
  mutation DeleteGeometrieMutation($id: Int!) {
    deleteGeometrie(id: $id) {
      id
    }
  }
`

const Geometrie = ({
  geometrie: { id, Bezeichnung, rows, columns, pixels, image },
}: FindGeometrieById) => {
  const [deleteGeometrie] = useMutation(DELETE_GEOMETRIE_MUTATION, {
    onCompleted: () => {
      toast.success('Geometrie gelöscht')
      navigate(routes.geometries())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Geometire ' + id + ' wirklich löschen?')) {
      deleteGeometrie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Geometrie &quot;{Bezeichnung}&quot;
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Bezeichnung</th>
              <td>{Bezeichnung}</td>
            </tr>
            <tr>
              <th>Grafik</th>
              <td>
                <img src={image} alt={Bezeichnung} />
              </td>
            </tr>
            <tr>
              <th>Raster</th>
              <td>
                <Grid
                  data={[]}
                  grid={{ rows, columns, pixels }}
                  image={image}
                  onClick={() => {}}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGeometrie({ id })}
          className="rw-button rw-button-blue"
        >
          Bearbeiten
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(id)}
        >
          Löschen
        </button>
      </nav>
    </>
  )
}

export default Geometrie
