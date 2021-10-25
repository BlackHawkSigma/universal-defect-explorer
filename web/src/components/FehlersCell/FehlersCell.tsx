import { useEffect } from 'react'

import type { FehlerInTimeframe } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FehlerTable from 'src/components/FehlerTable'

export const QUERY = gql`
  query FehlerInTimeframe($start: DateTime!, $end: DateTime!) {
    fehlerInTimeframe(start: $start, end: $end) {
      datum
      auslauf
      bezeichnung
      lack
      skid
      skidseite
      skidposition
      fehlerText
      fehlerOrt
    }
  }
`

export const beforeQuery = ({ setIsLoading, ...props }) => {
  return {
    variables: props,
    onCompleted: () => setIsLoading(false),
  }
}

export const Loading = ({ setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true)
  }, [setIsLoading])

  return <div>Lade...</div>
}

export const Empty = () => <div>keine Daten für diesen Zeitraum</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">Error: {error.message}</div>
)

export const Success = ({
  fehlerInTimeframe: fehler,
}: CellSuccessProps<FehlerInTimeframe>) => {
  return <FehlerTable list={fehler} />
}
