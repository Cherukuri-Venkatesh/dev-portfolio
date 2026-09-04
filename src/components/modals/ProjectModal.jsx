import React, { useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { X, Layers, Cpu, Database, Shield, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export function ProjectModal() {
  const { activeModal, closeModal, selectedProject } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal === 'project') {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  if (activeModal !== 'project' || !selectedProject) return null;

  const bp = selectedProject.blueprint || {};

  return (
    <div className="fixed inset-0 z-50 bg-obsidian-950/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-glow-cyan w-full max-w-4xl max-h-[90vh] rounded-3xl border-white/20 shadow-2xl flex flex-col overflow-hidden animate-float">
        
        {/* Modal Header */}
        <div className="p-6 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="font-mono text-xs text-cyber-cyan uppercase font-bold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{selectedProject.badge}</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-1">
              {selectedProject.title}
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm font-sans">
          
          {/* Tech Stack Banner */}
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-white/10 font-mono text-xs">
            <span className="text-cyber-cyan font-bold uppercase mr-2">TECH STACK:</span>
            <span className="text-slate-200">{selectedProject.technologies.join(', ')}</span>
          </div>

          {/* Section 1: Architecture */}
          {bp.architecture && (
            <div className="space-y-2">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyber-cyan" />
                <span>{bp.architectureTitle || 'System Architecture & Design'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {bp.architecture}
              </p>
            </div>
          )}

          {/* Section 2: Security / Latency */}
          {bp.security && (
            <div className="space-y-2">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyber-emerald" />
                <span>{bp.securityTitle || 'Security & Role-Based Access Control (RBAC)'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {bp.security}
              </p>
            </div>
          )}

          {/* Section 3: Integration / Database */}
          {bp.integration && (
            <div className="space-y-2">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-violet" />
                <span>{bp.integrationTitle || 'Specialized Integrations & Capabilities'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {bp.integration}
              </p>
            </div>
          )}

          {/* Sandbox REST Endpoint Box */}
          {bp.sandbox && (
            <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2 font-mono text-xs shadow-inner">
              <div className="text-slate-400 font-bold uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>{bp.sandbox.title}</span>
              </div>
              <div className="text-cyber-emerald font-bold">{bp.sandbox.endpoint}</div>
              <div className="text-slate-500">{bp.sandbox.payloadComment}</div>
              <div className="text-cyber-cyan leading-relaxed pt-1 border-t border-white/5">
                {bp.sandbox.response}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-obsidian-900/90 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-500 hidden sm:inline">Live Architecture Sandbox Verified</span>

          <button
            onClick={closeModal}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition ml-auto"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
}
