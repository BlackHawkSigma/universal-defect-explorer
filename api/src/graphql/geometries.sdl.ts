export const schema = gql`
  type Artikel {
    id: Int!
    artikelcode: String!
  }

  type Geometrie {
    id: Int!
    Bezeichnung: String!
    Codes: [Artikel]!
  }

  type Query {
    geometries: [Geometrie!]! @skipAuth
    geometrie(id: Int!): Geometrie @skipAuth
  }

  input CreateGeometrieInput {
    Bezeichnung: String!
  }

  input UpdateGeometrieInput {
    Bezeichnung: String
  }

  type Mutation {
    createGeometrie(input: CreateGeometrieInput!): Geometrie! @skipAuth
    updateGeometrie(id: Int!, input: UpdateGeometrieInput!): Geometrie!
      @skipAuth
    deleteGeometrie(id: Int!): Geometrie! @skipAuth
  }
`
