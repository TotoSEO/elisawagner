import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import MagneticButton from './ui/MagneticButton'
import Counter from './ui/Counter'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span className="hero__kicker" variants={item}>
            {profile.role}
          </motion.span>

          <motion.h1 className="hero__name" variants={item}>
            {profile.firstName} {profile.lastName}
          </motion.h1>

          <motion.p className="hero__tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.p className="hero__intro" variants={item}>
            {profile.intro}
          </motion.p>

          <motion.ul className="hero__facts" variants={item}>
            {profile.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </motion.ul>

          <motion.div className="hero__actions" variants={item}>
            <MagneticButton className="btn btn--primary" onClick={() => navigate('/realisations')}>
              Voir mes réalisations
            </MagneticButton>
            <MagneticButton className="btn btn--ghost" onClick={() => navigate('/contact')}>
              Me contacter
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__aside"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait">
            <img
              src={`${import.meta.env.BASE_URL}${profile.photo}`}
              alt={`Portrait d'${profile.firstName} ${profile.lastName}`}
            />
          </div>
          <span className="hero__badge">
            <span className="hero__badge-dot" /> {profile.availability}
          </span>
        </motion.div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s, i) => (
            <motion.div
              className="hero__stat"
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
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
