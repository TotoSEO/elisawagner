import { motion } from 'framer-motion'
import { education } from '../data/content'
import Reveal from './ui/Reveal'
import './Education.css'

export default function Education() {
  return (
    <section className="section education" id="formation">
      <div className="container">
        <div className="education__banner banner">
          <span className="education__deco education__deco--1" aria-hidden="true" />
          <span className="education__deco education__deco--2" aria-hidden="true" />

          <div className="education__head">
            <Reveal>
              <span className="section__eyebrow">Formation</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section__title">Un socle solide en communication</h2>
            </Reveal>
          </div>

          <div className="education__list">
            {education.map((edu, i) => (
              <Reveal delay={i * 0.08} key={i}>
                <motion.div className="education__item" whileHover={{ y: -6 }}>
                  <span className="education__cap">🎓</span>
                  <div>
                    <span className="education__period">{edu.period}</span>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <span className="education__school">{edu.school}</span>
                    <p className="education__desc">{edu.description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
