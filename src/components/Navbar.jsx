import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, profile } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" onClick={(e) => handleNav(e, 'top')}>
          <span className="nav__logo-badge">EW</span>
          <span className="nav__logo-name">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNav(e, link.id)}
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn btn--primary nav__cta"
          onClick={(e) => handleNav(e, 'contact')}
          data-cursor="hover"
        >
          Me contacter
        </a>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNav(e, link.id)}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => handleNav(e, 'contact')}
            >
              Me contacter
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
