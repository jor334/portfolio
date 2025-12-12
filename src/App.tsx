import './App.css'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import { ThreeBackground } from './components/ThreeBackground'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <ThreeBackground />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
