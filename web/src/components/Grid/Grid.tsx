import { useState } from 'react'

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
    <Canvas
      onSelect={(selected) => setActive(selected)}
      active={active}
      {...props}
    />
  )
}

export default Grid
