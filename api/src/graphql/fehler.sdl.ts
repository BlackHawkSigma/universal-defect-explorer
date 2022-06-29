export const schema = gql`
  type Fehler {
    bezeichnung: String!
    datum: DateTime!
    auslauf: DateTime!
    lack: String
    skid: Int
    skidseite: Int
    skidposition: String
    fehlerText: String!
    fehlerOrt: String
  }

  type Query {
    fehlerInTimeframe(start: DateTime!, end: DateTime!): [Fehler]! @skipAuth
  }
`
