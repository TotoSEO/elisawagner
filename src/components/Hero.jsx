import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import MagneticButton from './ui/MagneticButton'
import Counter from './ui/Counter'
import Sparkle from './ui/Sparkle'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span className="hero__kicker" variants={item}>
            {profile.role}
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            <span className="hero__portfolio glow-title">Portfolio</span>
            <span className="hero__name">
              {profile.firstName} {profile.lastName}
            </span>
          </motion.h1>

          <motion.p className="hero__tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.ul className="hero__facts" variants={item}>
            {profile.facts.map((f) => (
              <li key={f} className="pill hero__fact">
                <Sparkle size={14} /> {f}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero__actions" variants={item}>
            <MagneticButton className="btn btn--primary" onClick={() => scrollTo('realisations')}>
              Voir mes réalisations
            </MagneticButton>
            <MagneticButton className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Me contacter
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__aside"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait">
            <img
              src={`${import.meta.env.BASE_URL}${profile.photo}`}
              alt={`Portrait d'${profile.firstName} ${profile.lastName}`}
            />
          </div>
          <motion.span
            className="hero__badge"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__badge-dot" /> {profile.availability}
          </motion.span>
          <Sparkle size={40} className="hero__star hero__star--1" />
          <Sparkle size={22} className="hero__star hero__star--2" />
          <Sparkle size={28} className="hero__star hero__star--3" />
        </motion.div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s, i) => (
            <motion.div
              className="hero__stat"
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
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
