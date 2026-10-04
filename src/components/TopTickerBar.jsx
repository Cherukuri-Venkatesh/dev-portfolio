import React from 'react';
import { Terminal } from 'lucide-react';

export function TopTickerBar() {
  const items = [
    "BUILDING SCALABLE SYSTEMS",
    "EXPLORING AI SOLUTIONS",
    "TURNING IDEAS INTO REAL PROJECTS",
    "OPEN TO OPPORTUNITIES",
    "LEARNING • BUILDING • IMPROVING",
    "LET'S CREATE SOMETHING IMPACTFUL"
  ];

  return (
    <div className="w-full bg-[#050505] border-b border-white/5 py-1.5 px-3 text-orange-400 font-mono text-[10px] sm:text-[11px] tracking-wider relative z-50 overflow-hidden select-none flex items-center">
      
      {/* Left fixed indicator */}
      <div className="hidden sm:flex items-center gap-1.5 text-orange-400 shrink-0 mr-4 z-10 bg-[#050505] pr-2">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
        <Terminal className="w-3.5 h-3.5" />
      </div>

      {/* Infinite Seamless Marquee Track */}
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-marquee flex items-center whitespace-nowrap text-slate-300">
          
          {/* Track 1 */}
          <div className="flex items-center gap-6 pr-6 shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={`trk1-${idx}`}>
                <span className="hover:text-orange-400 transition-colors font-medium">
                  {item}
                </span>
                <span className="text-orange-500 font-bold text-xs select-none">✦</span>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Duplicate for continuous seamless loop) */}
          <div className="flex items-center gap-6 pr-6 shrink-0" aria-hidden="true">
            {items.map((item, idx) => (
              <React.Fragment key={`trk2-${idx}`}>
                <span className="hover:text-orange-400 transition-colors font-medium">
                  {item}
                </span>
                <span className="text-orange-500 font-bold text-xs select-none">✦</span>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* Right fixed status badge */}
      <div className="hidden md:flex items-center gap-2 text-slate-400 shrink-0 ml-4 text-[10px] z-10 bg-[#050505] pl-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-emerald-400 font-bold uppercase tracking-wider">AVAILABLE FOR ROLES</span>
      </div>

    </div>
  );
}

export default TopTickerBar;
