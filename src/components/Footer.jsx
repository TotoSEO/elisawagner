import { profile } from '../data/content'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__badge">EW</span>
          <div>
            <strong>
              {profile.firstName} {profile.lastName}
            </strong>
            <span className="footer__role">{profile.role}</span>
          </div>
        </div>

        <button className="footer__top" onClick={scrollTop} data-cursor="hover">
          Haut de page ↑
        </button>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {profile.firstName} {profile.lastName} — Tous droits réservés.
        </span>
        <span className="footer__made">Conçu avec soin & beaucoup de rond ✦</span>
      </div>
    </footer>
  )
}
