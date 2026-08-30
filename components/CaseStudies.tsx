'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Server,
  Activity,
  Copy,
  Check,
  X,
  FileCode,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: 'Computer Vision & AI' | 'Full Stack & APIs' | 'Data & Analytics';
  readTime: string;
  subtitle: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string; detail: string }[];
  problem: string;
  architecture: {
    stages: { name: string; desc: string; icon: string }[];
  };
  solution: string[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  learnings: string[];
}

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'solution' | 'code' | 'metrics'>('architecture');

  const caseStudies: CaseStudy[] = [
    {
      id: 'gesture-cv',
      title: 'Real-Time Hand Gesture Vehicle Telemetry & Optical Steering',
      category: 'Computer Vision & AI',
      readTime: '4 min read',
      subtitle: 'Building a sub-35ms latency optical control system using MediaPipe & OpenCV',
      summary:
        'Engineered a contactless computer vision vehicle control pipeline translating raw webcam frames into directional game and telemetry inputs with low-jitter landmark smoothing.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Signal Processing'],
      metrics: [
        { label: 'Latency', value: '<35ms', detail: 'End-to-end frame to input latency' },
        { label: 'Classification', value: '94.2%', detail: 'Gesture detection accuracy' },
        { label: 'Jitter Reduction', value: '85%', detail: 'Via exponential moving filter' },
      ],
      problem:
        'Standard optical gesture detection algorithms suffered from two major bottlenecks: high frame processing lag (>120ms) causing steering overshoot in simulations, and landmark jitter under uneven ambient light that triggered erratic false-positive braking.',
      architecture: {
        stages: [
          { name: 'Video Ingestion', desc: '60 FPS 720p capture with OpenCV threaded buffer', icon: 'camera' },
          { name: 'Landmark Extraction', desc: 'MediaPipe Hands extracting 21 3D normalized coordinates', icon: 'cpu' },
          { name: 'Vector Angle Math', desc: 'Calculates wrist-to-index Euclidean vectors & steering inclination', icon: 'math' },
          { name: 'Smoothing Filter', desc: '5-frame rolling Exponential Moving Average (EMA)', icon: 'filter' },
          { name: 'Input Dispatch', desc: 'Asynchronous event triggers to virtual controller interface', icon: 'zap' },
        ],
      },
      solution: [
        'Implemented dynamic Region-of-Interest (ROI) bounding box cropping around the hand palm, reducing pixel traversal overhead by 68%.',
        'Built a custom Euclidean vector math engine to calculate steering angles relative to the camera horizontal baseline rather than absolute screen coordinates.',
        'Applied an Exponential Moving Average (EMA) low-pass filter to dampen micro-tremors without introducing perceptual input delay.',
        'Integrated a state machine with a 150ms dead-zone lockout to prevent accidental double-tap braking.',
      ],
      codeSnippet: {
        language: 'python',
        filename: 'gesture_engine.py',
        code: `import cv2
import mediapipe as mp
import numpy as np

class SteeringFilter:
    def __init__(self, alpha=0.35):
        self.alpha = alpha
        self.prev_angle = 0.0

    def smooth(self, raw_angle):
        # Exponential moving average filter for low-latency jitter reduction
        smoothed = (self.alpha * raw_angle) + ((1.0 - self.alpha) * self.prev_angle)
        self.prev_angle = smoothed
        return smoothed

def calculate_steering_angle(wrist, index_mcp):
    dx = index_mcp.x - wrist.x
    dy = index_mcp.y - wrist.y
    angle_rad = np.arctan2(dy, dx)
    angle_deg = np.degrees(angle_rad)
    # Normalize steering to [-45, +45] degrees with deadzone
    steering = np.clip((angle_deg + 90.0) * 1.5, -45.0, 45.0)
    return 0.0 if abs(steering) < 4.0 else steering`,
      },
      learnings: [
        'Hardware acceleration with OpenCV DNN backend delivers predictable frame pacing.',
        'Dead-zone calibration is vital for ergonomics in optical human-machine interfaces.',
        'Filtering in vector space yields significantly higher stability than pixel thresholding.',
      ],
    },
    {
      id: 'giglink-marketplace',
      title: 'Scalable Full-Stack Architecture & JWT Auth for Freelance Marketplace',
      category: 'Full Stack & APIs',
      readTime: '5 min read',
      subtitle: 'Designing dual-role RBAC, idempotent payments, and sub-100ms query performance',
      summary:
        'Architected the GigLink freelance portal handling role-based client/freelancer dashboards, concurrent bid submissions, and secure escrow workflows using React, Node.js, and PostgreSQL.',
      tags: ['React.js', 'Django / Node.js', 'PostgreSQL', 'JWT', 'REST APIs', 'Stripe'],
      metrics: [
        { label: 'Query Latency', value: '-62%', detail: 'Optimized composite index queries' },
        { label: 'Security', value: '100%', detail: 'HttpOnly cookie CSRF/XSS protection' },
        { label: 'Concurrency', value: '500+', detail: 'Stress tested simultaneous bidders' },
      ],
      problem:
        'Handling simultaneous bidding on hot project listings exposed the backend to race conditions where milestone allocations could be doubled, while managing state for two distinct user roles (Clients vs. Freelancers) complicated session hydration.',
      architecture: {
        stages: [
          { name: 'React SPA Client', desc: 'Componentized UI with optimistic UI updates and React Query caching', icon: 'react' },
          { name: 'API Gateway & JWT', desc: 'Stateless access token verification with HttpOnly refresh rotation', icon: 'lock' },
          { name: 'Role Guards (RBAC)', desc: 'Middleware inspecting user claims (Client vs Freelancer permissions)', icon: 'shield' },
          { name: 'PostgreSQL Relational DB', desc: 'Normalized tables with atomic transactions (ACID) & composite indexes', icon: 'db' },
          { name: 'Stripe Escrow Webhook', desc: 'Idempotency keys ensuring exactly-once milestone release', icon: 'credit' },
        ],
      },
      solution: [
        'Engineered a dual-token JWT authentication flow: short-lived 15-minute access tokens in memory and secure HttpOnly refresh cookies.',
        'Implemented database-level row locking (`SELECT FOR UPDATE`) during bid acceptance to guarantee atomic balance transfers.',
        'Created compound database indexes on `(category_id, budget_range, created_at)` reducing search lookup times from 280ms to 42ms.',
        'Added webhook signature verification and idempotency caching in Redis/memory to prevent duplicate Stripe charge events.',
      ],
      codeSnippet: {
        language: 'typescript',
        filename: 'authMiddleware.ts',
        code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: { id: string; role: 'client' | 'freelancer'; email: string };
}

export const requireRole = (allowedRole: 'client' | 'freelancer') => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
      if (decoded.role !== allowedRole && decoded.role !== 'admin') {
        return res.status(403).json({ error: 'Insufficient permissions for this resource' });
      }
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid or expired session token' });
    }
  };
};`,
      },
      learnings: [
        'Optimistic UI state updates dramatically enhance perceived responsiveness for real-time portals.',
        'Database transactions are indispensable when dealing with monetary escrow workflows.',
        'Decoupling client and freelancer profiles into separate sub-schemas prevents polymorphic query bloat.',
      ],
    },
    {
      id: 'analytics-churn',
      title: 'Enterprise Predictive Analytics & Churn KPI Dashboard Pipeline',
      category: 'Data & Analytics',
      readTime: '4 min read',
      subtitle: 'Transforming enterprise telemetry into executive DAX models and Tableau visual dashboards',
      summary:
        'Executed exploratory data analysis (EDA) and built interactive Power BI & Tableau dashboards uncovering customer retention bottlenecks and segment health metrics for Deloitte and PwC simulations.',
      tags: ['Data Analytics', 'Python', 'Power BI', 'DAX', 'Tableau', 'EDA'],
      metrics: [
        { label: 'Segments Analyzed', value: '10,000+', detail: 'Enterprise customer records' },
        { label: 'Risk Detection', value: '23%', detail: 'Identified high-risk churn cluster' },
        { label: 'Dashboard Speed', value: 'Instant', detail: 'Optimized star schema relationships' },
      ],
      problem:
        'Enterprise customer records suffered from non-uniform categorical values, missing usage logs, and flat table structures that made executive query drill-downs sluggish and prone to double-counting subscription renewals.',
      architecture: {
        stages: [
          { name: 'Raw Data Ingestion', desc: 'CSV & SQL multi-source extraction with schema validation', icon: 'file' },
          { name: 'Pandas Wrangling', desc: 'Missing value imputation, outlier winsorization, and type casting', icon: 'python' },
          { name: 'Star Schema Modeling', desc: 'Normalized Fact table linked to Customer, Date, and Product dimensions', icon: 'grid' },
          { name: 'DAX KPI Engine', desc: 'Dynamic Customer Lifetime Value (CLV) and Retention rate measures', icon: 'calc' },
          { name: 'Executive Dashboard', desc: 'Cross-filtering visual hierarchy in Power BI & Tableau', icon: 'chart' },
        ],
      },
      solution: [
        'Restructured flat customer data into a star schema model, reducing memory consumption in the Power BI VertiPaq engine by 45%.',
        'Wrote advanced DAX calculated measures utilizing `CALCULATE`, `FILTER`, and `DATESBETWEEN` for rolling 30-day cohort retention analysis.',
        'Implemented automated data cleaning pipelines in Python using Pandas to detect and isolate skew in contract duration distribution.',
        'Constructed interactive heatmaps highlighting support ticket escalations as the primary leading indicator of customer churn.',
      ],
      codeSnippet: {
        language: 'dax',
        filename: 'CustomerChurnMeasures.dax',
        code: `// Customer Churn Rate % Measure
Churn Rate % = 
VAR TotalCustomersStart = 
    CALCULATE(
        COUNTROWS('Dim_Customer'),
        FILTER(
            'Dim_Customer',
            'Dim_Customer'[JoinDate] < MIN('Dim_Date'[Date]) &&
            ('Dim_Customer'[ChurnDate] >= MIN('Dim_Date'[Date]) || ISBLANK('Dim_Customer'[ChurnDate]))
        )
    )
VAR ChurnedCustomersPeriod = 
    CALCULATE(
        COUNTROWS('Dim_Customer'),
        FILTER(
            'Dim_Customer',
            'Dim_Customer'[ChurnDate] >= MIN('Dim_Date'[Date]) &&
            'Dim_Customer'[ChurnDate] <= MAX('Dim_Date'[Date])
        )
    )
RETURN
    DIVIDE(ChurnedCustomersPeriod, TotalCustomersStart, 0)`,
      },
      learnings: [
        'Star schemas with explicit 1-to-many relationships outperform bi-directional filtering in analytics engines.',
        'Leading indicators (ticket volume) provide significantly higher intervention value than lagging metrics (cancellations).',
        'Clean, clear visual storytelling is just as critical as raw statistical rigor for executive stakeholders.',
      ],
    },
  ];

  const filters = ['All', 'Computer Vision & AI', 'Full Stack & APIs', 'Data & Analytics'];

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  const copyCodeToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="case-studies" className="relative py-20 lg:py-28 bg-slate-950/60 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Deep Dives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Case Studies &amp; Architectures
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              In-depth breakdowns of real engineering challenges, system design architectures,
              trade-off analyses, and measurable performance benchmarks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                    {study.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{study.readTime}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2">
                    {study.subtitle}
                  </p>
                </div>

                {/* Key Metrics Highlight Banner */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 my-2">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="text-sm sm:text-base font-extrabold text-blue-400 block font-mono">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[11px] font-medium border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[11px]">
                      +{study.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4">
                <button
                  onClick={() => {
                    setSelectedStudy(study);
                    setActiveTab('architecture');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 group-hover:bg-blue-600 text-slate-200 group-hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Read Full Engineering Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Reader Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 my-auto"
            >
              {/* Modal Top Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:px-6 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider block">
                      {selectedStudy.category} • {selectedStudy.readTime}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                      {selectedStudy.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8 text-slate-300">
                {/* Hero Overview */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {selectedStudy.title}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {selectedStudy.summary}
                  </p>

                  {/* Benchmark Ribbon */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                    {selectedStudy.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between"
                      >
                        <span className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono">
                          {m.value}
                        </span>
                        <div>
                          <span className="text-xs font-semibold text-white block mt-0.5">
                            {m.label}
                          </span>
                          <span className="text-[11px] text-slate-400 block">{m.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Navigation Tabs */}
                <div className="flex border-b border-slate-800 gap-2 text-xs sm:text-sm font-semibold">
                  {[
                    { key: 'architecture', label: 'Architecture & Flow', icon: Layers },
                    { key: 'solution', label: 'Problem & Solution', icon: CheckCircle2 },
                    { key: 'code', label: 'Code Implementation', icon: Code2 },
                    { key: 'metrics', label: 'Key Learnings', icon: TrendingUp },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as any)}
                        className={`flex items-center gap-1.5 py-3 px-3.5 border-b-2 transition-all cursor-pointer ${
                          isActive
                            ? 'border-blue-500 text-blue-400 font-bold'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Display */}
                <div className="pt-2">
                  {/* TAB 1: ARCHITECTURE FLOW */}
                  {activeTab === 'architecture' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-base font-bold text-white mb-2">
                          End-to-End Pipeline Blueprint
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Data progression and latency checkpoints through the system architecture:
                        </p>
                      </div>

                      <div className="space-y-3">
                        {selectedStudy.architecture.stages.map((stage, idx) => (
                          <div
                            key={idx}
                            className="relative flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80"
                          >
                            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs flex-shrink-0">
                              0{idx + 1}
                            </div>
                            <div>
                              <h5 className="text-sm font-bold text-white">{stage.name}</h5>
                              <p className="text-xs text-slate-400 mt-0.5">{stage.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PROBLEM & SOLUTION */}
                  {activeTab === 'solution' && (
                    <div className="space-y-6">
                      {/* The Bottleneck */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                          <AlertCircle className="w-4 h-4" />
                          <span>The Technical Bottleneck</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {selectedStudy.problem}
                        </p>
                      </div>

                      {/* The Architectural Solution */}
                      <div className="space-y-3">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400" />
                          <span>Architectural Interventions</span>
                        </h4>
                        <div className="space-y-2.5">
                          {selectedStudy.solution.map((sol, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-xs sm:text-sm text-slate-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CODE SNIPPET */}
                  {activeTab === 'code' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <FileCode className="w-4 h-4 text-blue-400" />
                          <span>{selectedStudy.codeSnippet.filename}</span>
                        </div>
                        <button
                          onClick={() => copyCodeToClipboard(selectedStudy.codeSnippet.code)}
                          className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {copiedCode ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner leading-relaxed">
                        <pre>{selectedStudy.codeSnippet.code}</pre>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: LEARNINGS & IMPACT */}
                  {activeTab === 'metrics' && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-white">
                        Key Engineering Takeaways &amp; Design Trade-offs
                      </h4>
                      <div className="space-y-3">
                        {selectedStudy.learnings.map((learning, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                              ✓
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300">{learning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
