import { useEffect, useRef, useState } from 'react'
import { useIsTouch } from '../hooks/useIsTouch'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './CustomCursor.css'

// Curseur doux : un grand rond qui suit la souris avec un léger retard,
// et un petit point qui colle au pointeur. Désactivé au tactile.
export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const isTouch = useIsTouch()
  const reduced = usePrefersReducedMotion()
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (isTouch || reduced) return
    const ring = ringRef.current
    const dot = dotRef.current
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      const target = e.target.closest('[data-cursor="hover"], a, button')
      setHovering(Boolean(target))
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    document.body.classList.add('has-custom-cursor')
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [isTouch, reduced])

  if (isTouch || reduced) return null

  return (
    <>
      <div ref={ringRef} className={`cursor-ring${hovering ? ' is-hover' : ''}`} aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
