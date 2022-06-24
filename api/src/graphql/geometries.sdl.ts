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
    partsPerSide: Int
    Codes: [Artikel]!
  }

  type Query {
    geometries: [Geometrie!]! @skipAuth
    geometrieById(id: Int!): Geometrie @skipAuth
    geometrieByName(Bezeichnung: String!): Geometrie @skipAuth
  }

  input CreateGeometrieInput {
    Bezeichnung: String!
    image: String!
    rows: Int!
    columns: Int!
    pixels: Int!
    partsPerSide: Int
  }

  input UpdateGeometrieInput {
    Bezeichnung: String
    image: String
    rows: Int
    columns: Int
    pixels: Int
    partsPerSide: Int
  }

  type Mutation {
    createGeometrie(input: CreateGeometrieInput!): Geometrie! @skipAuth
    updateGeometrie(id: Int!, input: UpdateGeometrieInput!): Geometrie!
      @skipAuth
    deleteGeometrie(id: Int!): Geometrie! @skipAuth
  }
`
