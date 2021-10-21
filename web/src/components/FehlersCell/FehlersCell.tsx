import type { FehlerInTimeframe } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FehlerInTimeframe($start: DateTime!, $end: DateTime!) {
    fehlerInTimeframe(start: $start, end: $end) {
      datum
      bezeichnung
    }
  }
`

export const Loading = () => <div>Lade...</div>

export const Empty = () => <div>keine Daten für diesen Zeitraum</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">Error: {error.message}</div>
)

export const Success = ({
  fehlerInTimeframe: fehler,
}: CellSuccessProps<FehlerInTimeframe>) => {
  return (
    <ul>
      {fehler.map((item) => {
        return <li key={item.datum}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
