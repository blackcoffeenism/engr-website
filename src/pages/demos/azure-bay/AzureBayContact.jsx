import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

export default function AzureBayContact() {
  return (
    <div className="demo-project ab">
      <SEO
        title="Contact & Location | Azure Bay Resort"
        description="Find resort coordinates, reservation emails, local contact numbers, and maps to guide your arrival at Azure Bay."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />

      <section className="dp-section" style={{ paddingTop: 80 }}>
        <div className="dp-container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(13,79,139,0.08)', color: '#0d4f8b', border: '1px solid rgba(13,79,139,0.18)', padding: '4px 12px', borderRadius: 2, marginBottom: 16 }}>Get In Touch</span>
            <h1 style={{ fontSize: 52, fontWeight: 700, color: '#0d4f8b', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.1 }}>We'd Love to Hear From You</h1>
            <p style={{ fontSize: 18, color: '#44474d', lineHeight: 1.7 }}>Our guest relations team is available 24/7 to assist with reservations, special requests, or any questions about your stay.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              {[
                { icon: 'location_on', title: 'Resort Address', value: '1 Coastal Boulevard\nAzure Bay, CA 90210\nUnited States' },
                { icon: 'call', title: 'Reservations', value: '+1 (800) 292-9374\nAvailable 24 hours, 7 days' },
                { icon: 'mail', title: 'Email', value: 'reservations@azurebay.com\nguests@azurebay.com' },
                { icon: 'schedule', title: 'Check-in / Check-out', value: 'Check-in: 3:00 PM\nCheck-out: 11:00 AM\nEarly/late available on request' },
              ].map(({ icon, title, value }) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(13,79,139,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: '#0d4f8b', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#44474d', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 16, color: '#191c1e', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid rgba(13,79,139,0.1)', borderRadius: 12, padding: 48, boxShadow: '0 8px 40px rgba(13,79,139,0.06)' }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1e3a5f', marginBottom: 32 }}>Send Us a Message</h2>
              <form className="dp-form">
                <div className="dp-form__row">
                  <div className="dp-form__group">
                    <label htmlFor="ab-first-name" className="dp-form__label">First Name</label>
                    <input id="ab-first-name" type="text" placeholder="Jane" className="dp-form__input" />
                  </div>
                  <div className="dp-form__group">
                    <label htmlFor="ab-last-name" className="dp-form__label">Last Name</label>
                    <input id="ab-last-name" type="text" placeholder="Doe" className="dp-form__input" />
                  </div>
                </div>
                <div className="dp-form__group">
                  <label htmlFor="ab-email" className="dp-form__label">Email Address</label>
                  <input id="ab-email" type="email" placeholder="jane@email.com" className="dp-form__input" />
                </div>
                <div className="dp-form__group">
                  <label htmlFor="ab-enquiry-type" className="dp-form__label">Enquiry Type</label>
                  <select id="ab-enquiry-type" className="dp-form__input dp-form__select">
                    <option>Reservation Enquiry</option>
                    <option>Special Occasion</option>
                    <option>Corporate & Events</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="dp-form__group">
                  <label htmlFor="ab-message" className="dp-form__label">Message</label>
                  <textarea id="ab-message" rows="5" placeholder="How can we help you?" className="dp-form__input dp-form__textarea" />
                </div>
                <button type="submit" id="ab-contact-submit-btn" className="dp-btn ab-btn--primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="dp-footer"><div className="dp-container"><p>© 2026 Azure Bay Resort · <em>Demo by <Link to="/projects">E-N-G-R</Link></em></p></div></footer>
    </div>
  )
}
