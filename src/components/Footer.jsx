import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" id="footer-brand-logo" className="footer__logo">E-N-G-R</Link>
          <p className="footer__tagline">Crafting digital experiences for modern businesses.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Pages</h4>
          <Link to="/" id="footer-link-home" className="footer__link">Home</Link>
          <Link to="/projects" id="footer-link-projects" className="footer__link">Demo Projects</Link>
          <Link to="/about" id="footer-link-about" className="footer__link">About Us</Link>
          <Link to="/contact" id="footer-link-contact" className="footer__link">Contact</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Legal</h4>
          <Link to="/privacy" id="footer-link-privacy" className="footer__link">Privacy Policy</Link>
          <Link to="/terms" id="footer-link-terms" className="footer__link">Terms of Service</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Connect</h4>
          <a href="mailto:delimagerald9@gmail.com" id="footer-link-email" className="footer__link">delimagerald9@gmail.com</a>
          <a href="tel:09927617815" id="footer-link-phone" className="footer__link">09927617815</a>
          <a href="https://www.linkedin.com/in/gerald-delima-90164527a" id="footer-link-linkedin" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 E-N-G-R Web Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
