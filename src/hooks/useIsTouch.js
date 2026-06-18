import { useEffect, useState } from 'react'

// Détecte les appareils tactiles / petits écrans pour désactiver
// le curseur personnalisé et certaines interactions souris.
export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    setIsTouch(mq.matches)
    const handler = (e) => setIsTouch(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isTouch
}
