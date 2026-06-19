import BackgroundBlobs from './components/BackgroundBlobs'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Realisations from './components/Realisations'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <BackgroundBlobs />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Realisations />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
