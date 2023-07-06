// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { env } from 'src/env'

import { logger } from './logger'
import { afterMiddleware, beforeMiddleware } from './prismaTimeCorrection'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

/** Add middleware to transform dates */
if (env.DATABASE_TIMEZONE !== 'UTC') {
  db.$use(async (params, next) => {
    const before = beforeMiddleware(params)
    const result = await next(before)
    const after = afterMiddleware(result)

    return after
  })
}

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})
