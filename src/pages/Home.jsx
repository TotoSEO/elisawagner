import Page from '../components/ui/Page'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Realisations from '../components/Realisations'

export default function Home() {
  return (
    <Page>
      <Hero />
      <Marquee />
      <Realisations limit={3} showAllLink heading />
    </Page>
  )
}
