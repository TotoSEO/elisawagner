import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { realisations } from '../data/content'
import Reveal from './ui/Reveal'
import './Realisations.css'

export default function Realisations({ limit, showAllLink = false, heading = true }) {
  const items = limit ? realisations.slice(0, limit) : realisations

  return (
    <section className="section realisations" id="realisations">
      <div className="container">
        {heading && (
          <div className="realisations__head">
            <Reveal>
              <span className="section__eyebrow">Réalisations</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section__title">Une sélection de projets</h2>
            </Reveal>
          </div>
        )}

        <div className="realisations__list">
          {items.map((r, i) => (
            <Reveal key={r.title} delay={0.03}>
              <article className={`real-card${i % 2 === 1 ? ' real-card--alt' : ''}`}>
                <div className="real-card__media">
                  <motion.img
                    src={`${import.meta.env.BASE_URL}${r.image}`}
                    alt={r.title}
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {r.result && <p className="real-card__result">{r.result}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="realisations__more">
            <Link to="/realisations" className="btn btn--primary">
              Voir toutes mes réalisations
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
