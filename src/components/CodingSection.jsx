import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Globe2, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  CodeChefIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './icons/BrandIcons';

export function CodingSection() {
  const [activeTab, setActiveTab] = useState('all');

  const codingProfiles = [
    {
      name: "CodeChef",
      handle: "kl2400032597",
      badge: "1000+ PROBLEMS SOLVED",
      badgeColor: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
      icon: CodeChefIcon,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/30",
      cardBorder: "hover:border-amber-400/50",
      btnClass: "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/30",
      url: "https://www.codechef.com/users/kl2400032597",
      desc: "Demonstrated strong algorithmic problem-solving, advanced data structure optimization, and regular competitive contest participation.",
      category: "coding",
      btnText: "View CodeChef Profile"
    },
    {
      name: "LeetCode",
      handle: "kl2400032597",
      badge: "DSA & ALGORITHMS",
      badgeColor: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
      icon: LeetCodeIcon,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/10 border-orange-500/30",
      cardBorder: "hover:border-orange-400/50",
      btnClass: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border-orange-500/30",
      url: "https://leetcode.com/u/kl2400032597/",
      desc: "Algorithmic practice focusing on Dynamic Programming, Trees, Graphs, Hash Maps, Binary Search, and System Concurrency.",
      category: "coding",
      btnText: "View LeetCode Profile"
    },
    {
      name: "HackerRank",
      handle: "kl2400032597",
      badge: "CORE LANGUAGE SKILLS",
      badgeColor: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
      icon: HackerRankIcon,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/30",
      cardBorder: "hover:border-amber-400/50",
      btnClass: "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/30",
      url: "https://www.hackerrank.com/profile/kl2400032597",
      desc: "Algorithmic problem-solving assessments across Java, Python, and relational SQL database queries.",
      category: "coding",
      btnText: "View HackerRank Profile"
    }
  ];

  const onlineConnections = [
    {
      name: "GitHub",
      handle: "Cherukuri-Venkatesh",
      badge: "OPEN SOURCE & REPOSITORIES",
      badgeColor: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
      icon: GithubIcon,
      iconColor: "text-white",
      iconBg: "bg-orange-500/10 border-orange-500/30",
      cardBorder: "hover:border-orange-500/50",
      btnClass: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border-orange-500/30",
      url: "https://github.com/Cherukuri-Venkatesh",
      desc: "Full-stack backend architectures, Spring Boot microservices, Python data scripts, and open-source project repositories.",
      category: "online",
      btnText: "Explore GitHub Repositories"
    },
    {
      name: "LinkedIn",
      handle: "cherukuri-venkatesh",
      badge: "PROFESSIONAL NETWORK",
      badgeColor: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
      icon: LinkedinIcon,
      iconColor: "text-[#0A66C2]",
      iconBg: "bg-amber-500/10 border-amber-500/30",
      cardBorder: "hover:border-amber-400/50",
      btnClass: "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/30",
      url: "https://www.linkedin.com/in/venkateshcherukuri1/",
      desc: "Connect for technical discussions, software engineering opportunities, enterprise architecture exchanges, and collaboration.",
      category: "online",
      btnText: "Connect on LinkedIn"
    }
  ];

  const showCoding = activeTab === 'all' || activeTab === 'coding';
  const showOnline = activeTab === 'all' || activeTab === 'online';

  return (
    <section id="profiles" className="space-y-10 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>05. PROFILES &amp; CONNECTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Profiles &amp;{' '}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Online Connections
            </span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-obsidian-950/80 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({codingProfiles.length + onlineConnections.length})
          </button>
          <button
            onClick={() => setActiveTab('coding')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'coding'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding Profiles</span>
          </button>
          <button
            onClick={() => setActiveTab('online')}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'online'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Online Connections</span>
          </button>
        </div>
      </div>

      {/* CATEGORY 1: Coding Profiles */}
      {showCoding && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <h3 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold">
              Category 1 • Competitive Coding Profiles
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {codingProfiles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className={`glass-card p-6 rounded-2xl space-y-4 border-white/10 ${p.cardBorder} group flex flex-col justify-between transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl ${p.iconBg} border flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                        <Icon className={`w-6 h-6 ${p.iconColor}`} />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
                        {p.name}
                      </h4>
                      <p className="font-mono text-xs text-slate-400">Handle: {p.handle}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl border font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2 ${p.btnClass}`}
                  >
                    <span>{p.btnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CATEGORY 2: Online Connections */}
      {showOnline && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
              Category 2 • Online Connections &amp; Developer Networks
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {onlineConnections.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className={`glass-card p-6 rounded-2xl space-y-4 border-white/10 ${p.cardBorder} group flex flex-col justify-between transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl ${p.iconBg} border flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                        <Icon className={`w-6 h-6 ${p.iconColor}`} />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                        {p.name}
                      </h4>
                      <p className="font-mono text-xs text-slate-400">Network: {p.handle}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl border font-mono text-xs font-bold flex items-center justify-center gap-2 transition mt-2 ${p.btnClass}`}
                  >
                    <span>{p.btnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
}

export const ProfilesSection = CodingSection;
export default CodingSection;
