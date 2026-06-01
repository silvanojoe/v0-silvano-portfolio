import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { DashboardSection } from '@/components/sections/dashboard-section'
import { ToolsSection } from '@/components/sections/tools-section'
import { CompetenciesSection } from '@/components/sections/competencies-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <DashboardSection />
      <ToolsSection />
      <CompetenciesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
