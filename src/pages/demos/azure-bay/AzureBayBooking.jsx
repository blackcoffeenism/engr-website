import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

const IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc'

export default function AzureBayBooking() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="demo-project ab">
      <SEO
        title="Book Your Stay | Azure Bay Resort"
        description="Reserve your luxury room or suite at Azure Bay Resort. Check availability and plan your tropical beachfront getaway."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />

      <div className="dp-page-hero" style={{ height: 260 }}>
        <img src={IMG} alt="Azure Bay booking" className="dp-page-hero__img" />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Book Your Stay</h1>
          <p className="dp-page-hero__subtitle">Secure your Azure Bay experience</p>
        </div>
      </div>

      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
            {/* Summary */}
            <div style={{ position: 'sticky', top: 160 }}>
              <div style={{ background: '#f0f6ff', border: '1px solid rgba(13,79,139,0.12)', borderRadius: 12, padding: 32, marginBottom: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0d4f8b', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Booking Summary</h3>
                <div style={{ fontSize: 14, color: '#44474d', lineHeight: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Room Type</span><strong>Ocean View Room</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Check-in</span><strong>–</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Check-out</span><strong>–</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Guests</span><strong>2 Adults</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(13,79,139,0.12)', marginTop: 12, paddingTop: 12 }}><span>Rate / night</span><strong style={{ color: '#0d4f8b' }}>$380</strong></div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#44474d', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Free cancellation up to 48 hours before check-in', 'Complimentary breakfast for stays of 3+ nights', 'Best rate guaranteed'].map(b => (
                  <div key={b} style={{ display: 'flex', gap: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#0d4f8b', flexShrink: 0 }}>check_circle</span>{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid rgba(13,79,139,0.1)', borderRadius: 12, padding: 48, boxShadow: '0 8px 40px rgba(13,79,139,0.06)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 64, color: '#0d4f8b' }}>check_circle</span>
                  <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0d4f8b', margin: '16px 0 12px' }}>Booking Confirmed!</h2>
                  <p style={{ color: '#44474d', lineHeight: 1.7, maxWidth: 380, margin: '0 auto 32px' }}>
                    Your reservation is confirmed. A confirmation email has been sent with your booking details. We look forward to welcoming you.
                  </p>
                  <Link to={BASE} className="dp-btn ab-btn--primary">Back to Resort</Link>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1e3a5f', marginBottom: 32 }}>Guest Details</h2>
                  <form className="dp-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-first-name" className="dp-form__label">First Name</label>
                        <input id="ab-book-first-name" type="text" required placeholder="Jane" className="dp-form__input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-last-name" className="dp-form__label">Last Name</label>
                        <input id="ab-book-last-name" type="text" required placeholder="Doe" className="dp-form__input" />
                      </div>
                    </div>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-email" className="dp-form__label">Email</label>
                        <input id="ab-book-email" type="email" required placeholder="jane@email.com" className="dp-form__input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-phone" className="dp-form__label">Phone</label>
                        <input id="ab-book-phone" type="tel" placeholder="+1 (555) 000-0000" className="dp-form__input" />
                      </div>
                    </div>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-checkin" className="dp-form__label">Check-In Date</label>
                        <input id="ab-book-checkin" type="date" required className="dp-form__input" />
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-checkout" className="dp-form__label">Check-Out Date</label>
                        <input id="ab-book-checkout" type="date" required className="dp-form__input" />
                      </div>
                    </div>
                    <div className="dp-form__row">
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-room" className="dp-form__label">Room Type</label>
                        <select id="ab-book-room" className="dp-form__input dp-form__select">
                          <option>Garden View Room — $280/night</option>
                          <option>Ocean View Room — $380/night</option>
                          <option>Azure Bay Suite — $680/night</option>
                          <option>Penthouse Suite — $1,100/night</option>
                          <option>Beachfront Villa — $1,400/night</option>
                        </select>
                      </div>
                      <div className="dp-form__group">
                        <label htmlFor="ab-book-guests" className="dp-form__label">Number of Guests</label>
                        <select id="ab-book-guests" className="dp-form__input dp-form__select">
                          <option>1 Adult</option>
                          <option defaultValue>2 Adults</option>
                          <option>2 Adults + 1 Child</option>
                          <option>2 Adults + 2 Children</option>
                          <option>4 Adults</option>
                        </select>
                      </div>
                    </div>
                    <div className="dp-form__group">
                      <label htmlFor="ab-book-requests" className="dp-form__label">Special Requests</label>
                      <textarea id="ab-book-requests" rows="3" className="dp-form__input dp-form__textarea" placeholder="Dietary requirements, anniversary celebrations, accessibility needs..." />
                    </div>
                    <button type="submit" id="ab-book-submit-btn" className="dp-btn ab-btn--primary" style={{ width: '100%', justifyContent: 'center' }}>Confirm Booking</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <footer className="dp-footer"><div className="dp-container"><p>© 2026 Azure Bay Resort · <em>Demo by <Link to="/projects">E-N-G-R</Link></em></p></div></footer>
    </div>
  )
}
