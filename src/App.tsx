import HeroSection from './components/HeroSection'
import SiteHeader from './components/SiteHeader'
import CatalogSection from './components/sections/CatalogSection'
import CompanySection from './components/sections/CompanySection'
import ContactSection from './components/sections/ContactSection'
import ServicesSection from './components/sections/ServicesSection'
import SolutionsSection from './components/sections/SolutionsSection'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <CompanySection />
        <SolutionsSection />
        <ServicesSection />
        <CatalogSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
