import Page from '../components/ui/Page'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

export default function ParcoursPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Parcours"
        title="À propos & parcours"
        lead="Communication interne, marque employeur et création de contenus : mon profil, mes expériences et mes compétences."
      />
      <About />
      <Experience />
      <Skills />
    </Page>
  )
}
