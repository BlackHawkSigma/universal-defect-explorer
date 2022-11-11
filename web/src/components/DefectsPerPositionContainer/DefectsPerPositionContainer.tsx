import { rollup } from 'd3'
import { Record } from 'types/Record'

import DefectsPerPosition from 'src/components/DefectsPerPosition'

type Props = {
  list: Record[]
  partsPerSide: number
}

const DefectsPerPositionContainer = ({ list, partsPerSide }: Props) => {
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
    <div>
      <DefectsPerPosition
        partsPerSide={partsPerSide}
        sumPerSide={sumPerSide}
        sumPerPosition={sumPerPosition}
      />
    </div>
  )
}

export default DefectsPerPositionContainer
