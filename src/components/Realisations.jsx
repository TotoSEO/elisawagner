import { motion } from 'framer-motion'
import { realisations } from '../data/content'
import Reveal from './ui/Reveal'
import Sparkle from './ui/Sparkle'
import './Realisations.css'

export default function Realisations() {
  return (
    <section className="section realisations" id="realisations">
      <div className="container">
        <div className="realisations__head">
          <Reveal>
            <span className="section__eyebrow">
              <Sparkle size={13} style={{ position: 'static' }} /> Réalisations
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title glow-title">Des projets qui ont du sens et de l’impact</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              Une sélection de projets menés chez Octapharma et à l’ISEG — de la
              stratégie à la réalisation.
            </p>
          </Reveal>
        </div>

        <div className="realisations__list">
          {realisations.map((r, i) => (
            <Reveal key={r.title} delay={0.04}>
              <article className={`real-card${i % 2 === 1 ? ' real-card--alt' : ''}`}>
                <div className="real-card__media">
                  <motion.img
                    src={`${import.meta.env.BASE_URL}${r.image}`}
                    alt={r.title}
                    loading="lazy"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span className="real-card__index">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="real-card__body">
                  <span className="real-card__context">{r.context}</span>
                  <h3 className="real-card__title">{r.title}</h3>
                  <p className="real-card__objective">
                    <strong>Objectif :</strong> {r.objective}
                  </p>
                  <ul className="real-card__points">
                    {r.points.map((p) => (
                      <li key={p}>
                        <Sparkle size={13} style={{ position: 'static' }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {r.result && <p className="real-card__result">✦ {r.result}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
