import type { AllCodes } from 'types/graphql'

// Define your own mock data here:
export const standard = (): AllCodes => {
  return {
    getAllCodes: [
      { code: '12345678', text: 'Foo' },
      { code: '987654', text: 'Bar' },
    ],
  }
}

export const singleCode = (): AllCodes => ({
  getAllCodes: [{ code: '1', text: 'Single' }],
})

mockGraphQLQuery('AllCodes', standard())
