import { keywords } from '../data/content'
import './Marquee.css'

export default function Marquee() {
  // On duplique la liste pour un défilement continu sans rupture.
  const items = [...keywords, ...keywords]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
