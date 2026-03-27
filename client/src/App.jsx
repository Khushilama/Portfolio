import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CVDocument from './components/CVDocument'
import { downloadCV } from './utils/downloadCV'

export default function App() {
  const cvRef = useRef(null)

  const handleDownloadCV = () => downloadCV(cvRef)

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Hidden CV document — captured as PDF on download */}
      <CVDocument ref={cvRef} />

      <Navbar onDownloadCV={handleDownloadCV} />
      <main>
        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
