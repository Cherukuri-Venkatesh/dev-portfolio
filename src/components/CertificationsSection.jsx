import React from 'react';
import { Cloud, Database, Sparkles, FileCode, Globe, BadgeCheck } from 'lucide-react';

export function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-10 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 07. INDUSTRY BADGES</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Certifications &amp; Verified Credentials
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Official credentials from Microsoft, ServiceNow, GitHub, Cisco, and Cambridge.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Cert 1: Microsoft Azure AZ-900 */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border-white/10 hover:border-cyan-400/50 transition">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyber-cyan">
              <Cloud className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-slate-400">AZ-900</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Microsoft Certified: Azure Fundamentals
            </h3>
            <p className="font-mono text-xs text-cyan-400 mt-0.5">Microsoft</p>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Cloud concepts, security, architecture, compute, virtual networking, and Azure cloud services.
          </p>
          <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            <span>Verified Official Credential</span>
          </div>
        </div>

        {/* Cert 2: ServiceNow Data Foundations */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border-white/10 hover:border-purple-400/50 transition">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-cyber-violet">
              <Database className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-slate-400">DATA_CORE</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              ServiceNow Certified: Data Foundations
            </h3>
            <p className="font-mono text-xs text-purple-400 mt-0.5">ServiceNow</p>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Configuration Management, schema design, relational data models, and enterprise database modeling.
          </p>
          <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            <span>Verified Official Credential</span>
          </div>
        </div>

        {/* Cert 3: GitHub Copilot GH-300 */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border-white/10 hover:border-emerald-400/50 transition">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-cyber-emerald">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-slate-400">GH-300</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              GitHub Copilot Certification
            </h3>
            <p className="font-mono text-xs text-emerald-400 mt-0.5">GitHub</p>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            AI-assisted software development, automated unit test generation, and code acceleration workflows.
          </p>
          <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            <span>Verified Official Credential</span>
          </div>
        </div>

        {/* Cert 4: Cisco Python Essentials 1 & 2 */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border-white/10 hover:border-amber-400/50 transition">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cyber-amber">
              <FileCode className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-slate-400">CISCO_PY</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Python Essentials 1 &amp; 2
            </h3>
            <p className="font-mono text-xs text-amber-400 mt-0.5">Cisco Networking Academy</p>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Python programming, Object-Oriented Programming (OOP), algorithms, and advanced data structures.
          </p>
          <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            <span>Verified Official Credential</span>
          </div>
        </div>

        {/* Cert 5: Cambridge Linguaskill */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border-white/10 hover:border-blue-400/50 transition sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Globe className="w-6 h-6" />
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-slate-400">CAMBRIDGE</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Linguaskill English Certification
            </h3>
            <p className="font-mono text-xs text-blue-400 mt-0.5">Cambridge</p>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            International business communication, professional technical discourse (B1 Level).
          </p>
          <div className="pt-2 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            <span>Verified Official Credential</span>
          </div>
        </div>

      </div>
    </section>
  );
}
