'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Star, CheckCircle } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      id: 'btech',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Software Engineering / Computer Science',
      institution: 'Audisankara College of Engineering and Technology',
      period: '2021 – 2025',
      location: 'Gudur, Andhra Pradesh',
      score: '7.6 CGPA',
      scoreLabel: 'Degree CGPA',
      status: 'Graduating 2025',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java/Python)',
        'Database Management Systems (SQL)',
        'Operating Systems & Computer Networks',
        'Web Application Development',
        'Software Engineering Principles',
      ],
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    },
    {
      id: 'inter',
      degree: 'Intermediate (10+2)',
      field: 'MPC (Mathematics, Physics, Chemistry)',
      institution: 'Krishna Chaitanya Junior College',
      period: '2019 – 2021',
      location: 'Nellore, Andhra Pradesh',
      score: '8.61 CGPA',
      scoreLabel: 'Board Score',
      status: 'Completed',
      coursework: [
        'Higher Mathematics & Calculus',
        'Physics & Analytical Mechanics',
        'Inorganic & Organic Chemistry',
      ],
      color: 'from-indigo-600 to-cyan-600',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (SSC)',
      field: 'General High School Curriculum',
      institution: 'Veda Vyasa EM High School',
      period: '2018 – 2019',
      location: 'Nellore, Andhra Pradesh',
      score: '9.00 CGPA',
      scoreLabel: 'SSC GPA',
      status: 'Completed with Honors',
      coursework: [
        'Science & Mathematics Excellence',
        'Social Studies & Computing Basics',
        'Languages (English, Telugu, Hindi)',
      ],
      color: 'from-cyan-600 to-emerald-600',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
  ];

  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Milestones
          </h2>
          <p className="text-base text-slate-400">
            A consistent record of academic excellence, computer science foundations, and analytical training.
          </p>
        </div>

        {/* Education Connected Stepper */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {educationTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left info */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-tr ${item.color} text-white shadow-md shadow-blue-600/20`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400">{item.field}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-medium">{item.institution}</p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Coursework highlights */}
                  <div className="pt-3 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>Key Subjects &amp; Practical Modules</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-medium text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right score badge card */}
                <div className="md:text-right flex md:flex-col items-center md:items-end justify-between md:justify-center p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex-shrink-0 min-w-[150px]">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                      {item.score}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{item.scoreLabel}</span>
                  </div>

                  <span
                    className={`mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    <span>{item.status}</span>
                  </span>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
