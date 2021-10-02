import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BuchungCreateArgs>({
  buchung: {
    one: { datum: '2021-10-02T09:00:41Z', uhrzeit: '2021-10-02T09:00:41Z' },
    two: { datum: '2021-10-02T09:00:41Z', uhrzeit: '2021-10-02T09:00:41Z' },
  },
})

export type StandardScenario = typeof standard
