import { useState } from 'react'

import { t } from 'i18next'
import type { GridConfig, GridData, Selection } from 'types/grid'

import Canvas from './Canvas'

export type GridProps = {
  data: GridData[]
  grid: GridConfig
  image: string
  active?: { row: number; col: number }
  onClick?: (data: Selection) => void
}

const Grid = (props: GridProps) => {
  const [active, setActive] = useState<Selection | undefined>(undefined)

  return (
    <div className="rounded border p-1 shadow">
      <h4 className="font-heading text-center text-lg font-semibold">
        {t('Bauteil')}
      </h4>
      <Canvas
        onSelect={(selected) => setActive(selected)}
        active={active}
        {...props}
      />
    </div>
  )
}

export default Grid
