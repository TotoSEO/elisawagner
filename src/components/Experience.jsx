import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '../data/content'
import Reveal from './ui/Reveal'
import './Experience.css'

export default function Experience() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  })
  // La ligne se remplit au fur et à mesure du scroll
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="section experience" id="parcours">
      <div className="container">
        <div className="experience__head">
          <Reveal>
            <span className="section__eyebrow">Parcours</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">Mon expérience professionnelle</h2>
          </Reveal>
        </div>

        <div className="timeline" ref={trackRef}>
          <div className="timeline__line">
            <motion.span className="timeline__fill" style={{ height: fillHeight }} />
          </div>

          {experiences.map((exp, i) => (
            <Reveal className="timeline__item" key={i} delay={i * 0.05}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__period">{exp.period}</span>
                <h3 className="timeline__role">{exp.role}</h3>
                <span className="timeline__company">{exp.company}</span>
                <p className="timeline__desc">{exp.description}</p>
                <div className="timeline__tags">
                  {exp.tags.map((t) => (
                    <span className="pill timeline__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
