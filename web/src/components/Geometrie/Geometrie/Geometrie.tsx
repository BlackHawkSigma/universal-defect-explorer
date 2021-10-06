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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Geometrie = ({ geometrie }) => {
  const [deleteGeometrie] = useMutation(DELETE_GEOMETRIE_MUTATION, {
    onCompleted: () => {
      toast.success('Geometrie deleted')
      navigate(routes.geometries())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete geometrie ' + id + '?')) {
      deleteGeometrie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Geometrie {geometrie.id} Detail
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
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGeometrie({ id: geometrie.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(geometrie.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Geometrie
