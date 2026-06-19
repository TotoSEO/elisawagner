import { motion } from 'framer-motion'
import { skills } from '../data/content'
import Reveal from './ui/Reveal'
import Sparkle from './ui/Sparkle'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="competences">
      <div className="container">
        <div className="skills__head">
          <Reveal>
            <span className="section__eyebrow">
              <Sparkle size={13} style={{ position: 'static' }} /> Compétences
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title glow-title">Ma boîte à outils</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              De la réflexion stratégique à l’exécution créative, sur tous les
              supports.
            </p>
          </Reveal>
        </div>

        <div className="skills__cloud">
          {skills.map((skill, i) => (
            <motion.span
              className="skill-chip"
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              data-cursor="hover"
            >
              <Sparkle size={14} style={{ position: 'static', color: 'var(--accent)' }} />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
