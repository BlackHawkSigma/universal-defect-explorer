import type { Maybe } from 'types/graphql'

export type Record = {
  datum: string
  auslauf: string
  bezeichnung: string
  lack?: Maybe<string>
  skid?: Maybe<number>
  skidseite?: Maybe<number>
  skidposition?: Maybe<number>
  fehlerText: string
  fehlerOrt?: string
}
