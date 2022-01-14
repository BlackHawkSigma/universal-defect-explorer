import { image } from 'src/components/Grid/Grid.mock'

import type { FindGeometrieByName } from 'types/graphql'
import type { GridCellProps } from './GridCell'

export const standart = (): GridCellProps & FindGeometrieByName => ({
  list: [],
  geometrie: { image, rows: 7, columns: 11, pixels: 54 },
})

export const noGeometrie = (): GridCellProps & FindGeometrieByName => ({
  list: [],
  geometrie: {
    image: '',
    rows: 0,
    columns: 0,
    pixels: 0,
  },
})
