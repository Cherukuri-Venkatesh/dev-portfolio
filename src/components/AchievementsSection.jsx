import React from 'react';
import { Trophy, Users, GitMerge, CheckCircle } from 'lucide-react';

export function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-10 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 06. LEADERSHIP &amp; COMPETITIVE MILESTONES</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Achievements &amp; Leadership
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Proven competitive programming record and national-level engineering squad leadership.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Achievement 1: 1000+ Problems Solved */}
        <div className="glass-card p-7 rounded-3xl border-white/10 space-y-4 hover:border-amber-400/50 group transition">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">COMPETITIVE CODING</div>
            <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors mt-0.5">
              1000+ Problems Solved on CodeChef
            </h3>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Demonstrated strong algorithmic problem-solving, advanced data structure optimization, and competitive programming excellence across CodeChef, LeetCode, and HackerRank.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Consistent daily momentum</span>
          </div>
        </div>

        {/* Achievement 2: SIH 2x Team Lead */}
        <div className="glass-card p-7 rounded-3xl border-white/10 space-y-4 hover:border-cyber-violet/50 group transition">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-cyber-violet group-hover:scale-110 transition">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-cyber-purple font-bold uppercase tracking-wider">NATIONAL HACKATHON</div>
            <h3 className="font-display font-bold text-xl text-white group-hover:text-cyber-violet transition-colors mt-0.5">
              Smart India Hackathon (2x Team Lead)
            </h3>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Led a 6-member engineering team across 2 national hackathon editions; spearheaded backend system architecture, API development, Git branching workflows, and live product demos.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyber-purple" />
            <span>National level competition</span>
          </div>
        </div>

        {/* Achievement 3: Academic Technical Lead */}
        <div className="glass-card p-7 rounded-3xl border-white/10 space-y-4 hover:border-cyber-emerald/50 group transition">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-cyber-emerald group-hover:scale-110 transition">
            <GitMerge className="w-6 h-6" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-cyber-emerald font-bold uppercase tracking-wider">UNIVERSITY LEADERSHIP</div>
            <h3 className="font-display font-bold text-xl text-white group-hover:text-cyber-emerald transition-colors mt-0.5">
              Academic Hackathons &amp; Tech Lead
            </h3>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Served as Technical Team Lead across university hackathons, coordinating full-stack software implementation, system design, Git workflows, automated testing, and final project delivery.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyber-emerald" />
            <span>Full-stack coordination</span>
          </div>
        </div>

      </div>
    </section>
  );
}
