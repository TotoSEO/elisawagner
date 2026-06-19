import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experiences, education } from '../data/content'
import Reveal from './ui/Reveal'
import Sparkle from './ui/Sparkle'
import './Experience.css'

export default function Experience() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  })
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="section experience" id="parcours">
      <div className="container">
        <div className="experience__head">
          <Reveal>
            <span className="section__eyebrow">
              <Sparkle size={13} style={{ position: 'static' }} /> Parcours
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title glow-title">Expériences & formation</h2>
          </Reveal>
        </div>

        <div className="experience__grid">
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
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="education-block">
            <h3 className="education-block__title">
              <Sparkle size={16} style={{ position: 'static' }} /> Formation
            </h3>
            {education.map((edu, i) => (
              <div className="education-item" key={i}>
                <span className="education-item__period">{edu.period}</span>
                <span className="education-item__degree">{edu.degree}</span>
                <span className="education-item__school">{edu.school}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
