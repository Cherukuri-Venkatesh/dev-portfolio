import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, Zap } from 'lucide-react';

const QUICK_PRESETS = [
  { id: 0, label: '01. Cyan Plexus', title: 'Neural 3D Plexus (Cyan/Violet)' },
  { id: 1, label: '02. Heartbeat (ECG)', title: 'Bio-Digital Heartbeat Pulse (ECG)' },
  { id: 2, label: '03. Red Synapse', title: 'Crimson Red Connecting Dots' },
  { id: 3, label: '04. 3D Color Grid', title: 'Holographic 3D Colorful Topo Mesh Grid' },
];

export function Quick3DDock() {
  const { activeScene, setActiveScene, trigger3DBurst, openModal } = usePortfolio();

  return (
    <aside
      id="quick-3d-dock"
      aria-label="3D Scene Switcher"
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border-white/10 shadow-2xl backdrop-blur-xl"
    >
      <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 border-r border-white/10">
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
        <span className="text-slate-300">3D ENGINE:</span>
      </div>

      <button
        onClick={() => openModal('animGallery')}
        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-violet-500/30 to-cyan-500/30 border border-violet-400/40 text-cyber-purple hover:text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-sm hover:scale-105"
        title="Open 3D Animation Previews Studio"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>🎨 10 Previews</span>
      </button>

      {QUICK_PRESETS.map((p) => {
        const isActive = activeScene === p.id;
        return (
          <button
            key={p.id}
            onClick={() => setActiveScene(p.id, p.title)}
            className={`px-2 py-1.5 rounded-xl font-mono text-xs transition flex items-center gap-1 ${
              isActive
                ? 'text-white bg-cyber-cyan/20 border border-cyber-cyan/40 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title={p.title}
          >
            <span>{p.label}</span>
          </button>
        );
      })}

      <button
        onClick={trigger3DBurst}
        className="p-1.5 px-2 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 text-cyber-purple border border-violet-500/30 font-mono text-xs transition flex items-center gap-1 shadow-sm hover:scale-105"
        title="Pulse Energy Surge"
      >
        <Zap className="w-3.5 h-3.5" />
        <span>Surge</span>
      </button>
    </aside>
  );
}
