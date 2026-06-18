import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import MagneticButton from './ui/MagneticButton'
import Counter from './ui/Counter'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      {/* Formes décoratives flottantes */}
      <span className="hero__shape hero__shape--a" aria-hidden="true" />
      <span className="hero__shape hero__shape--b" aria-hidden="true" />
      <span className="hero__shape hero__shape--c" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span className="hero__badge" variants={item}>
            <span className="hero__badge-dot" /> {profile.available}
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            <span className="hero__name">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="hero__role">{profile.role}</span>
          </motion.h1>

          <motion.p className="hero__tagline" variants={item}>
            {profile.tagline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </motion.p>

          <motion.p className="hero__intro" variants={item}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <MagneticButton
              className="btn btn--primary"
              onClick={() => scrollTo('contact')}
            >
              Me contacter ✦
            </MagneticButton>
            <MagneticButton className="btn btn--ghost" onClick={() => scrollTo('parcours')}>
              Voir mon parcours
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Carte portrait blob + chiffres clés */}
        <motion.div
          className="hero__aside"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait">
            <div className="hero__portrait-blob">
              <span className="hero__portrait-initials">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </span>
            </div>
            <motion.span
              className="hero__sticker hero__sticker--1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✿ Bonjour !
            </motion.span>
            <motion.span
              className="hero__sticker hero__sticker--2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Com’ interne ✶
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s, i) => (
            <motion.div
              className="hero__stat"
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <span className="hero__stat-value">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="hero__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
