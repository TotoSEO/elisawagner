import { motion } from 'framer-motion'
import { projects } from '../data/content'
import Reveal from './ui/Reveal'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="realisations">
      <div className="container">
        <div className="projects__head">
          <Reveal>
            <span className="section__eyebrow">Réalisations</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">Quelques projets qui me ressemblent</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              Un aperçu de dispositifs de communication interne imaginés et
              déployés. Les études de cas détaillées seront ajoutées prochainement.
            </p>
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal delay={i * 0.08} key={project.title}>
              <motion.article
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                data-cursor="hover"
              >
                <div
                  className="project-card__visual"
                  style={{ background: project.color }}
                >
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__arrow">↗</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
