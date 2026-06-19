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
            <span className="section__eyebrow">Contact</span>
            <h2 className="contact__title">On fait équipe ?</h2>
            <p className="contact__lead">
              Disponible dès septembre 2026 pour donner vie à votre communication
              interne et à votre marque employeur. Écrivez-moi, je vous réponds vite.
            </p>

            <div className="contact__actions">
              <MagneticButton className="btn btn--primary" href={`mailto:${profile.email}`}>
                ✉ {profile.email}
              </MagneticButton>
              <MagneticButton className="btn btn--ghost" href={profile.phoneLink}>
                ☎ {profile.phone}
              </MagneticButton>
              <MagneticButton className="btn btn--ghost" href={profile.linkedin}>
                in · LinkedIn
              </MagneticButton>
            </div>

            <p className="contact__meta">
              {profile.location} · {profile.age} · {profile.license}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
