import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ANIMATION_CATALOG } from '../../data/animationCatalog';
import { X, Sparkles, CheckCircle2, Play, Network, Activity, Grid, Cpu, Radio, Sun, Clock, CircleDot } from 'lucide-react';

const ICON_MAP = {
  Network,
  Activity,
  Grid,
  Cpu,
  Sparkles,
  Radio,
  Sun,
  Clock,
  CircleDot
};

const CATEGORIES = [
  { id: 'all', label: 'All Slow-Mo (10)' },
  { id: 'connecting', label: '🕸️ Connecting Dots (3)' },
  { id: 'grid', label: '🌈 3D Mesh Grid (2)' },
  { id: 'pulse', label: '💓 Pulse Rate & ECG (3)' },
  { id: 'cosmic', label: '🌌 Consistency & Cosmos (2)' },
];

export function AnimGalleryModal() {
  const { activeModal, closeModal, activeScene, setActiveScene, playSound } = usePortfolio();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal === 'animGallery') {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  if (activeModal !== 'animGallery') return null;

  const filteredCatalog = filter === 'all'
    ? ANIMATION_CATALOG
    : ANIMATION_CATALOG.filter(a => a.category === filter);

  const handleFilter = (catId) => {
    setFilter(catId);
    playSound('click');
  };

  const handleSelectScene = (id, name) => {
    setActiveScene(id, name);
  };

  return (
    <div className="fixed inset-0 z-50 bg-obsidian-950/85 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="glass-glow-cyan w-full max-w-5xl max-h-[90vh] rounded-3xl border-white/20 shadow-2xl flex flex-col overflow-hidden animate-float">
        
        {/* Modal Header */}
        <div className="p-6 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyber-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2 flex-wrap">
                <span>3D Visual Studio // 10 World-Class Interactive Animations</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyber-cyan font-mono text-[10px]">
                  WebGL 60FPS
                </span>
              </h3>
              <p className="font-mono text-xs text-slate-400">
                Interactive preview laboratory for Connecting Dots, 3D Mesh Grid, Heartbeat ECG, and Cosmic WebGL art.
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 bg-obsidian-950/60 border-b border-white/5 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-slate-500 text-[11px] uppercase mr-2">Style Filter:</span>
          {CATEGORIES.map(cat => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition ${
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

        {/* 10 Animation Previews Grid */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[65vh]">
          {filteredCatalog.map(anim => {
            const isActive = activeScene === anim.id;
            const IconComp = ICON_MAP[anim.icon] || Sparkles;
            return (
              <div
                key={anim.id}
                className={`glass-card p-5 rounded-2xl border transition-all space-y-3 relative group ${
                  isActive
                    ? 'border-cyber-cyan bg-cyan-950/20 shadow-[0_0_25px_rgba(0,242,254,0.15)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${anim.badgeColor}`}
                  >
                    {anim.tag}
                  </span>
                  {isActive && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-cyber-cyan font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                      <span>ACTIVE SCENE</span>
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-cyber-cyan transition-colors flex items-center gap-2">
                    <span>{anim.id + 1 < 10 ? '0' + (anim.id + 1) : anim.id + 1}.</span>
                    <span>{anim.name}</span>
                  </h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mt-1">
                    {anim.desc}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-obsidian-950/80 border border-white/5 font-mono text-[10px] text-slate-400">
                  <span className="text-slate-500 uppercase font-semibold">3D Mechanics:</span> {anim.mechanics}
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => handleSelectScene(anim.id, anim.name)}
                    className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-cyber-cyan text-obsidian-950 shadow-md'
                        : 'glass-panel hover:bg-cyber-cyan hover:text-obsidian-950 text-white border-white/10'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>CURRENTLY ACTIVE SCENE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>▶ TEST LIVE IN 3D BACKGROUND</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-obsidian-900/90 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] truncate mr-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="truncate">Click any card's <strong>[ ▶ TEST LIVE IN 3D ]</strong> button to immediately activate the background WebGL scene.</span>
          </div>
          <button
            onClick={closeModal}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-obsidian-950 font-bold hover:scale-105 transition shrink-0"
          >
            Apply & Close Studio
          </button>
        </div>

      </div>
    </div>
  );
}
