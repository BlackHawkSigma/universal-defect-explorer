import type { FehlerInTimeframe } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): FehlerInTimeframe => ({
  fehlerInTimeframe: [{ datum: new Date().toISOString(), bezeichnung: 'Test' }],
})
