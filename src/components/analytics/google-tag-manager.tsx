import React from 'react'
import { GoogleTagManager as GTM } from '@next/third-parties/google'

import { env } from '@/config/env'

export function GoogleTagManager() {
  return <GTM gtmId={env.GTM_ID} />
}
