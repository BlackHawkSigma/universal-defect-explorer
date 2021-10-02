import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const buchungs = () => {
  return db.buchung.findMany()
}

export const getAllCodes = () => {
  return db.buchung.findMany({
    distinct: ['artikelcode', 'artikelbezeichnung'],
  })
}
