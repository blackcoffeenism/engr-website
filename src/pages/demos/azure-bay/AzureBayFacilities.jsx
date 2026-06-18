import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

const IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc'

const facilities = [
  { icon: 'pool', title: 'Infinity Pool Complex', desc: 'Three temperature-controlled pools — the adult-only infinity pool, a family pool, and a kids splash zone. All heated year-round.', detail: ['Adult-only infinity pool', 'Family pool (28°C)', 'Kids splash pad', 'Poolside bar service', 'Towel & sunbed service'] },
  { icon: 'spa', title: 'Azure Spa & Wellness', desc: 'Award-winning full-service spa with 18 private treatment rooms, sauna, steam room, and holistic therapy programmes.', detail: ['18 private treatment rooms', 'Hydrotherapy circuit', 'Hammam & steam', 'Ayurvedic treatments', 'Couples packages'] },
  { icon: 'fitness_center', title: 'Fitness & Movement', desc: 'A fully equipped gym open 24/7 plus daily group fitness classes including yoga, Pilates, and aqua aerobics.', detail: ['Techno Gym equipment', 'Yoga & Pilates studio', 'Personal training', 'Aqua aerobics', 'Sunrise stretching sessions'] },
  { icon: 'restaurant', title: 'Dining Concepts', desc: '5 restaurant & bar concepts from Michelin-starred tasting menus to relaxed beachside grills and sunset cocktail bars.', detail: ['Pearl Restaurant (fine dining)', 'The Shoreline Grill', 'Azure Bar & Lounge', 'Infinity Pool Bar', 'In-room dining (24hr)'] },
  { icon: 'beach_access', title: 'Private Beach', desc: '3km of pristine, powder-soft private beach exclusively for resort guests, with full attendant service.', detail: ['3km exclusive beach', 'Sun loungers & umbrellas', 'Complimentary non-motorised watersports', 'Beach butler service', 'Beach bar kiosk'] },
  { icon: 'sailing', title: 'Water Sports', desc: 'A full marina with guided snorkelling, scuba diving, sailing, jet-ski hire, and catamaran sunset cruises.', detail: ['Snorkelling & scuba', 'Jet-ski hire', 'Catamaran cruises', 'Stand-up paddleboarding', 'Glass-bottom boat tours'] },
  { icon: 'child_care', title: "Kids' Club", desc: 'A vibrant supervised programme for children aged 4–12 with daily themed activities, arts, and discovery sessions.', detail: ['Ages 4–12', 'Daily themed activities', 'Arts & crafts', 'Junior chef classes', 'Evening babysitting available'] },
  { icon: 'meeting_room', title: 'Events & Weddings', desc: 'Stunning indoor and outdoor event spaces accommodating up to 500 guests, with a dedicated events coordination team.', detail: ['Ballroom (500 pax)', 'Beachfront ceremony lawn', 'Full AV production', 'Dedicated wedding planner', 'Bespoke catering'] },
]

export default function AzureBayFacilities() {
  return (
    <div className="demo-project ab">
      <SEO
        title="Facilities & Amenities | Azure Bay Resort"
        description="Discover Azure Bay Resort's premium amenities, including our infinity pool, private beach access, wellness spa, and fine dining."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />
      <div className="dp-page-hero">
        <img src={IMG} alt="Azure Bay facilities" className="dp-page-hero__img" />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Facilities & Amenities</h1>
          <p className="dp-page-hero__subtitle">World-class experiences for every guest</p>
        </div>
      </div>
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-grid-2" style={{ gap: 40 }}>
            {facilities.map(f => (
              <div key={f.title} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: 32, borderRadius: 12, border: '1px solid rgba(13,79,139,0.1)', background: '#fff', boxShadow: '0 4px 20px rgba(13,79,139,0.04)' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(13,79,139,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#0d4f8b' }}>{f.icon}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0d4f8b', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: '#44474d', lineHeight: 1.65, marginBottom: 12 }}>{f.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {f.detail.map(d => (
                      <li key={d} style={{ fontSize: 13, color: '#44474d', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#0d4f8b' }}>check_circle</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ab-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Experience It All</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>Book your stay and enjoy unlimited access to all resort facilities.</p>
          <Link to={`${BASE}/booking`} id="ab-facilities-book-btn" className="dp-btn" style={{ backgroundColor: '#fff', color: '#0d4f8b' }}>Book Your Stay</Link>
        </div>
      </section>
      <footer className="dp-footer"><div className="dp-container"><p>© 2026 Azure Bay Resort · <em>Demo by <Link to="/projects">E-N-G-R</Link></em></p></div></footer>
    </div>
  )
}
