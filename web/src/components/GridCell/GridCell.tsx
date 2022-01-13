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
export const Loading = () => (
  <div
    className="flex justify-center items-center shadow-md"
    style={{ width: '700px', height: '420px' }}
  >
    <div className="text-4xl">lade Raster ...</div>
  </div>
)

export const Empty = () => (
  <div
    className="flex justify-center items-center shadow-md"
    style={{ width: '700px', height: '420px' }}
  >
    <div className="text-4xl">keine Grafik vorhanden</div>
  </div>
)

type SuccessProps = CellSuccessProps<FindGeometrieByName> & GridCellProps

export const Success = ({
  list,
  geometrie: { image, rows, columns, pixels },
}: SuccessProps) => {
  const props = { image, grid: { rows, columns, pixels } }
  const data = convertRaw(list)

  return <Grid data={data} {...props} />
}
