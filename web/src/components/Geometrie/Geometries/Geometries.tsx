import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Geometrie/GeometriesCell'

const DELETE_GEOMETRIE_MUTATION = gql`
  mutation DeleteGeometrieMutation($id: Int!) {
    deleteGeometrie(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const GeometriesList = ({ geometries }) => {
  const [deleteGeometrie] = useMutation(DELETE_GEOMETRIE_MUTATION, {
    onCompleted: () => {
      toast.success('Geometrie gelöscht')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Geometire ' + id + ' wirklich löschen?')) {
      deleteGeometrie({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive overflow-x-auto">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Bezeichnung</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {geometries.map((geometrie) => (
            <tr key={geometrie.id}>
              <td>{truncate(geometrie.id)}</td>
              <td>{truncate(geometrie.Bezeichnung)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.geometrie({ id: geometrie.id })}
                    title={'Show geometrie ' + geometrie.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Details
                  </Link>
                  <Link
                    to={routes.editGeometrie({ id: geometrie.id })}
                    title={'Edit geometrie ' + geometrie.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Bearbeiten
                  </Link>
                  <button
                    type="button"
                    title={'Delete geometrie ' + geometrie.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(geometrie.id)}
                  >
                    Löschen
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GeometriesList
