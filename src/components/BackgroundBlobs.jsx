import { useEffect, useRef } from 'react'
import { useIsTouch } from '../hooks/useIsTouch'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Sparkle from './ui/Sparkle'
import './BackgroundBlobs.css'

// Grands halos violets qui dérivent + quelques étoiles flottantes,
// avec un léger parallaxe à la souris. Discret, derrière le contenu.
export default function BackgroundBlobs() {
  const layerRef = useRef(null)
  const isTouch = useIsTouch()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (isTouch || reduced || !layerRef.current) return
    let frame
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!layerRef.current) return
        layerRef.current.style.setProperty('--px', x.toFixed(3))
        layerRef.current.style.setProperty('--py', y.toFixed(3))
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [isTouch, reduced])

  return (
    <div className="blobs" ref={layerRef} aria-hidden="true">
      <span className="blob blob--1" />
      <span className="blob blob--2" />
      <span className="blob blob--3" />
      <Sparkle size={26} className="bg-star bg-star--1" />
      <Sparkle size={16} className="bg-star bg-star--2" />
      <Sparkle size={34} className="bg-star bg-star--3" />
      <Sparkle size={18} className="bg-star bg-star--4" />
    </div>
  )
}
