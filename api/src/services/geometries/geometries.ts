import {
  GeometrieRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { removeNulls } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const geometries: QueryResolvers['geometries'] = () => {
  return db.geometrie.findMany()
}

export const geometrieById: QueryResolvers['geometrieById'] = ({ id }) => {
  return db.geometrie.findUnique({
    where: { id },
    include: { Codes: true },
  })
}

export const geometrieByName: QueryResolvers['geometrieByName'] = ({
  Bezeichnung,
}) => {
  return db.geometrie.findFirst({
    where: { Bezeichnung },
    include: { Codes: true },
  })
}

export const createGeometrie: MutationResolvers['createGeometrie'] = ({
  input,
}) => {
  return db.geometrie.create({
    data: input,
  })
}

export const updateGeometrie: MutationResolvers['updateGeometrie'] = ({
  id,
  input,
}) => {
  return db.geometrie.update({
    data: removeNulls(input),
    where: { id },
  })
}

export const deleteGeometrie: MutationResolvers['deleteGeometrie'] = ({
  id,
}) => {
  return db.geometrie.delete({
    where: { id },
  })
}

export const Geometrie: GeometrieRelationResolvers = {
  Codes: async (_obj, { root }) => {
    const maybeCodes = await db.geometrie
      .findUnique({ where: { id: root.id } })
      .Codes()

    if (!maybeCodes) {
      throw new Error('Could not resolve codes')
    }

    return maybeCodes
  },
}
