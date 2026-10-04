export const RESUME_DATA = {
  name: "Cherukuri Venkatesh",
  initials: "CV",
  title: "Java Backend Developer | Data Science & Cloud Technologies",
  headline: "JAVA BACKEND & DATA SCIENCE",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "2400032597cse1@gmail.com",
  phone: "+91 9490238585",
  summary: "Software and Artificial Intelligence Engineer skilled in developing scalable backend systems, automated data pipelines, and AI-powered web applications using Java (Spring Boot), Python, SQL, and LLM APIs. Proficient in prompt engineering, RESTful microservice architectures, relational database indexing, and data analysis using Python libraries. Experienced in integrating Generative AI workflows into production services and resolving complex algorithmic challenges, with 1,000+ problems solved across LeetCode and CodeChef.",
  resumeFileName: "resume.pdf",
  downloadFileName: "Cherukuri_Venkatesh_Resume.pdf",
  
  roles: [
    "Enterprise Backend Developer (Spring Boot, Java, Microservices)",
    "AI Systems Engineer (RAG, LLMs & Prompt Workflows)",
    "Python DSA & Data Analytics (Pandas, NumPy, Matplotlib)",
    "Forward Deployed Engineer (FDE) • Cloud & DevOps Ready",
    "Cloud Technologies Engineer (Microsoft Azure AZ-104 & AZ-900 Certified)"
  ],

  stats: {
    problemsSolved: "1000+",
    cgpa: "9.67",
    cgpaMax: "10.00",
    restEndpoints: "25+",
    hackathonLead: "2x SIH Lead",
    uptime: "99.99%"
  },

  skills: [
    // 1. Java Backend Development
    { name: "Java (Backend Architecture)", category: "java", level: 95, icon: "Coffee", desc: "Enterprise backend development, Multithreading, Memory Optimization, Server-side logic" },
    { name: "Spring Boot & Spring Framework", category: "java", level: 93, icon: "Layers", desc: "Auto-configuration, Starters, Dependency Injection, Actuator, Embedded container" },
    { name: "RESTful API Engineering", category: "java", level: 94, icon: "Network", desc: "Contract-first endpoint design, HTTP status codes, JSON DTO payloads, 25+ endpoints" },
    { name: "Spring Data JPA & Hibernate", category: "java", level: 90, icon: "Database", desc: "ORM mapping, Entity relationships, JPQL queries, Lazy/Eager loading, Persistence" },
    { name: "Microservices Architecture", category: "java", level: 88, icon: "Cpu", desc: "Decoupled services, API Gateway integration, Service boundaries, Distributed backends" },
    { name: "Spring Security & JWT", category: "java", level: 90, icon: "ShieldCheck", desc: "Stateless security filter chain, Token verification, Role-Based Access Control (RBAC)" },

    // 2. Python, Data Science & Machine Learning
    { name: "Python Core & Scripting", category: "python_data", level: 92, icon: "FileCode", desc: "OOP, Scripting, Cisco Certified Python Essentials 1 & 2, Algorithmic logic" },
    { name: "Data Science & ML Libraries", category: "python_data", level: 86, icon: "Brain", desc: "NumPy, Pandas, Scikit-learn data manipulation, Data engineering pipelines" },
    { name: "Data Structures & Algorithms (DSA)", category: "python_data", level: 96, icon: "Binary", desc: "1000+ competitive problems solved on CodeChef, LeetCode, HackerRank" },
    { name: "Google Gemini AI API", category: "python_data", level: 88, icon: "Sparkles", desc: "Automated symptom triage, Generative prompt engineering, JSON response parsing" },

    // 3. Databases & Relational Modeling
    { name: "SQL & Relational Schema Modeling", category: "database", level: 93, icon: "Database", desc: "Relational database modeling, Schema normalization, Complex joins, ACID consistency" },
    { name: "MySQL & PostgreSQL", category: "database", level: 91, icon: "HardDrive", desc: "Database administration, Index tuning, Query execution plans, Transactional integrity" },
    { name: "Query Optimization & Indexing", category: "database", level: 89, icon: "Zap", desc: "Optimizing database queries for sub-second search latency and high throughput" },

    // 4. Cloud Technologies & DevOps
    { name: "Microsoft Azure (AZ-900 Certified)", category: "cloud", level: 88, icon: "Cloud", desc: "Certified: Azure Cloud Concepts, Security, Architecture, Compute & Services" },
    { name: "Amazon Web Services (AWS)", category: "cloud", level: 82, icon: "Server", desc: "Cloud hosting fundamentals, S3 object storage, Compute deployment instances" },
    { name: "Docker Basics", category: "cloud", level: 80, icon: "Box", desc: "Containerization of backend microservices, Dockerfiles, Isolated environments" },
    { name: "Git & GitHub Workflows", category: "cloud", level: 92, icon: "GitBranch", desc: "Branching strategies, Merge conflict resolution, Open source repos, Team coordination" },
    { name: "Postman & Maven", category: "cloud", level: 90, icon: "Package", desc: "API testing suites, Automated contract verification, POM dependency build trees" },

    // 5. Web & Realtime Technologies
    { name: "React.js & Modern Web Views", category: "web", level: 82, icon: "Layout", desc: "Modern UI components, State hooks, Connecting frontend to Java Spring REST APIs" },
    { name: "WebRTC Peer-to-Peer", category: "web", level: 85, icon: "Video", desc: "Real-time P2P encrypted teleconsultation audio/video stream communication" },
    { name: "HTML5, CSS3 & Responsive Design", category: "web", level: 90, icon: "Monitor", desc: "Responsive layout design, Glassmorphism, Cross-browser mobile accessibility" }
  ],

  projects: [
    {
      id: "aayush",
      title: "Aayush Smart Healthcare Platform",
      type: "Full Stack Java Application",
      badge: "ENTERPRISE JAVA • RESTFUL APIS",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      securityPill: "JWT RBAC • 100% SECURE",
      endpointsCount: "25+ Endpoints",
      description: "Architected a multi-tiered healthcare application using Java 21 and Spring Boot to engineer 25+ secure RESTful API endpoints, improving medical data retrieval efficiency by 40%.",
      technologies: ["Java 21", "Spring Boot", "Spring Data JPA", "React", "MySQL", "Spring Security", "JWT", "REST APIs", "WebRTC", "Gemini AI"],
      github: "https://github.com/Cherukuri-Venkatesh",
      live: "#",
      metrics: [
        { label: "REST Endpoints", val: "25+ Endpoints" },
        { label: "Data Efficiency", val: "+40% Faster" },
        { label: "Symptom Triage", val: "+45% Speedup" }
      ],
      highlights: [
        "Architected a multi-tiered healthcare application using Java 21 and Spring Boot to engineer 25+ secure RESTful API endpoints, improving medical data retrieval efficiency by 40%.",
        "Configured stateless authentication and role-based access control (RBAC) using Spring Security and JWT, securing 100% of patient records with zero vulnerabilities.",
        "Integrated standardized data queue routing and Google Gemini AI APIs to accelerate preliminary symptom triage by 45% for 500+ simulated requests."
      ],
      blueprint: {
        architectureTitle: "System Architecture & Design",
        architecture: "Architected a multi-tiered healthcare application using Java 21 and Spring Boot to engineer 25+ secure RESTful API endpoints, improving medical data retrieval efficiency by 40%. Exposes 25+ RESTful API endpoints handling patient Electronic Health Records (EHR), automated digital prescriptions, laboratory diagnostic reports, and role-segregated patient histories.",
        securityTitle: "Security & Role-Based Access Control (RBAC)",
        security: "Configured stateless authentication and role-based access control (RBAC) using Spring Security and JWT, securing 100% of patient records with zero vulnerabilities across 4 distinct user tiers: Admin, Doctor, Patient, and Primary Health Center (PHC) staff.",
        integrationTitle: "Realtime WebRTC & Google Gemini AI Integration",
        integration: "Integrated standardized data queue routing and Google Gemini AI APIs to accelerate preliminary symptom triage by 45% for 500+ simulated requests, coupled with real-time peer-to-peer encrypted WebRTC video streaming.",
        sandbox: {
          title: "Sample REST Endpoint Sandbox:",
          endpoint: "POST /api/v1/telehealth/triage-assessment",
          payloadComment: "// Payload: { patientId: \"P-8821\", symptoms: [\"acute cephalalgia\", \"elevated vitals\"], triageTier: \"CRITICAL\" }",
          response: "Response [200 OK]: { status: \"DISPATCHED\", assignedDoctorId: \"DOC-409\", queuePosition: 1, p2pToken: \"jwt_webrtc_live\" }"
        }
      }
    },
    {
      id: "urbanride",
      title: "UrbanRide Platform",
      type: "Full Stack Microservices Ride-Hailing Platform",
      badge: "SPRING CLOUD • 10K+ CONCURRENT",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      securityPill: "POLICY-BASED PERMISSIONS",
      endpointsCount: "25+ Endpoints",
      description: "Developed a scalable ride-hailing architecture using Spring Boot microservices and React, enhancing horizontal scaling to support 10k+ concurrent requests.",
      technologies: ["Java 21", "Spring Boot", "Spring Cloud", "React", "MySQL", "Spring Security", "JWT", "REST APIs", "Leaflet"],
      github: "https://github.com/Cherukuri-Venkatesh",
      live: "#",
      metrics: [
        { label: "Concurrent Scale", val: "10k+ Requests" },
        { label: "Booking Latency", val: "-35% Response Time" },
        { label: "Allocation Accuracy", val: "+25% Accuracy" }
      ],
      highlights: [
        "Developed a scalable ride-hailing architecture using Spring Boot microservices and React, enhancing horizontal scaling to support 10k+ concurrent requests.",
        "Secured 25+ system endpoints with robust credential verification and policy-based permissions, preventing unauthorized data exposure across all pathways.",
        "Optimized live driver tracking layouts using Leaflet maps and MySQL indexing, reducing booking response times by 35% while increasing vehicle allocation accuracy by 25%."
      ],
      blueprint: {
        architectureTitle: "Ride-Hailing Microservice Architecture",
        architecture: "Developed a scalable ride-hailing architecture using Spring Boot microservices and React, enhancing horizontal scaling to support 10k+ concurrent requests with fault-tolerant service discovery and load balancing.",
        securityTitle: "Endpoint Hardening & Policy-Based Permissions",
        security: "Secured 25+ system endpoints with robust credential verification and policy-based permissions using Spring Security and JWT, preventing unauthorized data exposure across all customer and driver pathways.",
        integrationTitle: "Real-time Geospatial Tracking & MySQL Indexing",
        integration: "Optimized live driver tracking layouts using Leaflet maps and MySQL spatial indexing, reducing booking response times by 35% while increasing vehicle allocation accuracy by 25%.",
        sandbox: {
          title: "Sample Driver Dispatch REST Endpoint Sandbox:",
          endpoint: "POST /api/v1/dispatch/nearby-drivers?lat=17.6868&lng=83.2185&radius=5km",
          payloadComment: "// Geospatial query executed in 18ms with Leaflet coordinates and MySQL spatial indexes",
          response: "Response [200 OK]: { matchedDrivers: 8, nearestEta: \"2 mins\", vehicleType: \"PREMIUM\", dispatchToken: \"urbanride_jwt_dispatched\" }"
        }
      }
    }
  ],

  codingProfiles: [
    {
      platform: "CodeChef",
      handle: "kl2400032597",
      url: "https://www.codechef.com/users/kl2400032597",
      highlight: "1000+ Solved",
      color: "#f59e0b",
      badge: "ALGORITHMIC EXCELLENCE",
      desc: "Extensive competitive programming practice with 1000+ verified solved problems, ranking in the top 5% of active competitive coders."
    },
    {
      platform: "LeetCode",
      handle: "kl2400032597",
      url: "https://leetcode.com/u/kl2400032597/",
      highlight: "Active Solver",
      color: "#f97316",
      badge: "DATA STRUCTURES",
      desc: "Consistent daily problem solving across Data Structures & Algorithms, ranking in top competitive percentiles."
    },
    {
      platform: "GitHub",
      handle: "Cherukuri-Venkatesh",
      url: "https://github.com/Cherukuri-Venkatesh",
      highlight: "Open Repositories",
      color: "#ffffff",
      badge: "OPEN SOURCE",
      desc: "Repository source code for full-stack Java Spring Boot microservices, AI workflows, and algorithmic solution libraries."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "KL University, Andhra Pradesh",
      period: "Aug 2024 – May 2028 (Expected)",
      score: "CGPA: 9.67 / 10.00",
      status: "Active Student",
      coursework: [
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "System Architecture",
        "Operating Systems",
        "Computer Networks"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII - MPC)",
      institution: "Kalams Junior College, Andhra Pradesh",
      period: "Jun 2022 – May 2024",
      score: "Percentage: 93.0%",
      status: "Completed",
      coursework: ["Mathematics (Calculus, Algebra)", "Physics (Mechanics, Electromagnetism)", "Chemistry"]
    },
    {
      degree: "Secondary School Education (Class X - SSC)",
      institution: "Ravindra Bharathi School, Andhra Pradesh",
      period: "Jun 2021 – May 2022",
      score: "Percentage: 92.0%",
      status: "Completed",
      coursework: ["Mathematics", "Science", "Computer Fundamentals", "Social Studies"]
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
      date: "September 27, 2026",
      year: "2026",
      badge: "AZURE ASSOCIATE",
      color: "#0078D4",
      desc: "Demonstrated technical skills in implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in Microsoft Azure cloud environments."
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "July 7, 2026",
      year: "2026",
      badge: "AZURE FUNDAMENTALS",
      color: "#0089D6",
      desc: "Demonstrated foundational knowledge of cloud concepts, Azure architectural components, compute & networking services, security, governance, and compliance."
    },
    {
      title: "GitHub Foundations Certification (GH-100)",
      issuer: "GitHub & Microsoft",
      date: "September 20, 2026",
      year: "2026",
      badge: "DEV PLATFORM & CI/CD",
      color: "#ffffff",
      desc: "Certified in core Git and GitHub collaboration, repository administration, pull request lifecycles, Markdown, and automated branch protection protocols."
    },
    {
      title: "ServiceNow Certified Implementation Specialist – Data Foundations",
      issuer: "ServiceNow",
      date: "August 9, 2026",
      year: "2026",
      badge: "DATA FOUNDATIONS",
      color: "#81B5A1",
      desc: "Validated proficiency in enterprise schema architectures, Configuration Management Database (CMDB), data models, and workflow automation tables."
    },
    {
      title: "AI-ML Virtual Internship (Google for Developers)",
      issuer: "Google for Developers / AICTE / EduSkills",
      date: "June 2026",
      year: "2026",
      badge: "GRADE O (OUTSTANDING)",
      color: "#4285F4",
      desc: "8-week intensive virtual internship program supported by Google for Developers, AICTE Ministry of Education, and EduSkills. Achieved Grade O (90-100) in applied ML."
    },
    {
      title: "AI Tools & ChatGPT Workflow Certification",
      issuer: "be10x",
      date: "May 17, 2026",
      year: "2026",
      badge: "GENERATIVE AI",
      color: "#FF5722",
      desc: "Hands-on certification validating practical mastery of generative AI tools, rapid prompt engineering strategies, and automated data analytics."
    },
    {
      title: "NPTEL Online Certification: Fundamental Algorithms",
      issuer: "IIT Kharagpur / Swayam",
      date: "Feb 2026",
      year: "2026",
      badge: "ELITE CERTIFICATION (73%)",
      color: "#E53935",
      desc: "Awarded by IIT Kharagpur and Swayam MoE. Secured Elite classification with 73% consolidated proctored exam score in Fundamental Algorithms: Design and Analysis."
    },
    {
      title: "GitHub Copilot Certification (GH-300)",
      issuer: "Microsoft & GitHub",
      date: "November 21, 2025",
      year: "2025",
      badge: "AI PAIR PROGRAMMING",
      color: "#8b5cf6",
      desc: "Certified in AI-assisted software development, generative prompt engineering, test automation generation, and rapid developer productivity workflows."
    },
    {
      title: "Cambridge Linguaskill Business English (B1 Level)",
      issuer: "Cambridge Assessment English",
      date: "March 22, 2025",
      year: "2025",
      badge: "BUSINESS ENGLISH (B1)",
      color: "#ec4899",
      desc: "Certified B1 business and professional English communication, listening, and technical reading comprehension competency (Speaking & Writing B2: 162)."
    }
  ],

  achievements: [
    {
      title: "1000+ Algorithmic Problems Solved on CodeChef",
      category: "COMPETITIVE PROGRAMMING",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      icon: "Trophy",
      description: "Demonstrated high-tier problem solving, rigorous algorithmic discipline, and deep understanding of asymptotic complexity by solving over 1,000 algorithmic challenges."
    },
    {
      title: "Smart India Hackathon (SIH) — 2x Team Lead",
      category: "NATIONAL HACKATHON",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      icon: "Users",
      description: "Selected and served as Team Lead for a 6-member cross-functional engineering team across two national editions, orchestrating sprint workflows, backend architecture, and final demos."
    },
    {
      title: "Academic Hackathon Leadership & Technical Mentorship",
      category: "LEADERSHIP & INNOVATION",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      icon: "Award",
      description: "Spearheaded technical development for university hackathons, leading code reviews, Git branching governance, and backend REST API deployments."
    }
  ],

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/venkateshcherukuri1/",
    github: "https://github.com/Cherukuri-Venkatesh",
    codechef: "https://www.codechef.com/users/kl2400032597",
    leetcode: "https://leetcode.com/u/kl2400032597/",
    hackerrank: "https://www.hackerrank.com/profile/kl2400032597",
    email: "2400032597cse1@gmail.com",
    phone: "+91 9490238585"
  },

  terminalCommands: {
    help: "Available Commands:\n  • skills       - View core technical stack\n  • projects     - Inspect full-stack production builds (Aayush, Travel Engine)\n  • coding       - View competitive programming stats (1000+ Solved)\n  • education    - Display academic credentials & 9.67 CGPA at KL University\n  • certs        - List official industry certifications (Azure AZ-900, Cisco, GitHub, ServiceNow)\n  • achievements - View hackathon leadership milestones (2x SIH Lead)\n  • contact      - Get email, phone & direct channels\n  • resume       - Open executive resume viewer\n  • 3d           - Launch 3D Visual Studio Laboratory\n  • clear        - Clear terminal screen buffer\n  • sudo hire-venkatesh - Fast-track recruitment pass & confetti celebration",
    skills: "=== TECHNICAL CAPABILITIES ===\n• Java: Spring Boot 3, Spring Data JPA, Hibernate, REST APIs, Microservices, Spring Security, JWT\n• Python & Data: NumPy, Pandas, Scikit-learn, Google Gemini AI API, Data Pipelines\n• Database: MySQL, PostgreSQL, Relational Modeling, Query Optimization, 3NF Normalization\n• Cloud & DevOps: Microsoft Azure (AZ-900), AWS, Docker Basics, Maven, Postman, Git/GitHub\n• Frontend & Realtime: React.js, WebRTC, Modern Tailwind CSS, Responsive Web Design",
    projects: "=== FEATURED FULL-STACK SYSTEMS ===\n[01] AAYUSH – Unified Healthcare Ecosystem (Full Stack Java Application)\n     Tech: Java, Spring Boot, Spring Data JPA, React.js, MySQL, Spring Security, JWT, WebRTC, Gemini AI\n     Specs: 25+ REST Endpoints, Stateless JWT RBAC, Real-time P2P Telehealth, AI Triage\n\n[02] SMART TRAVEL BOOKING ENGINE (Full Stack Web Application)\n     Tech: Python, Java, Spring Boot, JavaScript, MySQL, HTML5, CSS3, REST APIs\n     Specs: Multi-modal aggregator (Flight + Rail + Hotel), Sub-second query latency, 100% ACID integrity",
    coding: "=== COMPETITIVE PROGRAMMING METRICS ===\n• CodeChef: 1000+ Problems Solved (Handle: kl2400032597)\n• LeetCode: Active Problem Solver (Handle: kl2400032597)\n• HackerRank: Gold/Silver Badges in Problem Solving, Java, Python, SQL\n• GitHub: github.com/Cherukuri-Venkatesh",
    education: "=== ACADEMIC CREDENTIALS ===\n• B.Tech in CSE: KL University, AP (2024–2028) | CGPA: 9.67 / 10.00\n• Intermediate (MPC): Kalams Junior College (2022–2024) | 93.0%\n• SSC (Class X): Ravindra Bharathi School (2021–2022) | 92.0%",
    certs: "=== INDUSTRY CERTIFICATIONS ===\n1. Microsoft Certified: Azure Fundamentals (AZ-900)\n2. ServiceNow Certified: Data Foundations\n3. GitHub Copilot Certification (GH-300)\n4. Python Essentials 1 & 2 (Cisco Networking Academy)\n5. Cambridge Linguaskill English Language Certification (B1 Level)",
    achievements: "=== MILESTONES & LEADERSHIP ===\n• 1000+ Problems Solved on CodeChef\n• 2x Team Lead at Smart India Hackathon (SIH)\n• Technical Lead for University Hackathon Squads",
    contact: "=== DIRECT DISPATCH CHANNELS ===\n• Email: 2400032597cse1@gmail.com\n• Phone: +91 9490238585\n• Location: Visakhapatnam, Andhra Pradesh, India\n• LinkedIn: linkedin.com/in/venkateshcherukuri1/\n• GitHub: github.com/Cherukuri-Venkatesh",
    "sudo hire-venkatesh": "[ACCESS GRANTED]: Welcome to the team! Initiating interview scheduling protocol...\n• Candidate: Cherukuri Venkatesh\n• Core: Java Backend Developer & Data Science Engineer\n• Contact: 2400032597cse1@gmail.com / +91 9490238585\n-> Launching celebration confetti!"
  }
};
