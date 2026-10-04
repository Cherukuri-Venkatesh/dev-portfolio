import React, { useRef, useEffect, useState, useCallback } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Terminal, 
  ChevronDown,
  MessageSquare,
  FileText,
  Settings,
  Database,
  Cloud,
  Code,
  BarChart3,
  Briefcase,
  Building,
  Brain,
  Network,
  Layout,
  Mail,
  Plus
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon,
  JavaIcon,
  PythonIcon,
  SpringIcon,
  ReactIcon,
  AzureIcon,
  DockerIcon,
  PostgresIcon,
  AwsIcon,
  GitIcon
} from './icons/BrandIcons';

const TOTAL_FRAMES = 350;

const getFrameUrl = (num) => {
  const n = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(num)));
  const pad = String(n).padStart(3, '0');
  return `${import.meta.env.BASE_URL}hero-frames/frame-${pad}.jpg`;
};

export function HeroScrollCanvas() {
  const { openModal, playSound } = usePortfolio();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES + 1));
  const loadedSetRef = useRef(new Set());
  
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const lastDrawnRef = useRef(-1);
  const isDestroyedRef = useRef(false);
  const animFrameIdRef = useRef(null);

  const progressTextRef = useRef(null);
  const progressBarRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Find nearest loaded frame if current target is still loading
  const getNearestLoaded = useCallback((target) => {
    if (loadedSetRef.current.has(target)) {
      return imagesRef.current[target];
    }
    if (loadedSetRef.current.size === 0) return null;

    let minDiff = Infinity;
    let best = 1;
    for (const idx of loadedSetRef.current) {
      const diff = Math.abs(idx - target);
      if (diff < minDiff) {
        minDiff = diff;
        best = idx;
      }
    }
    return imagesRef.current[best] || null;
  }, []);

  // Draw frame on canvas with high-DPI retina scaling
  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let img = imagesRef.current[frameNum];
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = getNearestLoaded(frameNum);
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvasW = Math.round(rect.width * dpr);
    const canvasH = Math.round(rect.height * dpr);

    if (canvas.width !== canvasW || canvas.height !== canvasH) {
      canvas.width = canvasW;
      canvas.height = canvasH;
    }

    const imgW = img.naturalWidth || 540;
    const imgH = img.naturalHeight || 960;

    const scale = Math.min(canvasW / imgW, canvasH / imgH) * 0.92;
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const drawX = Math.round((canvasW - drawW) * 0.5);
    const drawY = Math.round(canvasH - drawH);

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    lastDrawnRef.current = frameNum;
  }, [getNearestLoaded]);

  // Update DOM progress indicators directly for high-perf 60fps
  const updateProgressUI = useCallback((frameNum) => {
    const progress = Math.max(0, Math.min(1, (frameNum - 1) / (TOTAL_FRAMES - 1)));
    const percent = Math.round(progress * 100);

    if (progressTextRef.current) {
      progressTextRef.current.textContent = percent < 95 
        ? `Scroll to Transform · ${percent}%` 
        : 'Explore About ↓';
    }

    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${Math.max(6, percent)}%`;
    }
  }, []);

  // Preload frame 1 immediately, then load 350 frames in prioritized progressive batches
  useEffect(() => {
    isDestroyedRef.current = false;

    const handleImgLoad = (idx, img) => {
      if (isDestroyedRef.current) return;
      imagesRef.current[idx] = img;
      loadedSetRef.current.add(idx);
      if (idx === 1) {
        drawFrame(1);
        updateProgressUI(1);
      }
    };

    // 1. Instant load frame 1
    const frame1 = new Image();
    frame1.onload = () => handleImgLoad(1, frame1);
    frame1.src = getFrameUrl(1);
    if (frame1.complete && frame1.naturalWidth > 0) {
      handleImgLoad(1, frame1);
    }

    // 2. Priority keyframe queue
    const priorityQueue = [];
    for (let i = 10; i <= TOTAL_FRAMES; i += 10) priorityQueue.push(i);
    for (let i = 5; i <= TOTAL_FRAMES; i += 5) {
      if (i % 10 !== 0) priorityQueue.push(i);
    }
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      if (i % 5 !== 0) priorityQueue.push(i);
    }

    const CONCURRENCY = 8;
    let activeWorkers = 0;
    let queueIdx = 0;

    const workerLoop = () => {
      if (isDestroyedRef.current || queueIdx >= priorityQueue.length) return;

      while (activeWorkers < CONCURRENCY && queueIdx < priorityQueue.length) {
        const nextIdx = priorityQueue[queueIdx++];
        activeWorkers++;

        const img = new Image();
        img.src = getFrameUrl(nextIdx);
        img.onload = () => {
          handleImgLoad(nextIdx, img);
          activeWorkers--;
          workerLoop();
        };
        img.onerror = () => {
          activeWorkers--;
          workerLoop();
        };
      }
    };

    const timer = setTimeout(workerLoop, 60);

    return () => {
      isDestroyedRef.current = true;
      clearTimeout(timer);
    };
  }, [drawFrame, updateProgressUI]);

  // Scroll listener: Calculates exact scroll fraction within the 480vh pinned section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetFrameRef.current = 1 + rawProgress * (TOTAL_FRAMES - 1);
    };

    // Smooth lerp render loop for 60fps silky frame-by-frame scrubbing
    const renderLoop = () => {
      if (isDestroyedRef.current) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.02) {
        currentFrameRef.current += diff * 0.22;
        const targetInt = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrameRef.current)));
        if (targetInt !== lastDrawnRef.current) {
          drawFrame(targetInt);
        }
        updateProgressUI(currentFrameRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame, updateProgressUI]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToAbout = () => {
    playSound('click');
    scrollToSection('about');
  };

  const scrollToSection = (id) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(0, elementTop - navOffset);
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (err) {
        // ignore error
      }
    }
  };

  return (
    /* Outer 480vh scroll track keeps the viewport completely pinned while scrubbing 350 frames */
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-[480vh] sm:h-[520vh] bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* Pinned Sticky Full-Screen Viewport Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-between select-none">
        
        {/* Ambient Warm Radial Backlights */}
        <div 
          aria-hidden="true"
          className="absolute top-1/4 right-[25%] w-[45vw] h-[65vh] bg-gradient-radial from-orange-600/30 via-amber-600/10 to-transparent blur-[130px] pointer-events-none z-0" 
        />
        <div 
          aria-hidden="true"
          className="absolute bottom-0 left-[10%] right-[10%] h-[35%] bg-gradient-radial from-orange-600/15 via-transparent to-transparent blur-[80px] pointer-events-none z-0" 
        />

        {/* Center Canvas (Hero Portrait Video Frames - Shifted Just A Small Nudge Rightwards) */}
        <div className="absolute top-0 bottom-0 left-[35%] sm:left-[37%] lg:left-[39%] xl:left-[41%] w-full sm:w-[52%] lg:w-[46%] xl:w-[42%] h-full z-10 pointer-events-none overflow-hidden flex items-end justify-center">
          
          {/* Ambient Glowing Neon Frames Behind Subject */}
          <div className="absolute top-[18%] right-[5%] w-56 sm:w-68 h-76 rounded-3xl border border-orange-500/35 bg-orange-500/[0.02] shadow-[0_0_80px_rgba(255,87,34,0.18)] pointer-events-none -z-10 hidden sm:block" />
          <div className="absolute top-[34%] right-[16%] w-60 sm:w-72 h-68 rounded-3xl border border-orange-500/25 bg-orange-500/[0.015] shadow-[0_0_60px_rgba(255,87,34,0.12)] pointer-events-none -z-10 hidden sm:block" />

          {/* Floating Handwritten Script Text Behind Left Shoulder */}
          <div className="absolute top-[32%] left-[4%] sm:left-[5%] lg:left-[6%] pointer-events-none select-none font-handwriting text-orange-300/40 text-2xl sm:text-3xl leading-tight -rotate-12 hidden lg:block z-20">
            <div>Software</div>
            <div>Engineer</div>
            <div>Problem Solver</div>
            <div>Learner</div>
          </div>

          {/* Left Gradient Blend: Seamlessly dissolves into deep black */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent pointer-events-none z-20" />

          {/* Right Gradient Blend: Perfectly dissolves right photo edge into deep black */}
          <div className="absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent pointer-events-none z-20" />

          {/* Top Gradient Blend */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-transparent pointer-events-none z-20" />

          {/* Bottom Gradient Blend */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none z-20" />

          {/* Canvas with smooth radial vignette mask */}
          <canvas
            ref={canvasRef}
            id="hero-canvas"
            className="w-full h-full block"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 76% 84% at 50% 50%, black 52%, transparent 98%)',
              maskImage: 'radial-gradient(ellipse 76% 84% at 50% 50%, black 52%, transparent 98%)'
            }}
          />

          {/* Quote Card Floating Over Subject's Chest */}
          <div className="absolute bottom-[14%] sm:bottom-[16%] left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-orange-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(255,87,34,0.2)] pointer-events-auto max-w-sm sm:max-w-md">
            <span className="text-orange-500 text-2xl font-serif font-black select-none leading-none shrink-0">“</span>
            <p className="font-mono text-xs sm:text-sm text-slate-200 whitespace-nowrap">
              Turning ideas into impactful software products.
            </p>
          </div>
        </div>

        {/* Unified Symmetrical Layout Container */}
        <div className="relative z-20 flex-1 w-full h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between pt-16 sm:pt-20 lg:pt-22 pb-2 sm:pb-3 pointer-events-none">
          
          {/* Left Column Content Area: Restored Full Bold Name Sizes & Previous Large Presence */}
          <div className="w-full lg:max-w-[53%] xl:max-w-[50%] space-y-3.5 sm:space-y-4 pointer-events-auto">
            
            {/* Top Ember Bar & World Welcome Tag */}
            <div className="font-mono text-xs sm:text-sm text-orange-400 tracking-widest uppercase flex items-center gap-2.5">
              <span className="w-14 sm:w-20 h-[2px] bg-orange-500 shadow-[0_0_10px_rgba(255,87,34,0.6)]"></span>
              <span>// WELCOME TO MY WORLD</span>
            </div>

            {/* Split Name Hero: Enlarged Prominent Typography */}
            <div className="space-y-0.5">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[96px] tracking-tight leading-[0.86] uppercase text-white">
                CHERUKURI
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[96px] tracking-tight leading-[0.86] uppercase text-outline-white">
                VENKATESH
              </h1>

              {/* Orange Horizontal Accent Bar */}
              <div className="w-24 sm:w-28 h-2 sm:h-2.5 bg-[#ff5722] rounded-full my-3.5 sm:my-4 shadow-[0_0_22px_rgba(255,87,34,0.85)]" />
            </div>

            {/* Role Headline with Blinking Cursor */}
            <div className="font-display font-bold text-xl sm:text-2xl lg:text-[26px] text-white flex items-center gap-2">
              <span>Enterprise Backend Developer</span>
              <span className="text-orange-500 font-black animate-pulse text-2xl leading-none">|</span>
            </div>

            {/* Bio Paragraph - Increased size for clear readability */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[15.5px] leading-relaxed font-sans max-w-xl">
              Building scalable systems and exploring opportunities in Backend, Cloud, AI, Data and full-stack development.
            </p>

            {/* 5 Feature Cards Grid (Row 1: 3 cards, Row 2: 2 cards) - Increased card & text sizes */}
            <div className="space-y-2.5 sm:space-y-3 max-w-xl pt-1">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {/* Card 1: Backend */}
                <div className="rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-orange-500/40 p-3 sm:p-3.5 transition backdrop-blur-md flex items-center gap-2.5 group hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Settings className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-white leading-tight">Backend</div>
                    <div className="font-mono text-[10.5px] sm:text-[11.5px] text-slate-300 truncate mt-0.5">Spring Boot, Java</div>
                  </div>
                </div>

                {/* Card 2: AI & Data */}
                <div className="rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-orange-500/40 p-3 sm:p-3.5 transition backdrop-blur-md flex items-center gap-2.5 group hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-white leading-tight">AI &amp; Data</div>
                    <div className="font-mono text-[10.5px] sm:text-[11.5px] text-slate-300 truncate mt-0.5">RAG, Analytics</div>
                  </div>
                </div>

                {/* Card 3: Cloud & DevOps */}
                <div className="rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-orange-500/40 p-3 sm:p-3.5 transition backdrop-blur-md flex items-center gap-2.5 group hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Cloud className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-white leading-tight">Cloud &amp; DevOps</div>
                    <div className="font-mono text-[10.5px] sm:text-[11.5px] text-slate-300 truncate mt-0.5">Azure, AWS, Docker</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {/* Card 4: Vibe Coding */}
                <div className="rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-orange-500/40 p-3 sm:p-3.5 transition backdrop-blur-md flex items-center gap-3 group hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Code className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-white leading-tight">Vibe Coding</div>
                    <div className="font-mono text-[10.5px] sm:text-[11.5px] text-slate-300 truncate mt-0.5">React, UI/UX, Modern Web</div>
                  </div>
                </div>

                {/* Card 5: DSA & Problem Solving */}
                <div className="rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-orange-500/40 p-3 sm:p-3.5 transition backdrop-blur-md flex items-center gap-3 group hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-white leading-tight">DSA &amp; Problem Solving</div>
                    <div className="font-mono text-[10.5px] sm:text-[11.5px] text-slate-300 truncate mt-0.5">Data Structures, 1000+ Solved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: VIEW MY WORK, Get In Touch, Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-2.5">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-obsidian-950 font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,87,34,0.45)] hover:shadow-[0_0_35px_rgba(255,87,34,0.7)] hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4 text-obsidian-950 stroke-[3]" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 sm:px-6 py-3 rounded-full bg-obsidian-900/90 border border-white/15 hover:border-orange-500/50 text-slate-200 font-display font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 transition hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xl"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={() => openModal('resume')}
                className="px-5 py-3 rounded-full bg-obsidian-900/90 border border-white/15 hover:border-orange-500/50 text-slate-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition hover:scale-105 cursor-pointer backdrop-blur-xl"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* "Tech I Work With ~" and Tech Stack Row - Increased icons & label size */}
            <div className="pt-2 sm:pt-3 space-y-2.5">
              <div className="font-handwriting text-xl sm:text-2xl text-slate-200 flex items-center gap-1.5">
                <span>Tech I Work With</span>
                <span className="text-orange-400 text-2xl">~</span>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Java">
                  <JavaIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Python">
                  <PythonIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Spring Boot">
                  <SpringIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="React">
                  <ReactIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Microsoft Azure">
                  <AzureIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Docker">
                  <DockerIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="PostgreSQL">
                  <PostgresIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="AWS">
                  <AwsIcon className="w-full h-full" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-obsidian-900/90 border border-white/10 hover:border-orange-500/50 flex items-center justify-center p-2 transition hover:scale-110 shadow-lg cursor-pointer" title="Git">
                  <GitIcon className="w-full h-full" />
                </div>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500/15 border border-orange-500/40 hover:bg-orange-500/30 text-orange-400 flex items-center justify-center transition hover:scale-110 cursor-pointer shadow-lg"
                  title="View All Skills"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column Cards & Widgets: All Fully Working Interactive Links */}
          <div className="hidden lg:flex flex-col justify-center w-60 sm:w-68 xl:w-72 space-y-3.5 sm:space-y-4 pointer-events-auto shrink-0">
            
            {/* Card 1: 3rd Year • B.Tech CSE • KL University - Working Link to Education */}
            <a 
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
              className="block rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/[0.04] p-4 transition-all duration-300 shadow-2xl group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
              }}
              title="View Education details & Academic Milestones"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-orange-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                    <span>3rd Year</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white mt-1 group-hover:text-orange-400 transition-colors">B.Tech CSE</div>
                  <div className="font-mono text-[11px] text-slate-400">KL University</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/25 group-hover:border-orange-500/40 transition-all">
                  <Building className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400 group-hover:text-orange-300 transition-colors">
                <span>View Education details</span>
                <ArrowUpRight className="w-3 h-3 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 2: Currently Exploring - Fully Interactive Links to Skills */}
            <div 
              className="rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 p-4 transition-all duration-300 shadow-2xl space-y-2.5 group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`
              }}
            >
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
                className="flex items-center justify-between cursor-pointer group/hdr"
                title="Explore All Skills & Tech Stack"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span className="group-hover/hdr:text-orange-300 transition-colors">Currently Exploring</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-orange-400/80 group-hover/hdr:text-orange-400 group-hover/hdr:translate-x-0.5 group-hover/hdr:-translate-y-0.5 transition-all" />
              </a>

              <div className="space-y-1 font-mono text-[11px] text-slate-300">
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 hover:text-orange-300 transition-all cursor-pointer group/item"
                  title="Explore Generative AI Skills"
                >
                  <div className="flex items-center gap-2.5">
                    <Brain className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Generative AI</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 hover:text-orange-300 transition-all cursor-pointer group/item"
                  title="Explore Scalable Systems Skills"
                >
                  <div className="flex items-center gap-2.5">
                    <Network className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Scalable Systems</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 hover:text-orange-300 transition-all cursor-pointer group/item"
                  title="Explore Cloud Architecture Skills"
                >
                  <div className="flex items-center gap-2.5">
                    <Cloud className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Cloud Architecture</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 hover:text-orange-300 transition-all cursor-pointer group/item"
                  title="Explore Data Engineering Skills"
                >
                  <div className="flex items-center gap-2.5">
                    <Database className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Data Engineering</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 hover:text-orange-300 transition-all cursor-pointer group/item"
                  title="Explore Modern Web Experiences Skills"
                >
                  <div className="flex items-center gap-2.5">
                    <Layout className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Modern Web Experiences</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Spinning Circular Badge: LEARN • BUILD • IMPROVE • REPEAT */}
            <div className="flex justify-end pr-2 py-0">
              <div className="relative w-16 h-16 xl:w-18 xl:h-18 flex items-center justify-center">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="badgeCirclePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="font-mono text-[9px] uppercase tracking-[0.24em] fill-orange-400 font-bold">
                    <textPath href="#badgeCirclePath">
                      LEARN • BUILD • IMPROVE • REPEAT •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,87,34,1)] animate-pulse" />
              </div>
            </div>

            {/* Card 3: Currently Open To - Working Anchor Link to Contact */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="w-full text-left rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/[0.05] p-3.5 transition-all duration-300 shadow-2xl flex items-center gap-3 cursor-pointer group block"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * -4}deg) rotateX(${mousePos.y * 4}deg)`
              }}
              title="Open to Opportunities - Click to Contact Me"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-orange-400 uppercase tracking-wider font-bold">Currently Open To</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="font-mono text-[11px] text-slate-300 font-semibold truncate mt-0.5 group-hover:text-white transition-colors">
                  Backend | Cloud | AI | Data | SDE
                </div>
              </div>
            </a>

            {/* Bottom Right Floating Social Links - Enlarged & Working Direct Links */}
            <div className="flex items-center justify-end gap-2.5 pt-1 relative z-30">
              <a
                href="https://www.linkedin.com/in/venkateshcherukuri1/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-obsidian-900/90 border border-white/15 hover:border-orange-500 hover:bg-orange-500/20 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95 group"
                title="Connect on LinkedIn: venkateshcherukuri1"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Cherukuri-Venkatesh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-obsidian-900/90 border border-white/15 hover:border-orange-500 hover:bg-orange-500/20 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95 group"
                title="GitHub Profile: Cherukuri-Venkatesh"
              >
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:2400032597cse1@gmail.com"
                onClick={() => playSound('click')}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-obsidian-900/90 border border-white/15 hover:border-orange-500 hover:bg-orange-500/20 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95 group"
                title="Send Email: 2400032597cse1@gmail.com"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Centered Scroll Indicator (Mouse with Glowing Orange Dot) */}
        <div className="relative z-30 flex flex-col items-center justify-center pb-4 pointer-events-auto">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-orange-400 transition cursor-pointer group"
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-orange-500 flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" />
            </div>
            <span className="font-mono text-[9px] tracking-widest uppercase font-semibold text-slate-400 group-hover:text-orange-300">
              SCROLL TO EXPLORE
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default HeroScrollCanvas;
