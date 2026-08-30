'use client';

import React, { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import AboutSkills from '@/components/AboutSkills';
import Projects from '@/components/Projects';
import CaseStudies from '@/components/CaseStudies';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import ContactFooter from '@/components/ContactFooter';
import CVModal from '@/components/CVModal';
import ShareModal from '@/components/ShareModal';

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Dynamic Animated Canvas Particle Background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenCV={() => setCvModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with Interactive 3D Portrait & Floating Badges */}
        <Hero
          onOpenCV={() => setCvModalOpen(true)}
          onOpenShare={() => setShareModalOpen(true)}
        />

        {/* 2. Key Metrics & Stat Highlights */}
        <StatsCounter />

        {/* 3. About Me, Interactive Skills Matrix & Certifications */}
        <AboutSkills />

        {/* 4. Featured Projects with Live Filters & Deep Dive Modal */}
        <Projects />

        {/* 5. Technical Case Studies & Architecture Deep Dives */}
        <CaseStudies />

        {/* 6. Internship & Industry Experience Timeline */}
        <Experience />

        {/* 7. Education Journey & Academic Milestones */}
        <Education />
      </main>

      {/* 8. Let's Connect & Interactive Workspace Graphic Footer */}
      <ContactFooter
        onOpenCV={() => setCvModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Interactive CV Modal with Print & Copy */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Share Portfolio & Link Preview Modal */}
      <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </div>
  );
}
