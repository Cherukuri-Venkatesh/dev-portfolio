import React from 'react';
import { MapPin } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 05. ACADEMIC FOUNDATION</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
            Academic Excellence &amp; Education
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Consistent top-tier academic performance across Bachelor of Technology, Intermediate, and Secondary Schooling.
        </p>
      </div>

      {/* Vertical Line Connected Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-purple-500">
        
        {/* Timeline Item 1: KL University B.Tech */}
        <div className="relative group">
          {/* Pulsing Connecting Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-cyber-cyan bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.6)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></div>
          </div>
          
          <div className="glass-card p-6 sm:p-7 rounded-2xl border-white/10 space-y-3.5 hover:border-cyber-cyan/50 transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs font-bold">
                2024 – 2028 (Expected)
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/30">
                CGPA: 9.67 / 10.00
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyber-cyan transition-colors">
                Bachelor of Technology (B.Tech) in Computer Science and Engineering
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>KL University, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/5 space-y-1">
              <div className="font-mono text-[11px] text-cyber-cyan font-semibold">CORE COURSEWORK &amp; DOMAINS:</div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Data Structures &amp; Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Java, Python, SQL, Operating Systems, Computer Architecture, System Design.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Item 2: Kalams Junior College Intermediate */}
        <div className="relative group">
          {/* Connecting Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-cyber-emerald bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-cyber-emerald"></div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-2.5 hover:border-emerald-400/40 transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">2022 – 2024</span>
              <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/30">
                Score: 93.00%
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors">
                Intermediate Education (Class XII - MPC)
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-cyber-emerald" />
                <span>Kalams Junior College, Andhra Pradesh (AP State Board)</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Major Focus: <strong className="text-white">Mathematics, Physics, Chemistry</strong>. Built strong mathematical foundations in calculus, analytical geometry, vectors, and numerical reasoning.
            </p>
          </div>
        </div>

        {/* Timeline Item 3: Ravindra Bharathi School SSC */}
        <div className="relative group">
          {/* Connecting Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-cyber-violet bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-cyber-violet"></div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-2.5 hover:border-violet-400/40 transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">2021 – 2022</span>
              <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/30">
                Score: 92.00%
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyber-violet transition-colors">
                Secondary School Certificate (Class X - SSC)
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-cyber-violet" />
                <span>Ravindra Bharathi School, Andhra Pradesh (AP State Board)</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Core Curriculum: <strong className="text-white">Mathematics, Science, Computer Fundamentals</strong>. Graduated with top academic percentile and distinction honors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
