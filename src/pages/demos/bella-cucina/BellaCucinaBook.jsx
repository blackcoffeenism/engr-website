import { useState } from 'react'
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

export default function BellaCucinaBook() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="demo-project bc">
      <SEO
        title="Reserve a Table | Bella Cucina Restaurant"
        description="Make a table reservation online. Plan your fine dining experience through our seamless digital reservation system."
      />
      <DemoNav brand="Bella Cucina" basePath={BASE} links={NAV_LINKS} accentColor="#7c3a1e" accentText="#fff" />

      <div className="dp-page-hero" style={{ height: 280 }}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMhRQtLu6fcgP7CZ8a2GGbB0-2E0-fyV3o50b5vHPuNfHbmj4KMk04F0dWgKneuZeS-AlJN3Y7q9AxkkMmscr95-4Hr5_aDN0HQB2JNRKCRywpUv7kke7IQBAKsvBT4-twwr8-Fdj2UItxfFAP0NrqsU5JhJc8qZMclkHDfPXoIqqh067Ov-R8PekVH3pe-6WmClMdQCUjfvro31IjSDTOty9BE5zHWVt0iFTlz6eOvbkrZ8OIUmcOVRK6CkHdnT5M6zMzqKNF-8"
          alt="Bella Cucina table"
          className="dp-page-hero__img"
        />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Reserve a Table</h1>
          <p className="dp-page-hero__subtitle">Book your dining experience at Bella Cucina</p>
        </div>
      </div>

      <section className="dp-section">
        <div className="dp-container">
          <div className="bc-reservation-wrap">
            {/* Info */}
            <div className="bc-reservation-info">
              <div>
                <div className="bc-info-block__title">Opening Hours</div>
                <div className="bc-info-block__value">
                  Monday – Thursday: 12:00 – 22:30<br />
                  Friday – Saturday: 12:00 – 23:30<br />
                  Sunday: 12:00 – 21:30
                </div>
              </div>
              <div>
                <div className="bc-info-block__title">Location</div>
                <div className="bc-info-block__value">
                  14 Via della Vigna Nuova<br />
                  Ground Floor, The Grand Palazetto<br />
                  New York, NY 10013
                </div>
              </div>
              <div>
                <div className="bc-info-block__title">Contact</div>
                <div className="bc-info-block__value">
                  +1 (212) 555-0174<br />
                  reservations@bellacucina.com
                </div>
              </div>
              <div>
                <div className="bc-info-block__title">Private Dining</div>
                <div className="bc-info-block__value">
                  Our private dining room accommodates up to 20 guests. For groups of 8 or more, please contact us directly.
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bc-reservation-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 56, color: '#7c3a1e' }}>check_circle</span>
                  <h2 style={{ fontSize: 28, fontWeight: 700, margin: '16px 0 12px', color: '#1a0f0a' }}>Reservation Confirmed!</h2>
                  <p style={{ fontSize: 16, color: '#6b5c52', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>
                    Thank you for your reservation. We'll send a confirmation to your email shortly. We look forward to welcoming you.
                  </p>
                  <button id="bc-book-reset-btn" className="dp-btn bc-btn--primary" onClick={() => setSubmitted(false)}>Make Another Reservation</button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a0f0a', marginBottom: 32 }}>Reservation Details</h2>
                  <form className="dp-form" onSubmit={handleSubmit}>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="bc-first-name" className="dp-form__label">First Name</label>
                        <input id="bc-first-name" type="text" placeholder="Jane" required className="dp-form__input bc-form-input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="bc-last-name" className="dp-form__label">Last Name</label>
                        <input id="bc-last-name" type="text" placeholder="Doe" required className="dp-form__input bc-form-input" />
                      </div>
                    </div>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="bc-email" className="dp-form__label">Email Address</label>
                        <input id="bc-email" type="email" placeholder="jane@email.com" required className="dp-form__input bc-form-input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="bc-phone" className="dp-form__label">Phone Number</label>
                        <input id="bc-phone" type="tel" placeholder="+1 (555) 000-0000" className="dp-form__input bc-form-input" />
                      </div>
                    </div>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="bc-date" className="dp-form__label">Date</label>
                        <input id="bc-date" type="date" required className="dp-form__input bc-form-input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="bc-time" className="dp-form__label">Time</label>
                        <select id="bc-time" className="dp-form__input dp-form__select bc-form-input">
                          <option>12:00 PM</option>
                          <option>12:30 PM</option>
                          <option>1:00 PM</option>
                          <option>6:00 PM</option>
                          <option>6:30 PM</option>
                          <option>7:00 PM</option>
                          <option>7:30 PM</option>
                          <option>8:00 PM</option>
                          <option>8:30 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="dp-form__group">
                      <label htmlFor="bc-guests" className="dp-form__label">Number of Guests</label>
                      <select id="bc-guests" className="dp-form__input dp-form__select bc-form-input">
                        {[1,2,3,4,5,6,7,'8+'].map(n => <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                    <div className="dp-form__group">
                      <label htmlFor="bc-requests" className="dp-form__label">Special Requests</label>
                      <textarea
                        id="bc-requests"
                        className="dp-form__input dp-form__textarea bc-form-input"
                        placeholder="Allergies, dietary requirements, special occasions..."
                        rows="3"
                      />
                    </div>
                    <button type="submit" id="bc-book-submit-btn" className="dp-btn bc-btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Confirm Reservation
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="dp-footer">
        <div className="dp-container">
          <p>© 2026 Bella Cucina. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p>
        </div>
      </footer>
    </div>
  )
}
