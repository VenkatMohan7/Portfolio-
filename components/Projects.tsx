'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  CheckCircle2,
  Eye,
  X,
  Code2,
  Users,
  Calendar,
  Cpu,
  Monitor,
  Activity,
  ShoppingBag,
  Hand,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'vision' | 'web';
  categoryLabel: string;
  role: string;
  teamSize: string;
  duration: string;
  tech: string[];
  summary: string;
  features: string[];
  architecture: string;
  githubUrl: string;
  liveDemoNote: string;
  icon: any;
  color: string;
  bgGradient: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'vision' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'giglink',
      title: "Freelancer's Marketplace (GigLink)",
      category: 'fullstack',
      categoryLabel: 'Full Stack Web Platform',
      role: 'Lead Full Stack Engineer',
      teamSize: '4 Members',
      duration: 'Academic & Internship Project',
      tech: ['Python', 'Django', 'React.js', 'PostgreSQL', 'REST APIs', 'Tailwind CSS'],
      summary:
        'A comprehensive two-sided freelance talent marketplace connecting clients with skilled developers, designers, and writers with instant bidding, milestone payments, and role-based dashboards.',
      features: [
        'Dual-role authentication & onboarding system for Clients and Freelancers',
        'Real-time job posting, proposal submission, and competitive bidding workflow',
        'Custom interactive dashboard tracking ongoing contracts, deadlines, and earnings',
        'Search & filtration engine with multi-tag skills and budget range querying',
        'Secure message exchange and task submission validation workflow',
      ],
      architecture:
        'Django backend exposing RESTful JSON endpoints with PostgreSQL database layer, consumed by a reactive React client interface with modular component architecture.',
      githubUrl: 'https://github.com/venkey747',
      liveDemoNote: 'Full-stack repository available on GitHub with setup instructions.',
      icon: Layers,
      color: 'text-blue-400',
      bgGradient: 'from-blue-600/20 via-indigo-600/10 to-slate-950',
    },
    {
      id: 'blood-bank',
      title: 'Blood Bank Management System',
      category: 'fullstack',
      categoryLabel: 'Healthcare Web System',
      role: 'Backend & Database Developer',
      teamSize: '3 Members',
      duration: 'Major Academic Project',
      tech: ['Java / Python', 'Django', 'MySQL', 'Bootstrap 5', 'HTML5/CSS3', 'JavaScript'],
      summary:
        'A critical healthcare resource management platform designed to automate donor registration, real-time blood stock auditing across hospital wards, and urgent blood requisition dispatch.',
      features: [
        'Donor registry with eligibility tracking, donation history, and blood group categorization (A+, B+, O+, AB+, etc.)',
        'Live inventory stock monitoring with automated low-reserve alerts for blood banks',
        'Emergency blood request system connecting patient kin with matching nearby donors',
        'Camp organizer portal to schedule, publish, and record community donation drives',
        'Role-based admin access for hospital staff with printable audit reports',
      ],
      architecture:
        'MVC architectural design pattern with relational MySQL schema enforcing referential integrity between donors, blood units, hospital inventories, and recipient requests.',
      githubUrl: 'https://github.com/venkey747',
      liveDemoNote: 'Source code and database schema migration scripts available on GitHub.',
      icon: Activity,
      color: 'text-rose-400',
      bgGradient: 'from-rose-600/20 via-red-600/10 to-slate-950',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Website (Splash)',
      category: 'web',
      categoryLabel: 'E-Commerce Web Application',
      role: 'Frontend & UI Developer',
      teamSize: 'Independent Project',
      duration: 'Portfolio Showcase',
      tech: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3 / Tailwind', 'Local Storage'],
      summary:
        'A high-performance modern e-commerce storefront featuring dynamic product catalogue querying, interactive cart management, price calculation, and responsive checkout flows.',
      features: [
        'Dynamic product catalogue with search, category filtering, and instant price sorting',
        'Interactive shopping cart drawer with quantity adjustments and persistent state',
        'Responsive product detail pages with image galleries and customer review ratings',
        'Checkout form simulation with input validation, coupon application, and order receipts',
        '100% mobile-friendly responsive layout optimized for all device viewports',
      ],
      architecture:
        'React Single-Page Application utilizing custom hooks, state synchronization, and component-based design for lightning-fast DOM rendering.',
      githubUrl: 'https://github.com/venkey747',
      liveDemoNote: 'Client-side SPA with mock product APIs and local storage persistence.',
      icon: ShoppingBag,
      color: 'text-amber-400',
      bgGradient: 'from-amber-600/20 via-orange-600/10 to-slate-950',
    },
    {
      id: 'gesture-car',
      title: 'Car Driving Using Hand Gestures',
      category: 'vision',
      categoryLabel: 'Computer Vision & AI',
      role: 'Computer Vision Engineer',
      teamSize: 'Academic Research Team',
      duration: 'Innovations Laboratory',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI / Keyboard Interface'],
      summary:
        'A contactless human-computer interaction system that tracks 21 hand landmarks in real time through a webcam to steer, accelerate, and brake vehicles in simulation games.',
      features: [
        'Real-time webcam hand tracking using MediaPipe 21-point 3D landmark detection',
        'Custom geometric angle calculations to translate hand rotation into left/right steering',
        'Gesture classification distinguishing open palm (acceleration), fist (brake), and neutral',
        'Low-latency input mapping utilizing PyAutoGUI for seamless simulated driving control',
        'On-screen visual HUD overlay displaying FPS, current steering angle, and active control mode',
      ],
      architecture:
        'Real-time frame processing pipeline running OpenCV video capture into MediaPipe Hand Landmark model with spatial vector math triggering operating system virtual keyboard events.',
      githubUrl: 'https://github.com/venkey747',
      liveDemoNote: 'Python project script with OpenCV calibration guides available on GitHub.',
      icon: Hand,
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-600/20 via-teal-600/10 to-slate-950',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Software Solutions
          </h2>
          <p className="text-base text-slate-400">
            A showcase of production-ready web platforms, database systems, and computer vision applications I have architected and built.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack & APIs' },
              { id: 'web', label: 'Web Applications' },
              { id: 'vision', label: 'Computer Vision & AI' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 shadow-xl backdrop-blur-md overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  {/* Card Visual Header / Mock Browser Bar */}
                  <div className={`p-6 bg-gradient-to-b ${project.bgGradient} border-b border-slate-800/80 space-y-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                        <span className="text-[11px] text-slate-400 font-mono pl-2">
                          {project.id}.app
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-slate-300">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md flex-shrink-0">
                        <Icon className={`w-6 h-6 ${project.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{project.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Core Innovations
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] font-medium text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Buttons */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Project Details</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 z-10"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white pt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Role: {selectedProject.role} • Team: {selectedProject.teamSize}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>System Architecture &amp; Implementation</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Comprehensive Features List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Key Capabilities &amp; Modules
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-blue-900/30 border border-blue-500/30 text-xs font-medium text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Explore Repository on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
