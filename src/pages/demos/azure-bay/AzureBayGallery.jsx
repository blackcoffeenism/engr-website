import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

const IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc'

export default function AzureBayGallery() {
  const photos = Array.from({ length: 12 }, (_, i) => ({ id: i, alt: `Azure Bay Resort view ${i + 1}` }))

  return (
    <div className="demo-project ab">
      <SEO
        title="Resort Gallery | Azure Bay Resort"
        description="View photos of Azure Bay Resort's stunning architecture, scenic ocean views, luxury rooms, and recreational activities."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />

      <div className="dp-page-hero" style={{ height: 300 }}>
        <img src={IMG} alt="Gallery" className="dp-page-hero__img" />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Resort Gallery</h1>
          <p className="dp-page-hero__subtitle">A glimpse into your Azure Bay experience</p>
        </div>
      </div>

      <section className="dp-section">
        <div className="dp-container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {['All', 'Rooms & Suites', 'Pool & Beach', 'Dining', 'Spa', 'Activities'].map((cat, i) => (
              <button
                key={cat}
                id={`ab-gallery-tab-${cat.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '8px 18px', borderRadius: 2, border: '1.5px solid',
                  cursor: 'pointer', transition: 'all 0.2s',
                  backgroundColor: i === 0 ? '#0d4f8b' : 'transparent',
                  color: i === 0 ? '#fff' : '#0d4f8b',
                  borderColor: '#0d4f8b',
                  fontFamily: 'Inter, sans-serif',
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '240px',
            gap: 16,
          }}>
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                style={{
                  gridRow: [0, 3, 6].includes(i) ? 'span 2' : 'span 1',
                  borderRadius: 8,
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                className="ab-gallery-img-wrap"
              >
                <img
                  src={IMG}
                  alt={photo.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 Azure Bay Resort · <em>Demo by <Link to="/projects">E-N-G-R</Link></em></p></div></footer>
    </div>
  )
}
