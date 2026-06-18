import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './primeCareNav'
import '../demo.css'
import './primecare.css'

const CLINIC_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypAbwWOVCGCqobxp6S-_YfE5vTzF9L__tO11c7F7SKUj6z-NGbPnOd2jIZ-8iVuzdoBBgnhG_JF7OHxM1SGlJ-MB63My2bUtx_BaO658lf9-bp8MDJNxntBDRE-HrNQa0c3R5PQVI6fzEJaPbsBt2qlS28xOfJTTfITWhYjjrLVLMaxR0DhH8BG5_bjK_Do_pj4-lsLqw8IWzrsfiY6bd9kstLluuEcLxAkalBEj5OtBHHQi3TFyfxCwItOygii8ZcDq5kFVwzPc'

const services = [
  { icon: 'cardiology', title: 'Cardiology', desc: 'Comprehensive heart care from preventive screening to advanced cardiac intervention.' },
  { icon: 'neurology', title: 'Neurology', desc: 'Expert diagnosis and treatment of neurological disorders and brain health.' },
  { icon: 'orthopedics', title: 'Orthopedics', desc: 'Advanced joint, bone, and sports medicine with minimally invasive options.' },
  { icon: 'child_care', title: 'Pediatrics', desc: 'Complete healthcare for infants, children, and adolescents in a caring environment.' },
  { icon: 'dermatology', title: 'Dermatology', desc: 'Diagnosis and treatment of skin conditions, from eczema to cosmetic concerns.' },
  { icon: 'lab_research', title: 'Diagnostic Lab', desc: 'On-site diagnostic laboratory with results in 24 hours for most tests.' },
]

export default function PrimeCareHome() {
  return (
    <div className="demo-project pc">
      <SEO
        title="PrimeCare Medical Clinic | Modern Healthcare Portal Concept"
        description="Secure, accessible, and patient-focused healthcare portal. Book medical appointments and consult expert specialists online."
      />
      <DemoNav brand="PrimeCare" basePath={BASE} links={NAV_LINKS} accentColor="#006bb3" accentText="#fff" />

      {/* Hero */}
      <section className="pc-hero">
        <div className="dp-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div className="pc-hero__content">
              <span className="pc-hero__eyebrow">Modern Medical Clinic</span>
              <h1 className="pc-hero__title">Your Health, Our Priority</h1>
              <p className="pc-hero__subtitle">
                PrimeCare Medical Clinic provides comprehensive, patient-centred healthcare with a team of board-certified specialists and state-of-the-art technology.
              </p>
              <div className="dp-btn-group">
                <Link to={`${BASE}/appointment`} id="pc-hero-book-btn" className="dp-btn pc-btn--primary">Book Appointment</Link>
                <Link to={`${BASE}/services`} id="pc-hero-services-btn" className="dp-btn pc-btn--outline">Our Services</Link>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 440, boxShadow: '0 24px 60px rgba(0,0,0,0.2)' }}>
              <img src={CLINIC_IMG} alt="PrimeCare clinic interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pc-stats-bar">
        <div className="dp-stats dp-container">
          {[['20+', 'Specialists'], ['15,000+', 'Patients Served'], ['98%', 'Patient Satisfaction'], ['24/7', 'Emergency Care']].map(([v,l]) => (
            <div key={l} className="dp-stat">
              <span className="dp-stat__value">{v}</span>
              <span className="dp-stat__label">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="dp-section dp-section--alt">
        <div className="dp-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(0,107,179,0.08)', color: '#006bb3', border: '1px solid rgba(0,107,179,0.18)', padding: '4px 12px', borderRadius: 2, marginBottom: 16 }}>Medical Specialities</span>
            <h2 className="dp-section-title" style={{ color: '#0d2d4a' }}>Comprehensive Medical Services</h2>
            <p className="dp-section-subtitle" style={{ margin: '0 auto' }}>From preventive care to specialised treatment, we offer a complete spectrum of medical services under one roof.</p>
          </div>
          <div className="dp-grid-3">
            {services.map(s => (
              <div key={s.title} className="pc-service-card">
                <div className="pc-service-card__icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{s.icon}</span>
                </div>
                <h3 className="pc-service-card__title">{s.title}</h3>
                <p className="pc-service-card__desc">{s.desc}</p>
                <Link to={`${BASE}/services`} id={`pc-home-service-learn-${s.title.toLowerCase().replace(/\s+/g, '-')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006bb3', marginTop: 16, textDecoration: 'none', transition: 'gap 0.2s' }}>
                  Learn More <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', height: 480 }}>
              <img src={CLINIC_IMG} alt="Doctor with patient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(0,107,179,0.08)', color: '#006bb3', border: '1px solid rgba(0,107,179,0.18)', padding: '4px 12px', borderRadius: 2, marginBottom: 16 }}>Why PrimeCare</span>
              <h2 style={{ fontSize: 40, fontWeight: 700, color: '#0d2d4a', marginBottom: 24, lineHeight: 1.2 }}>Patient-First Healthcare</h2>
              {[
                { icon: 'verified', title: 'Board-Certified Specialists', desc: 'All our physicians are board-certified and regularly updated on the latest medical advances.' },
                { icon: 'schedule', title: 'Same-Day Appointments', desc: 'We value your time. Most patients are seen within 24 hours of booking.' },
                { icon: 'science', title: 'On-Site Diagnostics', desc: 'Integrated lab and imaging services for faster, more accurate diagnoses.' },
                { icon: 'health_and_safety', title: 'Preventive Focus', desc: 'We emphasize wellness programs and early detection to keep you healthier, longer.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(0,107,179,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#006bb3' }}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: '#0d2d4a', marginBottom: 4 }}>{title}</h4>
                    <p style={{ fontSize: 14, color: '#44474d', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
              <Link to={`${BASE}/appointment`} id="pc-home-why-appointment-btn" className="dp-btn pc-btn--primary" style={{ marginTop: 8 }}>Book an Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Your Health Starts Here</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>Book an appointment today and take the first step toward better health with our experienced team.</p>
          <Link to={`${BASE}/appointment`} id="pc-home-bottom-cta-btn" className="dp-btn" style={{ backgroundColor: '#fff', color: '#006bb3' }}>Schedule Your Appointment</Link>
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 PrimeCare Medical Clinic. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p></div></footer>
    </div>
  )
}
