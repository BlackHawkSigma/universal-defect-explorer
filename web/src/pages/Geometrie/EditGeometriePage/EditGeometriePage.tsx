import EditGeometrieCell from 'src/components/Geometrie/EditGeometrieCell'

type GeometriePageProps = {
  id: number
}

const EditGeometriePage = ({ id }: GeometriePageProps) => {
  return <EditGeometrieCell id={id} />
}

export default EditGeometriePage
