'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Code2,
  Database,
  Cloud,
  Cpu,
  Award,
  Languages,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Brain,
  Globe,
} from 'lucide-react';
import ProfileAvatar from './ProfileAvatar';

export default function AboutSkills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'cloud' | 'soft'>('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Front End' },
    { id: 'backend', label: 'Back End' },
    { id: 'cloud', label: 'Cloud & DB' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const allSkills = [
    // Languages
    { name: 'Python', category: 'languages', level: 92, tag: 'Primary' },
    { name: 'Java', category: 'languages', level: 85, tag: 'OOP & DSA' },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 90, tag: 'Full Stack' },
    { name: 'SQL', category: 'languages', level: 88, tag: 'Relational DB' },
    { name: 'C Programming', category: 'languages', level: 80, tag: 'Foundations' },

    // Front End
    { name: 'React.js', category: 'frontend', level: 90, tag: 'SPA & Hooks' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 95, tag: 'Semantic UI' },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, tag: 'Modern Styling' },
    { name: 'Bootstrap', category: 'frontend', level: 88, tag: 'Responsive Grid' },
    { name: 'DOM Manipulation', category: 'frontend', level: 86, tag: 'Interactive' },

    // Back End
    { name: 'Django / Python', category: 'backend', level: 90, tag: 'Framework' },
    { name: 'Node.js', category: 'backend', level: 85, tag: 'Runtime' },
    { name: 'Express.js', category: 'backend', level: 84, tag: 'RESTful APIs' },
    { name: 'REST API Design', category: 'backend', level: 90, tag: 'Integration' },
    { name: 'Authentication & JWT', category: 'backend', level: 86, tag: 'Security' },

    // Cloud & DB
    { name: 'MongoDB', category: 'cloud', level: 88, tag: 'NoSQL' },
    { name: 'MySQL / PostgreSQL', category: 'cloud', level: 86, tag: 'RDBMS' },
    { name: 'AWS (S3, EC2, Cloud)', category: 'cloud', level: 80, tag: 'Cloud Infra' },
    { name: 'Git & GitHub', category: 'cloud', level: 92, tag: 'Version Control' },
    { name: 'Postman', category: 'cloud', level: 88, tag: 'API Testing' },

    // Soft Skills
    { name: 'Problem Solving & DSA', category: 'soft', level: 90, tag: 'Core' },
    { name: 'Agile & Team Collaboration', category: 'soft', level: 92, tag: 'Team' },
    { name: 'Technical Communication', category: 'soft', level: 88, tag: 'Proficiency' },
    { name: 'Adaptability & Fast Learner', category: 'soft', level: 95, tag: 'Growth' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const certifications = [
    {
      title: 'Data Analytics Internship',
      issuer: 'Deloitte',
      date: 'Verified Certificate',
      skills: ['Data Analysis', 'Tableau', 'Business Insights', 'Python'],
      icon: Award,
    },
    {
      title: 'Power BI Virtual Case Experience',
      issuer: 'PwC',
      date: 'Verified Certificate',
      skills: ['Power BI', 'Dashboard Modeling', 'KPI Visuals', 'DAX'],
      icon: ShieldCheck,
    },
    {
      title: 'AWS Cloud Foundations & DevOps',
      issuer: 'AWS Academy / AICTE Certified',
      date: 'Verified Credential',
      skills: ['EC2', 'S3', 'IAM', 'Cloud Architecture', 'CI/CD'],
      icon: Cloud,
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; Technical Capabilities
          </h2>
          <p className="text-base text-slate-400">
            A deep dive into my background, full-stack proficiencies, industry certifications, and passion for software engineering.
          </p>
        </div>

        {/* Main Grid: About Card & Skills Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: About Summary & Spoken Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* About Narrative Card */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
              {/* Photo & Intro Row */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800/80 mb-4">
                <ProfileAvatar size="md" className="flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Venkat Mohan Atmakuru</span>
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    Software Engineer &bull; Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a passionate <strong>Software Engineer</strong> with a strong academic
                  foundation in <strong>Computer Science &amp; Software Engineering</strong> from
                  Audisankara College of Engineering and Technology.
                </p>
                <p>
                  With extensive practical experience built across industry internships and simulations at
                  <strong> IIDT</strong>, <strong>BrainOvision (AICTE)</strong>, <strong>Deloitte</strong>, and <strong>PwC</strong>, I have engineered
                  production-grade freelancer marketplaces, automated blood banking systems, data dashboards, and computer
                  vision applications.
                </p>
                <p>
                  My engineering philosophy focuses on writing clean, maintainable code, architecting
                  robust REST APIs, and delivering delightful, accessible user experiences.
                </p>
              </div>

              {/* Spoken Languages Bar */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Spoken Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Telugu (Native)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    English (Professional)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    Hindi (Conversational)
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Showcase */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Certifications &amp; Credentials</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">3 Verified</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/40 transition-colors space-y-2 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pl-11">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[10px] font-medium text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Skills Visualizer */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
              
              {/* Category Filter Pills */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Skills Matrix</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Progress Bar Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-200 group-hover:text-blue-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-mono font-medium">
                          {skill.tag}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.04, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Comprehensive Toolset Footer Badge Cloud */}
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Technologies, Libraries &amp; Developer Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python 3',
                    'Django Framework',
                    'React 18/19',
                    'Node.js',
                    'Express',
                    'JavaScript ES6+',
                    'Java OOP',
                    'SQL & MySQL',
                    'PostgreSQL',
                    'MongoDB',
                    'Tailwind CSS',
                    'Bootstrap 5',
                    'Git & GitHub',
                    'AWS EC2 / S3',
                    'RESTful APIs',
                    'OpenCV / MediaPipe',
                    'Postman',
                    'VS Code',
                    'Linux / Bash',
                    'Agile / Scrum',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
