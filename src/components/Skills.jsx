import { motion } from 'framer-motion'
import { skills } from '../data/content'
import Reveal from './ui/Reveal'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section section--alt skills" id="competences">
      <div className="container">
        <div className="skills__head">
          <Reveal>
            <span className="section__eyebrow">Compétences</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">Ma boîte à outils</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              De la réflexion stratégique à l’exécution créative, sur tous les supports.
            </p>
          </Reveal>
        </div>

        <div className="skills__cloud">
          {skills.map((skill, i) => (
            <motion.span
              className="skill-chip"
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
