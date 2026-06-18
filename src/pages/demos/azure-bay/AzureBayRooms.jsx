import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'
import DemoNav from '../../../components/DemoNav'
import { BASE, NAV_LINKS } from './azureBayNav'
import '../demo.css'
import './azure-bay.css'

const IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSjvvWwH_UaNKJPo1qtkqkcDLxaocLvkMlFA2bgh7JOu9SzrUihli02epY3xq-8diJN4mwr6HY3wawjP6IXazlYA32h33a28LEuJs4ifIbA4Wttaye23ZZBK8bokX17Fv7knyz5SKuojKe7o6cHcZRP1jqKOioTYnjRk8DuyPKnr87fTZ1yewnGDhW7uXWgHfky8B52F7dkuIEJpirsPAsd82wik6dcyrwV1DoI9dx-rHx7PW0x5ZE3W_EX3Nn4v7Ny9wiao8T0yc'

const rooms = [
  { type: 'Standard', title: 'Garden View Room', size: '42 sqm', guests: '2 Adults', price: '$280', desc: 'A beautifully appointed room overlooking our lush tropical gardens, with a king or twin bed configuration.', amenities: ['King or Twin Bed', 'Private Balcony', 'Rain Shower', 'Mini Bar', 'Smart TV', 'Free Wi-Fi'] },
  { type: 'Deluxe', title: 'Ocean View Room', size: '52 sqm', guests: '2 Adults', price: '$380', desc: 'Sweeping panoramic ocean views from your private balcony, with a plush king bed and luxury marble bathroom.', amenities: ['King Bed', 'Ocean Balcony', 'Soaking Tub', 'Espresso Machine', '55" Smart TV', 'Priority Check-in'] },
  { type: 'Suite', title: 'Azure Bay Suite', size: '95 sqm', guests: '2 Adults + 2 Children', price: '$680', desc: 'A spacious two-room suite with a separate living area, private plunge pool, and dedicated butler service.', amenities: ['Separate Living Room', 'Private Plunge Pool', 'Butler Service', 'Walk-in Wardrobe', 'Pillow Menu', 'Daily Fruit & Flowers'] },
  { type: 'Premium', title: 'Penthouse Suite', size: '180 sqm', guests: '4 Adults', price: '$1,100', desc: 'Our crown jewel — a 180sqm penthouse spanning the entire top floor with a wraparound terrace and private pool.', amenities: ['Wraparound Terrace', 'Private Infinity Pool', 'Private Dining Room', 'Personal Chef (on request)', 'Rolls-Royce Transfer', 'VIP Concierge'] },
  { type: 'Villa', title: 'Beachfront Villa', size: '240 sqm', guests: '6 Adults', price: '$1,400', desc: 'A private villa with direct beach access, private infinity pool, full kitchen, and dedicated concierge team.', amenities: ['Direct Beach Access', 'Infinity Pool', 'Full Kitchen', 'Home Theatre', '3 Bedrooms', 'Golf Cart Included'] },
  { type: 'Family', title: 'Family Ocean Suite', size: '110 sqm', guests: '2 Adults + 3 Children', price: '$780', desc: 'Designed for families seeking space and luxury — a two-bedroom configuration with a connecting kids room.', amenities: ['2 Bedrooms', 'Kids\' Room', 'Baby-proofed', 'Shared Ocean Terrace', 'Kids\' Amenity Kit', 'Babysitting Available'] },
]

export default function AzureBayRooms() {
  return (
    <div className="demo-project ab">
      <SEO
        title="Rooms & Suites | Azure Bay Resort"
        description="Explore our luxury accommodations, oceanfront suites, and private villas designed for ultimate relaxation at Azure Bay Resort."
      />
      <DemoNav brand="Azure Bay Resort" basePath={BASE} links={NAV_LINKS} accentColor="#0d4f8b" accentText="#fff" />

      <div className="dp-page-hero">
        <img src={IMG} alt="Azure Bay rooms" className="dp-page-hero__img" />
        <div className="dp-page-hero__overlay" />
        <div className="dp-page-hero__content">
          <h1 className="dp-page-hero__title">Rooms & Suites</h1>
          <p className="dp-page-hero__subtitle">From intimate garden-view rooms to expansive private villas</p>
        </div>
      </div>

      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
            {rooms.map(room => (
              <div key={room.title} className="ab-room-card">
                <div className="ab-room-card__img">
                  <img src={IMG} alt={room.title} />
                  <span className="ab-room-card__badge">{room.type}</span>
                </div>
                <div className="ab-room-card__body">
                  <div style={{ display: 'flex', gap: 12, marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: '#44474d' }}><span className="material-symbols-outlined" style={{ fontSize: 14, verticalAlign: 'middle' }}>square_foot</span> {room.size}</span>
                    <span style={{ fontSize: 12, color: '#44474d' }}><span className="material-symbols-outlined" style={{ fontSize: 14, verticalAlign: 'middle' }}>person</span> {room.guests}</span>
                  </div>
                  <h3 className="ab-room-card__title">{room.title}</h3>
                  <p className="ab-room-card__desc">{room.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px 12px', marginTop: 8 }}>
                    {room.amenities.map(a => (
                      <li key={a} style={{ fontSize: 12, color: '#44474d', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#0d4f8b' }}>check</span>{a}
                      </li>
                    ))}
                  </ul>
                  <div className="ab-room-card__price">
                    <div>
                      <span className="ab-room-card__rate">{room.price}</span>
                      <span className="ab-room-card__rate-label">/ night</span>
                    </div>
                    <Link to={`${BASE}/booking`} id={`ab-rooms-book-${room.title.toLowerCase().replace(/\s+/g, '-')}`} className="dp-btn ab-btn--primary" style={{ padding: '10px 20px', fontSize: 11 }}>Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="dp-footer"><div className="dp-container"><p>© 2026 Azure Bay Resort · <em>Demo by <Link to="/projects">E-N-G-R</Link></em></p></div></footer>
    </div>
  )
}
