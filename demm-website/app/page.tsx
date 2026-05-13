// Server Component — reads Vercel Edge geolocation headers to personalize the
// site by visitor city. Vercel auto-populates these on every request at the
// edge from IP geolocation — no API keys, no consent prompt, no client flash.
// Docs: https://vercel.com/docs/edge-network/headers#x-vercel-ip-city
//
// Falls back gracefully when geo is unavailable (local dev, VPN, private IP).

import { headers } from 'next/headers'
import HomeClient from './HomeClient'

// Tell Next.js this route is dynamic — must re-render per request to read headers.
export const dynamic = 'force-dynamic'

const REGION_TO_STATE: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
  MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
  NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina',
  ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania',
  RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee',
  TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', DC: 'Washington D.C.',
}

function cleanCity(raw: string | null): string | null {
  if (!raw) return null
  try {
    // Vercel URL-encodes city names like "New%20York" or "Sao%20Paulo"
    const decoded = decodeURIComponent(raw).trim()
    if (!decoded) return null
    // Guard against obvious noise (single chars, all-caps codes, etc.)
    if (decoded.length < 2) return null
    return decoded
  } catch {
    return null
  }
}

export default async function Home() {
  const h = await headers()

  const city = cleanCity(h.get('x-vercel-ip-city'))
  const regionCode = h.get('x-vercel-ip-country-region') // e.g. "FL", "GA", "CA-ON"
  const country = h.get('x-vercel-ip-country') // e.g. "US"

  // Normalize region: strip country prefix like "CA-ON" → "ON"; for US, look up state.
  let region: string | null = null
  if (regionCode) {
    const code = regionCode.includes('-') ? regionCode.split('-').pop()! : regionCode
    region = country === 'US' && code in REGION_TO_STATE ? REGION_TO_STATE[code] : code
  }

  return (
    <HomeClient
      city={city}
      region={region}
      country={country}
    />
  )
}
