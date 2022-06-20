import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GeometrieCreateArgs>({
  geometrie: {
    one: {
      data: {
        Bezeichnung: 'String',
        image: '',
        Codes: {
          create: {
            artikelcode: '123456789',
          },
        },
      },
      include: { Codes: true },
    },
  },
})

export type StandardScenario = typeof standard
