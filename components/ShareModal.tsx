'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Share2,
  Copy,
  Check,
  X,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
  Globe,
  Eye,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.origin || window.location.href;
    }
    return 'https://venkat-mohan.dev';
  });
  const [activePlatform, setActivePlatform] = useState<'linkedin' | 'whatsapp' | 'twitter' | 'generic'>('linkedin');

  if (!isOpen) return null;

  const shareTitle = 'Venkat Mohan Atmakuru | Software Engineer & Full Stack Developer';
  const shareDescription =
    'Passionate B.Tech Software Engineering graduate skilled in Python, Django, React.js, Node.js, and AWS Cloud architectures. Check out his projects, engineering case studies, and resume!';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `Check out ${shareTitle} — ${currentUrl}`
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `Check out the portfolio of @venkey747 — Full Stack Software Engineer (Python, Django, React, AWS):`
    )}&url=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(
      `Hi,\n\nI wanted to share the portfolio of Venkat Mohan Atmakuru (Software Engineer & Full Stack Developer):\n\n${currentUrl}\n\n${shareDescription}`
    )}`,
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:px-6 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Share2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Share Portfolio &amp; Link Preview</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                </h3>
                <p className="text-xs text-slate-400">
                  Rich preview metadata generated when sharing across social platforms
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-6">
            {/* Live Social Card Preview */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>Interactive Social Card Preview</span>
                </span>
                <div className="flex gap-1.5">
                  {(['linkedin', 'whatsapp', 'twitter'] as const).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold capitalize transition-all cursor-pointer ${
                        activePlatform === platform
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Rendering mimicking Social Preview */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
                {/* Visual Image Banner */}
                <div className="relative aspect-[1200/630] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-between p-4 sm:p-6 border-b border-slate-800/80 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                  {/* Left Content */}
                  <div className="z-10 max-w-[62%] space-y-1 sm:space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] sm:text-xs font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>READY FOR HIRE</span>
                    </div>

                    <h4 className="text-sm sm:text-lg font-black text-white leading-tight">
                      VENKAT MOHAN <span className="text-blue-400">ATMAKURU</span>
                    </h4>

                    <p className="text-[11px] sm:text-xs font-semibold text-blue-300">
                      Software Engineer &amp; Full Stack Developer
                    </p>

                    <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-2">
                      Python • Django • React.js • Node.js • AWS Cloud Architecture
                    </p>
                  </div>

                  {/* Right Headshot Preview */}
                  <div className="relative z-10 w-24 h-28 sm:w-36 sm:h-40 rounded-xl overflow-hidden border-2 border-blue-500/60 shadow-xl flex-shrink-0 bg-slate-950">
                    <img
                      src="/profile.png"
                      alt="Venkat Mohan"
                      className="w-full h-full object-cover object-[center_18%]"
                    />
                    <div className="absolute bottom-1 inset-x-1 text-center">
                      <span className="text-[8px] sm:text-[9px] font-bold text-white bg-slate-950/90 px-1.5 py-0.5 rounded backdrop-blur-sm border border-slate-700">
                        Venkat Mohan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-3.5 bg-slate-900/90 space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    {currentUrl.replace(/^https?:\/\//, '')}
                  </span>
                  <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                    {shareTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">
                    {shareDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Share Channels */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-slate-300 block">
                Share Directly to Platforms
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-sky-600/10 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 text-xs font-semibold transition-all shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X / Twitter</span>
                </a>

                <a
                  href={shareLinks.email}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Copyable Share URL Bar */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-300 block">Copy Share Link</span>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <Globe className="w-4 h-4 text-slate-500 ml-2 flex-shrink-0" />
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="w-full bg-transparent text-xs text-slate-300 font-mono focus:outline-hidden"
                />
                <button
                  onClick={handleCopyLink}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
