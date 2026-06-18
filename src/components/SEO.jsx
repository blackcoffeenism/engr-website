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
    if (ogUrl) {
      updateMetaTag('property', 'og:url', ogUrl)
    } else {
      updateMetaTag('property', 'og:url', window.location.href)
    }
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

  return null
}
