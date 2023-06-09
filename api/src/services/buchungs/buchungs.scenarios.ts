import type { Prisma, Buchung } from '@prisma/client'
import { Geometrie } from 'types/graphql'

import { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<
  Prisma.GeometrieCreateArgs | Prisma.BuchungCreateArgs
>({
  geometrie: {
    Front: {
      data: {
        Bezeichnung: 'Front',
        image: '',
      },
    },
    Heck: {
      data: {
        Bezeichnung: 'Heck',
        image: '',
      },
    },
  },
  buchung: {
    Front_Rot: (scenario) => ({
      data: {
        datum: '2021-10-02T09:00:41Z',
        uhrzeit: '2021-10-02T09:00:41Z',
        auslaufzeit: '2021-10-02T08:00:41Z',
        io_poliert: 5,
        Artikel: {
          create: {
            artikelcode: '123',
            artikelbezeichnung: 'Front_Rot',
            GeometieId: scenario.geometrie.Front.id,
          },
        },
      },
    }),
    Heck_Rot: (scenario) => ({
      data: {
        datum: '2021-10-02T09:00:41Z',
        uhrzeit: '2021-10-02T09:00:41Z',
        auslaufzeit: '2021-10-02T08:00:41Z',
        ausschuss: 2,
        Artikel: {
          create: {
            artikelcode: '456',
            artikelbezeichnung: 'Heck_Rot',
            GeometieId: scenario.geometrie.Heck.id,
          },
        },
      },
    }),
  },
})

export type StandardScenario = ScenarioData<
  Buchung,
  'buchung',
  'Front_Rot' | 'Heck_Rot'
>

export type ScenarioGeometie = ScenarioData<
  Geometrie,
  'geometrie',
  'Front' | 'Heck'
>
