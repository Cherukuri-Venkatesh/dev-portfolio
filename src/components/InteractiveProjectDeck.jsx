import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  Sparkles, 
  Layers, 
  Code2, 
  ArrowUpRight, 
  Terminal, 
  CheckCircle, 
  Play, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Grid3X3, 
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

const withBase = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

const DECK_PROJECTS = [
  {
    id: "aayush",
    title: "Aayush – Unified Healthcare Ecosystem",
    shortTitle: "AAYUSH HEALTHCARE",
    category: "Java Backend & AI",
    badge: "ENTERPRISE JAVA • RESTFUL APIS",
    badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    image: withBase("project-aayush.jpg"),
    accentColor: "#ff5722",
    endpointsCount: "25+ Endpoints",
    latency: "< 120ms P99",
    securityPill: "JWT RBAC • 4 ROLES",
    description: "Architected a scalable multi-tier healthcare backend engineered with Java, Spring Boot, MySQL, WebRTC, and Gemini AI. Exposes 25+ RESTful APIs handling EHR, digital prescriptions, and doctor queues.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Spring Security", "JWT", "WebRTC", "Google Gemini AI"],
    github: "https://github.com/Cherukuri-Venkatesh",
    live: "#",
    metrics: [
      { label: "REST Endpoints", val: "25+ Endpoints" },
      { label: "P99 Latency", val: "< 120ms" },
      { label: "Security", val: "Stateless JWT RBAC" }
    ],
    sandbox: {
      endpoint: "POST /api/v1/telehealth/triage-assessment",
      payload: '{ "patientId": "P-8821", "vitals": { "hr": 72, "spo2": 98 }, "triageTier": "CRITICAL" }',
      response: '{ "status": "DISPATCHED", "assignedDoctorId": "DOC-409", "queuePosition": 1, "p2pToken": "jwt_webrtc_live_2026" }'
    }
  },
  {
    id: "urbanride",
    title: "UrbanRide – Smart Ride-Hailing Platform",
    shortTitle: "URBANRIDE PLATFORM",
    category: "Spring Boot Microservices & React",
    badge: "10K+ CONCURRENT • LEAFLET MAPS",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    image: withBase("project-travel.jpg"),
    accentColor: "#ff9800",
    endpointsCount: "25+ Endpoints",
    latency: "< 35ms P99",
    securityPill: "POLICY-BASED PERMISSIONS",
    description: "Developed a scalable ride-hailing architecture using Spring Boot microservices and React, enhancing horizontal scaling to support 10k+ concurrent requests with Leaflet live driver tracking and spatial MySQL indexing.",
    technologies: ["Java 21", "Spring Boot", "Spring Cloud", "React", "MySQL", "Spring Security", "JWT", "REST APIs", "Leaflet"],
    github: "https://github.com/Cherukuri-Venkatesh",
    live: "#",
    metrics: [
      { label: "Concurrent Scale", val: "10k+ Requests" },
      { label: "Booking Latency", val: "-35% Response Time" },
      { label: "Allocation Accuracy", val: "+25% Accuracy" }
    ],
    sandbox: {
      endpoint: "POST /api/v1/dispatch/nearby-drivers?lat=17.6868&lng=83.2185&radius=5km",
      payload: '{ "riderId": "USR-9941", "pickup": { "lat": 17.6868, "lng": 83.2185 }, "tier": "PREMIUM" }',
      response: '{ "status": "DISPATCHED", "matchedDrivers": 8, "nearestEta": "2 mins", "dispatchToken": "urbanride_jwt_live_2026" }'
    }
  },

];

export function InteractiveProjectDeck() {
  const { openModal, showToast, playSound } = usePortfolio();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL');
  const [viewMode, setViewMode] = useState('deck'); // 'deck' or 'grid'
  const [sandboxOutput, setSandboxOutput] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const currentProject = DECK_PROJECTS[selectedIndex] || DECK_PROJECTS[0];

  const handleSelectCard = (index) => {
    playSound('click');
    setSelectedIndex(index);
    setSandboxOutput(null);
  };

  const runSandbox = () => {
    playSound('click');
    setIsSimulating(true);
    setSandboxOutput(null);

    setTimeout(() => {
      playSound('success');
      setIsSimulating(false);
      setSandboxOutput(currentProject.sandbox.response);
      showToast(`200 OK — ${currentProject.shortTitle} API returned verified response!`, 'success');
    }, 450);
  };

  return (
    <section id="projects" className="relative scroll-mt-28 py-8 sm:py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>03. FEATURED SYSTEMS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Flagship Engineering &amp;{' '}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Project Deck
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:items-end gap-3">
          <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed md:text-right">
            Production-grade Java backend systems, microservice architectures, and full-stack cloud applications.
          </p>

          {/* View Mode Toggle (Deck vs Grid) */}
          <div className="flex items-center gap-2 bg-obsidian-900/90 border border-white/10 p-1.5 rounded-2xl w-fit">
          <button
            onClick={() => { playSound('click'); setViewMode('deck'); }}
            className={`px-4 py-1.5 rounded-xl font-mono text-xs font-bold transition flex items-center gap-2 ${
              viewMode === 'deck' 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D DECK</span>
          </button>
          <button
            onClick={() => { playSound('click'); setViewMode('grid'); }}
            className={`px-4 py-1.5 rounded-xl font-mono text-xs font-bold transition flex items-center gap-2 ${
              viewMode === 'grid' 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>GRID VIEW</span>
          </button>
        </div>
      </div>
    </div>

      {viewMode === 'deck' ? (
        /* 3D Fan-out Deck View (Inspired by Samyak 2026) */
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 3D Interactive Card Stack (6 Cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]">
            
            {/* Ambient Deck Glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-orange-600/20 blur-[120px] pointer-events-none -z-10" />

            {/* Deck Instruction Pill */}
            <div className="absolute top-2 font-mono text-[11px] text-slate-400 uppercase tracking-widest bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
              <span>CLICK TO EXPAND &amp; INSPECT CARD</span>
            </div>

            {/* Fanned-out 3D Card Stack Container */}
            <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] perspective-1500 mt-6">
              {DECK_PROJECTS.map((proj, idx) => {
                const isSelected = idx === selectedIndex;
                const offset = idx - selectedIndex;
                
                // 3D Transform calculations for card fan-out
                let rotZ = offset * 8;
                let transX = offset * 45;
                let transY = Math.abs(offset) * 15;
                let transZ = isSelected ? 80 : -Math.abs(offset) * 50;
                let scale = isSelected ? 1.05 : 0.92;

                return (
                  <div
                    key={proj.id}
                    onClick={() => handleSelectCard(idx)}
                    className={`absolute inset-0 rounded-2xl cursor-pointer select-none transition-all duration-500 ease-out transform-style-3d border overflow-hidden ${
                      isSelected
                        ? 'border-orange-500 shadow-[0_15px_40px_rgba(255,87,34,0.45)] z-30'
                        : 'border-white/15 bg-obsidian-900/90 shadow-xl opacity-80 hover:opacity-100 hover:border-orange-500/50 z-10'
                    }`}
                    style={{
                      transform: `translateX(${transX}px) translateY(${transY}px) translateZ(${transZ}px) rotateZ(${rotZ}deg) scale(${scale})`,
                      transitionProperty: 'transform, box-shadow, border-color, opacity'
                    }}
                  >
                    {/* Card Banner Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-obsidian-950">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-obsidian-950/80 border border-orange-500/40 text-orange-400">
                          #{idx + 1}
                        </span>
                        <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-obsidian-950 uppercase tracking-wider">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 bg-obsidian-900/95 space-y-2 h-[calc(100%-12rem)] flex flex-col justify-between">
                      <div>
                        <div className="font-display font-black text-base text-white line-clamp-1">
                          {proj.shortTitle}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-sans">
                          {proj.description}
                        </p>
                      </div>

                      {/* Card Footer Metrics */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[10px]">
                        <span className="text-orange-400 font-bold">{proj.latency}</span>
                        <span className="text-slate-400">{proj.endpointsCount}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Card Selector Dots */}
            <div className="flex items-center gap-2 mt-6">
              {DECK_PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectCard(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex 
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-400' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Select Project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Live Inspector Panel & REST Sandbox (6 Cols) */}
          <div className="lg:col-span-6 glass-glow-ember rounded-3xl p-6 sm:p-7 border-orange-500/30 space-y-5">
            
            {/* Inspector Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="font-mono text-[10px] text-orange-400 uppercase tracking-widest font-bold">
                  PROJECT SPECIFICATION INSPECTOR
                </div>
                <h3 className="font-display font-black text-2xl text-white mt-0.5">
                  {currentProject.title}
                </h3>
              </div>
              <span className={`font-mono text-[10px] px-3 py-1 rounded-full border ${currentProject.badgeColor} font-bold`}>
                {currentProject.securityPill}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              {currentProject.description}
            </p>

            {/* Performance Telemetry Strip */}
            <div className="grid grid-cols-3 gap-2.5 font-mono text-xs">
              {currentProject.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 space-y-0.5">
                  <div className="text-[9px] text-slate-400 uppercase">{m.label}</div>
                  <div className="font-display font-bold text-sm text-orange-400">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {currentProject.technologies.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200">
                  {t}
                </span>
              ))}
            </div>

            {/* Interactive Live REST Sandbox */}
            <div className="p-4 rounded-2xl bg-obsidian-950 border border-orange-500/25 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300 text-[11px] font-bold">
                  <Terminal className="w-3.5 h-3.5 text-orange-400" />
                  <span>SIMULATED REST SANDBOX</span>
                </div>
                <button
                  onClick={runSandbox}
                  disabled={isSimulating}
                  className="px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 text-obsidian-950 font-bold text-[10px] flex items-center gap-1.5 transition disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <Play className="w-3 h-3 fill-obsidian-950" />
                  <span>{isSimulating ? 'EXECUTING...' : 'SEND REQUEST'}</span>
                </button>
              </div>

              {/* Endpoint Code Display */}
              <div className="p-2.5 rounded-xl bg-obsidian-900 border border-white/5 text-[11px] text-slate-300 overflow-x-auto">
                <div className="text-orange-400 font-bold">{currentProject.sandbox.endpoint}</div>
                <div className="text-slate-500 mt-1">{currentProject.sandbox.payload}</div>
              </div>

              {/* Simulated Response */}
              {sandboxOutput && (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] overflow-x-auto space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px]">
                    <CheckCircle className="w-3 h-3" />
                    <span>HTTP 200 OK • PAYLOAD COMMITTED</span>
                  </div>
                  <pre className="text-[10px] text-emerald-200 font-mono">{sandboxOutput}</pre>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => openModal('project', currentProject.id)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-display font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-98 transition cursor-pointer"
              >
                <span>Full System Blueprint</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-obsidian-900 border border-white/10 hover:border-white/30 text-slate-200 hover:text-white transition hover:scale-105"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Responsive Grid View */
        <div className="grid md:grid-cols-2 gap-6">
          {DECK_PROJECTS.map((proj) => (
            <div 
              key={proj.id} 
              className="glass-card-ember rounded-2xl overflow-hidden border-white/10 hover:border-orange-500/40 transition group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-obsidian-950">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-obsidian-950/80 border border-orange-500/40 text-orange-400">
                  {proj.category}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-black text-lg text-white group-hover:text-orange-400 transition">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 5).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="font-mono text-xs text-orange-400 font-bold">{proj.latency}</span>
                  <button
                    onClick={() => openModal('project', proj.id)}
                    className="font-mono text-xs font-bold text-white hover:text-orange-400 flex items-center gap-1 transition"
                  >
                    <span>Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default InteractiveProjectDeck;
