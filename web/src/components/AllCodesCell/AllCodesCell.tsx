import type { AllCodes } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query AllCodes {
    getAllCodes {
      artikelcode
      artikelbezeichnung
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  getAllCodes: allCodes,
}: CellSuccessProps<AllCodes>) => {
  return (
    <>
      <p>{allCodes.length} Codes gefunden</p>
      <ul>
        {allCodes.map((item) => {
          return (
            <li key={item.artikelbezeichnung}>
              {item.artikelbezeichnung}: ({item.artikelcode})
            </li>
          )
        })}
      </ul>
    </>
  )
}
