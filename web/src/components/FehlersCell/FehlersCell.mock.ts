import type { FehlerInTimeframe } from 'types/graphql'

// Define your own mock data here:
export const standard = (): FehlerInTimeframe => {
  return {
    fehlerInTimeframe: [
      {
        datum: new Date().toISOString(),
        bezeichnung: 'Test',
        auslauf: new Date().toISOString(),
        fehlerText: 'Lack nicht deckend',
        lack: 'Bunt',
      },
    ],
  }
}

mockGraphQLQuery('FehlerInTimeframe', (_variables, { ctx }) => {
  ctx.delay(1500)

  return standard()
})
