'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateATSPDF } from '@/lib/generate-ats-pdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadATS = () => {
    setIsGenerating(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.4 },
    });
    try {
      generateATSPDF();
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyTextCV = () => {
    const cvText = `
VENKAT MOHAN ATMAKURU
Software Engineer | Full Stack Developer
Email: venkeyvenkat747@gmail.com
LinkedIn: https://www.linkedin.com/in/atmakuru-venkat-mohan-90b968270/
GitHub: https://github.com/venkey747
Location: Andhra Pradesh, India

SUMMARY:
Passionate Software Engineer with hands-on expertise in building scalable full-stack applications, robust backend architectures, and intelligent data systems using Python, Django, React, Node.js, and AWS Cloud.

EDUCATION:
- B.Tech in Software Engineering / Computer Science (2021-2025)
  Audisankara College of Engineering and Technology | CGPA: 7.6
- Intermediate (MPC) (2019-2021)
  Krishna Chaitanya Junior College | CGPA: 8.61
- Secondary School Certificate (SSC) (2018-2019)
  Veda Vyasa EM High School | CGPA: 9.00

TECHNICAL SKILLS:
- Languages: Python, Java, JavaScript (ES6+), SQL, C
- Front End: React.js, HTML5, CSS3, Tailwind CSS, Bootstrap
- Back End: Django, Node.js, Express.js, RESTful APIs
- Databases & Cloud: PostgreSQL, MySQL, MongoDB, AWS (EC2, S3), Git/GitHub, Postman
- Soft Skills: Problem Solving, Data Structures & Algorithms, Agile/Scrum, Teamwork

INTERNSHIP EXPERIENCE:
1. Full Stack Engineering Intern | IIDT (International Institute of Digital Technologies) & Blackbuck
   - Architected 'GigLink' Freelancer's Marketplace using Python, Django, React, and PostgreSQL.
   - Built dynamic client/freelancer dashboards, bidding systems, and responsive UI components.
2. Web Development & Cloud Intern | BrainOvision Solutions India (AICTE Approved)
   - Built responsive web interfaces, API testing suites with Postman, and AWS cloud workflows.
3. Data Analytics Internship | Deloitte
   - Conducted exploratory data analysis (EDA), business dataset modeling, and executive dashboard reporting.
4. Power BI Virtual Case Experience | PwC
   - Built interactive multi-page Power BI reports, DAX calculated measures, and customer retention analytics.

PROJECTS:
1. Freelancer's Marketplace (GigLink) - Python, Django, React, PostgreSQL
2. Blood Bank Management System - Java/Python, Django, MySQL, Bootstrap
3. E-Commerce Website (Splash) - React.js, JavaScript, HTML5/CSS3
4. Car Driving Using Hand Gestures - Python, OpenCV, MediaPipe, NumPy

CERTIFICATIONS:
- Data Analytics Internship — Deloitte
- Power BI Virtual Case Experience — PwC
- AWS Cloud Foundations & DevOps — AICTE / AWS Academy
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 my-auto"
      >
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:px-6 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              CV
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-[11px] text-slate-400">Venkat Mohan Atmakuru</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTextCV}
              className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy Resume Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Plaintext</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Browser Print View"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadATS}
              disabled={isGenerating}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              title="Download ATS-Formatted PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGenerating ? 'Generating...' : 'Download ATS PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 bg-slate-950 text-slate-200 font-sans space-y-8 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                  VENKAT MOHAN ATMAKURU
                </h1>
                <p className="text-sm font-semibold text-blue-400 print:text-blue-700 mt-0.5">
                  Software Engineer | Full Stack Developer
                </p>
              </div>

              <div className="text-xs text-slate-400 print:text-neutral-700 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>venkeyvenkat747@gmail.com</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs pt-1 text-slate-400 print:text-neutral-800">
              <a
                href="https://www.linkedin.com/in/atmakuru-venkat-mohan-90b968270/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 text-blue-400"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/atmakuru-venkat-mohan</span>
              </a>
              <a
                href="https://github.com/venkey747"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 text-blue-400"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/venkey747</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-neutral-800 leading-relaxed">
              Results-driven B.Tech Software Engineering graduate with strong technical capabilities
              in full-stack development, Python, Django, React.js, Node.js, and Cloud architectures.
              Experienced in translating user needs into scalable web platforms, database schema designs,
              and machine learning computer vision pipelines.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Bachelor of Technology (B.Tech) in Software Engineering
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    Audisankara College of Engineering and Technology, Gudur
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-blue-400 print:text-blue-800">CGPA: 7.6 / 10</span>
                  <p className="text-xs text-slate-500 print:text-neutral-600">2021 – 2025</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Intermediate (Class XII) - MPC
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    Krishna Chaitanya Junior College, Nellore
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-blue-400 print:text-blue-800">CGPA: 8.61 / 10</span>
                  <p className="text-xs text-slate-500 print:text-neutral-600">2019 – 2021</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Secondary School Certificate (Class X)
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    Veda Vyasa EM High School, Nellore
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-blue-400 print:text-blue-800">CGPA: 9.00 / 10</span>
                  <p className="text-xs text-slate-500 print:text-neutral-600">2018 – 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-neutral-800">
              <p>
                <strong>Programming Languages:</strong> Python, Java, JavaScript (ES6+), SQL, C
              </p>
              <p>
                <strong>Front End:</strong> React.js, HTML5, CSS3, Tailwind CSS, Bootstrap 5
              </p>
              <p>
                <strong>Back End &amp; APIs:</strong> Django, Node.js, Express.js, RESTful Architecture
              </p>
              <p>
                <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
              </p>
              <p>
                <strong>Cloud &amp; DevOps:</strong> AWS (EC2, S3), Git, GitHub, Postman
              </p>
              <p>
                <strong>Methodologies:</strong> Agile/Scrum, DSA, Object-Oriented Design
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Internship Experience
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Full Stack Engineering Intern
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    IIDT (International Institute of Digital Technologies) &amp; Blackbuck
                  </p>
                </div>
                <span className="text-xs text-slate-500 print:text-neutral-600">Internship</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-neutral-800 space-y-1">
                <li>Architected full-stack GigLink Freelancer&apos;s marketplace using Python, Django, React, and PostgreSQL.</li>
                <li>Built dynamic client/freelancer dashboards, bidding systems, and responsive UI components.</li>
                <li>Implemented secure RESTful endpoints and optimized database indexing.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Web Development &amp; Cloud Intern
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    BrainOvision Solutions India (AICTE Approved)
                  </p>
                </div>
                <span className="text-xs text-slate-500 print:text-neutral-600">Internship</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-neutral-800 space-y-1">
                <li>Developed modular responsive frontend pages and integrated REST APIs.</li>
                <li>Participated in daily agile standups, code reviews, and Git repository branching.</li>
                <li>Tested API payloads with Postman and explored AWS deployment strategies.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Data Analytics Internship
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    Deloitte
                  </p>
                </div>
                <span className="text-xs text-slate-500 print:text-neutral-600">Internship</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-neutral-800 space-y-1">
                <li>Performed exploratory data analysis (EDA) to uncover operational trends and client growth areas.</li>
                <li>Structured analytical frameworks and executive reporting presentations.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">
                    Power BI Virtual Case Experience
                  </h3>
                  <p className="text-slate-400 print:text-neutral-700">
                    PwC
                  </p>
                </div>
                <span className="text-xs text-slate-500 print:text-neutral-600">Simulation</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-neutral-800 space-y-1">
                <li>Engineered interactive Power BI dashboards calculating customer churn and operational KPIs.</li>
                <li>Designed DAX measures and optimized relational data models for executive reporting.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Key Projects
            </h2>

            <div className="space-y-2 text-xs text-slate-300 print:text-neutral-800">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  1. Freelancer&apos;s Marketplace (GigLink) | Python, Django, React.js, PostgreSQL
                </h3>
                <p className="text-slate-400 print:text-neutral-700">
                  Full-stack talent bidding portal with dual-role user auth, project posting, messaging, and contract tracking.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  2. Blood Bank Management System | Python/Java, Django, MySQL, Bootstrap
                </h3>
                <p className="text-slate-400 print:text-neutral-700">
                  Automated blood donation and hospital inventory platform with real-time stock auditing and emergency donor discovery.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  3. E-Commerce Website (Splash) | React.js, JavaScript, Tailwind CSS
                </h3>
                <p className="text-slate-400 print:text-neutral-700">
                  Responsive single-page online shopping storefront with interactive cart, filtering, and checkout flow.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  4. Car Driving Using Hand Gestures | Python, OpenCV, MediaPipe, NumPy
                </h3>
                <p className="text-slate-400 print:text-neutral-700">
                  Real-time contactless steering control and gesture classification translating webcam hand vectors into game inputs.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest print:text-blue-800 border-b border-slate-800/80 pb-1">
              Certifications &amp; Training
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-neutral-800 space-y-1">
              <li>Data Analytics Internship — Deloitte</li>
              <li>Power BI Virtual Case Experience — PwC</li>
              <li>AWS Cloud Foundations &amp; Architecture — AICTE / AWS Academy</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
