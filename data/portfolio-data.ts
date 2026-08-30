export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role: string;
  duration: string;
  teamSize: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  iconType: 'marketplace' | 'blood' | 'ecommerce' | 'gesture' | 'code';
  githubUrl?: string;
  liveUrl?: string;
  badgeColor?: string;
}

export interface Experience {
  id: string;
  title: string;
  role: string;
  organization: string;
  affiliation?: string;
  duration: string;
  teamSize?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  iconType: 'briefcase' | 'shop';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  field?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Programming' | 'Cloud' | 'Data Science';
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "VENKAT MOHAN",
    surname: "ATMAKURU",
    fullName: "Venkat Mohan Atmakuru",
    role: "Software Engineer",
    tagline: "Innovative and dedicated Software Engineer with expertise in full stack development. I build scalable, user-friendly applications and love turning ideas into impactful digital solutions.",
    aboutLong: "Innovative and dedicated Software Engineer with expertise in full stack development, with front-end and back-end technologies. Strong problem-solving skills and a passion for developing cutting-edge solutions. Excellent collaborator with a commitment to continuous learning and staying ahead of industry trends. Demonstrated ability to deliver high-quality projects on time, enhancing user experiences and driving business growth.",
    location: "Andhra Pradesh, India",
    email: "venkeyvenkat747@gmail.com",
    linkedin: "https://www.linkedin.com/in/venkat-mohan-atmakuru/",
    linkedinHandle: "linkedin.com/in/venkat-mohan-atmakuru",
    github: "https://github.com/VenkatMohan7",
    githubHandle: "github.com/VenkatMohan7",
    status: "Open to Full-Time & Internship Roles",
    languages: [
      { name: "English", level: "Professional" },
      { name: "Telugu", level: "Native" },
      { name: "Hindi", level: "Professional" }
    ]
  },

  skills: {
    languages: ["Python", "C++", "Problem Solving", "MySQL", "JavaScript"],
    frontEnd: ["HTML", "CSS", "PHP", "JavaScript", "React.js", "Tailwind CSS"],
    backEnd: ["Django", "Node.js", "Express.js", "RESTful APIs", "SQL (Data Management)", "MongoDB"],
    cloudDevops: ["AWS", "Git", "GitHub", "Vercel", "CI/CD Basics"],
    programmingSkills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "System Design Basics"],
    softSkills: [
      "Communication",
      "Analytical Thinking",
      "Strategic Thinking",
      "Risk Mitigation",
      "Project & Time Management",
      "Quick Skills Adaptation"
    ],
    otherTools: [
      "Microsoft 365",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Blender",
      "Figma",
      "WordPress"
    ]
  },

  projects: [
    {
      id: "giglink",
      title: "Freelancer's Marketplace",
      subtitle: "(GigLink)",
      role: "Full Stack Developer Intern",
      duration: "Jun 2024 - Dec 2024",
      teamSize: "Team Size - 4",
      description: "Developed a user-friendly platform offering intuitive navigation and seamless interactions for both users and freelancers.",
      fullDescription: "GigLink is a comprehensive freelance service platform engineered with the MERN stack. Designed from the ground up to solve collaboration friction between clients and freelancers with end-to-end payment escrow and instant matching.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Git"],
      features: [
        "Architected role-based dashboards for freelancers and hiring clients with custom portfolio showcases.",
        "Implemented end-to-end secure card transactions and escrow payments powered by the Stripe API.",
        "Engineered advanced multi-criteria project search with filters for skill taxonomy, budget, and ratings.",
        "Constructed real-time bid proposal tracking, notification pipeline, and job completion verification."
      ],
      iconType: "marketplace",
      githubUrl: "https://github.com/VenkatMohan7",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "blood-bank",
      title: "Blood Bank Management System",
      role: "Developer",
      duration: "Feb 2024 - May 2024",
      teamSize: "Team Size - 2",
      description: "Created a system to manage donors, inventory, and blood requests efficiently. Integrated real-time notifications and built user-friendly interfaces.",
      fullDescription: "A life-critical medical inventory and donor management system engineered to streamline emergency blood requests, eliminate inventory shortages, and connect verified donors with hospitals instantly.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP/APIs"],
      features: [
        "Developed responsive front-end interfaces with HTML5, CSS3, and JavaScript for blood donor registrations.",
        "Implemented a secure and normalized relational database schema in MySQL managing units, groups, and expiry dates.",
        "Created an intuitive inventory management portal with low-stock alerts across 8 blood groups.",
        "Integrated real-time notification triggers for urgent blood requests and emergency hospital dispatches."
      ],
      iconType: "blood",
      githubUrl: "https://github.com/VenkatMohan7",
      badgeColor: "bg-red-50 text-red-700 border-red-200"
    },
    {
      id: "ecommerce-splash",
      title: "E-Commerce Website",
      subtitle: "(Splash)",
      role: "Full Stack Intern",
      duration: "Jul 2023 - Aug 2023",
      teamSize: "Team Size - 4",
      description: "Developed a responsive e-commerce website with product listing, shopping cart, and secure payment gateway integration.",
      fullDescription: "A full-featured digital storefront built with Python and Django. Features dynamic catalogs, persistent user shopping carts, order status tracking, and secure payment processing.",
      technologies: ["Django", "Python", "MySQL", "JavaScript", "HTML", "CSS"],
      features: [
        "Developed responsive user interfaces with modular product cards, category filtering, and live search.",
        "Designed the backend architecture utilizing Django's MVC/MVT framework and ORM for efficient relational queries.",
        "Engineered session-persistent shopping cart management and automated checkout workflows.",
        "Integrated secure payment gateway verification and transaction receipts generation."
      ],
      iconType: "ecommerce",
      githubUrl: "https://github.com/VenkatMohan7",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: "gesture-car",
      title: "Car Driving Using Hand Gestures",
      role: "Developer",
      duration: "Feb 2024 - May 2024",
      teamSize: "Team Size - 2",
      description: "Developed a system to control car driving using hand gestures with real-time gesture recognition using OpenCV and ML techniques.",
      fullDescription: "An AI-powered computer vision system designed to assist mobility-impaired drivers and showcase contactless vehicle control using optical camera feeds and machine learning classifiers.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "NumPy"],
      features: [
        "Implemented real-time optical hand tracking and gesture recognition algorithms using OpenCV.",
        "Trained machine learning models to classify directional gestures (accelerate, steer left/right, brake, reverse).",
        "Integrated the vision pipeline with vehicle control interfaces for responsive, low-latency actuation.",
        "Conducted extensive testing under varying illumination, backgrounds, and distances to achieve high accuracy."
      ],
      iconType: "gesture",
      githubUrl: "https://github.com/VenkatMohan7",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ] as Project[],

  experiences: [
    {
      id: "iidt-giglink",
      title: "Freelancer's Marketplace (GigLink)",
      role: "Full Stack Developer Intern",
      organization: "International Institute of Digital Technologies (IIDT)",
      affiliation: "AP Government, India associated with Blackbuck Engineers Pvt. Ltd.",
      duration: "Jun 2024 - Dec 2024",
      teamSize: "Team Size - 4",
      description: "Developed a user-friendly platform offering intuitive navigation and seamless interactions for both users and freelancers.",
      achievements: [
        "Developed a user-friendly platform offering intuitive navigation and seamless interactions for both users and freelancers.",
        "Implemented secure payment processing using Stripe API, ensuring safe and encrypted transactions.",
        "Enhanced project discovery with advanced search functionalities and personalized recommendations.",
        "Collaborated in an agile 4-member engineering team following Git branching, code reviews, and sprint planning."
      ],
      technologies: ["JavaScript", "Node.js", "Express.js", "React.js", "MongoDB", "Stripe API", "Git"],
      iconType: "briefcase"
    },
    {
      id: "brainovision-splash",
      title: "E-Commerce Website (Splash)",
      role: "Full Stack Intern",
      organization: "BrainOvision Solutions Pvt. Ltd.",
      affiliation: "Associated with All India Council for Technical Education (AICTE)",
      duration: "Jul 2023 - Aug 2023",
      teamSize: "Team Size - 4",
      description: "Developed a responsive and user-friendly e-commerce website with features like product listing, shopping cart, and secure payment gateway integration.",
      achievements: [
        "Developed a responsive and user-friendly e-commerce website with features like product listing, shopping cart, and secure payment gateway integration.",
        "Designed and maintained backend REST endpoints and database models using Python, Django, and MySQL.",
        "Optimized client-side rendering and asset delivery for high performance across mobile and desktop devices."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL", "Git"],
      iconType: "shop"
    },
    {
      id: "deloitte-analytics",
      title: "Data Analytics Internship",
      role: "Data Analytics Intern",
      organization: "Deloitte",
      affiliation: "Enterprise Business Analytics",
      duration: "Virtual Internship",
      teamSize: "Individual",
      description: "Conducted exploratory data analysis (EDA) across enterprise datasets, structured predictive insights, and designed executive dashboards.",
      achievements: [
        "Analyzed complex business datasets to detect operational patterns and strategic opportunities.",
        "Formulated data models and cleaned raw data for statistical exploratory data analysis.",
        "Designed executive summaries and interactive visualization dashboards for stakeholder presentations."
      ],
      technologies: ["Data Analytics", "Python", "Tableau", "Excel", "Data Modeling", "EDA"],
      iconType: "chart"
    },
    {
      id: "pwc-powerbi",
      title: "Power BI Virtual Case Experience",
      role: "Power BI Analytics Intern",
      organization: "PwC",
      affiliation: "Digital Intelligence & Reporting",
      duration: "Virtual Experience",
      teamSize: "Individual",
      description: "Engineered multi-page interactive Power BI dashboards calculating key corporate KPIs, customer retention rates, and diversity metrics.",
      achievements: [
        "Created dynamic dashboards calculating customer churn, retention metrics, and organizational KPIs.",
        "Developed custom DAX measures, calculated columns, and optimized schema relationships.",
        "Built executive drill-down reports facilitating clear decision making."
      ],
      technologies: ["Power BI", "DAX", "Data Modeling", "KPI Visuals", "Analytics"],
      iconType: "chart"
    }
  ] as Experience[],

  education: [
    {
      id: "btech",
      degree: "B.Tech (Software Engineering)",
      institution: "Audisankara College of Education (Software Engineering)",
      location: "Nellore, Andhra Pradesh, India",
      duration: "Jan 2020 – Jul 2024",
      cgpa: "CGPA: 7.6",
      field: "Software Engineering & Computer Science"
    },
    {
      id: "intermediate",
      degree: "Intermediate (MPC)",
      institution: "Krishna Chaitanya Jr College",
      location: "Nellore, Andhra Pradesh, India",
      duration: "Jan 2018 – Jul 2020",
      cgpa: "CGPA: 8.61",
      field: "Mathematics, Physics, Chemistry"
    },
    {
      id: "ssc",
      degree: "SSC (Secondary School Certificate)",
      institution: "Veda Vyasa EM High School",
      location: "Nellore, Andhra Pradesh, India",
      duration: "Jul 2018",
      cgpa: "CGPA: 9.00",
      field: "Secondary Education"
    }
  ] as Education[],

  certifications: [
    {
      id: "cert-deloitte",
      title: "Data Analytics Internship",
      issuer: "Deloitte",
      category: "Data Science",
      tags: ["Data Analytics", "Business Intelligence", "Tableau/Excel"]
    },
    {
      id: "cert-pwc",
      title: "Power BI Virtual Case Experience",
      issuer: "PwC",
      category: "Data Science",
      tags: ["Power BI", "Data Modeling", "Dashboard Design"]
    },
    {
      id: "cert-cloud",
      title: "Cloud & IoT Edge Machine Learning",
      issuer: "Technical Training & Certification",
      category: "Cloud",
      tags: ["AWS", "DevOps", "Cloud IoT", "Edge ML"]
    },
    {
      id: "cert-prog",
      title: "Core Programming & Problem Solving",
      issuer: "Coding Assessment & Certification",
      category: "Programming",
      tags: ["Python", "C++", "MySQL", "JavaScript", "DSA"]
    }
  ] as Certification[]
};
