import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Demo Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" id="nav-brand-link" className="navbar__brand">E-N-G-R</Link>

        <nav className="navbar__nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              id={`nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" id="nav-desktop-cta" className="navbar__cta">
          Get Free Website Audit
        </Link>

        <button
          className="navbar__mobile-toggle"
          id="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            id={`nav-mobile-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          id="nav-mobile-cta"
          className="navbar__mobile-cta"
          onClick={() => setMobileOpen(false)}
        >
          Get Free Website Audit
        </Link>
      </div>
    </header>
  )
}
