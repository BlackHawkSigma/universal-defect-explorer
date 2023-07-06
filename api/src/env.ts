import { z } from 'zod'

const envSchema = z.object({
  DATABASE_TIMEZONE: z.string(),
  SIDES_PER_SKID: z.coerce.number(),
  EXCLUDE_FAHRWEG: z
    .string()
    .optional()
    .default('')
    .transform((list) => list.split(',').map((v) => Number(v.trim())))
    .pipe(z.number().array()),
})

export const env = envSchema.parse(process.env)
