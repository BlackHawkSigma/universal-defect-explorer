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
        skid: 117,
        skidposition: '2',
        skidseite: 'B',
        fehlerOrt: 'F0302',
      },
    ],
    sumByGeometrie: [{ bezeichnung: 'Test', sum: 20 }],
  }
}

mockGraphQLQuery('FehlerInTimeframe', (_variables, { ctx }) => {
  ctx.delay(1500)

  return standard()
})
