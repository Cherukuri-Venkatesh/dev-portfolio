import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  Download, 
  Eye, 
  ArrowUp, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  CodeChefIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './icons/BrandIcons';

export function Footer() {
  const { openModal, animSpeed, setAnimSpeed, playSound, showToast } = usePortfolio();

  const scrollToSection = (id) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-8 border-t border-white/10 space-y-12 font-sans text-xs">
      {/* Multi-Column Grid matching original portfolio */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Column 1: Identity & Bio (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-600 p-[1px] shadow-[0_0_15px_rgba(0,242,254,0.3)] shrink-0">
              <div className="w-full h-full bg-obsidian-900 rounded-xl flex items-center justify-center font-display font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-violet">
                {RESUME_DATA.initials}
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white tracking-wide">
                {RESUME_DATA.name.toUpperCase()}
              </div>
              <div className="font-mono text-[10px] text-cyber-cyan">
                Java Backend &amp; Data Science Engineer
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Results-driven developer specialized in high-throughput Java Spring Boot backends, scalable RESTful APIs, Python Data Science / ML, and Microsoft Azure cloud infrastructure.
          </p>
          <div className="font-mono text-[11px] text-slate-400 space-y-1 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{RESUME_DATA.location}</span>
            </div>
            <div className="text-slate-400">
              Direct: <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-300 hover:text-cyber-cyan transition">{RESUME_DATA.email}</a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation / Sitemap (3 Cols) */}
        <div className="lg:col-span-3 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="text-cyber-cyan">//</span>
            <span>SYSTEM NAVIGATION</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
            <button onClick={() => scrollToSection('hero')} className="text-left hover:text-cyber-cyan transition">01. Hero</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-cyber-cyan transition">02. Matrix</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-cyber-cyan transition">03. Projects</button>
            <button onClick={() => scrollToSection('coding')} className="text-left hover:text-cyber-cyan transition">04. Coding</button>
            <button onClick={() => scrollToSection('education')} className="text-left hover:text-cyber-cyan transition">05. Academics</button>
            <button onClick={() => scrollToSection('achievements')} className="text-left hover:text-cyber-cyan transition">06. Milestones</button>
            <button onClick={() => scrollToSection('certifications')} className="text-left hover:text-cyber-cyan transition">07. Certs</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-cyber-cyan transition">08. Contact</button>
            <button onClick={() => scrollToSection('terminal')} className="text-left hover:text-cyber-cyan transition col-span-2">09. CLI Sandbox</button>
          </div>
        </div>

        {/* Column 3: Verified Channels & Logos (3 Cols) */}
        <div className="lg:col-span-3 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="text-cyber-cyan">//</span>
            <span>VERIFIED CHANNELS</span>
          </div>
          <div className="space-y-2 text-[11px]">
            <a
              href={RESUME_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition group"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-110 transition" />
              <span>LinkedIn / venkateshcherukuri1</span>
            </a>
            <a
              href={RESUME_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition group"
            >
              <GithubIcon className="w-3.5 h-3.5 text-white group-hover:scale-110 transition" />
              <span>GitHub / Cherukuri-Venkatesh</span>
            </a>
            <a
              href={RESUME_DATA.socialLinks.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition group"
            >
              <CodeChefIcon className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition" />
              <span>CodeChef (1000+ Solved)</span>
            </a>
            <a
              href={RESUME_DATA.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition group"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition" />
              <span>LeetCode / kl2400032597</span>
            </a>
            <a
              href={RESUME_DATA.socialLinks.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition group"
            >
              <HackerRankIcon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition" />
              <span>HackerRank / kl2400032597</span>
            </a>
          </div>
        </div>

        {/* Column 4: Resume & 3D Controls (2 Cols) */}
        <div className="lg:col-span-2 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="text-cyber-cyan">//</span>
            <span>RESUME &amp; TOOLS</span>
          </div>
          <div className="space-y-2">
            <a
              href={`${import.meta.env.BASE_URL}${RESUME_DATA.resumeFileName}`}
              download={RESUME_DATA.downloadFileName}
              onClick={() => {
                playSound('success');
                showToast('Initiating resume.pdf download...', 'success');
              }}
              className="w-full py-2 px-3 rounded-xl bg-cyber-cyan hover:bg-cyan-300 text-obsidian-950 font-bold flex items-center justify-center gap-1.5 transition text-[11px] shadow-sm"
              title="Download Verified Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => openModal('resume')}
              className="w-full py-2 px-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition text-[11px]"
            >
              <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Preview Sheet</span>
            </button>

            {/* 3D Speed Selector */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] text-slate-400 mb-1.5 font-bold uppercase">3D ANIMATION SPEED:</div>
              <div className="flex items-center gap-1 bg-obsidian-900 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setAnimSpeed(0.22)}
                  className={`flex-1 py-1 rounded text-[10px] transition ${
                    animSpeed === 0.22
                      ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0.2x Slow
                </button>
                <button
                  onClick={() => setAnimSpeed(0.5)}
                  className={`flex-1 py-1 rounded text-[10px] transition ${
                    animSpeed === 0.5
                      ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0.5x
                </button>
                <button
                  onClick={() => setAnimSpeed(1.0)}
                  className={`flex-1 py-1 rounded text-[10px] transition ${
                    animSpeed === 1.0
                      ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1.0x
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar with Copyright & Back to Top */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Cherukuri Venkatesh. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <span className="text-slate-400">
            Algorithmic Uptime: <strong className="text-emerald-400">{RESUME_DATA.stats.uptime}</strong>
          </span>
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-cyber-cyan transition flex items-center gap-1 text-slate-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
