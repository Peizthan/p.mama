import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SustainabilitySection from '../components/SustainabilitySection'
import ManifestoSection from '../components/ManifestoSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SustainabilitySection />
        <ManifestoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
