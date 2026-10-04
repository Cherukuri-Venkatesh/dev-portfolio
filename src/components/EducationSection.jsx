import React from 'react';
import { MapPin } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>04. ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Academic Excellence &amp;
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Education
            </span>
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed">
          Consistent top-tier academic performance across Bachelor of Technology, Intermediate, and Secondary Schooling.
        </p>
      </div>

      {/* Vertical Line Connected Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-orange-500 before:via-amber-500 before:to-orange-600">
        
        {/* Timeline Item 1: KL University B.Tech */}
        <div className="relative group">
          {/* Pulsing Connecting Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-orange-500 bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.6)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
          
          <div className="glass-card p-6 sm:p-7 rounded-2xl border-white/10 space-y-3.5 hover:border-orange-500/50 hover:shadow-[0_12px_35px_rgba(255,87,34,0.22)] transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold">
                2024 – 2028 (Expected)
              </span>
              <span className="font-mono text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-0.5 rounded-full border border-amber-500/30">
                CGPA: 9.67 / 10.00
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors">
                Bachelor of Technology (B.Tech) in Computer Science and Engineering
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>KL University, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/5 space-y-1">
              <div className="font-mono text-[11px] text-orange-400 font-semibold">CORE COURSEWORK &amp; DOMAINS:</div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Data Structures &amp; Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Java, Python, SQL, Operating Systems, Computer Architecture, System Design.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Item 2: Kalams Junior College Intermediate */}
        <div className="relative group">
          {/* Connecting Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-amber-500 bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-2.5 hover:border-amber-500/40 hover:shadow-[0_12px_35px_rgba(245,158,11,0.18)] transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">2022 – 2024</span>
              <span className="font-mono text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-0.5 rounded-full border border-amber-500/30">
                Score: 93.00%
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                Intermediate Education (Class XII - MPC)
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
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
          <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 rounded-full border-2 border-orange-400 bg-obsidian-950 flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-2.5 hover:border-orange-500/40 hover:shadow-[0_12px_35px_rgba(255,87,34,0.18)] transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">2021 – 2022</span>
              <span className="font-mono text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-0.5 rounded-full border border-amber-500/30">
                Score: 92.00%
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors">
                Secondary School Certificate (Class X - SSC)
              </h3>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
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
