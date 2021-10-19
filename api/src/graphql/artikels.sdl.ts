export const schema = gql`
  type Artikel {
    id: Int!
    artikelcode: String!
    artikelbezeichnung: String!
    GeometieId: Int
    Geometrie: Geometrie
  }

  type Query {
    artikels: [Artikel!]! @skipAuth
    artikel(id: Int!): Artikel @skipAuth
  }

  input CreateArtikelInput {
    artikelcode: String!
    GeometieId: Int
  }

  input UpdateArtikelInput {
    artikelcode: String
    GeometieId: Int
  }

  input SetArtikelGeoInput {
    GeometieId: Int!
  }

  type Mutation {
    setArtikelGeometrie(id: Int!, input: SetArtikelGeoInput!): Artikel @skipAuth
  }
`
