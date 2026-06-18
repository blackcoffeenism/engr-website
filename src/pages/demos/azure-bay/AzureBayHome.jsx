import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

const RESORT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc'

export default function AzureBayHome() {
  return (
    <div className="demo-project ab">
      <SEO
        title="Azure Bay Resort | Luxury Beachfront Escape Concept"
        description="Escape to paradise. Plan your beachfront vacation and check out our boutique accommodations, oceanfront pools, and wellness spa."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />

      {/* Hero */}
      <section className="ab-hero">
        <img src={RESORT_IMG} alt="Azure Bay Resort pool" className="ab-hero__img" />
        <div className="ab-hero__overlay" />
        <div className="ab-hero__content">
          <span className="ab-hero__eyebrow">Luxury Coastal Resort</span>
          <h1 className="ab-hero__title">Your Azure<br />Escape Awaits</h1>
          <p className="ab-hero__subtitle">
            Nestled along a pristine coastline, Azure Bay Resort offers an unparalleled blend of luxury, tranquility, and world-class hospitality.
          </p>
          <div className="dp-btn-group">
            <Link to={`${BASE}/booking`} id="ab-hero-book-btn" className="dp-btn ab-btn--primary">Book Your Stay</Link>
            <Link to={`${BASE}/rooms`} id="ab-hero-rooms-btn" className="dp-btn ab-btn--outline">Explore Rooms</Link>
          </div>
        </div>
      </section>

      {/* Quick Book Bar */}
      <div className="ab-quick-book">
        <div className="ab-quick-book__inner dp-container" style={{ padding: 0 }}>
          {['Check-In', 'Check-Out', 'Guests', 'Room Type'].map((label, i) => (
            <div key={label} className="ab-quick-book__field">
              <span className="ab-quick-book__label">{label}</span>
              <input
                type={i < 2 ? 'date' : 'text'}
                placeholder={i === 2 ? '2 Adults' : i === 3 ? 'Any Room' : ''}
                className="ab-quick-book__input"
              />
            </div>
          ))}
          <Link to={`${BASE}/booking`} id="ab-quick-book-btn" className="ab-quick-book__btn">Check Availability</Link>
        </div>
      </div>

      {/* Stats */}
      <section className="ab-stats-strip">
        <div className="dp-stats dp-container">
          {[['180', 'Luxury Rooms'], ['5★', 'Resort Rating'], ['12', 'Dining Options'], ['3km', 'Private Beach']].map(([v,l]) => (
            <div key={l} className="dp-stat">
              <span className="dp-stat__value">{v}</span>
              <span className="dp-stat__label">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Highlight */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="bc-section-header" style={{ marginBottom: 48 }}>
            <span className="dp-section-label ab-label">Accommodations</span>
            <h2 className="dp-section-title" style={{ color: '#0d4f8b' }}>Rooms & Suites</h2>
            <p className="dp-section-subtitle">Choose from our collection of beautifully appointed rooms, suites, and private villas.</p>
          </div>
          <div className="dp-grid-3">
            {[
              { type: 'Deluxe', title: 'Ocean View Room', desc: 'Sweeping panoramic ocean views with a private balcony, king bed, and luxury marble bathroom.', price: '$380', label: 'From' },
              { type: 'Suite', title: 'Azure Bay Suite', desc: 'A spacious suite with a separate living area, private plunge pool, and butler service.', price: '$680', label: 'From' },
              { type: 'Villa', title: 'Beachfront Villa', desc: 'A private villa with direct beach access, infinity pool, full kitchen, and concierge.', price: '$1,400', label: 'From' },
            ].map(room => (
              <div key={room.title} className="ab-room-card">
                <div className="ab-room-card__img">
                  <img src={RESORT_IMG} alt={room.title} />
                  <span className="ab-room-card__badge">{room.type}</span>
                </div>
                <div className="ab-room-card__body">
                  <h3 className="ab-room-card__title">{room.title}</h3>
                  <p className="ab-room-card__desc">{room.desc}</p>
                  <div className="ab-room-card__price">
                    <div>
                      <span className="ab-room-card__rate">{room.price}</span>
                      <span className="ab-room-card__rate-label">per night</span>
                    </div>
                    <Link to={`${BASE}/booking`} id={`ab-home-book-room-${room.title.toLowerCase().replace(/\s+/g, '-')}`} className="dp-btn ab-btn--primary" style={{ padding: '10px 20px', fontSize: 11 }}>Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to={`${BASE}/rooms`} id="ab-home-view-all-rooms-btn" className="dp-btn ab-btn--outline-dark">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="dp-section dp-section--alt">
        <div className="dp-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="dp-section-label ab-label">World Class</span>
            <h2 className="dp-section-title" style={{ color: '#0d4f8b' }}>Resort Facilities</h2>
          </div>
          <div className="dp-grid-3">
            {[
              { icon: 'pool', title: 'Infinity Pool', desc: 'Three temperature-controlled pools including our iconic infinity pool overlooking the bay.' },
              { icon: 'spa', title: 'Azure Spa', desc: 'A full-service spa with 18 treatment rooms, sauna, steam, and flotation therapy.' },
              { icon: 'restaurant', title: 'Fine Dining', desc: '5 dining concepts from Michelin-starred cuisine to relaxed poolside dining.' },
              { icon: 'fitness_center', title: 'Fitness Centre', desc: 'State-of-the-art gym, yoga studio, and personal training on request.' },
              { icon: 'beach_access', title: 'Private Beach', desc: '3km of pristine private beach with dedicated attendants and water sports.' },
              { icon: 'child_care', title: 'Kids Club', desc: 'A supervised fun-filled programme for children aged 4–12.' },
            ].map(f => (
              <div key={f.title} className="ab-amenity-card">
                <div className="material-symbols-outlined ab-amenity-card__icon">{f.icon}</div>
                <h3 className="ab-amenity-card__title">{f.title}</h3>
                <p className="ab-amenity-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 className="dp-section-title" style={{ color: '#fff' }}>Begin Your Azure Bay Experience</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Reserve your stay today and receive complimentary breakfast for two, plus a sunset cruise for bookings over 3 nights.
          </p>
          <Link to={`${BASE}/booking`} id="ab-home-bottom-cta-btn" className="dp-btn" style={{ backgroundColor: '#fff', color: '#0d4f8b' }}>Book Your Stay</Link>
        </div>
      </section>

      <footer className="dp-footer">
        <div className="dp-container">
          <p>© 2026 Azure Bay Resort. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p>
        </div>
      </footer>
    </div>
  )
}
