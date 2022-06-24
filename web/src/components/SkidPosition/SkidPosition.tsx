import { interpolateRgb, max, scaleLinear } from 'd3'

import { Block } from './Block'
import { Side } from './Side'

export type SkidPositionProps = {
  sides: number
  partsPerSide: number
  sumPerPosition: Map<number, string | number>
  sumPerSide: Map<number, number>
  activePos?: number
  activeSide?: number
  onSetPos?: (position: number) => void
  onSetSide?: (side: number) => void
}

const getColorFor =
  (maxValue: number) =>
  (value: number): string => {
    const scale = scaleLinear().domain([0, maxValue]).range([0, 1])
    return interpolateRgb.gamma(2.2)('yellow', 'red')(scale(value))
  }

const SkidPosition = ({
  sides,
  partsPerSide,
  sumPerSide,
  sumPerPosition,
  activePos,
  activeSide,
  onSetPos,
  onSetSide,
}: SkidPositionProps) => {
  const maxValue = max([...sumPerPosition.values()].map((v) => +v))
  const getColor = getColorFor(maxValue || 0)

  return (
    <div className="mt-2 mb-5 grid min-w-[260px] grid-cols-2 gap-2 bg-white p-2 shadow-xl">
      {sides}
      {[1, 2].map((side) => (
        <Side
          key={side}
          side={side}
          count={sumPerSide.get(side)}
          activeSide={activeSide}
          onSetSide={onSetSide}
        >
          {[...Array(partsPerSide)].map((_empty, index) => {
            const pos = partsPerSide * side - index
            const count = sumPerPosition.get(pos)

            return (
              <Block
                position={pos}
                count={count}
                activePos={activePos}
                getColor={getColor}
                onSetPos={onSetPos}
                key={pos}
              />
            )
          })}
        </Side>
      ))}
    </div>
  )
}

export default SkidPosition
