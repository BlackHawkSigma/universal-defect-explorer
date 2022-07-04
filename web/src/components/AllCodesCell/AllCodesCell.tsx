import { useTranslation } from 'react-i18next'
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

export const Loading = () => {
  const { t } = useTranslation()
  return <div>{t('Durchsuche Datenbank...')}</div>
}

export const Empty = () => {
  const { t } = useTranslation()
  return <div>{t('Keine Einträge gefunden')}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  getAllCodes: allCodes,
}: CellSuccessProps<AllCodes>) => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t('Codes gefunden', { count: allCodes.length })}:</p>
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
