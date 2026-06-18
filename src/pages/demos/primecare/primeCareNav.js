// Shared nav config for PrimeCare Clinic
export const BASE = '/demos/primecare'
export const NAV_LINKS = [
  { to: BASE, label: 'Home' },
  { to: `${BASE}/services`, label: 'Services' },
  { to: `${BASE}/specialists`, label: 'Our Specialists' },
  { to: `${BASE}/appointment`, label: 'Book Appointment', cta: true, ctaLabel: 'Book Appointment' },
]
