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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 08. DIRECT CHANNELS</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
            Contact &amp; Initialize Transmission
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Direct communication channels to reach Cherukuri Venkatesh for Java backend engineering, Data Science, and Cloud roles.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left: Direct Contact Matrix & Resume Download (5 Cols) */}
        <div className="lg:col-span-5 space-y-3.5 font-mono text-xs">
          
          {/* Email Card */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border-white/10 flex items-center justify-between group hover:border-cyber-cyan/40 transition">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyber-cyan flex items-center justify-center group-hover:scale-110 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">PRIMARY EMAIL</div>
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="text-slate-200 hover:text-cyber-cyan font-bold transition select-all text-xs"
                >
                  {RESUME_DATA.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(RESUME_DATA.email, 'email', 'Email copied!')}
              className="p-1.5 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border-white/10 flex items-center justify-between group hover:border-emerald-500/40 transition">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-cyber-emerald flex items-center justify-center group-hover:scale-110 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">DIRECT PHONE</div>
                <a
                  href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-slate-200 hover:text-cyber-emerald font-bold transition select-all text-xs"
                >
                  {RESUME_DATA.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                className="p-1.5 rounded-lg glass-panel hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 transition"
                title="Call Direct"
              >
                <PhoneCall className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone', 'Phone copied!')}
                className="p-1.5 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border-white/10 flex items-center justify-between group hover:border-purple-500/40 transition">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-cyber-violet flex items-center justify-center group-hover:scale-110 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">CURRENT LOCATION</div>
                <div className="text-slate-200 font-semibold text-xs">{RESUME_DATA.location}</div>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          {/* Resume PDF Download & View Card */}
          <div className="glass-glow-cyan p-4 sm:p-5 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyber-cyan font-bold text-xs">
                <svg className="w-4 h-4 text-cyber-cyan" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1.5h1.5v1H7.5V17H6v-6.5h3.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm8 3.5c0 .83-.67 1.5-1.5 1.5H13v-6.5h3c.83 0 1.5.67 1.5 1.5V15zm-4.5-1h1.5v-1.5H13V14zm-4-1.5h1v-1h-1v1zM20 7H4V5h16v2z"/>
                </svg>
                <span>Official Resume Document (PDF)</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Updated</span>
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
                className="flex-1 py-2 rounded-xl bg-cyber-cyan hover:bg-cyan-300 text-obsidian-950 font-bold font-mono text-center flex items-center justify-center gap-1.5 transition shadow-sm text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={() => openModal('resume')}
                className="py-2 px-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-mono text-xs transition flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Preview</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right: Working "Initialize Transmission" Form (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border-white/10 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan font-mono text-[9px] font-bold uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyber-cyan text-xs font-sans"
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyber-cyan text-xs font-sans"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyber-cyan text-xs font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-slate-400 mb-1 font-semibold">MESSAGE PAYLOAD *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe your backend engineering requirements, team goals, or interview schedule..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyber-cyan text-xs resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-obsidian-950 font-display font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-obsidian-950" />
              <span>{sending ? '⚡ Transmitting to 2400032597cse1@gmail.com...' : 'INITIALIZE TRANSMISSION & SEND'}</span>
            </button>

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
                    className="px-3 py-1.5 rounded-lg bg-cyber-cyan text-obsidian-950 font-bold hover:bg-cyan-300 transition flex items-center gap-1.5 shadow-sm"
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
