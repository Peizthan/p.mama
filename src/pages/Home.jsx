import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SustainabilitySection from '../components/SustainabilitySection'
import ManifestoSection from '../components/ManifestoSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import CatalogueSection from '../components/CatalogueSection'
import ProcessSection from '../components/ProcessSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <SustainabilitySection />
        <ManifestoSection />
        <CatalogueSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
