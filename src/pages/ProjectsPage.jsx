import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import bhriMockup from '../assets/bhri.png'
import vhbcMockup from '../assets/vhbcreferral.jpeg'
import './ProjectsPage.css'

const clientProjects = [
  {
    id: 'bhri',
    title: 'Bright Hermosa Realty Inc.',
    category: 'Real Estate Platform',
    categoryIcon: 'home',
    desc: 'A premium, modern property listing and search portal built for a prominent real estate agency. Features an advanced filter system, responsive grids, and elegant typography.',
    link: 'https://bhri.com.ph',
    image: bhriMockup,
    features: [
      { icon: 'home_work', label: 'Luxury Listing Showcases' },
      { icon: 'filter_alt', label: 'Advanced Search Filtering' },
      { icon: 'devices', label: 'Fully Fluid Responsive UI' },
    ],
  },
  {
    id: 'vhbc',
    title: 'VHBC Referral Program',
    category: 'Web Application',
    categoryIcon: 'dashboard',
    desc: 'A fully custom referral tracking and partner dashboard application. Features dynamic pipelines, real-time earnings charts, user rewards tracking, and interactive status boards.',
    link: 'https://referral.vhbc.com.ph',
    image: vhbcMockup,
    features: [
      { icon: 'view_kanban', label: 'Visual Referral Pipelines' },
      { icon: 'query_stats', label: 'Dynamic Earnings Graphs' },
      { icon: 'workspace_premium', label: 'Rewards Tracking System' },
    ],
  },
]

const projects = [
  {
    id: 'bella-cucina',
    category: 'Restaurant',
    categoryIcon: 'restaurant',
    title: 'Bella Cucina',
    desc: 'A sophisticated digital storefront designed for premium dining establishments, focusing on visual appeal and seamless guest experience.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWMhRQtLu6fcgP7CZ8a2GGbB0-2E0-fyV3o50b5vHPuNfHbmj4KMk04F0dWgKneuZeS-AlJN3Y7q9AxkkMmscr95-4Hr5_aDN0HQB2JNRKCRywpUv7kke7IQBAKsvBT4-twwr8-Fdj2UItxfFAP0NrqsU5JhJc8qZMclkHDfPXoIqqh067Ov-R8PekVH3pe-6WmClMdQCUjfvro31IjSDTOty9BE5zHWVt0iFTlz6eOvbkrZ8OIUmcOVRK6CkHdnT5M6zMzqKNF-8',
    imageAlt: 'Bella Cucina – elegant fine dining restaurant interior',
    features: [
      { icon: 'restaurant_menu', label: 'Interactive Digital Menu' },
      { icon: 'gallery_thumbnail', label: 'Immersive Photo Gallery' },
      { icon: 'event_seat', label: 'Integrated Reservation System' },
    ],
  },
  {
    id: 'azure-bay',
    category: 'Hotel & Resort',
    categoryIcon: 'hotel',
    title: 'Azure Bay Resort',
    desc: 'An elegant platform tailored for the hospitality sector, prioritizing immersive property showcases and streamlined booking pathways.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc',
    imageAlt: 'Azure Bay Resort – luxury resort pool area',
    features: [
      { icon: 'bed', label: 'High-Res Room Showcase' },
      { icon: 'calendar_month', label: 'Direct Booking Inquiry' },
      { icon: 'pool', label: 'Amenities Directory' },
    ],
  },
  {
    id: 'primecare',
    category: 'Healthcare',
    categoryIcon: 'local_hospital',
    title: 'PrimeCare Clinic',
    desc: 'A secure, accessible, and reassuring web presence designed for modern healthcare providers, focusing on patient utility.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypAbwWOVCGCqobxp6S-_YfE5vTzF9L__tO11c7F7SKUj6z-NGbPnOd2jIZ-8iVuzdoBBgnhG_JF7OHxM1SGlJ-MB63My2bUtx_BaO658lf9-bp8MDJNxntBDRE-HrNQa0c3R5PQVI6fzEJaPbsBt2qlS28xOfJTTfITWhYjjrLVLMaxR0DhH8BG5_bjK_Do_pj4-lsLqw8IWzrsfiY6bd9kstLluuEcLxAkalBEj5OtBHHQi3TFyfxCwItOygii8ZcDq5kFVwzPc',
    imageAlt: 'PrimeCare Clinic – modern medical clinic waiting area',
    features: [
      { icon: 'medical_services', label: 'Comprehensive Services' },
      { icon: 'schedule', label: 'Appointment Requests' },
      { icon: 'stethoscope', label: 'Detailed Doctor Profiles' },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="projects">
      <SEO
        title="Demo Projects | E-N-G-R Web Services"
        description="Explore our custom website design and development portfolio. View live concept demos for restaurants, hotels, and healthcare clinics."
      />
      {/* Hero */}
      <section className="projects-hero container">
        <h1 className="projects-hero__title">Our Work & Concept Demos</h1>
        <p className="projects-hero__subtitle">
          Explore our real-world production platforms built for clients, alongside interactive sandbox concept designs.
        </p>
      </section>

      {/* Client Projects Section */}
      <section className="projects-section container">
        <div className="projects-section-header">
          <span className="projects-section-badge">Featured Client Work</span>
          <h2 className="projects-section-title">Production Web Applications</h2>
        </div>
        <div className="projects-grid">
          {clientProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__badge">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{project.categoryIcon}</span>
                  {project.category}
                </div>
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.desc}</p>

                <ul className="project-card__features">
                  {project.features.map(({ icon, label }) => (
                    <li key={label} className="project-card__feature">
                      <span className="material-symbols-outlined project-card__feature-icon">{icon}</span>
                      {label}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-card-link-${project.id}`}
                  className="btn btn--outline btn--full-mobile"
                >
                  Visit Live Site
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Demo Projects Section */}
      <section className="projects-section projects-section--demos container">
        <div className="projects-section-header">
          <span className="projects-section-badge font-accent">Interactive Sandboxes</span>
          <h2 className="projects-section-title">Industry Concept Demos</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__badge">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{project.categoryIcon}</span>
                  {project.category}
                </div>
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.desc}</p>

                <ul className="project-card__features">
                  {project.features.map(({ icon, label }) => (
                    <li key={label} className="project-card__feature">
                      <span className="material-symbols-outlined project-card__feature-icon">{icon}</span>
                      {label}
                    </li>
                  ))}
                </ul>

                <Link to={`/demos/${project.id}`} id={`project-card-link-${project.id}`} className="btn btn--outline btn--full-mobile">
                  View Full Demo
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="projects-cta__inner">
            <div className="projects-cta__text">
              <h2 className="projects-cta__title">Want a Website Like These?</h2>
              <p className="projects-cta__subtitle">
                We'll design and build a website tailored specifically to your business needs. Start with a free audit.
              </p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Get Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
