import type { FehlerInTimeframe } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): FehlerInTimeframe => ({
  fehlerInTimeframe: [
    {
      datum: new Date().toISOString(),
      bezeichnung: 'Test',
      auslauf: new Date().toISOString(),
      fehlerText: 'Lack nicht deckend',
      lack: 'Bunt',
    },
  ],
})

mockGraphQLQuery('FehlerInTimeframe', (variables, { ctx }) => {
  ctx.delay(1500) // pause for 1.5 seconds

  return standard()
})
