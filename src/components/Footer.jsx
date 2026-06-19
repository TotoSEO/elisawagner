import { Link } from 'react-router-dom'
import { profile, navLinks } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__brand">
          <span className="footer__badge">EW</span>
          <div>
            <strong>
              {profile.firstName} {profile.lastName}
            </strong>
            <span className="footer__role">{profile.role}</span>
          </div>
        </Link>

        <nav className="footer__nav" aria-label="Navigation du pied de page">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {profile.firstName} {profile.lastName}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  )
}
