'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  Sparkles,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenShare: () => void;
}

export default function Navbar({ onOpenCV, onOpenShare }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'case-studies', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCVConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.15 },
      colors: ['#2563eb', '#38bdf8', '#818cf8', '#10b981'],
    });
    onOpenCV();
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with dynamic glowing badge */}
        <motion.a
          id="navbar-brand"
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold tracking-wider shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              VM
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors tracking-tight">
              Venkat Mohan
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              Software Engineer
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -z-10 shadow-sm shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Download CV CTA, Share button and Quick Socials */}
        <div className="hidden lg:flex items-center gap-2.5">
          <motion.button
            id="navbar-share-btn"
            onClick={onOpenShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            title="Share Portfolio Link"
          >
            <Share2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Share</span>
          </motion.button>

          <motion.button
            id="navbar-cv-btn"
            onClick={triggerCVConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all border border-blue-400/30 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <motion.button
            id="mobile-share-quick-btn"
            onClick={onOpenShare}
            whileTap={{ scale: 0.92 }}
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-blue-400 text-xs font-semibold flex items-center gap-1"
            title="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </motion.button>

          <motion.button
            id="mobile-cv-quick-btn"
            onClick={triggerCVConfetti}
            whileTap={{ scale: 0.92 }}
            className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </motion.button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCVConfetti();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>

              <div className="flex justify-center gap-4 pt-2">
                <a
                  href="mailto:venkeyvenkat747@gmail.com"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-blue-400"
                  aria-label="Email Venkat Mohan"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/atmakuru-venkat-mohan-90b968270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-blue-400"
                  aria-label="Venkat Mohan LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/venkey747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-blue-400"
                  aria-label="Venkat Mohan GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
