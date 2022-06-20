import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BuchungCreateArgs>({
  buchung: {
    one: {
      data: {
        datum: '2021-10-02T09:00:41Z',
        uhrzeit: '2021-10-02T09:00:41Z',
        auslaufzeit: '2021-10-02T08:00:41Z',
      },
    },
    two: {
      data: {
        datum: '2021-10-02T09:00:41Z',
        uhrzeit: '2021-10-02T09:00:41Z',
        auslaufzeit: '2021-10-02T08:00:41Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
