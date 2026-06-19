import { about, profile, languages } from '../data/content'
import Reveal from './ui/Reveal'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="apropos">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__photo">
            <img
              src={`${import.meta.env.BASE_URL}${profile.photo}`}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
          </div>
          <div className="about__langs">
            <span className="about__langs-title">Langues</span>
            {languages.map((l) => (
              <div className="about__lang" key={l.name}>
                <span>{l.name}</span>
                <span className="about__lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <span className="section__eyebrow">À propos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__title">{about.title}</h2>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal delay={0.1 + i * 0.06} key={i}>
              <p className="about__paragraph">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <ul className="about__highlights">
              {about.highlights.map((h) => (
                <li key={h} className="pill">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
