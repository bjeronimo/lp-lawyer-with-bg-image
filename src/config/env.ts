import * as z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  GTM_ID: z.string(),
  UMAMI_WEBSITE_ID: z.string(),
  UMAMI_SCRIPT_URL: z.string(),
})

const createEnv = () => {
  const envVars = {
    GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    UMAMI_SCRIPT_URL: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL,
  }

  const parsedEnv = envSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided. The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join('\n')}
  `
    )
  }

  return parsedEnv.data ?? {}
}

export const env = createEnv()
