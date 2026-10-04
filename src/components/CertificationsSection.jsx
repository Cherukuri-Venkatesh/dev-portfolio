import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Search, 
  ExternalLink, 
  Download, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Calendar, 
  Copy, 
  Check, 
  ChevronRight,
  Eye,
  LayoutGrid,
  List,
  Building,
  Hash,
  Sparkles,
  Maximize2,
  Minimize2,
  FileText
} from 'lucide-react';

export const VERIFIED_CERTIFICATES = [
  {
    id: "az-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    code: "AZ-104",
    issuer: "Microsoft",
    issuerColor: "#0078D4",
    year: "2026",
    issueDate: "September 27, 2026",
    expiryDate: "September 28, 2027",
    validityStatus: "Active • Valid through Sep 2027",
    credentialId: "6BA737F6BB3BC80A",
    certNumber: "Certification #: B236E8-2060EA",
    verifyUrl: "https://learn.microsoft.com/en-us/users/venkateshcherukuri-7487/credentials/certification/azure-administrator?tab=credentials-tab",
    verifyPortalName: "Microsoft Learn Official Portal",
    pdfUrl: "/certificates/az104.pdf",
    thumbnail: "/certificates/thumbnails/az104.png",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badgeLabel: "AZURE ASSOCIATE",
    scoreBadge: "ASSOCIATE CERTIFIED",
    skills: ["Azure Compute & VMs", "Virtual Networks", "Storage Accounts", "Entra ID (Azure AD)", "Cloud Governance & Monitoring"],
    description: "Official Microsoft certification validating comprehensive expertise in deploying, configuring, scaling, and managing cloud identity, virtual networks, compute instances, storage containers, and governance policies in Microsoft Azure."
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    issuerColor: "#0078D4",
    year: "2026",
    issueDate: "July 7, 2026",
    expiryDate: "Lifetime Credential (No Expiration)",
    validityStatus: "Active • Lifetime Validity",
    credentialId: "26C0F8519E325993",
    certNumber: "Certification #: 6D4EC5-FP1438",
    verifyUrl: "https://learn.microsoft.com/en-us/users/venkateshcherukuri-7487/credentials?tab=credentials-tab",
    verifyPortalName: "Microsoft Learn Official Portal",
    pdfUrl: "/certificates/az900.pdf",
    thumbnail: "/certificates/thumbnails/az900.png",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badgeLabel: "AZURE FUNDAMENTALS",
    scoreBadge: "OFFICIALLY VERIFIED",
    skills: ["Cloud Architecture", "Core Azure Services", "Security & Network Defense", "Cost Management & SLA"],
    description: "Foundational Microsoft credential covering core cloud computing paradigms, high-availability architecture, defense-in-depth security, compliance standards, and Azure infrastructure resource provisioning."
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations Certification",
    code: "GH-100",
    issuer: "GitHub & Microsoft",
    issuerColor: "#FFFFFF",
    year: "2026",
    issueDate: "September 20, 2026",
    expiryDate: "September 21, 2028",
    validityStatus: "Active • Valid through Sep 2028",
    credentialId: "39E7E2BD495DBA81",
    certNumber: "Certification #: 9DDEDA-45AE94",
    verifyUrl: "https://learn.microsoft.com/en-us/users/venkateshcherukuri-7487/credentials/certification/github-foundations?tab=credentials-tab",
    verifyPortalName: "Microsoft / GitHub Credentials Portal",
    pdfUrl: "/certificates/github_foundations.pdf",
    thumbnail: "/certificates/thumbnails/github_foundations.png",
    category: "dev",
    categoryLabel: "Software Engineering",
    badgeLabel: "GITHUB OFFICIAL",
    scoreBadge: "FOUNDATIONS CERTIFIED",
    skills: ["Git Core Workflows", "Branch Strategy", "GitHub Actions CI/CD", "Pull Request Governance", "Enterprise Collaboration"],
    description: "Demonstrates mastery of modern Git distributed version control, secure code lifecycle management, collaborative pull requests, GitHub Actions automation, and repository governance."
  },
  {
    id: "servicenow-cis-df",
    title: "ServiceNow Certified Implementation Specialist – Data Foundations",
    code: "CIS-DF",
    issuer: "ServiceNow",
    issuerColor: "#81B5A1",
    year: "2026",
    issueDate: "August 9, 2026",
    expiryDate: "Lifetime Credential",
    validityStatus: "Active • Lifetime Validity",
    credentialId: "CIS-DF-CMDB-CSDM",
    certNumber: "Signer: Jayney Howson, Senior VP, ServiceNow",
    verifyUrl: "/certificates/servicenow_cis_df.pdf",
    verifyPortalName: "Official ServiceNow PDF Verification",
    pdfUrl: "/certificates/servicenow_cis_df.pdf",
    thumbnail: "/certificates/thumbnails/servicenow_cis_df.png",
    category: "dev",
    categoryLabel: "Software Engineering",
    badgeLabel: "DATA FOUNDATIONS",
    scoreBadge: "SPECIALIST CERTIFIED",
    skills: ["CMDB Architecture", "CSDM Data Model", "Enterprise Relational Data", "Asset Governance & Mapping"],
    description: "Certified by ServiceNow in Configuration Management Database (CMDB) configuration, Common Service Data Model (CSDM), relational schema mapping, and enterprise service asset data integrity."
  },
  {
    id: "aiml-internship",
    title: "AI-ML Virtual Internship (Google for Developers)",
    code: "AICTE-ML",
    issuer: "Google for Developers / AICTE / EduSkills",
    issuerColor: "#4285F4",
    year: "2026",
    issueDate: "June 2026 (April – June 2026)",
    expiryDate: "Permanent Credential",
    validityStatus: "Active • Verified by AICTE & EduSkills",
    credentialId: "40a88af4e4eeb15d3f16",
    certNumber: "Student ID: STU6971c14a64a5c1769062730",
    verifyUrl: "https://eduskillsfoundation.org/",
    verifyPortalName: "EduSkills AICTE Verification Portal",
    pdfUrl: "/certificates/aiml_internship.pdf",
    thumbnail: "/certificates/thumbnails/aiml_internship.png",
    category: "ai",
    categoryLabel: "AI & Data",
    badgeLabel: "GOOGLE SUPPORTED",
    scoreBadge: "GRADE O (OUTSTANDING: 90-100)",
    skills: ["Machine Learning Models", "Python Scikit-Learn", "Neural Networks", "Data Preprocessing", "Predictive Analytics"],
    description: "8-week intensive virtual internship program supported by Google for Developers (India Edu Program), AICTE Ministry of Education, and EduSkills. Achieved Grade O (Outstanding: 90-100) across practical ML and predictive modeling assignments."
  },
  {
    id: "be10x-ai",
    title: "AI Tools & ChatGPT Workflow Certification",
    code: "BE10X-AI",
    issuer: "be10x",
    issuerColor: "#FF5722",
    year: "2026",
    issueDate: "May 17, 2026",
    expiryDate: "Permanent Credential",
    validityStatus: "Active • Verified Workshop Completion",
    credentialId: "BE10X-VERIFIED-WORKFLOW",
    certNumber: "Signers: Aditya Goenka & Aditya Kachave, Co-founders",
    verifyUrl: "/certificates/be10x_ai.pdf",
    verifyPortalName: "Official be10x Certificate Document",
    pdfUrl: "/certificates/be10x_ai.pdf",
    thumbnail: "/certificates/thumbnails/be10x_ai.png",
    category: "ai",
    categoryLabel: "AI & Data",
    badgeLabel: "GENERATIVE AI",
    scoreBadge: "VERIFIED COMPLETION",
    skills: ["Generative AI Tools", "Prompt Engineering", "Rapid Data Analytics", "Code Acceleration"],
    description: "Hands-on certification validating practical mastery of generative AI tools, rapid prompt engineering strategies, automated data analytics in under 30 minutes, and accelerated code debugging workflows."
  },
  {
    id: "nptel",
    title: "NPTEL Online Certification: Fundamental Algorithms",
    code: "NPTEL-IIT",
    issuer: "IIT Kharagpur / Swayam (Govt. of India)",
    issuerColor: "#E53935",
    year: "2026",
    issueDate: "Jan – Feb 2026",
    expiryDate: "Lifetime Academic Credential",
    validityStatus: "Elite Proctored Certification (73% Score)",
    credentialId: "NPTEL26CS42S571700248",
    certNumber: "Roll No: NPTEL26CS42S571700248",
    verifyUrl: "/certificates/nptel.pdf",
    verifyPortalName: "IIT Kharagpur Official Certificate PDF",
    pdfUrl: "/certificates/nptel.pdf",
    thumbnail: "/certificates/thumbnails/nptel.png",
    category: "academic",
    categoryLabel: "Academic & Language",
    badgeLabel: "IIT KHARAGPUR",
    scoreBadge: "ELITE CERTIFICATION (73%)",
    skills: ["Design & Analysis of Algorithms", "Asymptotic Analysis", "Divide & Conquer", "Dynamic Programming", "Graph Traversal"],
    description: "Prestigious academic certification awarded by Indian Institute of Technology Kharagpur (IIT Kharagpur) and Swayam MoE. Secured 'Elite' classification with a consolidated proctored exam score of 73% in Advanced Fundamental Algorithms."
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot Certification",
    code: "GH-300",
    issuer: "Microsoft & GitHub",
    issuerColor: "#FFFFFF",
    year: "2025",
    issueDate: "November 21, 2025",
    expiryDate: "November 22, 2027",
    validityStatus: "Active • Valid through Nov 2027",
    credentialId: "40B3B74991E7705A",
    certNumber: "Certification #: 884304-8V3F16",
    verifyUrl: "https://learn.microsoft.com/en-gb/users/cherukurivenkatesh-1650/credentials/certification/github-copilot?tab=credentials-tab",
    verifyPortalName: "Microsoft Learn Official Portal",
    pdfUrl: "/certificates/github_copilot.pdf",
    thumbnail: "/certificates/thumbnails/github_copilot.png",
    category: "ai",
    categoryLabel: "AI & Data",
    badgeLabel: "AI PAIR PROGRAMMING",
    scoreBadge: "COPILOT CERTIFIED",
    skills: ["AI-Assisted Engineering", "Context Window Optimization", "Unit Test Automation", "Prompt Framing"],
    description: "Official credential recognizing proficiency in employing GitHub Copilot for code synthesis, unit testing generation, multi-file context optimization, and generative developer workflows."
  },
  {
    id: "linguaskill",
    title: "Cambridge Linguaskill Business English (B1 Level)",
    code: "CAMBRIDGE-B1",
    issuer: "Cambridge Assessment English",
    issuerColor: "#A855F7",
    year: "2025",
    issueDate: "March 22, 2025",
    expiryDate: "Lifetime Verification",
    validityStatus: "CEFR B1 (Speaking & Writing B2: 162)",
    credentialId: "2400032597",
    certNumber: "Candidate #: 2400032597 | Ref: IA143KLV-Y24-B 58-70",
    verifyUrl: "https://results.linguaskill.com/",
    verifyPortalName: "Cambridge Results Verification Service",
    pdfUrl: "/certificates/linguaskill.pdf",
    thumbnail: "/certificates/thumbnails/linguaskill.png",
    category: "academic",
    categoryLabel: "Academic & Language",
    badgeLabel: "CAMBRIDGE ENGLISH",
    scoreBadge: "CEFR B1 (SPEAKING & WRITING B2: 162)",
    skills: ["Professional Communication", "Technical Report Writing", "Listening & Reading", "Enterprise Presentation"],
    description: "International standard assessment by Cambridge Assessment English measuring executive English communication. Achieved CEFR B1 overall (Score 155), scoring high B2 (162) in both Speaking and Writing competencies."
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'dev', label: 'Software Engineering' },
  { id: 'academic', label: 'Academic & Language' }
];

const YEARS = [
  { id: 'all', label: 'All Years' },
  { id: '2026', label: '2026' },
  { id: '2025', label: '2025' }
];

export function CertificationsSection() {
  const { playSound, showToast } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeModalCert, setActiveModalCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    return VERIFIED_CERTIFICATES.filter((cert) => {
      const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || cert.year === selectedYear;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.code.toLowerCase().includes(q) ||
        cert.skills.some(s => s.toLowerCase().includes(q)) ||
        cert.year.includes(q);

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModalCert) {
        closeCertModal();
      }
    };

    if (activeModalCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalCert]);

  const fallbackCopyText = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
  };

  const handleCopyId = (e, id) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(id).catch(() => fallbackCopyText(id));
      } else {
        fallbackCopyText(id);
      }
    } catch {
      fallbackCopyText(id);
    }
    setCopiedId(id);
    playSound('pop');
    showToast(`Copied Credential ID: ${id}`, 'success');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const openCertModal = (cert) => {
    playSound('click');
    setIsZoomed(false);
    setActiveModalCert(cert);
  };

  const closeCertModal = () => {
    playSound('pop');
    setActiveModalCert(null);
    setIsZoomed(false);
  };

  return (
    <section id="certifications" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>06. VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Industry Certifications &amp;
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Verified Badges
            </span>
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed">
          100% genuine credentials with verified issue dates, credential verification links, and authentic downloadable documentation.
        </p>
      </div>

      {/* Control Pill Bar with Dual Filters (Year + Category + Search + View) */}
      <div className="glass-panel p-4 sm:p-5 rounded-3xl border-white/10 bg-obsidian-950/85 backdrop-blur-2xl shadow-2xl space-y-4">
        
        {/* Top Row: Year Filters (Featured) + Search + View Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Year Filter Segment (Requested by user) */}
          <div className="flex items-center gap-1.5 bg-obsidian-900/90 p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
            <span className="font-mono text-[11px] text-slate-400 px-2.5 font-bold flex items-center gap-1.5 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>OBTAINED YEAR:</span>
            </span>
            {YEARS.map((yr) => {
              const isYearActive = selectedYear === yr.id;
              const count = yr.id === 'all' 
                ? VERIFIED_CERTIFICATES.length 
                : VERIFIED_CERTIFICATES.filter(c => c.year === yr.id).length;

              return (
                <button
                  key={yr.id}
                  onClick={() => {
                    setSelectedYear(yr.id);
                    playSound('click');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                    isYearActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 shadow-[0_0_15px_rgba(255,87,34,0.35)] scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {yr.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certification, skill..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-orange-500/60 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Grid / List View Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
              <button
                onClick={() => {
                  setViewMode('grid');
                  playSound('click');
                }}
                className={`p-2 rounded-lg transition cursor-pointer ${
                  viewMode === 'grid' ? 'bg-orange-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode('list');
                  playSound('click');
                }}
                className={`p-2 rounded-lg transition cursor-pointer ${
                  viewMode === 'list' ? 'bg-orange-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row: Category Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold mr-1">
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const catCount = cat.id === 'all'
              ? VERIFIED_CERTIFICATES.length
              : VERIFIED_CERTIFICATES.filter(c => c.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  playSound('click');
                }}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white/15 text-white font-bold border border-white/20 shadow-sm'
                    : 'bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70">({catCount})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter & Active Filter Reset */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>
          Showing <strong className="text-white">{filteredCertificates.length}</strong> verified credential{filteredCertificates.length !== 1 ? 's' : ''}
          {selectedYear !== 'all' && <span> for year <strong className="text-orange-400">{selectedYear}</strong></span>}
        </span>
        {(selectedYear !== 'all' || selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedYear('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-orange-400 hover:text-orange-300 underline font-bold cursor-pointer"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Zero State */}
      {filteredCertificates.length === 0 && (
        <div className="glass-card p-12 rounded-3xl text-center space-y-3 border-white/10">
          <Award className="w-10 h-10 text-orange-400/50 mx-auto" />
          <div className="font-display font-bold text-lg text-white">No certificates match your filters</div>
          <p className="text-xs text-slate-400 font-mono">
            Try adjusting your search query, year, or category.
          </p>
          <button
            onClick={() => {
              setSelectedYear('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold hover:bg-orange-500/20 transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => openCertModal(cert)}
              className="glass-card rounded-3xl overflow-hidden border-white/10 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(255,87,34,0.18)] hover:-translate-y-1.5 cursor-pointer bg-obsidian-950/70"
            >
              <div>
                {/* Certificate Preview Image Box with High-Res Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-[#06080b] border-b border-white/10 flex items-center justify-center">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/15 to-transparent pointer-events-none" />

                  {/* Top-Right Verified Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-orange-500/40 flex items-center justify-center text-orange-400 shadow-xl group-hover:bg-orange-500 group-hover:text-obsidian-950 transition duration-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  {/* Top-Left Category & Year Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-white/15 text-slate-200 uppercase tracking-wider">
                      {cert.badgeLabel}
                    </span>
                    <span className="font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-orange-500 text-obsidian-950 shadow-sm">
                      {cert.year}
                    </span>
                  </div>

                  {/* Interactive Inspection Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-obsidian-950/75 backdrop-blur-[3px]">
                    <span className="px-4 py-2.5 rounded-full bg-orange-500 text-obsidian-950 font-mono text-xs font-black flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="font-bold text-orange-400">{cert.code}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{cert.issueDate}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-black text-base text-white mt-1 group-hover:text-orange-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags preview */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] px-2 py-0.5 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-lg text-slate-500">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Issuer + Score Tag + Action */}
              <div className="px-5 py-3.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5 truncate max-w-[170px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
                  <span className="text-slate-300 font-bold truncate">{cert.issuer}</span>
                </div>

                <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[11px] shrink-0">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* COMPACT LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => openCertModal(cert)}
              className="glass-card p-4 sm:p-5 rounded-2xl border-white/10 hover:border-orange-500/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer hover:shadow-xl bg-obsidian-950/70"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-20 h-14 rounded-xl overflow-hidden bg-obsidian-950 shrink-0 border border-white/10 relative">
                  <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-1 right-1 font-mono text-[8px] font-bold px-1 rounded bg-obsidian-950/90 text-orange-400 border border-white/10">
                    {cert.year}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {cert.code}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{cert.issuer} • {cert.issueDate}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-orange-300 transition-colors mt-0.5">
                    {cert.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold flex items-center gap-1 group-hover:bg-orange-500 group-hover:text-obsidian-950 transition">
                  <span>Inspect Certificate</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 
        PRISTINE, HIGH-END FULL-SCREEN CERTIFICATE MODAL
        RENDERED VIA CREATEPORTAL DIRECTLY ON DOCUMENT.BODY
        TO COMPLETELY ESCAPE ANY PARENT CONTAINER STACKING CONTEXTS (Z-[99999])
      */}
      {activeModalCert && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 overflow-y-auto"
          onClick={closeCertModal}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${isZoomed ? 'max-w-6xl' : 'max-w-5xl'} my-auto rounded-3xl bg-[#0b0d11] border border-white/20 p-5 sm:p-7 md:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.98)] space-y-6 text-left transition-all duration-300`}
          >
            {/* Top Modal Navigation & Action Bar */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1.5 pr-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
                    {activeModalCert.code}
                  </span>
                  <span className="font-mono text-xs text-slate-300">
                    {activeModalCert.categoryLabel}
                  </span>
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500 text-obsidian-950">
                    Year {activeModalCert.year}
                  </span>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{activeModalCert.scoreBadge}</span>
                  </span>
                </div>

                <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  {activeModalCert.title}
                </h2>
              </div>

              {/* Action Icons Bar */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 text-slate-300 hover:text-white transition cursor-pointer"
                  title={isZoomed ? "Standard View" : "Expand View"}
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={closeCertModal}
                  className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 text-slate-300 hover:text-white transition cursor-pointer shadow-lg"
                  title="Close Certificate (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Content Layout: Document Presentation (Left) + Credential Details (Right) */}
            <div className={`grid ${isZoomed ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-6 items-start`}>
              
              {/* Left Column: High-Res Certificate Document Presentation */}
              <div className={`${isZoomed ? 'lg:col-span-8' : 'lg:col-span-7'} rounded-2xl overflow-hidden border border-white/20 bg-[#050608] shadow-2xl relative group flex flex-col justify-between`}>
                
                {/* High-Resolution Document Canvas */}
                <div className="relative min-h-[320px] max-h-[520px] overflow-auto flex items-center justify-center p-3 sm:p-5 bg-gradient-to-b from-[#080a0f] to-[#040507]">
                  <img
                    src={activeModalCert.thumbnail}
                    alt={activeModalCert.title}
                    className="w-full h-auto max-h-[480px] object-contain rounded-lg shadow-2xl border border-white/5"
                  />
                </div>

                {/* Document Banner Footer */}
                <div className="p-4 bg-obsidian-950/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Verified Official Document</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={activeModalCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 flex items-center gap-1.5 font-bold hover:underline"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open Original PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Official Credential Attributes & Verification Portal Links */}
              <div className={`${isZoomed ? 'lg:col-span-4' : 'lg:col-span-5'} space-y-4`}>
                
                {/* Issuer & Date Bento Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-orange-400" />
                      <span>ISSUER:</span>
                    </span>
                    <span className="text-white font-bold">{activeModalCert.issuer}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      <span>ISSUE DATE:</span>
                    </span>
                    <span className="text-white font-bold">{activeModalCert.issueDate}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400">VALIDITY:</span>
                    <span className="text-emerald-400 font-bold">{activeModalCert.validityStatus || activeModalCert.expiryDate}</span>
                  </div>

                  {/* Credential ID / Verification Number */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1">
                        <Hash className="w-3 h-3 text-orange-400" />
                        <span>CREDENTIAL VERIFICATION ID:</span>
                      </span>
                      <button
                        onClick={(e) => handleCopyId(e, activeModalCert.credentialId)}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-[10px] text-slate-200 hover:text-white flex items-center gap-1 transition cursor-pointer"
                      >
                        {copiedId === activeModalCert.credentialId ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400" />
                            <span>Copy ID</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-obsidian-950 border border-white/15 text-orange-400 font-mono text-xs font-black select-all break-all tracking-wider shadow-inner">
                      {activeModalCert.credentialId}
                    </div>

                    {activeModalCert.certNumber && (
                      <div className="text-[11px] text-slate-400 font-mono pt-0.5">
                        {activeModalCert.certNumber}
                      </div>
                    )}
                  </div>
                </div>

                {/* Validated Skills */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <div className="font-mono text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    <span>Validated Competencies:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalCert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-300 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed px-1">
                  {activeModalCert.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  {activeModalCert.verifyUrl.startsWith('http') ? (
                    <a
                      href={activeModalCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-obsidian-950 font-mono text-xs font-black flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,87,34,0.4)] hover:scale-[1.02] active:scale-95 transition cursor-pointer whitespace-nowrap"
                    >
                      <span>Verify on Official Portal</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  ) : null}

                  <a
                    href={activeModalCert.pdfUrl}
                    download
                    className="w-full sm:w-auto flex-1 py-3 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>Download PDF</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}

export default CertificationsSection;
