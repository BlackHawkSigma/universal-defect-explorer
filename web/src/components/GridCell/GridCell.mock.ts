import type { FindGeometrieByName } from 'types/graphql'
import type { GridCellProps } from './GridCell'

export const standart = (): GridCellProps & FindGeometrieByName => ({
  list: [],
})
