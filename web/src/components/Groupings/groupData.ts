import { group, descending } from 'd3-array'

import type { Record } from 'types/Record'

export const groupByArtikel = (list: Record[]) => {
  const groups = group(list, (d) => d.bezeichnung)
  return Array.from(groups).sort(([_a, a], [_b, b]) =>
    descending(a.length, b.length)
  )
}

export const groupByFehler = (list: Record[]) => {
  const groups = group(list, (d) => d.fehlerText)
  return Array.from(groups).sort(([_a, a], [_b, b]) =>
    descending(a.length, b.length)
  )
}
