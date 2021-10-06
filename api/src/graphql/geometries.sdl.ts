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
    geometries: [Geometrie!]!
    geometrie(id: Int!): Geometrie
  }

  input CreateGeometrieInput {
    Bezeichnung: String!
  }

  input UpdateGeometrieInput {
    Bezeichnung: String
  }

  type Mutation {
    createGeometrie(input: CreateGeometrieInput!): Geometrie!
    updateGeometrie(id: Int!, input: UpdateGeometrieInput!): Geometrie!
    deleteGeometrie(id: Int!): Geometrie!
  }
`
