import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { Volume2, VolumeX, Menu, X, Download, Sparkles } from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon 
} from './icons/BrandIcons';

const NAV_ITEMS = [
  { id: 'hero', label: 'Hero' },
  { id: 'skills', label: 'Matrix' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding' },
  { id: 'education', label: 'Academics' },
  { id: 'achievements', label: 'Milestones' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
  { id: 'terminal', label: 'CLI' },
];

export function Navbar() {
  const { openModal, soundEnabled, setSoundEnabled, playSound, showToast } = usePortfolio();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    playSound('click');
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2.5 left-0 right-0 z-40 px-3 md:px-6 max-w-7xl mx-auto">
      <div className="glass-panel rounded-2xl px-3.5 sm:px-4 py-2 flex items-center justify-between shadow-2xl border-white/10 gap-2 sm:gap-4 backdrop-blur-xl">
        
        {/* Logo / Identity */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0 text-left"
          title="Return to Hero Section"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-600 p-[1px] shadow-[0_0_12px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-obsidian-900 rounded-lg flex items-center justify-center font-display font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-violet">
              {RESUME_DATA.initials}
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-xs tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
              {RESUME_DATA.name.toUpperCase()}
            </div>
            <div className="font-mono text-[9px] text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-medium tracking-wide">
                {RESUME_DATA.headline}
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Tabs (Clean & Compact) */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-obsidian-900/90 p-1 rounded-xl border border-white/5 font-mono text-[11px] shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2.5 py-1 rounded-lg transition ${
                  isActive
                    ? 'text-white bg-white/10 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Control Suite (Always Visible Socials + Resume + SFX) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Official Brand Social Icons in Header (xl screens) */}
          <div className="hidden xl:flex items-center gap-1 bg-obsidian-900/90 p-1 rounded-xl border border-white/5">
            {/* LinkedIn */}
            <a
              href={RESUME_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-blue-600/20 text-slate-400 hover:text-[#0A66C2] transition"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            {/* GitHub */}
            <a
              href={RESUME_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
              title="GitHub Repositories"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="p-1.5 rounded-lg hover:bg-cyan-500/20 text-slate-400 hover:text-cyber-cyan transition"
              title={`Send Email (${RESUME_DATA.email})`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* Phone */}
            <a
              href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
              className="p-1.5 rounded-lg hover:bg-emerald-500/20 text-slate-400 hover:text-cyber-emerald transition"
              title={`Call Phone (${RESUME_DATA.phone})`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>

          {/* 3D Visual Studio Modal Button */}
          <button
            onClick={() => openModal('animGallery')}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-violet-500/20 border border-violet-400/30 text-cyber-purple hover:text-white font-mono text-[11px] font-bold transition hover:scale-105"
            title="Open 3D Animation Previews Studio"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Studio</span>
          </button>

          {/* Audio Synth SFX Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playSound('success');
            }}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Synthesizer Sound FX'}
            className="p-1.5 px-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-400 hover:text-cyber-cyan transition"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-cyber-cyan" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
            )}
          </button>

          {/* Direct Resume Download Button */}
          <a
            href={`${import.meta.env.BASE_URL}${RESUME_DATA.resumeFileName}`}
            download={RESUME_DATA.downloadFileName}
            onClick={() => {
              playSound('success');
              showToast('Initiating resume.pdf download...', 'success');
            }}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 border border-cyber-cyan/50 text-cyber-cyan text-[11px] font-mono font-bold flex items-center gap-1.5 transition shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:scale-[1.02]"
            title="Download Official Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>resume.pdf</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-xl bg-obsidian-850 border border-white/10 text-slate-300 hover:text-white transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-cyber-cyan" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs border-white/10 shadow-2xl animate-float">
          <button onClick={() => scrollToSection('hero')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">01. Hero &amp; Mission</button>
          <button onClick={() => scrollToSection('skills')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">02. Technology Matrix</button>
          <button onClick={() => scrollToSection('projects')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">03. Project Showcase</button>
          <button onClick={() => scrollToSection('coding')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">04. Coding Profiles</button>
          <button onClick={() => scrollToSection('education')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">05. Academic Excellence</button>
          <button onClick={() => scrollToSection('achievements')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">06. Achievements &amp; Leadership</button>
          <button onClick={() => scrollToSection('certifications')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">07. Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">08. Contact &amp; Transmission</button>
          <button onClick={() => scrollToSection('terminal')} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">09. Interactive CLI Sandbox</button>
        </div>
      )}
    </header>
  );
}
