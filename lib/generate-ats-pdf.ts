import { jsPDF } from 'jspdf';

export function generateATSPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 44;

  // Helper for section headings
  const addSectionHeading = (title: string) => {
    if (y > 750) {
      doc.addPage();
      y = 44;
    }
    y += 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 64, 175); // Royal Blue
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(203, 213, 225); // Slate 300 divider
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // Helper for bullet points
  const addBullet = (text: string, boldPrefix?: string) => {
    if (y > 770) {
      doc.addPage();
      y = 44;
    }
    const bulletIndent = margin + 12;
    const textWidth = contentWidth - 16;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59); // Slate 800
    
    // Draw bullet dot
    doc.circle(margin + 4, y - 3, 1.5, 'F');
    
    if (boldPrefix) {
      doc.setFont('helvetica', 'bold');
      const prefixWidth = doc.getTextWidth(boldPrefix + ' ');
      doc.text(boldPrefix + ' ', bulletIndent, y);
      
      doc.setFont('helvetica', 'normal');
      const remainingWidth = textWidth - prefixWidth;
      const lines = doc.splitTextToSize(text, remainingWidth);
      if (lines.length > 0) {
        doc.text(lines[0], bulletIndent + prefixWidth, y);
        for (let i = 1; i < lines.length; i++) {
          y += 13;
          if (y > 770) {
            doc.addPage();
            y = 44;
          }
          doc.text(lines[i], bulletIndent, y);
        }
      }
    } else {
      const lines = doc.splitTextToSize(text, textWidth);
      for (let i = 0; i < lines.length; i++) {
        if (i > 0) {
          y += 13;
          if (y > 770) {
            doc.addPage();
            y = 44;
          }
        }
        doc.text(lines[i], bulletIndent, y);
      }
    }
    y += 13;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text('VENKAT MOHAN ATMAKURU', margin, y);
  y += 15;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235); // Blue 600
  doc.text('Software Engineer | Full Stack Developer', margin, y);
  y += 14;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // Slate 600
  const contactText = 'Email: venkeyvenkat747@gmail.com  |  Location: Andhra Pradesh, India';
  doc.text(contactText, margin, y);
  y += 12;

  const linksText = 'LinkedIn: linkedin.com/in/atmakuru-venkat-mohan  |  GitHub: github.com/venkey747';
  doc.text(linksText, margin, y);
  y += 8;

  // --- PROFESSIONAL SUMMARY ---
  addSectionHeading('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  const summaryText =
    'Results-oriented B.Tech Software Engineering graduate with strong technical capabilities in full-stack web development, Python, Django, React.js, Node.js, and AWS Cloud architectures. Proven track record of developing scalable applications, database schema designs, RESTful APIs, and machine learning computer vision pipelines. Demonstrated ability to collaborate in agile teams and deliver reliable, high-performance solutions.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  summaryLines.forEach((line: string) => {
    doc.text(line, margin, y);
    y += 13;
  });

  // --- TECHNICAL SKILLS ---
  addSectionHeading('Technical Proficiencies');
  addBullet('Python, Java, JavaScript (ES6+), SQL, C, HTML5, CSS3', 'Languages:');
  addBullet('React.js, Tailwind CSS, Bootstrap 5, Redux/State Management, Responsive Design', 'Front End:');
  addBullet('Django, Node.js, Express.js, RESTful API Architecture, Microservices Concepts', 'Back End:');
  addBullet('PostgreSQL, MySQL, MongoDB, Relational Database Modeling, Schema Normalization', 'Databases:');
  addBullet('AWS (EC2, S3), Git, GitHub, Postman, CI/CD Basics, Docker Fundamentals', 'Cloud & Tools:');
  addBullet('Data Structures & Algorithms (DSA), Agile/Scrum, Problem Solving, OOP', 'Methodologies:');

  // --- WORK & INTERNSHIP EXPERIENCE ---
  addSectionHeading('Work & Internship Experience');

  // Job 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Full Stack Engineering Intern', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Jun 2024 – Dec 2024', margin + contentWidth - doc.getTextWidth('Jun 2024 – Dec 2024'), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235);
  doc.text('International Institute of Digital Technologies (IIDT) & Blackbuck', margin, y);
  y += 12;

  addBullet('Architected full-stack GigLink Freelancer Marketplace using Python, Django, React, and PostgreSQL.');
  addBullet('Constructed dynamic client/freelancer dashboards, bidding workflows, and encrypted payment processing.');
  addBullet('Engineered secure RESTful endpoints and optimized database indexing, reducing query latency by 35%.');

  // Job 2
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Web Development & Cloud Intern', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Jul 2023 – Aug 2023', margin + contentWidth - doc.getTextWidth('Jul 2023 – Aug 2023'), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235);
  doc.text('BrainOvision Solutions India (AICTE Approved)', margin, y);
  y += 12;

  addBullet('Built responsive web modules and integrated REST APIs with comprehensive Postman test collections.');
  addBullet('Collaborated in daily agile sprints, code reviews, and Git repository version control workflows.');
  addBullet('Researched and implemented AWS cloud asset deployment and S3 media storage pipelines.');

  // Job 3
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Data Analytics Internship', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Virtual Internship', margin + contentWidth - doc.getTextWidth('Virtual Internship'), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235);
  doc.text('Deloitte', margin, y);
  y += 12;

  addBullet('Conducted exploratory data analysis (EDA) across enterprise datasets using Python and Tableau.');
  addBullet('Identified operational trends, structured data models, and generated executive stakeholder dashboards.');

  // Job 4
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Power BI Virtual Case Experience', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Virtual Simulation', margin + contentWidth - doc.getTextWidth('Virtual Simulation'), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235);
  doc.text('PwC', margin, y);
  y += 12;

  addBullet('Designed multi-page Power BI reports calculating customer churn KPIs, retention, and diversity metrics.');
  addBullet('Authored custom DAX calculated measures and optimized relational data models for real-time reporting.');

  // --- KEY PROJECTS ---
  addSectionHeading('Key Engineering Projects');

  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Freelancer’s Marketplace (GigLink) | Python, Django, React.js, PostgreSQL, Stripe', margin, y);
  y += 12;
  addBullet('Developed full-stack marketplace featuring role-based authentication, project bidding, and contract tracking.');
  addBullet('Implemented asynchronous notifications and secure checkout workflows for escrow funding.');

  // Project 2
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Car Driving Using Hand Gestures | Python, OpenCV, MediaPipe, NumPy', margin, y);
  y += 12;
  addBullet('Engineered contactless computer vision vehicle control interpreting optical camera feeds in real time.');
  addBullet('Achieved sub-35ms frame latency and 94% classification accuracy for steering, braking, and throttle gestures.');

  // Project 3
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Blood Bank Management System | Python/Java, Django, MySQL, Bootstrap 5', margin, y);
  y += 12;
  addBullet('Created inventory and donor management platform managing units, compatibility checks, and emergency alerts.');

  // --- EDUCATION ---
  addSectionHeading('Education');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Technology (B.Tech) in Software Engineering', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(37, 99, 235);
  doc.text('CGPA: 7.6 / 10 | 2021 – 2025', margin + contentWidth - doc.getTextWidth('CGPA: 7.6 / 10 | 2021 – 2025'), y);
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Audisankara College of Engineering and Technology, Gudur, Andhra Pradesh', margin, y);
  y += 14;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Intermediate (Class XII) - MPC', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(37, 99, 235);
  doc.text('CGPA: 8.61 / 10 | 2019 – 2021', margin + contentWidth - doc.getTextWidth('CGPA: 8.61 / 10 | 2019 – 2021'), y);
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Krishna Chaitanya Junior College, Nellore, Andhra Pradesh', margin, y);
  y += 14;

  // --- CERTIFICATIONS ---
  addSectionHeading('Certifications & Credentials');
  addBullet('Data Analytics Internship — Deloitte (Verified Enterprise Analytics Certificate)');
  addBullet('Power BI Virtual Case Experience — PwC (Business Intelligence & DAX Modeling)');
  addBullet('AWS Cloud Foundations & DevOps — AICTE / AWS Academy');

  // Trigger download
  doc.save('Venkat_Mohan_Atmakuru_ATS_Resume.pdf');
}
