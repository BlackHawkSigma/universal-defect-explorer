import { useContext } from 'react'

import { max } from 'd3'

import { CustomizationContext } from 'src/providers/context/CustomizationContext'
import { getColorFor } from 'src/utils/getColorFor'

import { Block } from './Block'
import { Side } from './Side'

export type DefectsPerPositionProps = {
  partsPerSide: number
  sides: string[]
  sumPerPosition: Map<number, string | number>
  sumPerSide: Map<string, number>
  activePos?: number
  activeSide?: string
  onSetPos?: (position: number) => void
  onSetSide?: (side: string) => void
}

const DefectsPerPosition = ({
  partsPerSide,
  sides,
  sumPerSide,
  sumPerPosition,
  activePos,
  activeSide,
  onSetPos,
  onSetSide,
}: DefectsPerPositionProps) => {
  const { doubleSidedSkids } = useContext(CustomizationContext)

  const maxValue = max([...sumPerPosition.values()].map((v) => +v))
  const getColor = getColorFor(maxValue || 0)

  // Idea: Barchart like width
  // const getPercent = getPercentFor(maxValue || 0)

  return (
    <div className="p-1 border rounded shadow">
      <h4 className="text-center font-heading font-semibold text-lg">
        Position
      </h4>
      {doubleSidedSkids ? (
        <div className="grid min-w-[260px] grid-cols-2 gap-2 bg-white">
          <Side
            side={sides[0]}
            count={sumPerSide.get(sides[0])}
            activeSide={activeSide}
            onSetSide={onSetSide}
          >
            {[...Array(partsPerSide)].map((_empty, index) => {
              const pos = partsPerSide - index
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

          <Side
            side={sides[1]}
            count={sumPerSide.get(sides[1])}
            activeSide={activeSide}
            onSetSide={onSetSide}
          >
            {[...Array(partsPerSide)].map((_empty, index) => {
              const pos = partsPerSide * 2 - index
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
        </div>
      ) : (
        <div className="min-w-[130px] bg-white">
          <div className="flex flex-col gap-1">
            {[...Array(partsPerSide)].map((_empty, index) => {
              const pos = partsPerSide - index
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
          </div>
        </div>
      )}
    </div>
  )
}

// const getPercentFor = (maxValue: number) => (value: number) =>
//   `${(value / maxValue) * 100}%`

export default DefectsPerPosition
