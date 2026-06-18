import { motion } from 'framer-motion'
import { about } from '../data/content'
import Reveal from './ui/Reveal'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="apropos">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__card">
            <div className="about__photo">
              <span>✿</span>
            </div>
            <div className="about__quote">
              « La communication interne, c’est l’art de transformer une
              organisation en communauté. »
            </div>
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <span className="section__eyebrow">À propos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">{about.title}</h2>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal delay={0.1 + i * 0.08} key={i}>
              <p className="about__paragraph">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <ul className="about__highlights">
              {about.highlights.map((h) => (
                <motion.li key={h} whileHover={{ y: -4 }} className="pill">
                  <span className="about__check">✓</span> {h}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
