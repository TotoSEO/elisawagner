import { motion } from 'framer-motion'
import { profile } from '../data/content'
import MagneticButton from './ui/MagneticButton'
import Reveal from './ui/Reveal'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact__banner">
            <span className="contact__deco contact__deco--1" aria-hidden="true" />
            <span className="contact__deco contact__deco--2" aria-hidden="true" />
            <span className="contact__deco contact__deco--3" aria-hidden="true" />

            <motion.span
              className="contact__emoji"
              animate={{ rotate: [0, 12, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✦
            </motion.span>

            <h2 className="contact__title">Construisons une communication qui rassemble</h2>
            <p className="contact__lead">
              Vous recherchez une personne passionnée pour donner vie à votre
              communication interne&nbsp;? Discutons-en, je serais ravie d’échanger
              avec vous.
            </p>

            <div className="contact__actions">
              <MagneticButton
                className="btn btn--primary contact__btn"
                href={`mailto:${profile.email}`}
              >
                ✉ {profile.email}
              </MagneticButton>
              <MagneticButton
                className="btn btn--ghost contact__btn"
                href={profile.phoneLink}
              >
                ☎ {profile.phone}
              </MagneticButton>
              <MagneticButton
                className="btn btn--ghost contact__btn"
                href={profile.linkedin}
              >
                in · LinkedIn
              </MagneticButton>
            </div>

            <p className="contact__location">📍 {profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
