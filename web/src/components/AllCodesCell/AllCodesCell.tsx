import type { AllCodes } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query AllCodes {
    getAllCodes {
      code: artikelcode
      text: artikelbezeichnung
    }
  }
`

export const Loading = () => <div>Durchsuche Datenbank...</div>

export const Empty = () => <div>Keine Einträge gefunden</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  getAllCodes: allCodes,
}: CellSuccessProps<AllCodes>) => {
  return (
    <>
      {allCodes.length === 1 ? (
        <p>einen Code gefunden:</p>
      ) : (
        <p>{allCodes.length} Codes gefunden:</p>
      )}
      <ul>
        {allCodes.map(({ code, text }) => {
          return (
            <li key={text}>
              {text}: ({code})
            </li>
          )
        })}
      </ul>
    </>
  )
}
