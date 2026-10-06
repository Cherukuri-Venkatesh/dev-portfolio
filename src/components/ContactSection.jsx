import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  PhoneCall, 
  Download, 
  Eye, 
  FileText,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  CodeChefIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './icons/BrandIcons';

export function ContactSection() {
  const { openModal, showToast, playSound } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [feedback, setFeedback] = useState(null);
  const [sending, setSending] = useState(false);
  const [lastPayload, setLastPayload] = useState('');

  const copyToClipboard = (text, type, customMsg) => {
    navigator.clipboard.writeText(text);
    playSound('success');
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      showToast(customMsg || 'Email copied to clipboard!', 'success');
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      showToast(customMsg || 'Phone copied to clipboard!', 'success');
    } else {
      showToast(customMsg || 'Copied to clipboard!', 'success');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim() || 'Java Backend / Engineering Inquiry';
    const msg = formData.message.trim();

    if (!name || !email || !msg) {
      playSound('click');
      setFeedback({
        type: 'error',
        text: '⚠️ Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    setSending(true);
    playSound('blip');

    const mailBody = `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
    setLastPayload(mailBody);
    const mailtoUrl = `mailto:${RESUME_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    // Try triggering default mail client directly
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.log('Mail client trigger error:', err);
    }

    setTimeout(() => {
      setSending(false);
      playSound('success');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti trigger:', err);
      }

      setFeedback({
        type: 'success',
        name,
        email,
        gmailUrl,
        mailtoUrl,
        payload: mailBody
      });
      showToast('Transmission prepared & dispatched!', 'success');
    }, 600);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>07. DIRECT CHANNELS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Contact &amp;
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Initialize Transmission
            </span>
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed">
          Direct communication channels to reach Cherukuri Venkatesh for Java backend engineering, Data Science, and Cloud roles.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Direct Contact Matrix & Resume Download (5 Cols) */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          
          {/* Top Row: LinkedIn & GitHub Side-by-Side Subgrid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {/* LinkedIn Card */}
            <div className="glass-card p-3.5 rounded-2xl border-white/10 flex flex-col justify-between group hover:border-[#0A66C2]/60 hover:shadow-[0_8px_30px_rgba(10,102,194,0.22)] transition-all duration-300 bg-obsidian-950/70">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition border border-[#0A66C2]/30">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                </div>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#0A66C2]/20 text-[#38bdf8] border border-[#0A66C2]/30 font-mono">Verified</span>
              </div>
              <div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">LINKEDIN</div>
                <div className="text-slate-100 font-bold text-xs truncate">venkateshcherukuri1</div>
              </div>
              <div className="flex items-center gap-1.5 pt-2.5 mt-2 border-t border-white/5">
                <a
                  href={RESUME_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 rounded-lg bg-[#0A66C2]/15 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/30 text-[#38bdf8] hover:text-white font-mono text-[10.5px] font-semibold transition flex items-center justify-center gap-1 text-center"
                  title="Open LinkedIn Profile"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.socialLinks.linkedin, 'other', 'LinkedIn profile URL copied!')}
                  className="p-1.5 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                  title="Copy LinkedIn URL"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-3.5 rounded-2xl border-white/10 flex flex-col justify-between group hover:border-orange-500/60 hover:shadow-[0_8px_30px_rgba(255,87,34,0.22)] transition-all duration-300 bg-obsidian-950/70">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center group-hover:scale-110 transition border border-orange-500/30">
                  <GithubIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-mono">Active</span>
              </div>
              <div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">GITHUB</div>
                <div className="text-slate-100 font-bold text-xs truncate">Cherukuri-Venkatesh</div>
              </div>
              <div className="flex items-center gap-1.5 pt-2.5 mt-2 border-t border-white/5">
                <a
                  href={RESUME_DATA.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 rounded-lg bg-orange-500/15 hover:bg-orange-500/30 border border-orange-500/30 text-orange-300 hover:text-white font-mono text-[10.5px] font-semibold transition flex items-center justify-center gap-1 text-center"
                  title="View GitHub Repositories"
                >
                  <span>Code</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.socialLinks.github, 'other', 'GitHub profile URL copied!')}
                  className="p-1.5 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                  title="Copy GitHub URL"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Row: Primary Email & Direct Phone Subgrid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {/* Email Card */}
            <div className="glass-card p-3.5 rounded-2xl border-white/10 flex flex-col justify-between group hover:border-amber-500/40 hover:shadow-[0_8px_25px_rgba(251,191,36,0.18)] transition bg-obsidian-950/70">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition border border-amber-500/20">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.email, 'email', 'Email copied!')}
                  className="p-1 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">PRIMARY INBOX</div>
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="text-slate-200 hover:text-amber-400 font-bold transition select-all text-xs truncate block"
                  title={RESUME_DATA.email}
                >
                  {RESUME_DATA.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-3.5 rounded-2xl border-white/10 flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-[0_8px_25px_rgba(255,87,34,0.18)] transition bg-obsidian-950/70">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:scale-110 transition border border-orange-500/20">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                    className="p-1 rounded-lg glass-panel hover:bg-orange-500/20 text-slate-400 hover:text-orange-400 transition"
                    title="Call Direct"
                  >
                    <PhoneCall className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone', 'Phone copied!')}
                    className="p-1 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">DIRECT LINE</div>
                <a
                  href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-slate-200 hover:text-orange-400 font-bold transition select-all text-xs truncate block"
                >
                  {RESUME_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Location & Relocation Card */}
          <div className="glass-card p-3.5 sm:p-4 rounded-2xl border-white/10 flex items-center justify-between group hover:border-emerald-500/40 hover:shadow-[0_8px_25px_rgba(16,185,129,0.18)] transition bg-obsidian-950/70">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition shrink-0 border border-emerald-500/20">
                <MapPin className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">LOCATION &amp; RELOCATION</div>
                <div className="text-slate-200 font-semibold text-xs truncate">{RESUME_DATA.location}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Open to Relocation &amp; Remote Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Profiles Quick Dock */}
          <div className="glass-card p-3 rounded-2xl border-white/10 flex items-center justify-between bg-obsidian-950/70">
            <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider pl-1.5">ALL PROFILES</span>
            <div className="flex items-center gap-1.5">
              <a
                href={RESUME_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 text-slate-300 hover:text-[#38bdf8] flex items-center justify-center transition"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel hover:bg-orange-500/20 hover:border-orange-500/40 text-slate-300 hover:text-white flex items-center justify-center transition"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel hover:bg-amber-500/20 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 flex items-center justify-center transition"
                title="CodeChef (1000+ Solved)"
              >
                <CodeChefIcon className="w-4 h-4 text-amber-400" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel hover:bg-orange-500/20 hover:border-orange-500/40 text-slate-300 hover:text-orange-400 flex items-center justify-center transition"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4 text-orange-400" />
              </a>
              <a
                href={RESUME_DATA.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel hover:bg-amber-500/20 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 flex items-center justify-center transition"
                title="HackerRank Profile"
              >
                <HackerRankIcon className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Resume PDF Download & View Card */}
          <div className="glass-glow-ember p-4 rounded-2xl space-y-2 border border-orange-500/30 shadow-[0_0_35px_rgba(255,87,34,0.15)] bg-obsidian-950/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Official Resume Document (PDF)</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-mono">Verified</span>
            </div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              Download the exact verified resume PDF or inspect the complete formatted preview sheet.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`${import.meta.env.BASE_URL}${RESUME_DATA.resumeFileName}`}
                download={RESUME_DATA.downloadFileName}
                onClick={() => {
                  playSound('success');
                  showToast('Initiating resume.pdf download...', 'success');
                }}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-obsidian-950 font-bold font-mono text-center flex items-center justify-center gap-1.5 transition shadow-sm text-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={() => openModal('resume')}
                className="py-2 px-3.5 rounded-xl glass-panel hover:bg-orange-500/10 hover:border-orange-500/30 text-white hover:text-orange-300 font-mono text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-orange-400" />
                <span>Preview</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right: Working "Initialize Transmission" Form (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border-white/10 space-y-4 bg-obsidian-950/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[9px] font-bold uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
              SECURE ENCRYPTED DISPATCH
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Initialize Transmission
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Send your message directly to Cherukuri Venkatesh's inbox.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-3 font-sans text-xs">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-[10px] text-slate-400 mb-1 font-semibold">YOUR NAME / SENDER *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager / Tech Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 text-xs font-sans transition"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-slate-400 mb-1 font-semibold">YOUR EMAIL ADDRESS *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 text-xs font-sans transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-slate-400 mb-1 font-semibold">SUBJECT / INQUIRY TYPE</label>
              <input
                type="text"
                placeholder="e.g. Java Backend Developer Role / Data Science Project"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 text-xs font-sans transition"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-slate-400 mb-1 font-semibold">MESSAGE PAYLOAD *</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your backend engineering requirements, team goals, or interview schedule..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 text-xs resize-none font-sans transition"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-500 text-obsidian-950 font-display font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(255,87,34,0.35)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-obsidian-950" />
              <span>{sending ? '⚡ Transmitting to 2400032597cse1@gmail.com...' : 'INITIALIZE TRANSMISSION & SEND'}</span>
            </button>

            {/* Direct Communication Protocol & SLA Matrix */}
            <div className="pt-4 border-t border-white/10 grid sm:grid-cols-3 gap-2.5 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-obsidian-900/90 border border-white/5 flex flex-col justify-between">
                <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-bold">RESPONSE SLA</span>
                <span className="text-emerald-400 font-bold mt-1 flex items-center gap-1.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  &lt; 24 Hours
                </span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">Direct to developer</span>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-900/90 border border-white/5 flex flex-col justify-between">
                <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-bold">AVAILABILITY</span>
                <span className="text-orange-400 font-bold mt-1 text-xs">Immediate Roles</span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">Full-Time / Co-op</span>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-900/90 border border-white/5 flex flex-col justify-between">
                <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-bold">TRANSMISSION</span>
                <span className="text-amber-400 font-bold mt-1 text-xs">Direct TLS 1.3</span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">Zero intermediary</span>
              </div>
            </div>

            {/* Dynamic Feedback Box */}
            {feedback && feedback.type === 'error' && (
              <div className="p-4 rounded-xl font-mono text-xs border bg-rose-500/10 border-rose-500/30 text-rose-400">
                {feedback.text}
              </div>
            )}

            {feedback && feedback.type === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>TRANSMISSION DISPATCHED TO CHERUKURI VENKATESH!</span>
                </div>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Message prepared for <strong>2400032597cse1@gmail.com</strong> from <strong>{feedback.name}</strong> ({feedback.email}).
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                  <a
                    href={feedback.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold hover:from-orange-400 hover:to-amber-400 transition flex items-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Send via Web Gmail &rarr;</span>
                  </a>
                  <a
                    href={feedback.mailtoUrl}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Re-open Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(feedback.payload, 'other', 'Transmission payload copied!')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Raw Text</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
