// Shared nav config for Azure Bay Resort
export const BASE = '/demos/azure-bay'
export const NAV_LINKS = [
  { to: BASE, label: 'Home' },
  { to: `${BASE}/rooms`, label: 'Rooms & Suites' },
  { to: `${BASE}/facilities`, label: 'Facilities' },
  { to: `${BASE}/gallery`, label: 'Gallery' },
  { to: `${BASE}/contact`, label: 'Contact' },
  { to: `${BASE}/booking`, label: 'Book Now', cta: true, ctaLabel: 'Book Your Stay' },
]
