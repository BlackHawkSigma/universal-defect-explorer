import { MutationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const artikels: QueryResolvers['artikels'] = () => {
  return db.artikel.findMany({
    include: { Geometrie: { include: { Codes: true } } },
  })
}

export const artikel: QueryResolvers['artikel'] = ({ id }) => {
  return db.artikel.findUnique({
    where: { id },
    include: { Geometrie: { include: { Codes: true } } },
  })
}

export const setArtikelGeometrie: MutationResolvers['setArtikelGeometrie'] = ({
  id,
  input,
}) => {
  return db.artikel.update({
    data: input,
    where: { id },
  })
}
