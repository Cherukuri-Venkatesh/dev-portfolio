import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  FileText, 
  Copy, 
  Check, 
  PhoneCall, 
  MapPin, 
  Sparkles,
  Download
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  CodeChefIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './icons/BrandIcons';

export function Hero() {
  const { openModal, showToast, playSound } = usePortfolio();
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const currentRole = RESUME_DATA.roles[roleIdx];
    let timeout;

    if (isDeleting) {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setCharIdx(prev => prev - 1);
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIdx(prev => (prev + 1) % RESUME_DATA.roles.length);
      }
    } else {
      if (charIdx < currentRole.length) {
        timeout = setTimeout(() => {
          setCharIdx(prev => prev + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx]);

  const currentRoleText = RESUME_DATA.roles[roleIdx].substring(0, charIdx);

  const scrollToSection = (id) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    playSound('success');
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      showToast('Email address copied to clipboard!', 'success');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      showToast('Phone number copied to clipboard!', 'success');
    }
  };

  return (
    <section id="hero" className="relative scroll-mt-24 pb-12 pt-0">
      
      {/* Top Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs w-fit mb-5 shadow-[0_0_20px_rgba(0,242,254,0.12)]">
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
        <span>SYSTEM ONLINE // JAVA BACKEND • DATA SCIENCE • CLOUD TECHNOLOGIES</span>
      </div>

      {/* Main Headline & Profiles Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Side: Headline, Narrative & Stats (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="font-mono text-xs sm:text-sm tracking-widest text-slate-400 uppercase">
              Hello World, I am
            </h2>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Cherukuri <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-violet text-glow-cyan">
                Venkatesh
              </span>
            </h1>
            <div className="font-mono text-sm sm:text-base text-cyber-emerald font-semibold flex items-center gap-2 pt-1">
              <span>&gt;</span>
              <span>{currentRoleText}</span>
              <span className="cursor-blink text-cyber-cyan font-bold">|</span>
            </div>
          </div>

          {/* Professional Summary with exact styling */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl">
            Results-driven <strong className="text-white font-semibold">Java Backend Developer</strong>, <strong className="text-cyber-cyan font-semibold">Data Science & Data Engineering Practitioner</strong>, <strong className="text-cyber-violet font-semibold">AI Engineer</strong>, and <strong className="text-emerald-400 font-semibold">Forward Deployment Engineer (FDE)</strong> with strong expertise in <strong className="text-white font-semibold">Java, Spring Boot, Spring Framework, RESTful APIs, MySQL, and SQL</strong>. Proficient in designing scalable backend architectures, relational database schemas, stateless JWT authentication, and data-driven solutions using <strong className="text-cyber-cyan font-semibold">Python and SQL for Data Analytics, ML Pipelines, and AI integrations</strong>. Hands-on expertise in <strong className="text-cyber-purple font-semibold">Cloud Technologies (Microsoft Azure AZ-900 Certified, AWS Cloud, Docker)</strong> and collaborative <strong className="text-slate-200 font-semibold">GitHub CI/CD workflows</strong>. Built on a solid algorithmic foundation with <strong className="text-white font-semibold">1000+ competitive programming problems solved</strong> across CodeChef, LeetCode, and HackerRank with <strong className="text-emerald-400 font-semibold">9.67 CGPA</strong> at KL University.
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="glass-card p-3.5 rounded-2xl border-white/5 space-y-0.5">
              <div className="text-lg sm:text-xl font-display font-black text-cyber-cyan">1000+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">PROBLEMS SOLVED</div>
            </div>
            <div className="glass-card p-3.5 rounded-2xl border-white/5 space-y-0.5">
              <div className="text-lg sm:text-xl font-display font-black text-cyber-emerald">9.67</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">CGPA (B.TECH CSE)</div>
            </div>
            <div className="glass-card p-3.5 rounded-2xl border-white/5 space-y-0.5">
              <div className="text-lg sm:text-xl font-display font-black text-cyber-purple">25+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">REST ENDPOINTS</div>
            </div>
            <div className="glass-card p-3.5 rounded-2xl border-white/5 space-y-0.5">
              <div className="text-lg sm:text-xl font-display font-black text-cyber-amber">2x</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">SIH HACKATHON LEAD</div>
            </div>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-obsidian-950 font-display font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-obsidian-950" />
            </button>
            <a
              href={`${import.meta.env.BASE_URL}${RESUME_DATA.resumeFileName}`}
              download={RESUME_DATA.downloadFileName}
              onClick={() => {
                playSound('success');
                showToast('Initiating resume.pdf download...', 'success');
              }}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyber-cyan/50 text-cyber-cyan font-mono text-xs font-bold flex items-center gap-2 transition shadow-sm hover:scale-105"
              title="Download Verified Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
            <button
              onClick={() => openModal('resume')}
              className="px-4 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 font-mono text-xs border-white/10 flex items-center gap-2 transition hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>VIEW RESUME</span>
            </button>
          </div>
        </div>

        {/* Right Side: VERIFIED PROFILES & DIRECT CHANNELS (Vertical Order Card) (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="glass-glow-cyan rounded-3xl p-5 sm:p-6 border-white/15 shadow-2xl space-y-3.5">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                  VERIFIED PROFILES &amp; CHANNELS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 font-semibold">
                DIRECT
              </span>
            </div>

            {/* Vertical Stack of Channels */}
            <div className="space-y-2 font-mono text-xs">
              
              {/* 1. LinkedIn */}
              <a
                href={RESUME_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 flex items-center justify-between group transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">LINKEDIN PROFILE</div>
                    <div className="text-slate-200 font-semibold group-hover:text-blue-400 transition text-[11px]">
                      venkateshcherukuri1
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              {/* 2. GitHub */}
              <a
                href={RESUME_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-white/40 hover:bg-white/5 flex items-center justify-between group transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition">
                    <GithubIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">GITHUB REPOSITORIES</div>
                    <div className="text-slate-200 font-semibold group-hover:text-white transition text-[11px]">
                      Cherukuri-Venkatesh
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              {/* 3. Email */}
              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-between group transition">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition">
                    <svg className="w-4 h-4 text-cyber-cyan" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">PRIMARY EMAIL</div>
                    <a
                      href={`mailto:${RESUME_DATA.email}`}
                      className="text-slate-200 font-semibold group-hover:text-cyber-cyan transition text-[11px] select-all"
                    >
                      {RESUME_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.email, 'email')}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* 4. Phone */}
              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-between group transition">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-cyber-emerald group-hover:scale-110 transition">
                    <svg className="w-4 h-4 text-cyber-emerald" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">DIRECT PHONE</div>
                    <a
                      href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                      className="text-slate-200 font-semibold group-hover:text-cyber-emerald transition text-[11px] select-all"
                    >
                      {RESUME_DATA.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                    className="p-1 rounded-lg hover:bg-emerald-500/20 text-slate-500 hover:text-emerald-400 transition"
                    title="Call Phone"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone')}
                    className="p-1 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* 5. CodeChef */}
              <a
                href={RESUME_DATA.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 flex items-center justify-between group transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <CodeChefIcon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">CODECHEF (1000+ PROBLEMS)</div>
                    <div className="text-slate-200 font-semibold group-hover:text-amber-400 transition text-[11px]">
                      kl2400032597
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              {/* 6. LeetCode */}
              <a
                href={RESUME_DATA.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-between group transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition">
                    <LeetCodeIcon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">LEETCODE PROFILE</div>
                    <div className="text-slate-200 font-semibold group-hover:text-orange-400 transition text-[11px]">
                      kl2400032597
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              {/* 7. HackerRank */}
              <a
                href={RESUME_DATA.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-between group transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-cyber-emerald group-hover:scale-110 transition">
                    <HackerRankIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase">HACKERRANK PROFILE</div>
                    <div className="text-slate-200 font-semibold group-hover:text-emerald-400 transition text-[11px]">
                      kl2400032597
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

            </div>

            {/* Card Bottom Location Bar */}
            <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Visakhapatnam, AP, IN</span>
              </div>
              <span className="text-emerald-400 font-semibold">● Active Response</span>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* HOLOGRAPHIC JAVA CODE & ENGINEERING ECOSYSTEM CARD (BELOW HERO GRID) */}
      {/* ========================================================================= */}
      <div className="mt-8 glass-glow-cyan rounded-3xl p-6 sm:p-7 border-white/15 shadow-2xl relative overflow-hidden">
        
        {/* Window Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-4 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="font-mono text-xs text-slate-300 ml-2 font-bold">
              architect@venkatesh-node-01:~/engineering-dna
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-cyber-cyan uppercase tracking-wider bg-cyber-cyan/10 border border-cyber-cyan/30 px-2.5 py-0.5 rounded font-bold">
              DEPLOYMENT_READY // FDE_V2.5
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 text-slate-300">
          <p className="text-slate-500">// Distributed Systems, Data Engineering, AI & Forward Deployment Blueprint</p>
          <p><span className="text-cyber-purple">@Component</span></p>
          <p><span className="text-blue-400">public class</span> <span className="text-yellow-300">VenkateshEngineeringEcosystem</span> <span className="text-blue-400">implements</span> <span className="text-emerald-300">DeploymentReadyEngineer</span>, <span className="text-emerald-300">ForwardDeploymentEngineer</span> &#123;</p>
          
          <div className="pl-4 sm:pl-6 space-y-1.5 text-slate-300 border-l border-white/5 ml-1">
            <p><span className="text-slate-500">// Core Dimensions: Consistency • Data Engineering • Java Backend • AI & Cloud</span></p>
            <p><span className="text-blue-400">private final</span> MomentumStreak <span className="text-cyan-300">consistency</span> = <span className="text-emerald-300">"1000+ Algorithmic Problems Solved (CodeChef, LeetCode, HackerRank)"</span>;</p>
            <p><span className="text-blue-400">private final</span> BackendStack <span className="text-cyan-300">javaBackend</span> = <span className="text-emerald-300">"Java 17/21, Spring Boot 3.x, Microservices, REST APIs, JPA, JWT RBAC"</span>;</p>
            <p><span className="text-blue-400">private final</span> DataStack <span className="text-cyan-300">dataEngineering</span> = <span className="text-emerald-300">"Python 3.x, SQL Analytics, MySQL, PostgreSQL, Schema Normalization, Pandas"</span>;</p>
            <p><span className="text-blue-400">private final</span> AIEngine <span className="text-cyan-300">aiIntegration</span> = <span className="text-emerald-300">"Google Gemini AI API, LLM Prompt Engineering, Automated Triage Pipelines"</span>;</p>
            <p><span className="text-blue-400">private final</span> CloudInfra <span className="text-cyan-300">cloudEngineering</span> = <span className="text-emerald-300">"Microsoft Azure (AZ-900 Certified), AWS Cloud, Docker Containers, GitHub CI/CD"</span>;</p>
            
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><span className="text-cyber-purple">@Scheduled</span>(cron = <span className="text-emerald-300">"0 0 * * *"</span>) <span className="text-slate-500">// Continuous Operational Evolution</span></p>
              <p><span className="text-blue-400">public</span> ExecutionResult <span className="text-yellow-300">executeDeploymentProtocol</span>() &#123;</p>
              <p className="pl-4 text-slate-300">optimizeDataPipelinesAndSQLQueries();</p>
              <p className="pl-4 text-slate-300">deployResilientMicroservices(CloudTier.AZURE);</p>
              <p className="pl-4 text-slate-300"><span className="text-blue-400">return new</span> <span className="text-yellow-300">ExecutionResult</span>(<span className="text-emerald-300">"100% ACID Integrity"</span>, <span className="text-emerald-300">"Sub-Second Latency"</span>, <span className="text-emerald-300">"Deployment Ready"</span>);</p>
              <p>&#125;</p>
            </div>
          </div>
          <p>&#125;</p>
        </div>

        {/* Footer of Code Card */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-[11px] gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-slate-300">Status: <strong className="text-emerald-400">FORWARD DEPLOYMENT READY (FDE)</strong></span>
            </div>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Academic Standing: <strong className="text-cyber-cyan">9.67 CGPA</strong> (KL University)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>
        </div>
      </div>

    </section>
  );
}
