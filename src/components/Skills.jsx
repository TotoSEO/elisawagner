import { motion } from 'framer-motion'
import { skills } from '../data/content'
import Reveal from './ui/Reveal'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="expertises">
      <div className="container">
        <div className="skills__head">
          <Reveal>
            <span className="section__eyebrow">Expertises</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">Ce que je peux apporter à vos équipes</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              Une palette de compétences au service du lien, de l’engagement et de
              la culture d’entreprise.
            </p>
          </Reveal>
        </div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <Reveal delay={i * 0.07} key={skill.title}>
              <motion.article
                className="skill-card"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                data-cursor="hover"
              >
                <span className="skill-card__icon">{skill.icon}</span>
                <h3 className="skill-card__title">{skill.title}</h3>
                <p className="skill-card__text">{skill.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
