import { z } from 'zod'

const envSchema = z.object({
  DATABASE_TIMEZONE: z.coerce.string(),
  SIDES_PER_SKID: z.coerce.number(),
})

export const env = envSchema.parse(process.env)
