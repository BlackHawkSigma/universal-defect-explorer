import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const geometries = () => {
  return db.geometrie.findMany()
}

export const geometrieById = ({ id }: Prisma.GeometrieWhereUniqueInput) => {
  return db.geometrie.findUnique({
    where: { id },
    include: { Codes: true },
  })
}

interface CreateGeometrieArgs {
  input: Prisma.GeometrieCreateInput
}

export const createGeometrie = ({ input }: CreateGeometrieArgs) => {
  return db.geometrie.create({
    data: input,
  })
}

interface UpdateGeometrieArgs extends Prisma.GeometrieWhereUniqueInput {
  input: Prisma.GeometrieUpdateInput
}

export const updateGeometrie = ({ id, input }: UpdateGeometrieArgs) => {
  return db.geometrie.update({
    data: input,
    where: { id },
  })
}

export const deleteGeometrie = ({ id }: Prisma.GeometrieWhereUniqueInput) => {
  return db.geometrie.delete({
    where: { id },
  })
}

export const Geometrie = {
  Codes: (_obj, { root }: ResolverArgs<ReturnType<typeof geometrie>>) =>
    db.geometrie.findUnique({ where: { id: root.id } }).Codes(),
}
