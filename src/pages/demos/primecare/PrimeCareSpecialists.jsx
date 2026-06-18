import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './primeCareNav'
import '../demo.css'
import './primecare.css'

const DOCTOR_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypAbwWOVCGCqobxp6S-_YfE5vTzF9L__tO11c7F7SKUj6z-NGbPnOd2jIZ-8iVuzdoBBgnhG_JF7OHxM1SGlJ-MB63My2bUtx_BaO658lf9-bp8MDJNxntBDRE-HrNQa0c3R5PQVI6fzEJaPbsBt2qlS28xOfJTTfITWhYjjrLVLMaxR0DhH8BG5_bjK_Do_pj4-lsLqw8IWzrsfiY6bd9kstLluuEcLxAkalBEj5OtBHHQi3TFyfxCwItOygii8ZcDq5kFVwzPc'

const specialists = [
  {
    name: 'Dr. Sarah Jenkins',
    specialty: 'Cardiology',
    title: 'MD, FACC - Chief of Cardiology',
    bio: 'Specializes in preventative cardiology and interventional cardiology with over 15 years of clinical practice.',
    education: 'Harvard Medical School',
    languages: 'English, Spanish'
  },
  {
    name: 'Dr. Michael Chang',
    specialty: 'Neurology',
    title: 'MD, Ph.D. - Senior Neurologist',
    bio: 'Dedicated neurologist focusing on neuromuscular disorders, stroke prevention, and cognitive health management.',
    education: 'Johns Hopkins School of Medicine',
    languages: 'English, Mandarin'
  },
  {
    name: 'Dr. Elena Rostova',
    specialty: 'Orthopedics',
    title: 'MD - Orthopedic Surgeon',
    bio: 'Expert in arthroscopic joint surgery, sports injury rehabilitation, and minimally invasive hip/knee replacements.',
    education: 'Stanford University Medical Center',
    languages: 'English, Russian'
  },
  {
    name: 'Dr. David Vance',
    specialty: 'Pediatrics',
    title: 'MD, FAAP - Lead Pediatrician',
    bio: 'Passionate about comprehensive childhood healthcare, developmental tracking, and adolescent wellness coaching.',
    education: 'Yale School of Medicine',
    languages: 'English, French'
  },
  {
    name: 'Dr. Chloe Patel',
    specialty: 'Dermatology',
    title: 'MD, FAAD - Clinical Dermatologist',
    bio: 'Focuses on early detection of skin cancers, eczema treatment, acne therapies, and therapeutic laser applications.',
    education: 'University of Pennsylvania',
    languages: 'English, Gujarati'
  },
  {
    name: 'Dr. Robert Carter',
    specialty: 'Diagnostic Lab',
    title: 'MD - Chief Pathologist',
    bio: 'Manages diagnostic laboratories, ensuring rapid and exceptionally precise analysis for all diagnostic procedures.',
    education: 'Columbia College of Physicians & Surgeons',
    languages: 'English'
  }
]

export default function PrimeCareSpecialists() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')

  const categories = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Diagnostic Lab']

  const filteredSpecialists = selectedSpecialty === 'All'
    ? specialists
    : specialists.filter(s => s.specialty === selectedSpecialty)

  return (
    <div className="demo-project pc">
      <SEO
        title="Meet Our Specialists | PrimeCare Clinic"
        description="Connect with highly certified physicians, specialist doctors, and nurses dedicated to your family's health and wellness."
      />
      <DemoNav brand="PrimeCare" basePath={BASE} links={NAV_LINKS} accentColor="#006bb3" accentText="#fff" />

      {/* Header */}
      <section className="dp-hero" style={{ padding: '60px 0', background: 'linear-gradient(135deg, var(--pc-primary-dark) 0%, var(--pc-primary) 100%)' }}>
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <span className="pc-hero__eyebrow">Medical Team</span>
          <h1 className="dp-section-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: 16 }}>Our Specialists</h1>
          <p className="dp-section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', margin: '0 auto' }}>
            Meet our team of board-certified medical experts committed to delivering the highest standards of healthcare.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="dp-section" style={{ paddingBottom: 0 }}>
        <div className="dp-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 40 }}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`pc-spec-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedSpecialty(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 30,
                  fontSize: 14,
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedSpecialty === cat ? 'var(--pc-primary)' : 'rgba(0,107,179,0.18)',
                  backgroundColor: selectedSpecialty === cat ? 'var(--pc-primary)' : '#fff',
                  color: selectedSpecialty === cat ? '#fff' : '#0d2d4a',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  boxShadow: selectedSpecialty === cat ? '0 4px 12px rgba(0,107,179,0.2)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-grid-3" style={{ gap: 32 }}>
            {filteredSpecialists.map(spec => (
              <div key={spec.name} className="pc-doctor-card">
                <div className="pc-doctor-card__img">
                  <img src={DOCTOR_IMG} alt={spec.name} />
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    padding: '4px 12px',
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: 'rgba(0,107,179,0.9)',
                    color: '#fff',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {spec.specialty}
                  </div>
                </div>
                <div className="pc-doctor-card__body">
                  <h3 className="pc-doctor-card__name">{spec.name}</h3>
                  <div className="pc-doctor-card__specialty">{spec.title}</div>
                  <p className="pc-doctor-card__bio">{spec.bio}</p>
                  
                  <div style={{
                    borderTop: '1px solid rgba(0,107,179,0.08)',
                    paddingTop: 16,
                    marginTop: 16,
                    fontSize: 13,
                    color: '#666'
                  }}>
                    <div style={{ marginBottom: 4 }}>
                      <strong style={{ color: '#0d2d4a' }}>Education: </strong>{spec.education}
                    </div>
                    <div>
                      <strong style={{ color: '#0d2d4a' }}>Languages: </strong>{spec.languages}
                    </div>
                  </div>

                  <Link
                    to={`${BASE}/appointment?doctor=${encodeURIComponent(spec.name)}`}
                    id={`pc-spec-book-${spec.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                    className="dp-btn pc-btn--outline-dark"
                    style={{ width: '100%', textAlign: 'center', marginTop: 24, display: 'block' }}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Have a Specific Question?</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Our healthcare assistants are standing by to connect you with the appropriate specialist.
          </p>
          <a href="tel:+18005550190" id="pc-spec-cta-call" className="dp-btn" style={{ backgroundColor: '#fff', color: '#006bb3', textDecoration: 'none' }}>Call 1-800-555-0190</a>
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 PrimeCare Medical Clinic. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p></div></footer>
    </div>
  )
}
