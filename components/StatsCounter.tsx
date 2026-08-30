'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, Code, Rocket, CheckCircle2 } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      label: 'Featured Projects',
      value: '4+',
      desc: 'Full-Stack & Computer Vision',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-500',
      border: 'border-blue-500/30',
    },
    {
      label: 'Internship Experiences',
      value: '4',
      desc: 'IIDT, BrainOvision, Deloitte & PwC',
      icon: Briefcase,
      color: 'from-indigo-600 to-blue-500',
      border: 'border-indigo-500/30',
    },
    {
      label: 'Core Technologies',
      value: '12+',
      desc: 'Full-Stack, Databases & Cloud',
      icon: Code,
      color: 'from-cyan-600 to-teal-500',
      border: 'border-cyan-500/30',
    },
    {
      label: 'Verified Credentials',
      value: '3+',
      desc: 'Deloitte, PwC & AWS Cloud',
      icon: Award,
      color: 'from-emerald-600 to-teal-500',
      border: 'border-emerald-500/30',
    },
  ];

  return (
    <section className="relative py-8 -mt-6 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative rounded-2xl bg-slate-900/80 p-5 border ${stat.border} shadow-lg backdrop-blur-md overflow-hidden group`}
              >
                {/* Subtle gradient corner glow */}
                <div
                  className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${stat.color} opacity-15 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`}
                />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <h3 className="text-sm font-bold text-slate-200">{stat.label}</h3>
                    <p className="text-xs text-slate-400 font-medium">{stat.desc}</p>
                  </div>

                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md shadow-blue-900/30 flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Experience</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
