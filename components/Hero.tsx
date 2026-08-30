'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Copy,
  Check,
  MapPin,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Flame,
  Download,
  Share2,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ProfileAvatar from './ProfileAvatar';
import { generateATSPDF } from '@/lib/generate-ats-pdf';

interface HeroProps {
  onOpenCV: () => void;
  onOpenShare: () => void;
}

export default function Hero({ onOpenCV, onOpenShare }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isGeneratingATS, setIsGeneratingATS] = useState(false);

  const roles = [
    'Software Engineer',
    'Full Stack Web Developer',
    'Python & Django Specialist',
    'React & Node.js Developer',
    'Cloud & DevOps Enthusiast',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadCV = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
    onOpenCV();
  };

  const handleDirectATSPDF = () => {
    setIsGeneratingATS(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
    try {
      generateATSPDF();
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingATS(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">
                Available for Software Engineering Roles
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-widest text-blue-400 uppercase flex items-center gap-2">
                <span>HELLO, I&apos;M</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></span>
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                VENKAT MOHAN <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  ATMAKURU
                </span>
              </h1>
            </div>

            {/* Animated Rotating Role */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-300">
                <span className="text-slate-400 font-normal">I specialize in</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-blue-400 underline decoration-blue-500/50 underline-offset-4"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Passionate B.Tech Software Engineer with hands-on expertise in building scalable
              full-stack applications, robust backend architectures, and intelligent data systems
              using <strong>Python, Django, React, Node.js</strong>, and <strong>AWS Cloud</strong>.
            </p>

            {/* Location & Key Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>B.Tech Software Engineering</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Deloitte & PwC Certified</span>
              </div>
            </div>

            {/* Direct Contact Pill Cards with Copy Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg pt-1">
              {/* Email Pill */}
              <div
                id="hero-email-card"
                className="group relative flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all backdrop-blur-sm"
              >
                <a
                  href="mailto:venkeyvenkat747@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-200 group-hover:text-blue-300 font-medium truncate"
                >
                  <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-slate-400 block font-normal">Direct Email</span>
                    <span className="truncate block font-semibold text-xs sm:text-sm">venkeyvenkat747@gmail.com</span>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard('venkeyvenkat747@gmail.com', 'email')}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Status / Location Pill */}
              <div
                id="hero-status-card"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-normal">Employment Status</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-300">Open to Relocation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.button
                id="hero-download-cv-btn"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all border border-blue-400/30 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
              </motion.button>

              <motion.button
                id="hero-direct-ats-btn"
                onClick={handleDirectATSPDF}
                disabled={isGeneratingATS}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-300 hover:text-white font-semibold text-sm border border-blue-500/40 hover:border-blue-400 transition-all cursor-pointer shadow-lg shadow-blue-950/40"
                title="1-Click Download ATS-Formatted PDF Resume"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{isGeneratingATS ? 'Generating...' : 'ATS Resume PDF'}</span>
              </motion.button>

              <motion.a
                id="hero-explore-projects-btn"
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all"
              >
                <span>Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </motion.a>

              <motion.button
                id="hero-share-preview-btn"
                onClick={onOpenShare}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-3.5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 hover:border-blue-400 transition-all cursor-pointer"
                title="Share Portfolio & Link Preview"
              >
                <Share2 className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">Share</span>
              </motion.button>

              {/* Social links */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  id="hero-linkedin-link"
                  href="https://www.linkedin.com/in/atmakuru-venkat-mohan-90b968270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  id="hero-github-link"
                  href="https://github.com/venkey747"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait Card with 3D Tilt & Floating Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Interactive Container */}
            <div className="relative w-full max-w-md">
              {/* Background ambient glow halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse" />

              {/* Main Portrait Card with Graphic illustration */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/90 p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>venkat_mohan.profile</span>
                  </div>
                  <div className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono font-medium">
                    v2.5.0
                  </div>
                </div>

                {/* Large, Prominent Portrait Showcase with Floating Tech Highlights */}
                <div className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70 border border-slate-700/70 flex items-center justify-center overflow-hidden group shadow-2xl">
                  {/* Digital Grid Pattern Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none z-0" />

                  {/* Profile Photo Display - Full Frame */}
                  <div className="relative z-10 w-full h-full">
                    <ProfileAvatar size="full" />
                  </div>

                  {/* Floating Tech Badges within Graphic */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    className="absolute top-3 left-3 z-20 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-blue-500/50 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-blue-300 flex items-center gap-1.5 shadow-xl"
                  >
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Python &amp; Django</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute bottom-12 left-3 z-20 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-indigo-500/50 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-indigo-300 flex items-center gap-1.5 shadow-xl"
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>React &amp; Node.js</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-cyan-500/50 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-cyan-300 flex items-center gap-1.5 shadow-xl"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AWS Cloud</span>
                  </motion.div>
                </div>

                {/* Live Code Snippet Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1">
                    <span>developer.json</span>
                    <span className="text-emerald-400">● LIVE</span>
                  </div>
                  <p>
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-yellow-300">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">&quot;Venkat Mohan&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-300">&quot;Ready for Hire&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <span className="text-cyan-300">&quot;Python&quot;</span>,{' '}
                    <span className="text-cyan-300">&quot;React&quot;</span>,{' '}
                    <span className="text-cyan-300">&quot;Django&quot;</span>,{' '}
                    <span className="text-cyan-300">&quot;AWS&quot;</span>]
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
