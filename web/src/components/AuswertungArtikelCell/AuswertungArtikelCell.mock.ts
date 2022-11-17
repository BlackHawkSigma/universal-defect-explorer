import { image } from 'src/components/Grid/Grid.mock'

export const standard = () => {
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

export const noGeometrie = () => {
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
