import { max, rollup } from 'd3'
import type { FindGeometrieByName } from 'types/graphql'
import { Record } from 'types/Record'

import { Link, routes } from '@redwoodjs/router'

import DefectsPerPosition from 'src/components/DefectsPerPosition'
import { CustomizationContext } from 'src/providers/context/CustomizationContext'

type Props = {
  list: Record[]
  geometrie: FindGeometrieByName['geometrie']
}

const DefectsPerPositionContainer = ({ list, geometrie }: Props) => {
  const { doubleSidedSkids } = React.useContext(CustomizationContext)

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

  const overflow =
    max(sumPerPosition.keys()) >
    (doubleSidedSkids ? geometrie.partsPerSide * 2 : geometrie.partsPerSide)

  return (
    <div>
      {overflow && (
        <div className="text-center bg-orange-300 text-lg rounded p-1">
          overflow
          <Link
            to={routes.editGeometrie({ id: geometrie.id })}
            target="_blank"
            className="rw-button rw-button-small"
          >
            bearbeiten
          </Link>
        </div>
      )}
      <DefectsPerPosition
        partsPerSide={geometrie.partsPerSide}
        sumPerSide={sumPerSide}
        sumPerPosition={sumPerPosition}
      />
    </div>
  )
}

export default DefectsPerPositionContainer