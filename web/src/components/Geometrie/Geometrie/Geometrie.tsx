import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_GEOMETRIE_MUTATION = gql`
  mutation DeleteGeometrieMutation($id: Int!) {
    deleteGeometrie(id: $id) {
      id
    }
  }
`

const Geometrie = ({ geometrie }) => {
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
            Geometrie &quot;{geometrie.Bezeichnung}&quot;
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{geometrie.id}</td>
            </tr>
            <tr>
              <th>Bezeichnung</th>
              <td>{geometrie.Bezeichnung}</td>
            </tr>
            <tr>
              <th>Zeilen</th>
              <td>{geometrie.rows}</td>
            </tr>
            <tr>
              <th>Spalten</th>
              <td>{geometrie.columns}</td>
            </tr>
            <tr>
              <th>Pixel</th>
              <td>{geometrie.pixels}</td>
            </tr>
            <tr>
              <th>Grafik</th>
              <td>
                <img src={geometrie.image} alt={geometrie.Bezeichnung} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGeometrie({ id: geometrie.id })}
          className="rw-button rw-button-blue"
        >
          Bearbeiten
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(geometrie.id)}
        >
          Löschen
        </button>
      </nav>
    </>
  )
}

export default Geometrie
