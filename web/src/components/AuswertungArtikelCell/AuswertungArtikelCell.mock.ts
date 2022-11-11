import type { FindGeometrieByName } from 'types/graphql'

import { image } from 'src/components/Grid/Grid.mock'

import type { AuswertungArtikelCellProps } from './AuswertungArtikelCell'

export const standard = (): AuswertungArtikelCellProps &
  FindGeometrieByName => {
  return {
    list: [],
    geometrie: {
      id: 1,
      image,
      rows: 7,
      columns: 11,
      pixels: 54,
      partsPerSide: 3,
    },
  }
}

export const noGeometrie = (): AuswertungArtikelCellProps &
  FindGeometrieByName => {
  return {
    list: [],
    geometrie: {
      id: 0,
      image: '',
      rows: 0,
      columns: 0,
      pixels: 0,
      partsPerSide: 1,
    },
  }
}

mockGraphQLQuery('FindGeometrieByName', (variables, { ctx }) => {
  ctx.delay(500) // pause for 1.5 seconds
  return standard()
})
