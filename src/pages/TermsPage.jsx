import SEO from '../components/SEO'
import './TermsPage.css'

export default function TermsPage() {
  const sections = [
    { id: 'agreement', label: '1. Agreement to Terms' },
    { id: 'services', label: '2. Services Provided' },
    { id: 'project', label: '3. Project Agreement' },
    { id: 'responsibilities', label: '4. Client Responsibilities' },
    { id: 'payment', label: '5. Payment Terms' },
    { id: 'ownership', label: '6. Website Ownership' },
    { id: 'revisions', label: '7. Revisions' },
    { id: 'maintenance', label: '8. Maintenance' },
    { id: 'third-party', label: '9. Third-Party Services' },
    { id: 'liability', label: '10. Limitation of Liability' },
    { id: 'intellectual', label: '11. Intellectual Property' },
    { id: 'termination', label: '12. Termination' },
    { id: 'changes', label: '13. Changes to Terms' }
  ]

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="terms">
      <SEO
        title="Terms of Service | E-N-G-R Web Services"
        description="Review the terms and conditions governing website design, development, and consulting engagements with E-N-G-R Web Services."
      />
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero__content">
            <span className="section-badge">Legal Documentation</span>
            <h1 className="terms-hero__title">Terms of Service</h1>
            <p className="terms-hero__subtitle">
              Please review the terms and conditions for using E-N-G-R Web Services. These terms outline the expectations and obligations of our partnership.
            </p>
            <div className="terms-hero__meta">
              <span className="material-symbols-outlined">event</span>
              <span className="terms-hero__date">Last Updated: June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="container terms-layout">
          {/* Sidebar Navigation */}
          <aside className="terms-sidebar">
            <h2 className="terms-sidebar__heading">Quick Navigation</h2>
            <nav className="terms-sidebar__nav">
              {sections.map(s => (
                <a
                  key={s.id}
                  id={`terms-sidebar-link-${s.id}`}
                  href={`#${s.id}`}
                  onClick={(e) => handleScroll(e, s.id)}
                  className="terms-sidebar__link"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Document Body */}
          <article className="terms-body">
            
            {/* Section 1 */}
            <section id="agreement" className="terms-section">
              <h2 className="terms-section__title">1. Agreement to Terms</h2>
              <p className="terms-section__text">
                By engaging E-N-G-R Web Services, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you ("the Client") and E-N-G-R Web Services ("the Agency"). If you do not agree to these terms, you must cease all use of our services immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services" className="terms-section">
              <h2 className="terms-section__title">2. Services Provided</h2>
              <p className="terms-section__text">
                E-N-G-R Web Services offers professional digital solutions including but not limited to:
              </p>
              <div className="terms-services-grid">
                {[
                  { icon: 'web', title: 'Custom Web Development' },
                  { icon: 'palette', title: 'UI/UX Strategy & Design' },
                  { icon: 'rocket_launch', title: 'SEO & Performance Audit' },
                  { icon: 'terminal', title: 'Technical Consultation' }
                ].map(item => (
                  <div key={item.title} className="terms-service-item">
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="project" className="terms-section">
              <h2 className="terms-section__title">3. Project Agreement</h2>
              <p className="terms-section__text">
                Each project will be governed by a specific Project Brief or Statement of Work (SOW). This document will outline the scope, timeline, and deliverables unique to that engagement. Any work outside the scope defined in the SOW will be billed at our standard hourly rate.
              </p>
            </section>

            {/* Section 4 */}
            <section id="responsibilities" className="terms-section">
              <h2 className="terms-section__title">4. Client Responsibilities</h2>
              <div className="terms-resp-box">
                <p className="terms-section__text" style={{ fontWeight: 600, color: 'var(--color-on-surface)' }}>
                  To ensure project success, the Client agrees to:
                </p>
                <ul className="terms-resp-list">
                  <li className="terms-resp-list__item">
                    <div className="terms-resp-icon-wrap">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <span>Provide all necessary content, branding assets, and login credentials within agreed timelines.</span>
                  </li>
                  <li className="terms-resp-list__item">
                    <div className="terms-resp-icon-wrap">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <span>Designate a primary point of contact with decision-making authority.</span>
                  </li>
                  <li className="terms-resp-list__item">
                    <div className="terms-resp-icon-wrap">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <span>Review and provide feedback on deliverables within three (3) business days.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="payment" className="terms-section">
              <h2 className="terms-section__title">5. Payment Terms</h2>
              <div className="terms-payment-grid">
                {[
                  { pct: '50%', title: 'INITIAL DEPOSIT', desc: 'Due prior to project commencement to secure development resources.' },
                  { pct: '40%', title: 'MILESTONE PAYMENT', desc: 'Invoiced upon approval of the primary design phase or beta version.' },
                  { pct: '10%', title: 'FINAL DELIVERY', desc: 'Payable upon completion and before the final site launch or file handover.' }
                ].map(p => (
                  <div key={p.title} className="terms-payment-card">
                    <div className="terms-payment-card__pct">{p.pct}</div>
                    <div className="terms-payment-card__title">{p.title}</div>
                    <p className="terms-payment-card__desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="ownership" className="terms-section">
              <h2 className="terms-section__title">6. Website Ownership</h2>
              <p className="terms-section__text">
                Upon final payment, full ownership of the website code and design assets is transferred to the Client. The Agency retains the right to display the project in its portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) states otherwise.
              </p>
            </section>

            {/* Section 7 */}
            <section id="revisions" className="terms-section">
              <h2 className="terms-section__title">7. Revisions</h2>
              <p className="terms-section__text">
                Each major phase includes two (2) rounds of minor revisions. Extensive changes to previously approved designs or functionality will be treated as a Change Order and may incur additional fees.
              </p>
            </section>

            {/* Section 8 */}
            <section id="maintenance" className="terms-section">
              <h2 className="terms-section__title">8. Maintenance</h2>
              <p className="terms-section__text">
                Post-launch maintenance is not included in the initial build price unless specified. We offer separate maintenance packages for security updates, hosting management, and content updates.
              </p>
            </section>

            {/* Section 9 */}
            <section id="third-party" className="terms-section">
              <h2 className="terms-section__title">9. Third-Party Services</h2>
              <p className="terms-section__text">
                The Agency is not responsible for issues arising from third-party services (e.g., hosting providers, API integrations, CMS platforms). The Client is responsible for maintaining active subscriptions and payments for such services.
              </p>
            </section>

            {/* Section 10 */}
            <section id="liability" className="terms-section">
              <h2 className="terms-section__title">10. Limitation of Liability</h2>
              <p className="terms-section__text">
                E-N-G-R Web Services will not be held liable for any loss of revenue, data, or technical downtime once the website has been delivered and approved. Our total liability is limited to the amount paid for the specific service in question.
              </p>
            </section>

            {/* Section 11 */}
            <section id="intellectual" className="terms-section">
              <h2 className="terms-section__title">11. Intellectual Property</h2>
              <p className="terms-section__text">
                The Client warrants that all assets provided to the Agency (images, text, logos) are owned by the Client or licensed for use. The Agency is not responsible for any copyright infringements resulting from materials provided by the Client.
              </p>
            </section>

            {/* Section 12 */}
            <section id="termination" className="terms-section">
              <h2 className="terms-section__title">12. Termination</h2>
              <p className="terms-section__text">
                Either party may terminate the project with 15 days' written notice. In the event of termination, the Client is responsible for payment for all work completed up to the date of termination. Initial deposits are non-refundable.
              </p>
            </section>

            {/* Section 13 */}
            <section id="changes" className="terms-section">
              <h2 className="terms-section__title">13. Changes to Terms</h2>
              <p className="terms-section__text">
                E-N-G-R Web Services reserves the right to modify these terms at any time. Significant changes will be communicated via email or through our website. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </section>


          </article>
        </div>
      </section>
    </div>
  )
}
