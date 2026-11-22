import { MotionConfig } from 'motion/react';
import { AboutAndSkillsSection } from './components/AboutAndSkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0B14] text-[#F4F3FA]">
        <Navbar />
        <main>
          <HeroSection />
          <AboutAndSkillsSection />
          <ProjectsSection />
          <CertificatesSection />
        </main>
        <ContactAndFooter />
      </div>
    </MotionConfig>
  );
}
