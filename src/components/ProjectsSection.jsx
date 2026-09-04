import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { ShieldCheck, Zap, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

export function ProjectsSection() {
  const { openModal } = usePortfolio();

  return (
    <section id="projects" className="space-y-10 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 03. PRODUCTION ARCHITECTURES</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Featured Full Stack Systems
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Production-grade applications architected with Java, Spring Boot, MySQL, Python, and AI integrations.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="glass-card rounded-3xl p-8 border-white/10 flex flex-col justify-between group hover:border-cyber-cyan/50 relative overflow-hidden transition-all"
          >
            <div className="space-y-6">
              {/* Top Tag & Security Pill */}
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full font-mono text-xs font-semibold border ${proj.badgeColor}`}
                >
                  {proj.badge}
                </span>
                <div className="font-mono text-xs text-slate-400 flex items-center gap-1">
                  {idx === 0 ? (
                    <ShieldCheck className="w-3.5 h-3.5 text-cyber-emerald" />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-cyber-amber" />
                  )}
                  <span>{proj.securityPill}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display font-black text-2xl text-white group-hover:text-cyber-cyan transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-1">
                  {proj.technologies.join(' • ')}
                </p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {proj.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2.5 text-xs text-slate-300 font-sans bg-obsidian-950/70 p-4 rounded-2xl border border-white/5">
                {proj.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Actions & Blueprint Trigger */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
              <button
                onClick={() => openModal('project', proj)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition hover:scale-105 ${
                  idx === 0
                    ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyber-cyan border border-cyan-500/30'
                    : 'bg-violet-500/10 hover:bg-violet-500/20 text-cyber-violet border border-violet-500/30'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>{idx === 0 ? 'View System Blueprint & APIs' : 'View Route Engine & Schema'}</span>
              </button>

              <span className="font-mono text-xs text-slate-500">
                {proj.endpointsCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
