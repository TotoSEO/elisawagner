import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIsTouch } from '../../hooks/useIsTouch'

// Bouton « magnétique » : suit légèrement le curseur au survol.
// Désactivé sur les écrans tactiles.
export default function MagneticButton({
  children,
  href,
  className = '',
  onClick,
  strength = 0.35,
}) {
  const ref = useRef(null)
  const isTouch = useIsTouch()

  const handleMove = (e) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  const Tag = href ? motion.a : motion.button
  const tagProps = href ? { href } : { onClick, type: 'button' }

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      data-cursor="hover"
      {...tagProps}
    >
      {children}
    </Tag>
  )
}
