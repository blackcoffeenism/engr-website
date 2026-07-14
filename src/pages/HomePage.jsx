import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import bhriMockup from '../assets/bhri.png'
import vhbcMockup from '../assets/vhbcreferral.jpeg'
import './HomePage.css'

const recentProjects = [
  {
    id: 'bhri',
    title: 'Bright Hermosa Realty Inc.',
    category: 'Real Estate Platform',
    categoryIcon: 'home',
    desc: 'A premium, modern property listing and search portal built for a prominent real estate agency. Features an advanced filter system, responsive grids, and elegant typography.',
    link: 'https://bhri.com.ph',
    image: bhriMockup,
    features: ['Luxury Listings Showcase', 'Interactive Property Search', 'Mobile-Responsive Layout']
  },
  {
    id: 'vhbc',
    title: 'VHBC Referral Program',
    category: 'Web Application',
    categoryIcon: 'dashboard',
    desc: 'A fully custom referral tracking and partner dashboard application. Features dynamic pipelines, real-time earnings charts, user rewards tracking, and interactive status boards.',
    link: 'https://referral.vhbc.com.ph',
    image: vhbcMockup,
    features: ['Referral Status Pipeline', 'Live Earnings Dashboard', 'Partner Rewards Hub']
  }
]

const industries = [
  { icon: 'restaurant', title: 'Restaurants', desc: 'Menu integrations, online reservations, and appetizing visual galleries.' },
  { icon: 'hotel', title: 'Hotels & Resorts', desc: 'Direct booking engines, room showcases, and immersive local guides.' },
  { icon: 'local_hospital', title: 'Clinics', desc: 'Patient portals, appointment scheduling, and secure contact forms.' },
  { icon: 'storefront', title: 'Retail', desc: 'E-commerce setups, inventory sync, and seamless checkout flows.' },
  { icon: 'business_center', title: 'Prof. Services', desc: 'Lead generation, portfolio showcases, and client testimonial integration.' },
]

const services = [
  {
    icon: 'brush',
    title: 'Custom Web Design',
    desc: 'Pixel-perfect, brand-consistent designs that tell your story and convert visitors into customers.',
  },
  {
    icon: 'code',
    title: 'Modern Development',
    desc: 'Built with cutting-edge React, Next.js, and Jamstack architectures for unmatched performance.',
  },
  {
    icon: 'search',
    title: 'SEO Optimization',
    desc: 'Strategic on-page SEO foundations ensuring your business is discoverable on Google from day one.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile-First',
    desc: 'Fully responsive experiences that look and perform flawlessly on every device.',
  },
  {
    icon: 'speed',
    title: 'Performance Tuning',
    desc: 'Lighthouse-optimized pages that load in under 2 seconds, reducing bounce rates significantly.',
  },
  {
    icon: 'support_agent',
    title: 'Ongoing Support',
    desc: 'Dedicated maintenance plans so your site stays secure, fast, and up-to-date.',
  },
]

export default function HomePage() {
  return (
    <div className="home">
      <SEO
        title="E-N-G-R Web Services | Premium Web Design & Development"
        description="Custom high-performance websites engineered for local businesses, including restaurants, hotels, clinics, and professional service firms."
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content container">
          <div className="hero__text">
            <span className="hero__badge">Web Services Agency</span>
            <h1 className="hero__headline text-gradient">
              Professional Websites That Help Local Businesses Get More Customers
            </h1>
            <p className="hero__subtext">
              E-N-G-R Web Services creates fast, modern, and mobile-friendly websites for restaurants, hotels, and businesses looking to establish a dominant online presence.
            </p>
            <div className="hero__ctas">
              <Link to="/contact" id="hero-cta-audit" className="btn btn--primary">
                Get Free Website Audit
              </Link>
              <Link to="/projects" id="hero-cta-projects" className="btn btn--outline">
                View Demo Projects
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Industries Section */}
      <section className="industries" id="industries">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Industries</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Tailored digital solutions designed to meet the specific operational and marketing needs of your sector.
            </p>
          </div>
          <div className="industries__grid">
            {industries.map(({ icon, title, desc }) => (
              <div key={title} className="industry-card hover-lift">
                <span className="material-symbols-outlined industry-card__icon">{icon}</span>
                <h3 className="industry-card__title">{title}</h3>
                <p className="industry-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Every service is engineered to generate real, measurable results for your business.
            </p>
          </div>
          <div className="services__grid">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="service-card hover-lift ambient-shadow">
                <div className="service-card__icon-wrap">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects" id="recent-projects">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Client Work</span>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle">
              Take a look at some of the production-grade platforms and websites we've engineered for our clients.
            </p>
          </div>
          <div className="recent-projects__grid">
            {recentProjects.map((project) => (
              <article key={project.id} className="recent-project-card">
                <div className="recent-project-card__image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="recent-project-card__image"
                    loading="lazy"
                  />
                  <div className="recent-project-card__badge">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{project.categoryIcon}</span>
                    {project.category}
                  </div>
                </div>
                <div className="recent-project-card__body">
                  <h3 className="recent-project-card__title">{project.title}</h3>
                  <p className="recent-project-card__desc">{project.desc}</p>

                  <ul className="recent-project-card__features">
                    {project.features.map((feat) => (
                      <li key={feat} className="recent-project-card__feature">
                        <span className="material-symbols-outlined recent-project-card__feature-icon">check_circle</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--full-mobile recent-project-card__link"
                  >
                    Visit Live Site
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Our Simple 3-Step Process</h2>
          </div>
          <div className="process__steps">
            {[
              { num: '01', title: 'Free Audit', desc: 'We analyze your current online presence and identify opportunities for growth.' },
              { num: '02', title: 'Design & Build', desc: 'Our team crafts a stunning, high-performance website tailored to your brand.' },
              { num: '03', title: 'Launch & Grow', desc: 'We deploy your site, ensure it\'s indexed by Google, and provide ongoing support.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="process-step">
                <span className="process-step__num">{num}</span>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="audit">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__text">
              <h2 className="cta-banner__title">Ready to Build Your Digital Presence?</h2>
              <p className="cta-banner__subtitle">
                Get a free, no-obligation website audit. We'll show you exactly what needs to improve.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" id="home-banner-cta-audit" className="btn btn--white">
                Get Free Website Audit
              </Link>
              <Link to="/projects" id="home-banner-cta-work" className="btn btn--outline-white">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
