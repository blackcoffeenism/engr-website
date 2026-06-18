import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './DemoNav.css'

export default function DemoNav({ brand, basePath, links, accentColor = '#0a192f', accentText = '#ffffff' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`demo-nav ${scrolled ? 'demo-nav--scrolled' : ''}`}>
      <div className="demo-nav__inner">
        {/* Back to E-N-G-R */}
        <button id="demo-nav-back-btn" className="demo-nav__back" onClick={() => navigate('/projects')} title="Back to E-N-G-R Projects">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          <span className="demo-nav__back-label">E-N-G-R</span>
        </button>

        <div className="demo-nav__divider" />

        {/* Brand */}
        <Link to={basePath} id="demo-nav-brand-link" className="demo-nav__brand" style={{ color: accentColor }}>
          {brand}
        </Link>

        {/* Desktop nav */}
        <nav className="demo-nav__links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              id={`demo-nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
              end={to === basePath}
              className={({ isActive }) =>
                `demo-nav__link ${isActive ? 'demo-nav__link--active' : ''}`
              }
              style={({ isActive }) => isActive ? { color: accentColor, borderColor: accentColor } : {}}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to={links.find(l => l.cta)?.to || `${basePath}/reservations`}
          id="demo-nav-cta-link"
          className="demo-nav__cta"
          style={{ backgroundColor: accentColor, color: accentText }}
        >
          {links.find(l => l.cta)?.ctaLabel || 'Book Now'}
        </Link>

        {/* Mobile toggle */}
        <button id="demo-nav-mobile-toggle" className="demo-nav__toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`demo-nav__mobile ${mobileOpen ? 'demo-nav__mobile--open' : ''}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            id={`demo-nav-mobile-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            end={to === basePath}
            className={({ isActive }) =>
              `demo-nav__mobile-link ${isActive ? 'demo-nav__mobile-link--active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
