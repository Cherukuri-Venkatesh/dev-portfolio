import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  FileText, 
  Download, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Brain, 
  Cloud, 
  Trophy, 
  Code2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export function AboutSection() {
  const { openModal, showToast, playSound } = usePortfolio();

  return (
    <section id="about" className="relative scroll-mt-28 py-8 sm:py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>01. NARRATIVE &amp; BACKGROUND</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Logical Problem-Solving &amp;
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Scalable Architecture
            </span>
          </h2>
        </div>

        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed">
          Computer Science engineering student at KL University focused on scalable Java backends, cloud systems, and AI engineering.
        </p>
      </div>

      {/* Main Grid: Left Narrative + Right Bento Resume & Focus Hub */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Story Narrative (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">

          {/* Narrative Paragraph with Orange Accent Border */}
          <div className="border-l-2 border-orange-500/80 pl-4 sm:pl-5 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science student at <strong className="text-white font-semibold">KL University</strong> with a <strong className="text-orange-400 font-semibold">9.67 CGPA</strong>, focused on engineering high-integrity backend systems, reliable cloud infrastructure, and modern AI applications.
            </p>
            <p>
              My engineering approach is grounded in deep fundamentals: writing clean, production-grade code, designing ACID-compliant database schemas, and building decoupled microservices. I enjoy taking systems from conception to cloud deployment with rigorous attention to correctness and speed.
            </p>
            <p>
              I believe in speaking genuinely through code, building practical full-stack projects, and continuously expanding my problem-solving capabilities across algorithmic logic, cloud environments, and intelligent agent workflows.
            </p>
          </div>

          {/* Philosophy Quote Card */}
          <div className="glass-card-ember p-4 sm:p-5 rounded-2xl border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
            <p className="font-sans italic text-slate-300 text-xs sm:text-sm leading-relaxed">
              "Continuous improvement through hands-on implementation — mastering AI architectures, refining backend microservices, and mastering cloud deployments."
            </p>
            <div className="mt-3 flex items-center justify-between text-xs font-mono">
              <span className="text-orange-400 font-bold">— Cherukuri Venkatesh</span>
              <span className="text-slate-500">Visakhapatnam, AP</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bento Grid with Resume Card & 4 Core Focus Pillars (6 Cols) */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          
          {/* 1. Large High-Impact Orange RESUME Card */}
          <div 
            onClick={() => openModal('resume')}
            className="group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white shadow-[0_10px_35px_rgba(255,87,34,0.35)] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_45px_rgba(255,87,34,0.5)]"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            
            <div className="flex items-center justify-between relative z-10">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl tracking-wider uppercase">
                  RESUME
                </div>
                <div className="font-mono text-xs text-orange-100 tracking-widest mt-1 flex items-center gap-1.5 font-bold uppercase">
                  <span>CLICK TO VIEW &amp; DOWNLOAD</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* 2. Current Engineering Focus Card (The 4 Genuine Pillars) */}
          <div className="glass-card-ember p-5 sm:p-6 rounded-2xl border-white/5 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  Current Learning &amp; Engineering Focus
                </span>
              </div>
              <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/30 font-bold">
                ACTIVE FOCUS
              </span>
            </div>

            <div className="grid gap-3">
              {/* Focus 1: Advanced AI Systems, RAG & LLMs */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-orange-500/40 transition group">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition mt-0.5">
                    <Brain className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition">
                      Advanced AI Systems, RAG &amp; LLMs
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
                      Mastering modern AI tools, prompt engineering, and building production-ready AI systems utilizing Retrieval-Augmented Generation (RAG), vector stores, and LLM orchestration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus 2: Python, DSA & Data Analytics */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-amber-500/40 transition group">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition mt-0.5">
                    <Code2 className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition">
                      Python Mastery, DSA &amp; Data Analytics
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
                      Rigorous algorithmic problem-solving with Python DSA, combined with Python for data analytics, structured data pipelines, NumPy, Pandas, and exploratory data visualization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus 3: Spring Boot Backend Systems */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-orange-500/40 transition group">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition mt-0.5">
                    <Layers className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition">
                      Enterprise Backend Systems with Spring Boot
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
                      Designing high-throughput REST APIs, Spring Security with stateless JWT role-based access control, relational database modeling (MySQL &amp; PostgreSQL), and microservice patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus 4: FDE, SWE, Cloud & Deployments */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-amber-500/40 transition group">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition mt-0.5">
                    <Cloud className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition">
                      FDE &amp; SWE Path: Cloud &amp; Deployments
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
                      Preparing for Forward Deployed Engineer (FDE) and Software Engineering roles by sharpening cloud architectures (Microsoft Azure certified), Docker containerization, and modern deployment tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
