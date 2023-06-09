export const schema = gql`
  type Code {
    artikelcode: String!
    artikelbezeichnung: String!
  }

  type Sums {
    io_notouch: Int
    io_poliert: Int
    nacharbeit: Int
    ausschuss: Int
  }

  type SumsByCode {
    artikelcode: String!
    sums: Sums!
  }

  type SumByGeometrie {
    bezeichnung: String!
    sum: Int!
  }

  type Query {
    getAllCodes: [Code!]! @skipAuth
    sumsByCode(start: DateTime!, end: DateTime!): [SumsByCode!]! @skipAuth
    sumByGeometrie(start: DateTime!, end: DateTime!): [SumByGeometrie!]!
      @skipAuth
  }
`
