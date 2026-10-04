import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import { ToastContainer } from './components/Toast';
import { TopTickerBar } from './components/TopTickerBar';
import { Navbar } from './components/Navbar';
import { HeroScrollCanvas } from './components/HeroScrollCanvas';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveProjectDeck } from './components/InteractiveProjectDeck';
import { CodingSection } from './components/CodingSection';
import { EducationSection } from './components/EducationSection';
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
      <div className="relative min-h-screen text-slate-100 font-sans selection:bg-orange-500 selection:text-obsidian-950 bg-[#050505]">
        {/* Custom Glowing Cursor for Desktop */}
        <CustomCursor />

        {/* WebGL 3D Background Engine */}
        <ThreeCanvas />

        {/* Floating Toast Notification Container */}
        <ToastContainer />

        {/* Top Ticker Announcement Header */}
        <TopTickerBar />

        {/* Top Floating Pill Navbar */}
        <Navbar />

        {/* 1. Full-Width Locked Pinned Scroll Hero */}
        <HeroScrollCanvas />

        {/* 2. Main Content Container starting BELOW the pinned hero */}
        <main className="relative z-10 max-w-7xl mx-auto pt-12 sm:pt-20 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {/* Section 1: About & Background */}
          <AboutSection />

          {/* Section 2: Technical Skills (Implemented from preserved skills matrix) */}
          <SkillsSection />

          {/* Section 3: Flagship Engineering Project Deck */}
          <InteractiveProjectDeck />

          {/* Section 4: Academics & Education */}
          <EducationSection />

          {/* Section 5: Profiles & Online Connections (2 Categories) */}
          <CodingSection />

          {/* Section 6: Verified Certifications */}
          <CertificationsSection />

          {/* Section 7: Interactive Contact Hub */}
          <ContactSection />

          {/* Section 8: Interactive CLI Terminal */}
          <TerminalSection />

          {/* Footer */}
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

