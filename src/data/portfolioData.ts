/**
 * PORTFOLIO DATA CONFIGURATION
 * Single Source of Truth for Prathamesh Kumbar's Portfolio
 * B.Tech CSE-AIML Student | Kishkinda University | Ballary, Karnataka, India
 */

export interface Project {
  id: string;
  name: string;
  category: 'Hardware / Embedded' | 'AI & Cybersecurity' | 'Software';
  techBadge: string;
  description: string;
  technologies: string[];
  projectLink: string;
  isExternalDemo: boolean;
  demoButtonText?: string;
  visualTheme: string;
  objective: string;
  features: string[];
  futureRoadmap?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Prathamesh Kumbar",
    displayName: "Prathamesh",
    role: "B.Tech CSE-AIML Student",
    university: "Kishkinda University",
    location: "Ballary, Karnataka, India",
    careerGoals: ["AI Engineer", "Data Analyst"],
    experienceStatus: "Fresher",
    experienceSubline: "Currently building skills, projects and real-world experience.",
    education: {
      degree: "B.Tech Computer Science & Engineering (AI & ML)",
      institution: "Kishkinda University",
      graduationYear: "2026",
      cgpa: "8.5 CGPA",
      location: "Ballary, Karnataka, India",
    },
    email: "prathameshkumbar2007@gmail.com",
    phone: "9036877407",
    portraitImage: "/assets/prathamesh-portrait.jpg",
    originalPhoto: "/assets/prathamesh-original.jpg",
    bannerImage: "/assets/prathamesh-banner.png",
    headline: "Building Intelligent Experiences with AI.",
    supportingLine: "Computer Science & AI/ML student turning ideas into intelligent, practical and impactful digital solutions.",
    brandStatement: "I don't just learn technology — I build with it.",
    badge: "AI × DATA × SOFTWARE",
    resumeLabel: "Resume — Coming Soon",
  },

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/prathameshkumbar2007",
      handle: "github.com/prathameshkumbar2007",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/prathamesh-kumbar-6a9005384",
      handle: "linkedin.com/in/prathamesh-kumbar-6a9005384",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/prathamk_2007",
      handle: "@prathamk_2007",
    },
  ],

  about: {
    paragraphs: [
      "I'm Prathamesh Kumbar, a Computer Science & Engineering (AI & ML) student passionate about transforming ideas into intelligent, real-world digital experiences.",
      "My interests span Artificial Intelligence, Machine Learning, Data Analytics, Software Development, and Cybersecurity. I enjoy exploring emerging technologies and turning complex problems into practical, user-focused solutions.",
      "From building AI-powered cybersecurity platforms to developing smart applications and intelligent systems, I focus on creating projects that combine innovation, functionality, and modern design.",
      "I'm continuously strengthening my skills in programming, AI/ML, problem-solving, and full-stack development, with the goal of becoming a versatile technology professional capable of building impactful products."
    ],
    highlight: "I don't just learn technology — I build with it.",
    keyMetrics: [
      { label: "University", value: "Kishkinda University", tag: "AI & ML" },
      { label: "Academic Standing", value: "8.5 CGPA", tag: "Class of 2026" },
      { label: "Status", value: "Fresher", tag: "Open for Opportunities" },
      { label: "Location", value: "Ballary, Karnataka", tag: "India" },
    ],
  },

  skills: [
    {
      category: "Programming",
      description: "Core algorithmic foundations & object-oriented programming",
      skills: [
        { name: "Python", level: "Primary Language", icon: "Code2" },
        { name: "Java", level: "Object-Oriented Programming", icon: "Coffee" },
        { name: "C", level: "Low-level Systems & Memory", icon: "Cpu" },
      ],
    },
    {
      category: "Web",
      description: "Modern responsive web development technologies",
      skills: [
        { name: "HTML", level: "Semantic Markup", icon: "Globe" },
        { name: "CSS", level: "Responsive Styling", icon: "Palette" },
        { name: "JavaScript", level: "Client-side Scripting & DOM", icon: "Zap" },
      ],
    },
    {
      category: "Development Tools",
      description: "Version control & collaborative engineering platforms",
      skills: [
        { name: "Git", level: "Distributed Version Control", icon: "GitBranch" },
        { name: "GitHub", level: "Repository & Workflow Management", icon: "Github" },
      ],
    },
    {
      category: "Future Focus",
      description: "Specialized domains actively studied and implemented in projects",
      skills: [
        { name: "Artificial Intelligence", level: "Algorithms & Intelligent Agents", icon: "Brain" },
        { name: "Machine Learning", level: "Predictive Modeling & Classification", icon: "Sparkles" },
        { name: "Data Analytics", level: "Exploratory Analysis & Insights", icon: "BarChart3" },
        { name: "Cybersecurity", level: "Threat Intelligence & Forensics", icon: "Shield" },
      ],
    },
  ] as SkillGroup[],

  careerFocus: {
    title: "Where I'm Headed",
    subtitle: "A deliberate engineering path from core foundations to production-grade intelligence.",
    targetRoles: [
      { title: "AI Engineer", description: "Designing, training, and deploying intelligent models and neural systems to solve real-world problems." },
      { title: "Data Analyst", description: "Transforming raw data into actionable intelligence through structured analysis, statistical modeling, and visualization." },
    ],
    progression: [
      {
        step: "01",
        stage: "Programming",
        summary: "Robust algorithmic problem solving in Python, Java, and C.",
        active: true,
      },
      {
        step: "02",
        stage: "Data",
        summary: "Data structures, analytical pipelines, cleaning, and exploratory data analysis.",
        active: true,
      },
      {
        step: "03",
        stage: "AI",
        summary: "Machine learning architectures, neural networks, and generative intelligence.",
        active: true,
      },
      {
        step: "04",
        stage: "Intelligent Applications",
        summary: "End-to-end software integrating AI capabilities, security, and intuitive UX.",
        active: true,
      },
    ],
  },

  projects: [
    {
      id: "project-smart-spectacles",
      name: "Smart Spectacles for Blind Using Ultrasonic Sensor",
      category: "Hardware / Embedded",
      techBadge: "Hardware / Embedded System",
      description: "Smart Spectacles for Blind is an assistive device designed to help visually impaired people detect nearby obstacles using an ultrasonic sensor. When an obstacle is detected, the system can provide buzzer, vibration or voice alerts. AI can also be integrated for object identification and intelligent voice guidance.",
      technologies: ["Hardware", "Embedded Systems", "Ultrasonic Sensors", "Microcontroller", "Assistive Tech"],
      projectLink: "https://lnkd.in/p/dCnwA6gp",
      isExternalDemo: true,
      demoButtonText: "View Project Demo on LinkedIn",
      visualTheme: "smart-wearable",
      objective: "Assist visually impaired individuals in spatial awareness and real-time obstacle avoidance through responsive sensory feedback.",
      features: [
        "Real-time obstacle distance measurement using ultrasonic sensors",
        "Multi-modal sensory alert system (buzzer tone, vibration haptic feedback, voice prompt alerts)",
        "Compact wearable ergonomic form factor for daily mobility",
        "Future AI Roadmap: Architecture designed for computer vision integration for automated object identification and real-time audio guidance."
      ],
      futureRoadmap: "Planned future extension includes micro-camera integration with lightweight on-device object detection for contextual voice guidance."
    },
    {
      id: "project-cybertrace-ai",
      name: "AI Email Threat Detection & Geo-Forensics",
      category: "AI & Cybersecurity",
      techBadge: "AI & Threat Intelligence",
      description: "An AI-powered cybersecurity platform that detects phishing, spoofing, BEC and malicious emails while providing sender geolocation, domain intelligence and forensic analysis for threat investigation.",
      technologies: ["AI", "Cybersecurity", "Software", "Threat Intelligence", "Geo-Forensics", "NLP", "Vercel"],
      projectLink: "https://cybertrace-ai-mocha.vercel.app/",
      isExternalDemo: true,
      demoButtonText: "View Live Project",
      visualTheme: "cybersecurity-shield",
      objective: "Provide enterprise-grade automated email threat detection with real-time sender geo-intelligence and forensic header inspection.",
      features: [
        "Multi-vector threat detection identifying phishing, spoofing, Business Email Compromise (BEC), and malicious links",
        "Real-time sender IP geolocation mapping and telemetry forensics",
        "Domain intelligence scanning and authentication reputation analysis (SPF, DKIM, DMARC verification)",
        "Comprehensive forensic investigation dashboard with transparent risk scoring",
        "Cloud-deployed live web application available for instant security inspection"
      ],
      futureRoadmap: "Extending ML models with automated malware sandbox extraction and zero-day threat pattern correlation."
    },
  ] as Project[],

  services: [
    {
      id: "service-web",
      title: "Web Development",
      icon: "Layout",
      tagline: "Modern, responsive, user-focused web interfaces",
      description: "Developing clean, performant, and accessible front-end websites using modern HTML5, CSS3, JavaScript, and modern component frameworks.",
      capabilities: [
        "Responsive cross-device layouts",
        "Interactive component architectures",
        "Clean, semantic, accessible HTML",
        "Intuitive user experience design"
      ],
    },
    {
      id: "service-data",
      title: "Data Analytics",
      icon: "LineChart",
      tagline: "Actionable intelligence from raw data",
      description: "Extracting meaningful patterns from data through structured cleaning, exploratory data analysis, and clear visual reports.",
      capabilities: [
        "Exploratory Data Analysis (EDA)",
        "Data cleaning and preprocessing",
        "Visual storytelling and reporting",
        "Statistical insights and metric tracking"
      ],
    },
    {
      id: "service-python",
      title: "Python Development",
      icon: "Terminal",
      tagline: "Automations, scripts & AI/ML prototypes",
      description: "Building reliable Python utilities, data handling pipelines, and AI/ML experiments with clean, maintainable logic.",
      capabilities: [
        "Automated data collection and scripts",
        "AI and Machine Learning experimentation",
        "Algorithmic problem solving",
        "Modular object-oriented architecture"
      ],
    },
  ] as Service[],

  certifications: [
    {
      id: "cert-01",
      title: "Full Stack Development",
      category: "Software Engineering",
      description: "Comprehensive development curriculum covering end-to-end web architectures, client-server interaction, and modern development workflows.",
    },
    {
      id: "cert-02",
      title: "GenAI Powered Data Analytics Job Simulation",
      category: "AI & Analytics",
      description: "Hands-on industry simulation applying generative AI tools and analytical methodologies to real-world corporate business datasets.",
    },
    {
      id: "cert-03",
      title: "OCI AI Foundations Associate",
      category: "Cloud AI Infrastructure",
      description: "Oracle Cloud Infrastructure certification validating core artificial intelligence concepts, machine learning fundamentals, and cloud AI services.",
    },
  ] as Certification[],

  achievements: {
    heading: "Learning, Building & Growing",
    subheading: "A trajectory centered on tangible engineering output, continuous curiosity, and practical execution.",
    items: [
      {
        title: "Hands-on AI/ML Project Development",
        desc: "Designed and trained models translating complex theoretical concepts into practical digital tools.",
        tag: "Artificial Intelligence",
      },
      {
        title: "Cybersecurity Platform Engineering",
        desc: "Engineered and deployed CyberTrace AI to investigate malicious email threats and sender geo-forensics live on the web.",
        tag: "Cybersecurity",
      },
      {
        title: "Assistive Hardware Engineering",
        desc: "Prototyped ultrasonic smart glasses to enhance mobility and obstacle detection for visually impaired people.",
        tag: "Hardware & IoT",
      },
      {
        title: "Full-Stack & Cloud AI Certifications",
        desc: "Completed certifications in Full Stack Development, GenAI Data Analytics, and OCI AI Foundations Associate.",
        tag: "Continuous Learning",
      },
    ],
  },

  experience: {
    status: "Fresher",
    headline: "Currently building skills, projects and real-world experience.",
    description: "As a B.Tech CSE (AI & ML) student graduating in 2026 with an 8.5 CGPA, I invest my time in engineering end-to-end projects, mastering fundamental algorithms, and collaborating on intelligent software solutions. Ready for internships, hackathons, and innovative team contributions.",
  },

  contact: {
    title: "Let's Build Something Intelligent.",
    subtitle: "Have an internship opportunity, project collaboration, or want to discuss AI, data, and software? Reach out anytime.",
    email: "prathameshkumbar2007@gmail.com",
    phone: "9036877407",
    location: "Ballary, Karnataka, India",
  },
};