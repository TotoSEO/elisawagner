import BackgroundBlobs from './components/BackgroundBlobs'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Gros ronds pastel animés en arrière-plan (fixés) */}
      <BackgroundBlobs />
      {/* Curseur doux (désactivé au tactile / reduced motion) */}
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
