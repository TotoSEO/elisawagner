import { profile } from '../data/content'
import MagneticButton from './ui/MagneticButton'
import Reveal from './ui/Reveal'
import Sparkle from './ui/Sparkle'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact__banner">
            <Sparkle size={42} className="contact__star contact__star--1" />
            <Sparkle size={26} className="contact__star contact__star--2" />
            <Sparkle size={32} className="contact__star contact__star--3" />

            <h2 className="contact__title glow-title">On fait équipe ?</h2>
            <span className="contact__signature">
              {profile.firstName} {profile.lastName}
            </span>

            <p className="contact__lead">
              Disponible dès septembre 2026 pour donner vie à votre communication
              interne et à votre marque employeur. Discutons-en !
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
