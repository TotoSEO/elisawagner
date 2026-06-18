import { useEffect, useRef } from 'react'
import { useIsTouch } from '../hooks/useIsTouch'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './BackgroundBlobs.css'

// 2-3 très gros ronds pastel, flous et presque invisibles, qui dérivent
// lentement en arrière-plan. Léger parallaxe au mouvement de la souris.
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
    </div>
  )
}
