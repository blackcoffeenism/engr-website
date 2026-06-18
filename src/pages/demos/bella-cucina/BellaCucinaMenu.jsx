import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import '../demo.css'
import './bella-cucina.css'

const BASE = '/demos/bella-cucina'
const NAV_LINKS = [
  { to: BASE, label: 'Home' },
  { to: `${BASE}/menu`, label: 'Menu' },
  { to: `${BASE}/reservations`, label: 'Reservations', cta: true, ctaLabel: 'Reserve a Table' },
]

const menuSections = [
  {
    title: 'Antipasti',
    items: [
      { name: 'Burrata con Prosciutto', desc: 'Creamy burrata, aged prosciutto di Parma, fig compote, toasted walnut', price: '$22' },
      { name: 'Carpaccio di Manzo', desc: 'Thinly sliced beef tenderloin, shaved Parmigiano, capers, lemon oil', price: '$26' },
      { name: 'Carciofi alla Romana', desc: 'Roman-style braised artichokes, mint, garlic, extra virgin olive oil', price: '$18' },
      { name: 'Salmone Affumicato', desc: 'House-smoked Atlantic salmon, crème fraîche, cucumber, rye crostini', price: '$24' },
    ],
  },
  {
    title: 'Primi Piatti',
    items: [
      { name: 'Tagliatelle al Ragù', desc: 'House-made egg pasta, slow-braised Angus beef, aged Parmigiano Reggiano', price: '$38' },
      { name: 'Tartufata', desc: 'Carnaroli risotto, black truffle, Verjuice, shaved truffle garnish', price: '$64' },
      { name: 'Pappardelle al Cinghiale', desc: 'Wild boar ragù, rosemary, juniper, Pecorino Romano', price: '$42' },
      { name: 'Gnocchi al Gorgonzola', desc: 'Hand-rolled potato gnocchi, Gorgonzola dolce, walnuts, pear', price: '$34' },
    ],
  },
  {
    title: 'Secondi',
    items: [
      { name: 'Branzino in Crosta', desc: 'Mediterranean sea bass, salt crust, lemon, capers, Sicilian olive oil', price: '$52' },
      { name: 'Filetto di Manzo', desc: '8oz beef tenderloin, truffle butter, roasted garlic, seasonal vegetables', price: '$76' },
      { name: 'Agnello alla Griglia', desc: 'Grilled lamb chops, mint gremolata, roasted aubergine', price: '$58' },
      { name: 'Pollo alla Diavola', desc: 'Spatchcock free-range chicken, peperoncino, rosemary, lemon', price: '$44' },
    ],
  },
  {
    title: 'Dolci',
    items: [
      { name: 'Tiramisù della Casa', desc: 'Classic house tiramisù, Savoiardo, espresso, Marsala, Mascarpone', price: '$16' },
      { name: 'Panna Cotta', desc: 'Vanilla bean panna cotta, seasonal berry coulis', price: '$14' },
      { name: 'Cannolo Siciliano', desc: 'Crispy shell, ricotta, pistacchio, candied orange', price: '$15' },
      { name: 'Sorbetto del Giorno', desc: 'Daily sorbet selection, seasonal fruits', price: '$12' },
    ],
  },
]

export default function BellaCucinaMenu() {
  return (
    <div className="demo-project bc">
      <SEO
        title="Our Culinary Menu | Bella Cucina Restaurant"
        description="Browse our seasonal selection of authentic antipasti, hand-rolled primi piatti, secondis, and house-made desserts."
      />
      <DemoNav brand="Bella Cucina" basePath={BASE} links={NAV_LINKS} accentColor="#7c3a1e" accentText="#fff" />

      {/* Page hero */}
      <div className="dp-page-hero">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMhRQtLu6fcgP7CZ8a2GGbB0-2E0-fyV3o50b5vHPuNfHbmj4KMk04F0dWgKneuZeS-AlJN3Y7q9AxkkMmscr95-4Hr5_aDN0HQB2JNRKCRywpUv7kke7IQBAKsvBT4-twwr8-Fdj2UItxfFAP0NrqsU5JhJc8qZMclkHDfPXoIqqh067Ov-R8PekVH3pe-6WmClMdQCUjfvro31IjSDTOty9BE5zHWVt0iFTlz6eOvbkrZ8OIUmcOVRK6CkHdnT5M6zMzqKNF-8"
          alt="Bella Cucina dining"
          className="dp-page-hero__img"
        />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Our Culinary Menu</h1>
          <p className="dp-page-hero__subtitle">Seasonal ingredients, timeless Italian tradition</p>
        </div>
      </div>

      {/* Menu */}
      <section className="dp-section">
        <div className="dp-container">
          <p style={{ fontSize: 15, color: '#6b5c52', marginBottom: 48, fontStyle: 'italic' }}>
            * Menu changes seasonally. Prices are per person. Please inform your server of any allergies or dietary requirements.
          </p>
          {menuSections.map(section => (
            <div key={section.title} className="bc-menu-section">
              <h2 className="bc-menu-section__title">{section.title}</h2>
              <div className="bc-menu-grid">
                {section.items.map(item => (
                  <div key={item.name} className="bc-menu-item">
                    <div className="bc-menu-item__text">
                      <div className="bc-menu-item__name">{item.name}</div>
                      <div className="bc-menu-item__desc">{item.desc}</div>
                    </div>
                    <span className="bc-menu-item__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to={`${BASE}/reservations`} id="bc-menu-reserve-btn" className="dp-btn bc-btn--primary">Reserve Your Table</Link>
          </div>
        </div>
      </section>

      <footer className="dp-footer">
        <div className="dp-container">
          <p>© 2026 Bella Cucina. · <em>Demo by <Link to="/projects">E-N-G-R Web Services</Link></em></p>
        </div>
      </footer>
    </div>
  )
}
