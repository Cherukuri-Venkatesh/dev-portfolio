import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  Download, 
  Eye, 
  ArrowUp, 
  MapPin,
  CheckCircle2,
  Users,
  ExternalLink
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
  const [visitorTimestamp] = React.useState(() => Date.now());

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 p-[1px] shadow-[0_0_20px_rgba(255,87,34,0.35)] shrink-0">
              <div className="w-full h-full bg-obsidian-900 rounded-xl flex items-center justify-center font-display font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                {RESUME_DATA.initials}
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white tracking-wide">
                {RESUME_DATA.name.toUpperCase()}
              </div>
              <div className="font-mono text-[10px] text-orange-400">
                Java Backend &amp; Data Science Engineer
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Results-driven developer specialized in high-throughput Java Spring Boot backends, scalable RESTful APIs, Python Data Science / ML, and Microsoft Azure cloud infrastructure.
          </p>
          <div className="font-mono text-[11px] text-slate-400 space-y-2 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{RESUME_DATA.location}</span>
            </div>
            <div className="text-slate-400">
              Direct: <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-300 hover:text-orange-400 transition">{RESUME_DATA.email}</a>
            </div>
            {/* Quick Connect Pills */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={RESUME_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 border border-[#0A66C2]/30 text-[#38bdf8] flex items-center gap-1.5 text-[11px] font-mono transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={RESUME_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 flex items-center gap-1.5 text-[11px] font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation / Sitemap (3 Cols) */}
        <div className="lg:col-span-3 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-orange-500 rounded-full inline-block"></span>
            <span>SYSTEM NAVIGATION</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
            <button onClick={() => scrollToSection('hero')} className="text-left hover:text-orange-400 transition cursor-pointer">01. Hero</button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-orange-400 transition cursor-pointer">02. About</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-orange-400 transition cursor-pointer">03. Matrix</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-orange-400 transition cursor-pointer">04. Projects</button>
            <button onClick={() => scrollToSection('education')} className="text-left hover:text-orange-400 transition cursor-pointer">05. Academics</button>
            <button onClick={() => scrollToSection('profiles')} className="text-left hover:text-orange-400 transition cursor-pointer">06. Profiles</button>
            <button onClick={() => scrollToSection('certifications')} className="text-left hover:text-orange-400 transition cursor-pointer">07. Certs</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-orange-400 transition cursor-pointer">08. Contact</button>
            <button onClick={() => scrollToSection('terminal')} className="text-left hover:text-orange-400 transition col-span-2 cursor-pointer">09. CLI Sandbox</button>
          </div>
        </div>

        {/* Column 3: Verified Channels & Logos (3 Cols) */}
        <div className="lg:col-span-3 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-orange-500 rounded-full inline-block"></span>
            <span>VERIFIED CHANNELS</span>
          </div>
          <div className="space-y-2 text-[11px]">
            {/* LinkedIn Prominent Card */}
            <a
              href={RESUME_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-[#0A66C2]/20 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 group-hover:text-white font-bold truncate">LinkedIn Profile</div>
                  <div className="text-[9px] text-slate-500 truncate">in/venkateshcherukuri1</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#38bdf8] shrink-0" />
            </a>

            {/* GitHub Prominent Card */}
            <a
              href={RESUME_DATA.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                  <GithubIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 group-hover:text-white font-bold truncate">GitHub Repositories</div>
                  <div className="text-[9px] text-slate-500 truncate">Cherukuri-Venkatesh</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-orange-400 shrink-0" />
            </a>

            {/* Other Profiles in sleek pills */}
            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href={RESUME_DATA.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-amber-400 transition group text-[10px]"
              >
                <div className="flex items-center gap-2">
                  <CodeChefIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>CodeChef (1000+ Solved)</span>
                </div>
                <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-orange-400 transition group text-[10px]"
              >
                <div className="flex items-center gap-2">
                  <LeetCodeIcon className="w-3.5 h-3.5 text-orange-400" />
                  <span>LeetCode / kl2400032597</span>
                </div>
                <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-amber-400 transition group text-[10px]"
              >
                <div className="flex items-center gap-2">
                  <HackerRankIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>HackerRank / kl2400032597</span>
                </div>
                <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Resume & 3D Controls (2 Cols) */}
        <div className="lg:col-span-2 space-y-3 font-mono text-xs">
          <div className="text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-orange-500 rounded-full inline-block"></span>
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
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-obsidian-950 font-bold flex items-center justify-center gap-1.5 transition text-[11px] shadow-sm cursor-pointer"
              title="Download Verified Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => openModal('resume')}
              className="w-full py-2 px-3 rounded-xl glass-panel hover:bg-orange-500/10 hover:border-orange-500/30 text-slate-300 hover:text-orange-300 flex items-center justify-center gap-1.5 transition text-[11px] cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-orange-400" />
              <span>Preview Sheet</span>
            </button>

            {/* 3D Speed Selector */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] text-slate-400 mb-1.5 font-bold uppercase">3D ANIMATION SPEED:</div>
              <div className="flex items-center gap-1 bg-obsidian-900 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setAnimSpeed(0.22)}
                  className={`flex-1 py-1 rounded text-[10px] transition cursor-pointer ${
                    animSpeed === 0.22
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0.2x
                </button>
                <button
                  onClick={() => setAnimSpeed(0.5)}
                  className={`flex-1 py-1 rounded text-[10px] transition cursor-pointer ${
                    animSpeed === 0.5
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0.5x
                </button>
                <button
                  onClick={() => setAnimSpeed(1.0)}
                  className={`flex-1 py-1 rounded text-[10px] transition cursor-pointer ${
                    animSpeed === 1.0
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold'
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

      {/* Bottom Bar with Copyright, Live Traffic Telemetry & Back to Top */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Cherukuri Venkatesh. All rights reserved.
        </div>

        {/* Live Visitor Counter */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-obsidian-900/90 border border-orange-500/30 shadow-[0_0_15px_rgba(255,87,34,0.15)]">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
          </span>
          <Users className="w-4 h-4 text-orange-400 shrink-0" />
          <img
            src={`https://hits.sh/cherukuri-venkatesh.github.io/dev-portfolio.svg?style=for-the-badge&label=VISITS&color=ea580c&labelColor=0c0d12&v=${visitorTimestamp}`}
            alt="Live Total Page Visits"
            className="h-6 sm:h-7 inline-block rounded-md overflow-hidden shadow-sm"
            loading="eager"
          />
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <span className="text-slate-400">
            Algorithmic Uptime: <strong className="text-emerald-400">{RESUME_DATA.stats.uptime}</strong>
          </span>
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-orange-400 transition flex items-center gap-1 text-slate-300 font-semibold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
