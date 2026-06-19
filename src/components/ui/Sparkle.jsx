// Étoile à 4 branches (élément signature du portfolio d'Élisa).
export default function Sparkle({ size = 40, className = '', style }) {
  return (
    <svg
      className={`sparkle ${className}`}
      style={{ width: size, height: size, ...style }}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 0c4 28 18 42 46 46-28 4-42 18-46 46-4-28-18-42-46-46 28-4 42-18 46-46Z" />
    </svg>
  )
}
