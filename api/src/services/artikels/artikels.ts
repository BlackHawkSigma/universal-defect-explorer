import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const artikels = () => {
  return db.artikel.findMany({
    include: { Geometrie: true },
  })
}

export const artikel = ({ id }: Prisma.ArtikelWhereUniqueInput) => {
  return db.artikel.findUnique({
    where: { id },
    include: { Geometrie: true },
  })
}

interface SetArtikelGeometrieArgs extends Prisma.ArtikelWhereUniqueInput {
  input: Prisma.ArtikelUpdateInput
}

export const setArtikelGeometrie = ({ id, input }: SetArtikelGeometrieArgs) => {
  return db.artikel.update({
    data: input,
    where: { id },
  })
}
