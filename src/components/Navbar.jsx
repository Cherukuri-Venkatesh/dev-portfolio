import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { Volume2, VolumeX, Menu, X, Download, Sparkles, Search, FileText } from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon 
} from './icons/BrandIcons';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', fullLabel: 'HOME' },
  { id: 'about', label: 'ABOUT', fullLabel: 'ABOUT' },
  { id: 'skills', label: 'SKILLS', fullLabel: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS', fullLabel: 'PROJECTS' },
  { id: 'education', label: 'EDUCATION', fullLabel: 'EDUCATION' },
  { id: 'profiles', label: 'PROFILES', fullLabel: 'PROFILES & CONNECTIONS' },
  { id: 'certifications', label: 'CERTIFICATIONS', fullLabel: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT', fullLabel: 'CONTACT' },
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
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
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
      const navOffset = 90;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(0, elementTop - navOffset);
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (err) {
        // ignore error
      }
    }
  };

  return (
    <header className="fixed top-8 sm:top-10 left-0 right-0 z-50 px-3 md:px-6 max-w-7xl mx-auto">
      <div className="glass-panel rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between shadow-2xl border-white/10 gap-3 sm:gap-6 backdrop-blur-2xl bg-obsidian-950/85">
        
        {/* Left Monogram / Branding */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group cursor-pointer shrink-0 text-left"
          title="Cherukuri Venkatesh Portfolio"
        >
          {/* Orange Monogram Badge */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-[1.5px] shadow-[0_0_15px_rgba(255,87,34,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="font-display font-black text-xs text-obsidian-950">
              {RESUME_DATA.initials}
            </span>
          </div>
          <div>
            <div className="font-display font-black text-xs tracking-wider text-white group-hover:text-orange-400 transition-colors">
              CHERUKURI VENKATESH
            </div>
            <div className="font-mono text-[9px] text-slate-400 tracking-wider">
              PORTFOLIO // KL UNIVERSITY
            </div>
          </div>
        </button>

        {/* Center Pill Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] shrink-0 bg-white/[0.03] p-1 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#ff5722] font-black shadow-[0_0_15px_rgba(255,87,34,0.6)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Theme Sun, Resume, Sound, Mobile Menu */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Ambient Lighting / Theme indicator */}
          <button
            onClick={() => showToast('Dark Obsidian Mode Active', 'info')}
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition cursor-pointer"
            title="Theme Mode: Dark Obsidian"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          {/* Resume Quick Trigger */}
          <button
            onClick={() => openModal('resume')}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/40 text-orange-400 font-mono text-xs font-bold transition hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(255,87,34,0.2)]"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              showToast(!soundEnabled ? 'Audio Feedback Enabled' : 'Audio Muted', 'info');
            }}
            className={`p-2 rounded-full border transition cursor-pointer ${
              soundEnabled 
                ? 'border-orange-500/40 text-orange-400 bg-orange-500/10' 
                : 'border-white/10 text-slate-500 hover:text-slate-300'
            }`}
            title={soundEnabled ? 'Mute Interface Sound' : 'Enable Interface Sound'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl glass-glow-ember border-orange-500/30 space-y-2 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-1.5 font-mono text-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="p-2.5 rounded-xl bg-obsidian-900/80 text-left text-slate-300 hover:text-orange-400 hover:bg-orange-500/10 transition truncate"
                title={item.fullLabel}
              >
                {item.fullLabel || item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => { openModal('resume'); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-display font-black text-xs uppercase flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Open Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
