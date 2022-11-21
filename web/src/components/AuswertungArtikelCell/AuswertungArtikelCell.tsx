import { useTranslation } from 'react-i18next'
import type { FindGeometrieByName } from 'types/graphql'
import { Record } from 'types/Record'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DefectsPerPositionContainer from 'src/components/DefectsPerPositionContainer'
import DefectsPerSkidContainer from 'src/components/DefectsPerSkidContainer/DefectsPerSkidContainer'
import GridContainer from 'src/components/GridContainer'

export type AuswertungArtikelCellProps = {
  list: Record[]
}

export const QUERY = gql`
  query FindGeometrieByName($name: String!) {
    geometrie: geometrieByName(Bezeichnung: $name) {
      id
      image
      rows
      columns
      pixels
      partsPerSide
    }
  }
`

const Placeholder = ({ text }: { text: string }) => (
  <div className="flex justify-center items-center shadow-lg m-auto w-[700px] h-[420px]">
    <div className="text-4xl">{text}</div>
  </div>
)

export const Loading = () => {
  const { t } = useTranslation()
  return <Placeholder text={t('lade Geometrie ...')} />
}

export const Empty = () => {
  const { t } = useTranslation()
  return <Placeholder text={t('keine Geometrie gefunden')} />
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">Error: {error.message}</div>
)

export const Success = ({
  list,
  geometrie,
}: CellSuccessProps<FindGeometrieByName> & AuswertungArtikelCellProps) => {
  return (
    <div className="flex gap-4 flex-wrap items-start justify-center">
      <GridContainer list={list} geometrie={geometrie} />
      <DefectsPerPositionContainer list={list} geometrie={geometrie} />
      <DefectsPerSkidContainer list={list} />
    </div>
  )
}
