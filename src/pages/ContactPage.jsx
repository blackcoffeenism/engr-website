import { useState } from 'react'
import SEO from '../components/SEO'
import './ContactPage.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const form = e.target
    const formData = new FormData(form)

    // To activate, replace YOUR_WEB3FORMS_ACCESS_KEY with your free key from https://web3forms.com
    formData.append('access_key', 'be26fb14-6c03-42fb-8c9b-453be1c8bc94')
    formData.append('subject', 'New Website Audit Request from E-N-G-R')
    formData.append('from_name', 'E-N-G-R Website Audit')

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
    <div className="contact">
      <SEO
        title="Contact Us | E-N-G-R Web Services"
        description="Get in touch with E-N-G-R Web Services for a free website audit. Partner with us to design and develop your brand's digital presence."
      />
      {/* Header */}
      <section className="contact-header container">
        <h1 className="contact-header__title">Let's Build Your Digital Presence</h1>
        <p className="contact-header__subtitle">
          Partner with us to engineer a digital platform that reflects the caliber of your enterprise. Tell us about your objectives, and our strategy team will be in touch promptly.
        </p>
      </section>

      {/* Main Grid */}
      <section className="contact-grid container">
        {/* Left: Info */}
        <div className="contact-info">
          <div className="contact-info__block">
            <h2 className="contact-info__heading">Direct Channels</h2>
            <div className="contact-info__item">
              <span className="material-symbols-outlined contact-info__icon" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              <div>
                <span className="contact-info__label">Email Us</span>
                <a href="mailto:delimagerald9@gmail.com" className="contact-info__value">delimagerald9@gmail.com</a>
              </div>
            </div>
            <div className="contact-info__item">
              <span className="material-symbols-outlined contact-info__icon" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              <div>
                <span className="contact-info__label">Call Us</span>
                <a href="tel:09927617815" className="contact-info__value">09927617815</a>
              </div>
            </div>
          </div>

          <div className="contact-info__block">
            <h2 className="contact-info__heading">Office Location</h2>
            <div className="contact-info__item">
              <span className="material-symbols-outlined contact-info__icon" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <span className="contact-info__label">Location</span>
                <address className="contact-info__address">
                  Alfonso, Cavite<br />
                  Philippines
                </address>
              </div>
            </div>
          </div>

          <div className="contact-info__block">
            <h2 className="contact-info__heading">Response Time</h2>
            <div className="response-badge">
              <span className="material-symbols-outlined" style={{ color: '#22c55e', fontSize: 18 }}>check_circle</span>
              <span>We respond within <strong>24 hours</strong> on business days.</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success" style={{ textAlign: 'center', padding: '48px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)', marginBottom: 24, display: 'block' }}>check_circle</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 16 }}>Audit Request Sent!</h2>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-variant)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto' }}>
                Thank you for requesting a free website audit. Our strategy team will review your online presence and get in touch at your email within 24 hours.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Jane Doe" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Corporate Email</label>
                  <input id="email" name="email" type="email" placeholder="jane@company.com" required className="form-input" />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="businessName" className="form-label">Business Name</label>
                  <input id="businessName" name="businessName" type="text" placeholder="Acme Corp" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="websiteUrl" className="form-label">Website URL (Optional)</label>
                <input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://yourbusiness.com" className="form-input" />
              </div>

              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="industry" className="form-label">Industry Sector</label>
                  <div className="select-wrap">
                    <select id="industry" name="industry" className="form-input form-select" required>
                      <option value="" disabled defaultValue>Select Industry</option>
                      <option value="restaurant">Restaurants & Food Service</option>
                      <option value="hotel">Hotels & Hospitality</option>
                      <option value="healthcare">Healthcare & Clinics</option>
                      <option value="retail">Retail & E-Commerce</option>
                      <option value="finance">Financial Services</option>
                      <option value="technology">Technology & SaaS</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined select-arrow">expand_more</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">Primary Objective</label>
                  <div className="select-wrap">
                    <select id="projectType" name="projectType" className="form-input form-select" required>
                      <option value="" disabled defaultValue>Select Objective</option>
                      <option value="website_audit">Website Audit & Strategy</option>
                      <option value="platform_dev">Platform Development</option>
                      <option value="ui_ux">UI/UX Revamp</option>
                      <option value="managed_services">Managed IT Services</option>
                    </select>
                    <span className="material-symbols-outlined select-arrow">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Project Details & Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Please provide an overview of your current challenges and desired outcomes..."
                  className="form-input form-textarea"
                />
              </div>

              {errorMsg && (
                <div style={{ color: '#ef4444', fontSize: 14, marginTop: 8, textAlign: 'left' }}>
                  {errorMsg}
                </div>
              )}

              <div className="contact-form__submit">
                <button type="submit" id="contact-submit-btn" disabled={loading} className="btn btn--primary btn--full">
                  {loading ? 'Sending Request...' : 'Request Free Website Audit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
