import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import { ToastContainer } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CodingSection } from './components/CodingSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { TerminalSection } from './components/TerminalSection';
import { Footer } from './components/Footer';
import { Quick3DDock } from './components/Quick3DDock';

import { ProjectModal } from './components/modals/ProjectModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { AnimGalleryModal } from './components/modals/AnimGalleryModal';

export function App() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyber-cyan selection:text-obsidian-950 overflow-x-hidden">
        {/* Custom Glowing Cursor for Desktop */}
        <CustomCursor />

        {/* WebGL 3D Background Engine */}
        <ThreeCanvas />

        {/* Ambient Radial Luxury Glow Orbs */}
        <div className="fixed top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none animate-glow-drift z-[1]" />
        <div className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none animate-glow-drift z-[1]" />
        <div className="fixed top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none z-[1]" />

        {/* Floating Toast Notification Container */}
        <ToastContainer />

        {/* Top Floating HUD Navbar */}
        <Navbar />

        {/* Main Content Container with Natural Top Clearance */}
        <main className="relative z-10 max-w-7xl mx-auto pt-20 sm:pt-22 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          <Hero />
          <SkillsSection />
          <ProjectsSection />
          <CodingSection />
          <EducationSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
          <TerminalSection />
          <Footer />
        </main>

        {/* Floating Bottom Quick 3D Engine Dock */}
        <Quick3DDock />

        {/* Modals & Dialogs */}
        <ProjectModal />
        <ResumeModal />
        <AnimGalleryModal />
      </div>
    </PortfolioProvider>
  );
}

export default App;
