import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './primeCareNav'
import '../demo.css'
import './primecare.css'

const SERVICES_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypAbwWOVCGCqobxp6S-_YfE5vTzF9L__tO11c7F7SKUj6z-NGbPnOd2jIZ-8iVuzdoBBgnhG_JF7OHxM1SGlJ-MB63My2bUtx_BaO658lf9-bp8MDJNxntBDRE-HrNQa0c3R5PQVI6fzEJaPbsBt2qlS28xOfJTTfITWhYjjrLVLMaxR0DhH8BG5_bjK_Do_pj4-lsLqw8IWzrsfiY6bd9kstLluuEcLxAkalBEj5OtBHHQi3TFyfxCwItOygii8ZcDq5kFVwzPc'

const departments = [
  {
    icon: 'cardiology',
    title: 'Cardiology Department',
    desc: 'Comprehensive cardiovascular care covering prevention, diagnosis, and treatment of heart conditions.',
    details: ['Electrocardiogram (ECG)', 'Echocardiogram', 'Stress Testing', '24-hour Holter Monitoring', 'Hypertension Management']
  },
  {
    icon: 'neurology',
    title: 'Neurology & Brain Health',
    desc: 'Specialized diagnosis and therapy for complex conditions affecting the nervous system, brain, and spinal cord.',
    details: ['EEG & Sleep Studies', 'Migraine & Headache Clinic', 'Stroke Prevention', 'Neuropathy Treatment', 'Cognitive Assessment']
  },
  {
    icon: 'orthopedics',
    title: 'Orthopedic Surgery & Joints',
    desc: 'Advanced care for bone, joint, ligament, and muscle disorders with an emphasis on joint preservation.',
    details: ['Joint Replacement', 'Sports Medicine', 'Arthroplasty', 'Fracture Care', 'Physical Rehabilitation']
  },
  {
    icon: 'child_care',
    title: 'Pediatric Care',
    desc: 'Dedicated care from birth through adolescence, ensuring healthy development and compassionate treatment.',
    details: ['Well-Child Checkups', 'Immunizations', 'Developmental Screening', 'Pediatric Illness Treatment', 'Growth Monitoring']
  },
  {
    icon: 'dermatology',
    title: 'Dermatology & Skin Center',
    desc: 'Expert treatment for all hair, skin, and nail conditions, ranging from chronic acne to advanced skin cancer screening.',
    details: ['Skin Cancer Screening', 'Acne & Rosacea Treatment', 'Eczema & Psoriasis Care', 'Laser & Aesthetic Therapy', 'Biopsy Services']
  },
  {
    icon: 'lab_research',
    title: 'Diagnostic Lab & Imaging',
    desc: 'State-of-the-art laboratory and diagnostic imaging services to support accurate medical decision making.',
    details: ['Comprehensive Blood Panels', 'Digital X-Rays', 'Ultrasound Imaging', 'Rapid Testing Center', 'Urinalysis & Cultures']
  }
]

export default function PrimeCareServices() {
  return (
    <div className="demo-project pc">
      <SEO
        title="Our Medical Services | PrimeCare Clinic"
        description="Explore the comprehensive medical services offered by PrimeCare, including general practice, pediatrics, cardiology, and diagnostics."
      />
      <DemoNav brand="PrimeCare" basePath={BASE} links={NAV_LINKS} accentColor="#006bb3" accentText="#fff" />

      {/* Page Header */}
      <section className="dp-hero" style={{ padding: '60px 0', background: 'linear-gradient(135deg, var(--pc-primary-dark) 0%, var(--pc-primary) 100%)' }}>
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <span className="pc-hero__eyebrow">Medical Departments</span>
          <h1 className="dp-section-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: 16 }}>Our Services</h1>
          <p className="dp-section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', margin: '0 auto' }}>
            We provide a wide range of medical specialties and advanced clinical programs designed to meet your family's healthcare needs.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-grid-3" style={{ gap: 32 }}>
            {departments.map((dept) => (
              <div key={dept.title} className="pc-service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="pc-service-card__icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{dept.icon}</span>
                </div>
                <h3 className="pc-service-card__title" style={{ fontSize: 22 }}>{dept.title}</h3>
                <p className="pc-service-card__desc" style={{ marginBottom: 20 }}>{dept.desc}</p>
                <div style={{ marginTop: 'auto' }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: '#0d2d4a', marginBottom: 10, letterSpacing: '0.05em' }}>Key Procedures:</h4>
                  <ul style={{ paddingLeft: 18, listStyleType: 'disc', margin: 0, fontSize: 13, color: '#44474d', lineHeight: 1.6 }}>
                    {dept.details.map((d, index) => (
                      <li key={index} style={{ marginBottom: 4 }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Prevention Banner */}
      <section className="dp-section dp-section--alt">
        <div className="dp-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(0,107,179,0.08)', color: '#006bb3', border: '1px solid rgba(0,107,179,0.18)', padding: '4px 12px', borderRadius: 2, marginBottom: 16 }}>Prevention & Wellness</span>
              <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0d2d4a', marginBottom: 20 }}>Annual Health Checkup Plans</h2>
              <p style={{ fontSize: 15, color: '#44474d', lineHeight: 1.7, marginBottom: 24 }}>
                Taking control of your health begins with proactive screening. We offer curated annual health checkup packages tailored to different age groups and lifestyles.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                <div style={{ padding: 16, background: '#fff', border: '1px solid rgba(0,107,179,0.1)', borderRadius: 8 }}>
                  <h4 style={{ fontWeight: 700, color: '#0d2d4a', marginBottom: 4 }}>Basic Health Assessment</h4>
                  <p style={{ fontSize: 12, color: '#666' }}>Includes physical examination, complete blood counts, and metabolic panel.</p>
                </div>
                <div style={{ padding: 16, background: '#fff', border: '1px solid rgba(0,107,179,0.1)', borderRadius: 8 }}>
                  <h4 style={{ fontWeight: 700, color: '#0d2d4a', marginBottom: 4 }}>Executive Cardiac Panel</h4>
                  <p style={{ fontSize: 12, color: '#666' }}>Full screening including stress test, lipid panel, and cardiac consultation.</p>
                </div>
              </div>
              <Link to={`${BASE}/appointment`} id="pc-services-checkup-btn" className="dp-btn pc-btn--primary">Schedule a Checkup</Link>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, boxShadow: '0 20px 48px rgba(0,0,0,0.15)' }}>
              <img src={SERVICES_IMG} alt="Doctor consulting patient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta dp-section">
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Need Specialized Medical Attention?</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Our scheduling desk is open 24/7. Book a slot with one of our specialized physicians today.
          </p>
          <Link to={`${BASE}/appointment`} id="pc-services-book-btn" className="dp-btn" style={{ backgroundColor: '#fff', color: '#006bb3' }}>Book Appointment Online</Link>
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 PrimeCare Medical Clinic. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p></div></footer>
    </div>
  )
}
