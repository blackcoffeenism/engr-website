import SEO from '../components/SEO'
import './PrivacyPage.css'

export default function PrivacyPage() {
  const sections = [
    { id: 'intro', label: '1. Introduction' },
    { id: 'collect', label: '2. Information We Collect' },
    { id: 'usage', label: '3. How We Use Information' },
    { id: 'forms', label: '4. Inquiry Forms' },
    { id: 'cookies', label: '5. Cookies & Analytics' },
    { id: 'third-party', label: '6. Third-Party Services' },
    { id: 'security', label: '7. Data Security' },
    { id: 'retention', label: '8. Data Retention' },
    { id: 'rights', label: '9. Your Rights' },
    { id: 'changes', label: '10. Policy Changes' },
    { id: 'contact', label: '11. Contact Info' }
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
    <div className="privacy">
      <SEO
        title="Privacy Policy | E-N-G-R Web Services"
        description="Learn about our data practices, cookie policy, and security measures in our commitment to digital transparency."
      />
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero__content">
            <span className="section-badge">Legal Framework</span>
            <h1 className="privacy-hero__title">Privacy Policy</h1>
            <p className="privacy-hero__subtitle">
              Your privacy matters. Learn how E-N-G-R Web Services collects, uses, and protects your information in our commitment to digital transparency and security.
            </p>
            <div className="privacy-hero__meta">
              <span className="material-symbols-outlined">event</span>
              <span className="privacy-hero__date">Last Updated: June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="container privacy-layout">
          {/* Sidebar Navigation */}
          <aside className="privacy-sidebar">
            <h2 className="privacy-sidebar__heading">Quick Navigation</h2>
            <nav className="privacy-sidebar__nav">
              {sections.map(s => (
                <a
                  key={s.id}
                  id={`privacy-sidebar-link-${s.id}`}
                  href={`#${s.id}`}
                  onClick={(e) => handleScroll(e, s.id)}
                  className="privacy-sidebar__link"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Document Body */}
          <article className="privacy-body">

            {/* Section 1 */}
            <section id="intro" className="privacy-section">
              <h2 className="privacy-section__title">1. Introduction</h2>
              <p className="privacy-section__text">
                At E-N-G-R Web Services, we are committed to protecting the privacy and security of our clients, website visitors, and partners. This Privacy Policy describes how we handle the personal information you provide to us or that we collect during your interaction with our website and digital platforms.
              </p>
              <p className="privacy-section__text">
                By using our services or accessing our website, you acknowledge that you have read and understood this policy. We prioritize data minimization and transparency in all our operations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collect" className="privacy-section">
              <h2 className="privacy-section__title">2. Information We Collect</h2>
              <div className="privacy-grid">
                <div className="privacy-card hover-lift">
                  <span className="material-symbols-outlined privacy-card__icon">person</span>
                  <h3 className="privacy-card__title">Personal Data</h3>
                  <p className="privacy-card__text">
                    Information you voluntarily provide, including name, email address, phone number, and company details when requesting an audit or consultation.
                  </p>
                </div>
                <div className="privacy-card hover-lift">
                  <span className="material-symbols-outlined privacy-card__icon">terminal</span>
                  <h3 className="privacy-card__title">Technical Data</h3>
                  <p className="privacy-card__text">
                    Automatically collected data such as IP addresses, browser types, device information, and navigation patterns on our website.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="usage" className="privacy-section">
              <h2 className="privacy-section__title">3. How We Use Information</h2>
              <ul className="privacy-list">
                <li className="privacy-list__item">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>To deliver the web services and website audits requested by users.</span>
                </li>
                <li className="privacy-list__item">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>To improve our website performance and user experience through behavioral analysis.</span>
                </li>
                <li className="privacy-list__item">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>To communicate technical updates, marketing insights, and project proposals.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="forms" className="privacy-section">
              <h2 className="privacy-section__title">4. Website Inquiry Forms</h2>
              <div className="privacy-quote-wrapper">
                <div className="privacy-quote">
                  <p className="privacy-quote__text">
                    "All data submitted through our inquiry forms is encrypted in transit and stored in a secure CRM environment accessible only by authorized personnel."
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="privacy-section">
              <h2 className="privacy-section__title">5. Cookies and Website Analytics</h2>
              <p className="privacy-section__text">
                We use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us recognize you on repeat visits.
              </p>
              <div className="privacy-table-wrap">
                <table className="privacy-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Essential</td>
                      <td>Required for core website functionality and security.</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Analytical tools like Google Analytics to track site traffic.</td>
                    </tr>
                    <tr>
                      <td>Marketing</td>
                      <td>Used to track advertising effectiveness and personalization.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="privacy-section">
              <h2 className="privacy-section__title">6. Third-Party Services</h2>
              <p className="privacy-section__text">
                We may share information with trusted third-party providers (e.g., hosting services, analytics providers, email marketing platforms) strictly to the extent necessary to provide our services. We ensure all third-party partners adhere to equivalent data protection standards.
              </p>
            </section>

            {/* Section 7 */}
            <section id="security" className="privacy-section">
              <h2 className="privacy-section__title">7. Data Security</h2>
              <div className="privacy-security-banner">
                <span className="material-symbols-outlined privacy-security-banner__icon">encrypted</span>
                <div>
                  <h3 className="privacy-security-banner__title">High-Grade Protection</h3>
                  <p className="privacy-security-banner__text">
                    We implement industry-standard SSL encryption, firewalls, and multi-factor authentication (MFA) to safeguard all digital assets and client records.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="retention" className="privacy-section">
              <h2 className="privacy-section__title">8. Data Retention</h2>
              <p className="privacy-section__text">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            {/* Section 9 */}
            <section id="rights" className="privacy-section">
              <h2 className="privacy-section__title">9. Your Rights</h2>
              <div className="privacy-rights-grid">
                {[
                  { icon: 'visibility', title: 'Right to Access' },
                  { icon: 'edit_note', title: 'Right to Rectification' },
                  { icon: 'delete', title: 'Right to Erasure' },
                  { icon: 'file_download', title: 'Right to Data Portability' }
                ].map(r => (
                  <div key={r.title} className="privacy-right-card">
                    <span className="material-symbols-outlined">{r.icon}</span>
                    <span className="privacy-right-card__title">{r.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 */}
            <section id="changes" className="privacy-section">
              <h2 className="privacy-section__title">10. Changes to This Privacy Policy</h2>
              <p className="privacy-section__text">
                E-N-G-R Web Services reserves the right to update this policy at any time. Significant changes will be communicated through our website or direct email notification to active clients.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className="privacy-section privacy-contact-banner">
              <h2 className="privacy-contact-banner__title">11. Contact Information</h2>
              <p className="privacy-contact-banner__text">
                If you have questions about this Privacy Policy or our data practices, please reach us out.
              </p>
              <div className="privacy-contact-banner__details">
                <div className="privacy-contact-detail">
                  <span className="material-symbols-outlined">mail</span>
                  <a href="mailto:delimagerald9@gmail.com">delimagerald9@gmail.com</a>
                </div>
              </div>
            </section>

          </article>
        </div>
      </section>
    </div>
  )
}
