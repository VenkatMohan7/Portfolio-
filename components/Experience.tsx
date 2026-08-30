'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Award, Sparkles, Layers } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 'iidt',
      role: 'Full Stack Engineering Intern',
      company: 'IIDT (International Institute of Digital Technologies) & Blackbuck',
      period: 'Internship Tenure',
      location: 'Tirupati / Hybrid, India',
      project: "Freelancer's Marketplace (GigLink)",
      color: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
      highlights: [
        "Architected the end-to-end full-stack foundation for 'GigLink' — a two-sided freelance talent portal connecting clients with freelance professionals.",
        'Engineered responsive React frontend components integrating dynamic job posting, bidding dashboards, and real-time proposal reviews.',
        'Developed modular REST API endpoints using Python and Django, paired with PostgreSQL for relational transactional integrity.',
        'Optimized query indexing and authentication mechanisms, cutting data retrieval latency across user portfolios.',
      ],
      skills: ['Python', 'Django', 'React.js', 'PostgreSQL', 'RESTful APIs', 'Git', 'Agile'],
    },
    {
      id: 'brainovision',
      role: 'Web Development & Cloud Intern',
      company: 'BrainOvision Solutions India (AICTE Approved)',
      period: 'AICTE Certified Internship',
      location: 'Remote / India',
      project: 'Web Applications & Cloud Integration',
      color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400',
      highlights: [
        'Built modern responsive web user interfaces utilizing HTML5, CSS3, JavaScript ES6+, and component libraries.',
        'Collaborated with a cross-functional engineering cohort following agile sprint ceremonies, code reviews, and Git workflows.',
        'Configured cloud deployment pipelines and explored AWS infrastructure primitives (S3, EC2) for application hosting.',
        'Conducted thorough API testing using Postman to validate payload structures, response status codes, and edge-case error handlers.',
      ],
      skills: ['HTML5/CSS3', 'JavaScript', 'AWS Cloud', 'Postman', 'Git & GitHub', 'Sprint Planning'],
    },
    {
      id: 'deloitte',
      role: 'Data Analytics Internship',
      company: 'Deloitte',
      period: 'Virtual Internship',
      location: 'Remote',
      project: 'Data Analytics & Business Intelligence',
      color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
      highlights: [
        'Conducted exploratory data analysis (EDA) across complex business datasets to uncover operational patterns and actionable insights.',
        'Structured analytical models, performed data cleansing, and identified key performance trends to address client challenges.',
        'Synthesized analytical findings into clear visualizations and executive presentations to guide data-driven decision making.',
      ],
      skills: ['Data Analytics', 'Business Intelligence', 'Data Modeling', 'Tableau/Excel', 'Python', 'Reporting'],
    },
    {
      id: 'pwc',
      role: 'Power BI Virtual Case Experience',
      company: 'PwC',
      period: 'Virtual Internship Experience',
      location: 'Remote',
      project: 'Power BI & Operational Analytics',
      color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
      highlights: [
        'Engineered interactive Power BI dashboards calculating key corporate KPIs, customer retention metrics, and diversity analytics.',
        'Authored robust DAX formulas, calculated columns, and optimized relational data modeling relationships.',
        'Designed executive summary visualizers and drill-down reports facilitating clear stakeholder insights.',
      ],
      skills: ['Power BI', 'DAX Measures', 'Dashboard Design', 'Data Modeling', 'KPI Tracking', 'Analytics'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship &amp; Industry Experience
          </h2>
          <p className="text-base text-slate-400">
            Real-world engineering impact, full-stack product building, and hands-on industry practices.
          </p>
        </div>

        {/* Timeline Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all group"
            >
              {/* Top Row: Role, Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Project Badge */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Focus: {exp.project}</span>
              </div>

              {/* Key Bullet Points */}
              <div className="mt-4 space-y-2.5">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
