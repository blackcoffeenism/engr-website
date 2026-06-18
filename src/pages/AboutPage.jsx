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
            <form className="audit-form">
              <div className="audit-form__row">
                <div className="form-group">
                  <label htmlFor="audit-name" className="form-label">Full Name</label>
                  <input id="audit-name" type="text" placeholder="Jane Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="audit-email" className="form-label">Business Email</label>
                  <input id="audit-email" type="email" placeholder="jane@company.com" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="audit-url" className="form-label">Current Website URL (Optional)</label>
                <input id="audit-url" type="url" placeholder="https://yourbusiness.com" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="audit-message" className="form-label">Briefly describe your goals</label>
                <textarea id="audit-message" rows="4" placeholder="We are looking to modernize our online presence..." className="form-input form-textarea" />
              </div>
              <button type="submit" id="about-audit-submit-btn" className="btn btn--primary">
                Request Audit
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
