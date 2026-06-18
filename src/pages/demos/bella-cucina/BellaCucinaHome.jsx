import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import '../demo.css'
import './bella-cucina.css'

const BASE = '/demos/bella-cucina'
const NAV_LINKS = [
  { to: BASE, label: 'Home' },
  { to: `${BASE}/menu`, label: 'Menu' },
  { to: `${BASE}/reservations`, label: 'Reservations', cta: true, ctaLabel: 'Reserve a Table' },
]

export default function BellaCucinaHome() {
  return (
    <div className="demo-project bc">
      <SEO
        title="Bella Cucina | Sophisticated Italian Fine Dining Concept"
        description="Experience contemporary Italian cuisine crafted with the finest seasonal ingredients, served in an atmosphere of timeless elegance."
      />
      <DemoNav brand="Bella Cucina" basePath={BASE} links={NAV_LINKS} accentColor="#7c3a1e" accentText="#fff" />

      {/* Hero */}
      <section className="bc-hero">
        <div className="bc-hero__overlay" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMhRQtLu6fcgP7CZ8a2GGbB0-2E0-fyV3o50b5vHPuNfHbmj4KMk04F0dWgKneuZeS-AlJN3Y7q9AxkkMmscr95-4Hr5_aDN0HQB2JNRKCRywpUv7kke7IQBAKsvBT4-twwr8-Fdj2UItxfFAP0NrqsU5JhJc8qZMclkHDfPXoIqqh067Ov-R8PekVH3pe-6WmClMdQCUjfvro31IjSDTOty9BE5zHWVt0iFTlz6eOvbkrZ8OIUmcOVRK6CkHdnT5M6zMzqKNF-8"
          alt="Bella Cucina elegant dining interior"
          className="bc-hero__img"
        />
        <div className="bc-hero__content">
          <span className="bc-hero__eyebrow">Fine Dining Experience</span>
          <h1 className="bc-hero__title">Where Every Meal<br />Becomes a Memory</h1>
          <p className="bc-hero__subtitle">
            Indulge in contemporary Italian cuisine crafted with the finest seasonal ingredients, served in an atmosphere of timeless elegance.
          </p>
          <div className="dp-btn-group">
            <Link to={`${BASE}/reservations`} id="bc-hero-reserve-btn" className="dp-btn bc-btn--primary">Reserve a Table</Link>
            <Link to={`${BASE}/menu`} id="bc-hero-menu-btn" className="dp-btn bc-btn--outline">View Our Menu</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="bc-about-grid">
            <div>
              <span className="dp-section-label bc-label">Our Story</span>
              <h2 className="dp-section-title">Authentic Flavours, Modern Artistry</h2>
              <p className="dp-section-subtitle" style={{ marginBottom: 24 }}>
                Founded in 2004, Bella Cucina was born from a passion for bringing the authentic tastes of Italy to life. Our head chef, Marco Rossi, trained in Bologna and Tuscany before bringing his culinary philosophy to our kitchen: let the ingredient speak.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: '#44474d' }}>
                Every dish on our menu celebrates the seasons, sourced from local farms and artisan producers who share our commitment to quality.
              </p>
            </div>
            <div className="bc-about__img-wrap">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMhRQtLu6fcgP7CZ8a2GGbB0-2E0-fyV3o50b5vHPuNfHbmj4KMk04F0dWgKneuZeS-AlJN3Y7q9AxkkMmscr95-4Hr5_aDN0HQB2JNRKCRywpUv7kke7IQBAKsvBT4-twwr8-Fdj2UItxfFAP0NrqsU5JhJc8qZMclkHDfPXoIqqh067Ov-R8PekVH3pe-6WmClMdQCUjfvro31IjSDTOty9BE5zHWVt0iFTlz6eOvbkrZ8OIUmcOVRK6CkHdnT5M6zMzqKNF-8"
                alt="Chef preparing food at Bella Cucina"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bc-stats-strip">
        <div className="dp-stats">
          {[['20+', 'Years of Excellence'], ['2', 'Michelin Stars'], ['150', 'Seats Available'], ['100%', 'Locally Sourced']].map(([v, l]) => (
            <div key={l} className="dp-stat">
              <span className="dp-stat__value">{v}</span>
              <span className="dp-stat__label">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="dp-section dp-section--alt">
        <div className="dp-container">
          <div className="bc-section-header">
            <span className="dp-section-label bc-label">Featured Dishes</span>
            <h2 className="dp-section-title">Signature Creations</h2>
            <p className="dp-section-subtitle">A curated selection of our most celebrated dishes, crafted with passion and precision.</p>
          </div>
          <div className="dp-grid-3" style={{ marginTop: 48 }}>
            {[
              { name: 'Tagliatelle al Ragù', desc: 'House-made egg pasta with slow-braised Angus beef, aged Parmigiano Reggiano, and fresh basil.', tag: 'Pasta', price: '$38', image: '/demos/tagliatelle_ragu.png' },
              { name: 'Branzino in Crosta', desc: 'Mediterranean sea bass baked in a salt crust with lemon, capers, and Sicilian olive oil.', tag: 'Seafood', price: '$52', image: '/demos/branzino_crosta.png' },
              { name: 'Tartufata', desc: 'Creamy black truffle risotto with aged Carnaroli rice, Verjuice, and shaved black truffle.', tag: 'Risotto', price: '$64', image: '/demos/tartufata_risotto.png' },
            ].map(dish => (
              <div key={dish.name} className="dp-card bc-dish-card">
                <img src={dish.image} alt={dish.name} className="bc-dish-card__img" />
                <div className="dp-card__body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span className="dp-card__tag bc-tag">{dish.tag}</span>
                    <span className="bc-price">{dish.price}</span>
                  </div>
                  <h3 className="dp-card__title">{dish.name}</h3>
                  <p className="dp-card__desc">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to={`${BASE}/menu`} id="bc-view-full-menu-btn" className="dp-btn bc-btn--primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bc-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 className="dp-section-title" style={{ color: '#fff' }}>Reserve Your Table Tonight</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', maxWidth: 520, margin: '0 auto 40px' }}>
            Join us for an unforgettable evening. Reservations recommended, especially on weekends.
          </p>
          <Link to={`${BASE}/reservations`} id="bc-cta-reserve-btn" className="dp-btn" style={{ backgroundColor: '#fff', color: '#7c3a1e' }}>
            Make a Reservation
          </Link>
        </div>
      </section>

      <footer className="dp-footer">
        <div className="dp-container">
          <p>© 2026 Bella Cucina. All rights reserved. · <em>Demo project by <Link to="/projects">E-N-G-R Web Services</Link></em></p>
        </div>
      </footer>
    </div>
  )
}
