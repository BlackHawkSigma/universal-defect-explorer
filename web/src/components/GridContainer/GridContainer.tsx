import { useTranslation } from 'react-i18next'
import type { FindGeometrieByName } from 'types/graphql'
import type { Record } from 'types/Record'

import Grid from 'src/components/Grid'
import { convertRaw } from 'src/utils/convertRawData'

export type GridContainerProps = {
  list: Record[]
  geometrie: FindGeometrieByName['geometrie']
}

const Placeholder = ({ text }: { text: string }) => (
  <div className="flex justify-center items-center shadow-lg m-auto w-[700px] h-[420px]">
    <div className="text-4xl">{text}</div>
  </div>
)

const GridContainer = ({
  list,
  geometrie: { image, rows, columns, pixels },
}: GridContainerProps) => {
  const { t } = useTranslation()
  const props = { image, grid: { rows, columns, pixels } }
  const data = convertRaw(list)

  return (
    <div className="flex justify-center items-center">
      {image === '' ? (
        <Placeholder text={t('keine Grafik vorhanden')} />
      ) : (
        <Grid data={data} {...props} />
      )}
    </div>
  )
}

export default GridContainer
