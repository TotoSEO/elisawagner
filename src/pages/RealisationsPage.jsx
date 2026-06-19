import Page from '../components/ui/Page'
import PageHeader from '../components/PageHeader'
import Realisations from '../components/Realisations'

export default function RealisationsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Réalisations"
        title="Des projets qui ont du sens et de l’impact"
        lead="Une sélection de projets menés chez Octapharma et à l’ISEG — de la stratégie à la réalisation."
      />
      <Realisations heading={false} />
    </Page>
  )
}
