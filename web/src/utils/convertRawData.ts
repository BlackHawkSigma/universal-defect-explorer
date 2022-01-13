import { countBy } from 'lodash/fp'

import type { Record } from 'types/Record'
import type { GridData } from 'types/grid'

export const convertRaw = (list: Record[]): GridData[] => {
  const counts = countBy('fehlerOrt', list)

  const result = Object.entries(counts).map((el) => {
    const [code, count] = el

    const label = count.toString()
    const { col, row } = codeToCoords(code)

    return { row, col, label }
  })

  return result
}

export const codeToCoords = (code: string): { row: number; col: number } => {
  const row = +code.slice(1, 3)
  const col = +code.slice(4, 5)

  return { row, col }
}
