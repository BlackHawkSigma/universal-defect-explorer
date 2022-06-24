import React from 'react'

import { rollup } from 'd3-array'
import type { Record } from 'types/Record'

import SkidPosition from './SkidPosition'

export type SkidPositionProps = {
  list: Record[]
  partsPerSide?: number
  activePos?: number
  activeSide?: number
  onSetPos: (position: number) => void
  onSetSide: (side: number) => void
}

const SkidPositionWrapper: React.FC<SkidPositionProps> = ({
  list,
  partsPerSide,
  activePos,
  activeSide,
  onSetPos,
  onSetSide,
}) => {
  const sides = process.env.SINGLE_SIDE_SKID ? 1 : 2

  const sumPerPosition = rollup<Record, number, number>(
    list,
    (v) => v.length,
    (d) => d.skidposition
  )

  const sumPerSide = rollup<Record, number, number>(
    list,
    (v) => v.length,
    (d) => d.skidseite
  )

  return (
    <SkidPosition
      sides={sides}
      partsPerSide={partsPerSide}
      sumPerPosition={sumPerPosition}
      sumPerSide={sumPerSide}
      activePos={activePos}
      activeSide={activeSide}
      onSetPos={onSetPos}
      onSetSide={onSetSide}
    />
  )
}

export default SkidPositionWrapper
