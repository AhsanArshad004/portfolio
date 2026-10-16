import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
