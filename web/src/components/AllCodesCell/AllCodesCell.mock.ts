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

export const oneCode = (): AllCodes => ({
  getAllCodes: [{ code: '1', text: 'Single' }],
})

export const twoCodes = (): AllCodes => ({
  getAllCodes: [
    { code: '1234', text: 'First' },
    { code: '5678', text: 'Second' },
  ],
})

mockGraphQLQuery('AllCodes', standard())
