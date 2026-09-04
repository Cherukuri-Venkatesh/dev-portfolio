import React, { useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { RESUME_DATA } from '../../data/portfolioData';
import { X, Download, Printer, FileText, CheckCircle2 } from 'lucide-react';

export function ResumeModal() {
  const { activeModal, closeModal } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal === 'resume') {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  if (activeModal !== 'resume') return null;

  return (
    <div className="fixed inset-0 z-50 bg-obsidian-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-3xl border-white/20 shadow-2xl flex flex-col overflow-hidden animate-float">
        
        {/* Resume Header */}
        <div className="p-6 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyber-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                {RESUME_DATA.name} — Official Resume
              </h3>
              <p className="font-mono text-xs text-slate-400">
                {RESUME_DATA.headline} • {RESUME_DATA.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`/${encodeURIComponent(RESUME_DATA.resumeFileName)}`}
              download={RESUME_DATA.downloadFileName}
              className="p-2 px-3 rounded-xl bg-cyber-cyan text-obsidian-950 font-bold font-mono text-xs flex items-center gap-1.5 transition hover:bg-cyan-300"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={closeModal}
              className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Buffer */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm font-sans select-text bg-obsidian-950">
          
          {/* Header Info */}
          <div className="border-b border-white/10 pb-4 space-y-1">
            <h2 className="font-display font-black text-2xl text-white">{RESUME_DATA.name.toUpperCase()}</h2>
            <div className="font-mono text-xs text-cyber-cyan font-bold">JAVA BACKEND DEVELOPER & DATA SCIENCE</div>
            <div className="font-mono text-xs text-slate-400 pt-1 flex flex-wrap gap-4">
              <span>📞 {RESUME_DATA.phone}</span>
              <span>✉️ {RESUME_DATA.email}</span>
              <span>📍 {RESUME_DATA.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              TECHNICAL SKILLS
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p><strong>Programming Languages:</strong> Python, Java, SQL</p>
              <p><strong>Backend Technologies:</strong> Spring Boot, Spring Framework, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices Architecture</p>
              <p><strong>Core Concepts:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Multithreading, System Design, Problem Solving</p>
              <p><strong>Databases & Cloud:</strong> MySQL, PostgreSQL, Relational Database Modeling, Query Optimization, Microsoft Azure (AZ-900), AWS</p>
              <p><strong>Authentication & Security:</strong> Spring Security, JWT (JSON Web Tokens) Authentication, Role-Based Access Control (RBAC)</p>
              <p><strong>Web Technologies:</strong> React.js, HTML5, CSS3, Responsive Web Design, WebRTC</p>
              <p><strong>Developer Tools & Platforms:</strong> Git, GitHub, GitHub Copilot, Postman, Maven, Docker Basics, VS Code, IntelliJ IDEA</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              PROJECTS
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              {RESUME_DATA.projects.map((proj, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>{proj.title} ({proj.type})</span>
                  </div>
                  <div className="font-mono text-[11px] text-cyan-400">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              ACHIEVEMENTS & LEADERSHIP
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              {RESUME_DATA.achievements.map((ach, aIdx) => (
                <li key={aIdx}>
                  <strong>{ach.title}:</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              CERTIFICATIONS
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              {RESUME_DATA.certifications.map((cert, cIdx) => (
                <li key={cIdx}>
                  <strong>{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              EDUCATION
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              {RESUME_DATA.education.map((edu, eIdx) => (
                <div key={eIdx}>
                  <div className="flex justify-between font-bold text-white">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="text-emerald-400 font-mono">{edu.score}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase border-b border-white/10 pb-1 mb-2">
              CODING PROFILES & LINKS
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
              <a href={RESUME_DATA.socialLinks.codechef} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CodeChef: kl2400032597 (1000+ Solved)</a>
              <a href={RESUME_DATA.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">LeetCode: kl2400032597</a>
              <a href={RESUME_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">GitHub: Cherukuri-Venkatesh</a>
              <a href={RESUME_DATA.socialLinks.hackerrank} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">HackerRank: kl2400032597</a>
              <a href={RESUME_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn: venkateshcherukuri1</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
