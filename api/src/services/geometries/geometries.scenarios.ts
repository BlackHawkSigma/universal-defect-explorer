import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GeometrieCreateArgs>({
  geometrie: {
    data: { one: { Bezeichnung: 'String' }, two: { Bezeichnung: 'String' } },
  },
})

export type StandardScenario = typeof standard
