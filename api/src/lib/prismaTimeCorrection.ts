import type { Prisma } from '@prisma/client'
import addMinutes from 'date-fns/addMinutes'
import parseISO from 'date-fns/parseISO'
import subMinutes from 'date-fns/subMinutes'

const toLocalTime = (date: Date | string): Date => {
  const time = date instanceof Date ? date : parseISO(date)
  return addMinutes(time, time.getTimezoneOffset())
}

const toUTCTime = (date: Date | string): Date => {
  const time = date instanceof Date ? date : parseISO(date)
  return subMinutes(time, time.getTimezoneOffset())
}

// https://github.com/prisma/prisma/issues/5051#issuecomment-878106427

const correctToLocal = (object?: Record<string, unknown>) => {
  if (!object) return

  for (const key of Object.keys(object)) {
    const value = object[key]

    if (value instanceof Date) {
      object[key] = toLocalTime(value)
    } else if (Object(value) === value) {
      correctToLocal(value as Record<string, unknown>)
    }
  }
}

const correctToUTC = (param: Prisma.MiddlewareParams) => {
  if (!param) return

  for (const key of Object.keys(param)) {
    // @ts-expect-error well...
    const value = param[key]

    if (value instanceof Date) {
      // @ts-expect-error ...still no idea
      param[key] = toUTCTime(value)
    } else if (Object(value) === value) {
      correctToUTC(value)
    }
  }
}

export const beforeMiddleware = (params: Prisma.MiddlewareParams) => {
  correctToUTC(params)
  return params
}

export const afterMiddleware = <T>(value: T) => {
  if (value instanceof Date) {
    return toLocalTime(value)
  }

  if (Object(value) !== value) {
    return value
  }

  correctToLocal(value as Record<string, unknown>)

  return value
}
