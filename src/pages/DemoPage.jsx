import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './DemoPage.css'

const demoMeta = {
  'bella-cucina': {
    title: 'Bella Cucina',
    category: 'Restaurant',
    src: '/demos/bella-cucina.html',
  },
  'azure-bay': {
    title: 'Azure Bay Resort',
    category: 'Hotel & Resort',
    src: '/demos/azure-bay.html',
  },
  'primecare': {
    title: 'PrimeCare Medical Clinic',
    category: 'Healthcare',
    src: '/demos/primecare.html',
  },
}

export default function DemoPage() {
  const { slug } = useParams()
  const demo = demoMeta[slug]

  if (!demo) {
    return (
      <div className="demo-not-found container">
        <h1>Demo not found</h1>
        <Link to="/projects" className="btn btn--primary" style={{ marginTop: 24 }}>
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="demo-page">
      <SEO
        title={`${demo.title} Concept Demo | E-N-G-R Web Services`}
        description={`View a live showcase of the ${demo.title} digital experience engineered by E-N-G-R Web Services.`}
      />
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
        {demo.title} Demo
      </h1>
      {/* Top bar */}
      <div className="demo-topbar">
        <div className="demo-topbar__inner">
          <Link to="/projects" className="demo-topbar__back">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Projects
          </Link>

          <div className="demo-topbar__info">
            <span className="demo-topbar__badge">{demo.category}</span>
            <span className="demo-topbar__title">{demo.title}</span>
          </div>

          <a
            href={demo.src}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-topbar__open"
          >
            <span className="material-symbols-outlined">open_in_new</span>
            Open Full Screen
          </a>
        </div>
      </div>

      {/* iframe */}
      <div className="demo-frame-wrap">
        <iframe
          src={demo.src}
          title={`${demo.title} Demo`}
          className="demo-frame"
          allowFullScreen
        />
      </div>
    </div>
  )
}
