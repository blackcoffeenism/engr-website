import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import DemoPage from './pages/DemoPage'

// Bella Cucina pages
import BellaCucinaHome from './pages/demos/bella-cucina/BellaCucinaHome'
import BellaCucinaMenu from './pages/demos/bella-cucina/BellaCucinaMenu'
import BellaCucinaBook from './pages/demos/bella-cucina/BellaCucinaBook'

// Azure Bay Resort pages
import AzureBayHome from './pages/demos/azure-bay/AzureBayHome'
import AzureBayRooms from './pages/demos/azure-bay/AzureBayRooms'
import AzureBayFacilities from './pages/demos/azure-bay/AzureBayFacilities'
import AzureBayGallery from './pages/demos/azure-bay/AzureBayGallery'
import AzureBayContact from './pages/demos/azure-bay/AzureBayContact'
import AzureBayBooking from './pages/demos/azure-bay/AzureBayBooking'

// PrimeCare pages
import PrimeCareHome from './pages/demos/primecare/PrimeCareHome'
import PrimeCareServices from './pages/demos/primecare/PrimeCareServices'
import PrimeCareSpecialists from './pages/demos/primecare/PrimeCareSpecialists'
import PrimeCareAppointment from './pages/demos/primecare/PrimeCareAppointment'

// Legal Pages
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          {/* Main E-N-G-R pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/demos/:slug" element={<DemoPage />} />

          {/* Bella Cucina */}
          <Route path="/demos/bella-cucina" element={<BellaCucinaHome />} />
          <Route path="/demos/bella-cucina/menu" element={<BellaCucinaMenu />} />
          <Route path="/demos/bella-cucina/reservations" element={<BellaCucinaBook />} />

          {/* Azure Bay Resort */}
          <Route path="/demos/azure-bay" element={<AzureBayHome />} />
          <Route path="/demos/azure-bay/rooms" element={<AzureBayRooms />} />
          <Route path="/demos/azure-bay/facilities" element={<AzureBayFacilities />} />
          <Route path="/demos/azure-bay/gallery" element={<AzureBayGallery />} />
          <Route path="/demos/azure-bay/contact" element={<AzureBayContact />} />
          <Route path="/demos/azure-bay/booking" element={<AzureBayBooking />} />

          {/* PrimeCare */}
          <Route path="/demos/primecare" element={<PrimeCareHome />} />
          <Route path="/demos/primecare/services" element={<PrimeCareServices />} />
          <Route path="/demos/primecare/specialists" element={<PrimeCareSpecialists />} />
          <Route path="/demos/primecare/appointment" element={<PrimeCareAppointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
