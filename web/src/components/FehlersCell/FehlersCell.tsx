import { useContext, useEffect } from 'react'

import type { FehlerInTimeframe } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Auswertung from 'src/components/Auswertung'
import Loader from 'src/components/Loader/loader'
import { AuswertungContext } from 'src/providers/context/AuswertungContext'

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

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache',
  }
}

export const Loading = () => {
  const { setIsLoading } = useContext(AuswertungContext)
  useEffect(() => {
    setIsLoading(true)
    return () => setIsLoading(false)
  }, [setIsLoading])

  return <Loader />
}

export const Empty = () => <div>keine Daten für diesen Zeitraum</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">Error: {error.message}</div>
)

export const Success = ({
  fehlerInTimeframe: fehler,
}: CellSuccessProps<FehlerInTimeframe>) => {
  return <Auswertung list={fehler} />
}
