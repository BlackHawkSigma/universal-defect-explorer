import type { ArtikelsQuery } from 'types/graphql'

// Define your own mock data here:
export const standard = (): ArtikelsQuery => {
  return {
    artikels: [
      { id: 1, code: '12345678', name: 'Foo', geo: null },
      { id: 2, code: '987654', name: 'Bar', geo: null },
      { id: 3, code: '654789', name: 'Heck', geo: null },
    ],
  }
}

//community.redwoodjs.com/t/dealing-with-graphql-success-but-data-is-null-in-storybook/2098?u=blackhawksigma
// mockGraphQLQuery(
//   'ArtikelsQuery',
//   (_variables, { ctx }): CellSuccessProps<ArtikelsQuery> => {
//     ctx.delay(1500) // pause for 1.5 seconds
//     return standard()
//   }
// )
