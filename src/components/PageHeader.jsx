import './PageHeader.css'

// En-tête de page : eyebrow + titre + texte d'intro.
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="page-header">
      <div className="container">
        {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
        <h1 className="page-header__title">{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </header>
  )
}
