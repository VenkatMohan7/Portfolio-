'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  FileText,
  Download,
  Share2,
  ArrowUp,
  MessageSquare,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateATSPDF } from '@/lib/generate-ats-pdf';

interface ContactFooterProps {
  onOpenCV: () => void;
  onOpenShare: () => void;
}

export default function ContactFooter({ onOpenCV, onOpenShare }: ContactFooterProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGeneratingATS, setIsGeneratingATS] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'caf6176f-5e06-43a6-beea-b6cd1ef6560a',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: 'Venkat Mohan Portfolio Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#3b82f6', '#6366f1', '#10b981', '#f59e0b'],
        });

        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Unable to send message via Web3Forms. Please try emailing directly.');
      }
    } catch (err: unknown) {
      console.error('Web3Forms error:', err);
      // Fallback: If network issue, show polite notice
      setErrorMessage('Network connection error. Please write directly to venkeyvenkat747@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-slate-950 pt-20 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-900/15 via-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET&apos;S CONNECT
          </h2>
          <p className="text-base text-slate-400">
            Whether you have an open software engineering opportunity, a collaborative project, or just want to connect — my inbox is always open!
          </p>
        </div>

        {/* Contact Content Grid: Left Contact Info + Graphic & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Direct Info & Workspace Line Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Contact Pills */}
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all group">
                <a
                  href="mailto:venkeyvenkat747@gmail.com"
                  className="flex items-center gap-3.5 text-slate-200 group-hover:text-blue-300 font-medium truncate"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-400 block font-normal">Direct Email</span>
                    <span className="text-sm sm:text-base font-semibold truncate block">
                      venkeyvenkat747@gmail.com
                    </span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy('venkeyvenkat747@gmail.com', 'email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-normal">Location</span>
                  <span className="text-sm sm:text-base font-semibold text-slate-200">
                    Nellore / Tirupati, Andhra Pradesh, India (Open to Relocation &amp; Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Custom SVG Graphic of Developer Workspace */}
            <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-6 overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Engineering Desk &amp; Workstation
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                  ONLINE
                </span>
              </div>

              {/* Vector Workspace Illustration */}
              <div className="relative aspect-[16/7] w-full flex items-center justify-center">
                <svg
                  viewBox="0 0 500 200"
                  className="w-full h-full text-slate-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Desk surface */}
                  <line x1="30" y1="160" x2="470" y2="160" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Laptop Stand & Base */}
                  <rect x="180" y="145" width="140" height="12" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  
                  {/* Laptop Screen */}
                  <rect x="195" y="65" width="110" height="80" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                  
                  {/* Screen Glow */}
                  <rect x="202" y="72" width="96" height="66" rx="3" fill="#1e1b4b" opacity="0.8" />
                  <path d="M210 85H245M210 95H270M210 105H255M210 115H235" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="280" cy="85" r="4" fill="#34d399" />
                  
                  {/* Coffee Mug with animated steam */}
                  <rect x="350" y="125" width="28" height="32" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M378 133C385 133 385 147 378 147" stroke="#94a3b8" strokeWidth="2" />
                  {/* Steam */}
                  <path d="M358 118C358 112 362 110 362 104" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.8" />
                  <path d="M366 116C366 110 370 108 370 102" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.8" />
                  
                  {/* Desk Lamp */}
                  <path d="M90 160V85C90 70 115 65 130 75" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="120,70 145,85 130,95" fill="#f59e0b" opacity="0.9" />
                  <polygon points="130,95 70,160 170,160" fill="#fef3c7" opacity="0.08" />

                  {/* Potted plant */}
                  <polygon points="410,160 425,160 422,142 413,142" fill="#475569" stroke="#64748b" strokeWidth="2" />
                  <path d="M417 142C410 130 405 135 408 122C418 128 418 138 417 142Z" fill="#10b981" />
                  <path d="M417 142C425 130 430 135 427 122C417 128 417 138 417 142Z" fill="#059669" />
                </svg>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV</span>
              </button>

              <button
                onClick={() => {
                  setIsGeneratingATS(true);
                  confetti({
                    particleCount: 60,
                    spread: 60,
                    origin: { y: 0.8 },
                  });
                  try {
                    generateATSPDF();
                  } catch (err) {
                    console.error(err);
                  } finally {
                    setIsGeneratingATS(false);
                  }
                }}
                disabled={isGeneratingATS}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-blue-500/40 hover:border-blue-400 text-blue-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{isGeneratingATS ? 'Generating...' : 'ATS Resume PDF'}</span>
              </button>

              <button
                onClick={onOpenShare}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                title="Share Portfolio Link"
              >
                <Share2 className="w-4 h-4 text-blue-400" />
                <span>Share</span>
              </button>

              <a
                href="https://www.linkedin.com/in/atmakuru-venkat-mohan-90b968270/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/venkey747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below or write directly to <strong>venkeyvenkat747@gmail.com</strong>
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Your message was successfully forwarded to Venkat Mohan&apos;s primary inbox via Web3Forms.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-xs text-red-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Role / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Venkat Mohan, I reviewed your portfolio and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending via Web3Forms...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Venkat Mohan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              VM
            </span>
            <span>
              &copy; {new Date().getFullYear()} <strong>Venkat Mohan Atmakuru</strong>. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
