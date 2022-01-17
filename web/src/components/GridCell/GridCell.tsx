import type { FindGeometrieByName } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

import Grid from 'src/components/Grid'
import { Record } from 'types/Record'
import { convertRaw } from 'src/utils/convertRawData'

export type GridCellProps = {
  list: Record[]
}

export const QUERY = gql`
  query FindGeometrieByName($name: String!) {
    geometrie: geometrieByName(Bezeichnung: $name) {
      image
      rows
      columns
      pixels
    }
  }
`

const Placeholder = ({ text }: { text: string }) => (
  <div
    className="flex justify-center items-center shadow-md px-16 m-auto"
    style={{ maxWidth: '700px', height: '420px' }}
  >
    <div className="text-4xl">{text}</div>
  </div>
)

export const Loading = () => <Placeholder text="lade Raster ..." />

export const Empty = () => <Placeholder text="keine Geometrie gefunden" />

type SuccessProps = CellSuccessProps<FindGeometrieByName> & GridCellProps

export const Success = ({
  list,
  geometrie: { image, rows, columns, pixels },
}: SuccessProps) => {
  const props = { image, grid: { rows, columns, pixels } }
  const data = convertRaw(list)

  return image === '' ? (
    <Placeholder text="keine Grafik vorhanden" />
  ) : (
    <Grid data={data} {...props} />
  )
}
