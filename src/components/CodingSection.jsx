import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  ArrowUpRight 
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  CodeChefIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './icons/BrandIcons';

export function CodingSection() {
  return (
    <section id="coding" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 04. COMPETITIVE PROGRAMMING &amp; PROFILES</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
            Coding Profiles &amp; Algorithmic Practice
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          1000+ competitive programming problems solved across CodeChef, LeetCode, and HackerRank.
        </p>
      </div>

      {/* Coding Profiles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CodeChef Profile Card */}
        <div className="glass-card p-6 rounded-2xl space-y-3.5 border-white/10 hover:border-amber-400/50 group flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                <CodeChefIcon className="w-6 h-6 text-amber-400" />
              </div>
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold">1000+ SOLVED</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors">CodeChef</h3>
              <p className="font-mono text-xs text-slate-400">Handle: kl2400032597</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Demonstrated strong algorithmic problem-solving, advanced data structure optimization, and competitive programming excellence.
            </p>
          </div>
          <a
            href="https://www.codechef.com/users/kl2400032597"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2"
          >
            <span>View CodeChef Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* LeetCode Profile Card */}
        <div className="glass-card p-6 rounded-2xl space-y-3.5 border-white/10 hover:border-orange-400/50 group flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition">
                <LeetCodeIcon className="w-6 h-6 text-orange-400" />
              </div>
              <span className="px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-400 font-mono text-[10px] font-bold">DSA &amp; ALGORITHMS</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-orange-400 transition-colors">LeetCode</h3>
              <p className="font-mono text-xs text-slate-400">Handle: kl2400032597</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Algorithmic challenges focusing on Dynamic Programming, Trees, Graphs, Hash Maps, and System Concurrency.
            </p>
          </div>
          <a
            href="https://leetcode.com/u/kl2400032597/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2"
          >
            <span>View LeetCode Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Profile Card */}
        <div className="glass-card p-6 rounded-2xl space-y-3.5 border-white/10 hover:border-cyan-400/50 group flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition">
                <GithubIcon className="w-6 h-6 text-white" />
              </div>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyber-cyan font-mono text-[10px] font-bold">REPOSITORIES &amp; BUILDS</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-cyan transition-colors">GitHub</h3>
              <p className="font-mono text-xs text-slate-400">Handle: Cherukuri-Venkatesh</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Full stack Java backend systems, Spring Boot microservices, Python data scripts, and open-source contributions.
            </p>
          </div>
          <a
            href="https://github.com/Cherukuri-Venkatesh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyber-cyan border border-cyan-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2"
          >
            <span>View GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* HackerRank Profile Card */}
        <div className="glass-card p-6 rounded-2xl space-y-3.5 border-white/10 hover:border-emerald-400/50 group flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-cyber-emerald group-hover:scale-110 transition">
                <HackerRankIcon className="w-6 h-6 text-cyber-emerald" />
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-cyber-emerald font-mono text-[10px] font-bold">CORE SKILLS</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-emerald transition-colors">HackerRank</h3>
              <p className="font-mono text-xs text-slate-400">Handle: kl2400032597</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Algorithmic problem-solving assessments across Java, Python, and relational SQL database queries.
            </p>
          </div>
          <a
            href="https://www.hackerrank.com/profile/kl2400032597"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2"
          >
            <span>View HackerRank Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* LinkedIn Profile Card */}
        <div className="glass-card p-6 rounded-2xl space-y-3.5 border-white/10 hover:border-blue-400/50 group flex flex-col justify-between sm:col-span-2 lg:col-span-1">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                <LinkedinIcon className="w-6 h-6 text-[#0A66C2]" />
              </div>
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] font-bold">PROFESSIONAL NETWORK</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">LinkedIn Network</h3>
              <p className="font-mono text-xs text-slate-400">Profile: venkateshcherukuri1</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Connect for technical discussions, backend engineering opportunities, hackathon teams, and recommendations.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/venkateshcherukuri1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
