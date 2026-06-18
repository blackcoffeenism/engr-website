import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './primeCareNav'
import '../demo.css'
import './primecare.css'

const doctors = [
  { name: 'Dr. Sarah Jenkins', specialty: 'Cardiology' },
  { name: 'Dr. Michael Chang', specialty: 'Neurology' },
  { name: 'Dr. Elena Rostova', specialty: 'Orthopedics' },
  { name: 'Dr. David Vance', specialty: 'Pediatrics' },
  { name: 'Dr. Chloe Patel', specialty: 'Dermatology' },
  { name: 'Dr. Robert Carter', specialty: 'Diagnostic Lab' }
]

const specialties = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Diagnostic Lab']

export default function PrimeCareAppointment() {
  const [searchParams] = useSearchParams()
  const initialDoctor = searchParams.get('doctor') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Auto-fill doctor and specialty from URL if present
  useEffect(() => {
    if (initialDoctor) {
      const doc = doctors.find(d => d.name.toLowerCase() === initialDoctor.toLowerCase())
      if (doc) {
        setFormData(prev => ({
          ...prev,
          doctor: doc.name,
          specialty: doc.specialty
        }))
      }
    }
  }, [initialDoctor])

  // Automatically update doctor options when specialty changes
  const handleSpecialtyChange = (e) => {
    const spec = e.target.value
    const matchingDocs = doctors.filter(d => d.specialty === spec)
    setFormData(prev => ({
      ...prev,
      specialty: spec,
      doctor: matchingDocs.length > 0 ? matchingDocs[0].name : ''
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const getConfirmationNumber = () => {
    return 'PC-' + Math.floor(100000 + Math.random() * 900000)
  }

  return (
    <div className="demo-project pc">
      <SEO
        title="Schedule an Appointment | PrimeCare Clinic"
        description="Securely book or request an appointment with our specialists. Input your preferred department, doctor, and date."
      />
      <DemoNav brand="PrimeCare" basePath={BASE} links={NAV_LINKS} accentColor="#006bb3" accentText="#fff" />

      {/* Header */}
      <section className="dp-hero" style={{ padding: '40px 0', background: 'linear-gradient(135deg, var(--pc-primary-dark) 0%, var(--pc-primary) 100%)' }}>
        <div className="dp-container" style={{ textAlign: 'center' }}>
          <h1 className="dp-section-title" style={{ color: '#fff', fontSize: '3rem', marginBottom: 8 }}>Schedule Appointment</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>Secure your slot with our medical specialists in a few simple steps.</p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="dp-section">
        <div className="dp-container">
          {submitted ? (
            <div className="pc-apt-card" style={{ maxWidth: 650, margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'rgba(0,176,156,0.1)',
                color: 'var(--pc-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, fontWeight: 'bold' }}>check</span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--pc-text)', marginBottom: 12 }}>Appointment Confirmed!</h2>
              <p style={{ color: '#666', fontSize: 15, marginBottom: 24 }}>
                Your appointment has been successfully scheduled. A confirmation email and SMS with instructions have been sent to you.
              </p>
              
              <div style={{
                background: 'var(--pc-light)',
                borderRadius: 8,
                padding: 24,
                textAlign: 'left',
                marginBottom: 32,
                border: '1px solid rgba(0,107,179,0.1)'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', fontSize: 14 }}>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Confirmation ID</span>
                    <strong style={{ color: 'var(--pc-text)', fontSize: 15 }}>{getConfirmationNumber()}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Patient Name</span>
                    <strong style={{ color: 'var(--pc-text)', fontSize: 15 }}>{formData.name}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Specialist</span>
                    <strong style={{ color: 'var(--pc-text)', fontSize: 15 }}>{formData.doctor || 'General Practice'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Department</span>
                    <strong style={{ color: 'var(--pc-text)', fontSize: 15 }}>{formData.specialty || 'General'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Date & Time</span>
                    <strong style={{ color: 'var(--pc-text)', fontSize: 15 }}>{formData.date} at {formData.time}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#666', fontSize: 12, display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Status</span>
                    <strong style={{ color: 'var(--pc-accent)', fontSize: 15 }}>Verified & Confirmed</strong>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 13, color: '#666', display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--pc-primary)' }}>info</span>
                <span>Please arrive 15 minutes prior to your appointment time with valid ID and insurance documents.</span>
              </div>

              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link to={BASE} className="dp-btn pc-btn--primary">Return Home</Link>
                <button onClick={() => setSubmitted(false)} id="pc-appointment-reset-btn" className="dp-btn pc-btn--outline-dark">Book Another</button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 48, alignItems: 'start' }}>
              
              {/* Form Card */}
              <div className="pc-apt-card">
                <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--pc-text)', marginBottom: 32, borderBottom: '1px solid rgba(0,107,179,0.08)', paddingBottom: 16 }}>Appointment Details</h2>
                <form onSubmit={handleSubmit} className="dp-form">
                  <div className="dp-form__group">
                    <label className="dp-form__label" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="dp-form__input"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="dp-form__row">
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="dp-form__input"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="dp-form__input"
                        placeholder="e.g. (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="dp-form__row">
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="dp-form__input"
                      />
                    </div>
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="specialty">Specialty / Department</label>
                      <select
                        id="specialty"
                        name="specialty"
                        required
                        value={formData.specialty}
                        onChange={handleSpecialtyChange}
                        className="dp-form__input dp-form__select"
                      >
                        <option value="">Select Specialty</option>
                        {specialties.map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="dp-form__row">
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="doctor">Preferred Doctor</label>
                      <select
                        id="doctor"
                        name="doctor"
                        required
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="dp-form__input dp-form__select"
                      >
                        <option value="">Select Specialist</option>
                        {doctors
                          .filter(d => !formData.specialty || d.specialty === formData.specialty)
                          .map(d => (
                            <option key={d.name} value={d.name}>{d.name} ({d.specialty})</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="dp-form__group">
                      <label className="dp-form__label" htmlFor="date">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="dp-form__input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="dp-form__group">
                    <label className="dp-form__label" htmlFor="time">Preferred Time Slot</label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="dp-form__input dp-form__select"
                    >
                      <option value="">Select Time Slot</option>
                      <option value="09:00 AM">09:00 AM - Morning</option>
                      <option value="10:30 AM">10:30 AM - Morning</option>
                      <option value="11:30 AM">11:30 AM - Morning</option>
                      <option value="01:30 PM">01:30 PM - Afternoon</option>
                      <option value="03:00 PM">03:00 PM - Afternoon</option>
                      <option value="04:30 PM">04:30 PM - Late Afternoon</option>
                    </select>
                  </div>

                  <div className="dp-form__group" style={{ marginBottom: 32 }}>
                    <label className="dp-form__label" htmlFor="reason">Reason for Visit / Symptoms</label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows="3"
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="dp-form__input dp-form__textarea"
                      placeholder="Briefly describe your symptoms or medical concern..."
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="pc-appointment-submit-btn"
                    disabled={loading}
                    className="dp-btn pc-btn--primary"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                  >
                    {loading ? (
                      <>
                        <span style={{
                          width: 16,
                          height: 16,
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#fff',
                          borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.8s linear infinite'
                        }} />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>health_and_safety</span>
                        <span>Confirm Appointment</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar Clinic Info */}
              <div>
                <div style={{
                  background: 'var(--pc-light)',
                  borderRadius: 12,
                  padding: 32,
                  border: '1px solid rgba(0,107,179,0.1)',
                  marginBottom: 32
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--pc-text)', marginBottom: 20 }}>Booking Summary</h3>
                  {formData.doctor ? (
                    <div style={{ marginBottom: 20, display: 'flex', gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--pc-primary)' }}>medical_services</span>
                      <div>
                        <span style={{ fontSize: 12, color: '#666', display: 'block' }}>Selected Doctor</span>
                        <strong style={{ color: 'var(--pc-text)', fontSize: 14 }}>{formData.doctor}</strong>
                        <span style={{ fontSize: 12, color: 'var(--pc-primary)', display: 'block', fontWeight: 600 }}>{formData.specialty} Specialist</span>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: 13, color: '#666', fontStyle: 'italic', marginBottom: 20 }}>No specialist selected yet.</p>
                  )}

                  {formData.date && (
                    <div style={{ marginBottom: 20, display: 'flex', gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--pc-primary)' }}>calendar_today</span>
                      <div>
                        <span style={{ fontSize: 12, color: '#666', display: 'block' }}>Appointment Schedule</span>
                        <strong style={{ color: 'var(--pc-text)', fontSize: 14 }}>{formData.date} {formData.time ? `at ${formData.time}` : ''}</strong>
                      </div>
                    </div>
                  )}

                  <hr style={{ border: 0, borderTop: '1px solid rgba(0,107,179,0.08)', margin: '20px 0' }} />

                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--pc-text)', marginBottom: 16 }}>Clinical Hours</h3>
                  <div style={{ fontSize: 13, color: '#44474d', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Monday - Friday:</span>
                      <strong>8:00 AM - 6:00 PM</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Saturday:</span>
                      <strong>9:00 AM - 2:00 PM</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Sunday:</span>
                      <strong style={{ color: 'var(--pc-accent)' }}>Emergencies Only</strong>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 32,
                  border: '1px solid rgba(0,107,179,0.1)',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--pc-primary)', fontSize: 24 }}>support_agent</span>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--pc-text)', marginBottom: 4 }}>Need Help Booking?</h4>
                    <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5, marginBottom: 8 }}>Contact our helpdesk for support with scheduling or clinical information.</p>
                    <a href="tel:+18005550190" style={{ fontSize: 14, fontWeight: 700, color: 'var(--pc-primary)', textDecoration: 'none' }}>1-800-555-0190</a>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 PrimeCare Medical Clinic. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p></div></footer>

      {/* Embedded CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
