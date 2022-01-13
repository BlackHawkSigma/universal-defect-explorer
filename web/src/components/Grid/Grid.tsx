import { useState } from 'react'

import Canvas from './Canvas'
import type { GridConfig, GridData, Selection } from 'types/grid'

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
    <Canvas
      onSelect={(selected) => setActive(selected)}
      active={active}
      {...props}
    />
  )
}

export default Grid
