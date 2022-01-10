export const schema = gql`
  type Artikel {
    id: Int!
    artikelcode: String!
  }

  type Geometrie {
    id: Int!
    Bezeichnung: String!
    image: String
    rows: Int!
    columns: Int!
    pixels: Int!
    Codes: [Artikel]!
  }

  type Query {
    geometries: [Geometrie!]! @skipAuth
    geometrie(id: Int!): Geometrie @skipAuth
  }

  input CreateGeometrieInput {
    Bezeichnung: String!
    image: String!
    rows: Int!
    columns: Int!
    pixels: Int!
  }

  input UpdateGeometrieInput {
    Bezeichnung: String
    image: String
    rows: Int
    columns: Int
    pixels: Int
  }

  type Mutation {
    createGeometrie(input: CreateGeometrieInput!): Geometrie! @skipAuth
    updateGeometrie(id: Int!, input: UpdateGeometrieInput!): Geometrie!
      @skipAuth
    deleteGeometrie(id: Int!): Geometrie! @skipAuth
  }
`
