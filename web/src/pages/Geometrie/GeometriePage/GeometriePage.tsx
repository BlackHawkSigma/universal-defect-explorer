import GeometrieCell from 'src/components/Geometrie/GeometrieCell'

type GeometriePageProps = {
  id: number
}

const GeometriePage = ({ id }: GeometriePageProps) => {
  return <GeometrieCell id={id} />
}

export default GeometriePage
