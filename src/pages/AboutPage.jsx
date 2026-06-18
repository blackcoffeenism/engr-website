import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './AboutPage.css'

const values = [
  {
    icon: 'storefront',
    title: 'Business-Focused',
    desc: 'We align our technical execution with your specific operational goals, prioritizing conversions over mere aesthetics.',
  },
  {
    icon: 'devices',
    title: 'Modern Stacks',
    desc: 'Utilizing the latest frameworks and Jamstack architectures to ensure your site is fast, secure, and scalable.',
  },
  {
    icon: 'responsive_layout',
    title: 'Fully Responsive',
    desc: 'Pixel-perfect execution across all devices, ensuring your brand looks authoritative on desktop and mobile.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Support',
    desc: 'Ongoing maintenance and strategic support to keep your digital infrastructure operating at peak performance.',
  },
]

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const form = e.target
    const formData = new FormData(form)

    formData.append('access_key', 'be26fb14-6c03-42fb-8c9b-453be1c8bc94')
    formData.append('subject', 'New Website Audit Request (About Page)')
    formData.append('from_name', 'E-N-G-R About Page Audit')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        form.reset()
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="about">
      <SEO
        title="About Us | E-N-G-R Web Services"
        description="Empowering small and medium enterprises with enterprise-grade web technology. Learn about our strategy-first approach and value."
      />
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-badge">Our Story</span>
          <h1 className="about-hero__title">
            Helping Local Businesses Build Their Digital Presence
          </h1>
          <p className="about-hero__subtitle">
            At E-N-G-R Web Services, we bridge the gap between world-class engineering and local business strategy. We don't just build websites; we engineer digital foundations that drive real growth.
          </p>
        </div>
        <div className="about-hero__bg-accent" />
      </section>

      {/* Mission & Approach Bento Grid */}
      <section className="mission-section">
        <div className="container">
          <div className="bento-grid">
            {/* Mission — large card */}
            <div className="bento-card bento-card--large hover-lift ambient-shadow">
              <div className="bento-card__icon-wrap">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h2 className="bento-card__title">Our Mission</h2>
              <p className="bento-card__body">
                To empower small and medium-sized enterprises with enterprise-grade web technology. We focus on creating a professional online presence that acts as a 24/7 advocate for your business, ensuring that local craftsmanship meets global digital standards. We believe every local business deserves a website that performs flawlessly.
              </p>
            </div>

            {/* Approach — dark card */}
            <div className="bento-card bento-card--dark hover-lift">
              <div className="bento-card__icon-wrap bento-card__icon-wrap--white">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h2 className="bento-card__title">Our Approach</h2>
              <p className="bento-card__body bento-card__body--light">
                A holistic methodology blending aesthetic design, robust technology, and deep business understanding.
              </p>
              <ul className="bento-checklist">
                {['Strategy First', 'Modern Stacks', 'Measurable ROI'].map((item) => (
                  <li key={item} className="bento-checklist__item">
                    <span className="material-symbols-outlined">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose E-N-G-R */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Value</span>
            <h2 className="section-title">Why Choose E-N-G-R</h2>
            <p className="section-subtitle">The engineering precision your business needs to scale effectively.</p>
          </div>
          <div className="why-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="why-card hover-lift ambient-shadow">
                <span className="material-symbols-outlined why-card__icon">{icon}</span>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="about-audit" id="audit">
        <div className="container">
          <div className="audit-card">
            <div className="audit-card__text">
              <h2 className="audit-card__title">Request Free Website Audit</h2>
              <p className="audit-card__subtitle">Let's analyze your current presence and engineer a better path forward.</p>
            </div>
            {submitted ? (
              <div className="contact-success" style={{ textAlign: 'center', padding: '24px 0' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'var(--color-primary)', marginBottom: 16, display: 'block' }}>check_circle</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 12 }}>Audit Request Sent!</h3>
                <p style={{ fontSize: 15, color: 'var(--color-on-surface-variant)', lineHeight: 1.6, maxWidth: 460, margin: '0 auto' }}>
                  Thank you for requesting a free website audit. Our strategy team will review your online presence and get in touch at your email within 24 hours.
                </p>
              </div>
            ) : (
              <form className="audit-form" onSubmit={handleSubmit}>
                <div className="audit-form__row">
                  <div className="form-group">
                    <label htmlFor="audit-name" className="form-label">Full Name</label>
                    <input id="audit-name" name="fullName" type="text" placeholder="Jane Doe" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="audit-email" className="form-label">Business Email</label>
                    <input id="audit-email" name="email" type="email" placeholder="jane@company.com" required className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="audit-url" className="form-label">Current Website URL (Optional)</label>
                  <input id="audit-url" name="websiteUrl" type="url" placeholder="https://yourbusiness.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="audit-message" className="form-label">Briefly describe your goals</label>
                  <textarea id="audit-message" name="message" rows="4" placeholder="We are looking to modernize our online presence..." className="form-input form-textarea" required />
                </div>
                {errorMsg && (
                  <div style={{ color: '#ef4444', fontSize: 14, marginBottom: 12, textAlign: 'left' }}>
                    {errorMsg}
                  </div>
                )}
                <button type="submit" id="about-audit-submit-btn" disabled={loading} className="btn btn--primary">
                  {loading ? 'Requesting...' : 'Request Audit'}
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
