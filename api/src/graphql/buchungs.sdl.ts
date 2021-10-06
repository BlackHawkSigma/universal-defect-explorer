export const schema = gql`
  type Code {
    artikelcode: String!
    artikelbezeichnung: String!
  }

  type Query {
    getAllCodes: [Code!]! @skipAuth
  }
`
