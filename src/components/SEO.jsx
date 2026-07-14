import { useEffect } from 'react'

export default function SEO({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl }) {
  useEffect(() => {
    if (title) {
      document.title = title
      updateMetaTag('property', 'og:title', ogTitle || title)
      updateMetaTag('name', 'twitter:title', ogTitle || title)
    }
    if (description) {
      updateMetaTag('name', 'description', description)
      updateMetaTag('property', 'og:description', ogDescription || description)
      updateMetaTag('name', 'twitter:description', ogDescription || description)
    }
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    }
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage)
      updateMetaTag('name', 'twitter:image', ogImage)
    }

    // Dynamic canonical link mapping
    const origin = 'https://www.engr.services'
    const pathname = window.location.pathname
    // Normalize path by stripping trailing slashes (except root) to align with sitemap.xml
    const cleanPathname = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname
    const canonical = ogUrl || (origin + cleanPathname)
    
    updateCanonicalLink(canonical)
    updateMetaTag('property', 'og:url', canonical)
    updateMetaTag('property', 'og:type', 'website')
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl])

  const updateMetaTag = (attributeName, attributeValue, content) => {
    if (!content) return
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attributeName, attributeValue)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  const updateCanonicalLink = (href) => {
    if (!href) return
    let element = document.querySelector('link[rel="canonical"]')
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', 'canonical')
      document.head.appendChild(element)
    }
    element.setAttribute('href', href)
  }

  return null
}

