import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  Coffee, 
  Layers, 
  Network, 
  Database, 
  Cpu, 
  ShieldCheck, 
  FileCode, 
  Brain, 
  Binary, 
  Sparkles, 
  HardDrive, 
  Zap, 
  Cloud, 
  Server, 
  Box, 
  GitBranch, 
  Package, 
  Layout, 
  Video, 
  Monitor 
} from 'lucide-react';

const ICON_MAP = {
  Coffee,
  Layers,
  Network,
  Database,
  Cpu,
  ShieldCheck,
  FileCode,
  Brain,
  Binary,
  Sparkles,
  HardDrive,
  Zap,
  Cloud,
  Server,
  Box,
  GitBranch,
  Package,
  Layout,
  Video,
  Monitor
};

const CATEGORIES = [
  { id: 'all', label: 'All Capabilities (18)' },
  { id: 'java', label: '☕ Java Backend Development' },
  { id: 'python_data', label: '🐍 Python, Data Science & ML' },
  { id: 'database', label: '🗄️ SQL & Databases' },
  { id: 'cloud', label: '☁️ Cloud & DevOps (AZ-900)' },
  { id: 'web', label: '🌐 Web & Realtime (WebRTC)' },
];

export function SkillsSection() {
  const { playSound } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? RESUME_DATA.skills
    : RESUME_DATA.skills.filter(s => s.category === selectedCategory);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    playSound('click');
  };

  return (
    <section id="skills" className="space-y-10 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 02. TECHNICAL CAPABILITIES</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Technology Matrix
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Structured according to real-world engineering roles: Java Backend, Python Data Science / ML, Relational SQL Databases, and Cloud Technologies.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition shadow-sm ${
                isActive
                  ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Card Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = ICON_MAP[skill.icon] || Cpu;
          return (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl space-y-3 group hover:border-cyber-cyan/30 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-cyber-cyan transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="font-mono text-xs text-cyber-cyan font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-obsidian-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                {skill.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
