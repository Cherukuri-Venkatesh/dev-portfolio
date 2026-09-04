export const RESUME_DATA = {
  name: "Cherukuri Venkatesh",
  initials: "CV",
  title: "Java Backend Developer | Data Science & Cloud Technologies",
  headline: "JAVA BACKEND & DATA SCIENCE",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "2400032597cse1@gmail.com",
  phone: "+91 9490238585",
  summary: "Results-driven Java Backend Developer with strong expertise in Java, Spring Boot, Spring Framework, RESTful APIs, MySQL, and SQL. Proficient in designing scalable backend architectures, relational database schemas, stateless JWT authentication, and data-driven solutions using Python and SQL. 1000+ competitive programming problems solved across CodeChef, LeetCode, and HackerRank.",
  resumeFileName: "2400032597_CHERUKURI VENKATESH_Resume.pdf",
  downloadFileName: "Cherukuri_Venkatesh_Resume.pdf",
  
  roles: [
    "Java Backend Developer (Spring Boot, Microservices, REST APIs)",
    "Data Science & Data Engineering Practitioner",
    "AI Engineer & Google Gemini API Specialist",
    "Forward Deployment Engineer (FDE) • Deployment Ready",
    "Cloud Technologies Engineer (Microsoft Azure AZ-900 Certified)"
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
      title: "Aayush – Unified Healthcare Ecosystem",
      type: "Full Stack Java Application",
      badge: "FULL STACK JAVA APPLICATION",
      badgeColor: "border-cyan-500/30 text-cyber-cyan bg-cyan-500/10",
      securityPill: "JWT RBAC • 4 ROLES",
      endpointsCount: "25+ Endpoints",
      description: "Architected and developed a scalable multi-tier healthcare backend delivering 25+ RESTful API endpoints for Electronic Health Records (EHR), digital prescriptions, and diagnostic lab reports.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "React.js", "MySQL", "Spring Security", "JWT", "RESTful APIs", "WebRTC", "Gemini AI"],
      github: "https://github.com/Cherukuri-Venkatesh",
      live: "#",
      metrics: [
        { label: "REST Endpoints", val: "25+ Endpoints" },
        { label: "Security Flow", val: "Stateless JWT RBAC" },
        { label: "Latency", val: "< 120ms P99" }
      ],
      highlights: [
        "Role-Based Access Control (RBAC): Stateless security across 4 distinct user tiers (Admin, Doctor, Patient, PHC Center).",
        "WebRTC Teleconsultation: Real-time peer-to-peer encrypted video consultations and doctor queue dispatching.",
        "Google Gemini AI: Automated symptom assessment triage and intelligent doctor recommendations."
      ],
      blueprint: {
        architectureTitle: "System Architecture & Design",
        architecture: "Architected a multi-tier healthcare backend engineered with Java and Spring Boot. Exposes 25+ RESTful API endpoints handling patient Electronic Health Records (EHR), automated digital prescriptions, laboratory diagnostic reports, and role-segregated patient histories.",
        securityTitle: "Security & Role-Based Access Control (RBAC)",
        security: "Secured sensitive medical records using stateless Spring Security filter chains and JWT (JSON Web Tokens). Enforces granular access control across 4 distinct user tiers: Admin, Doctor, Patient, and Primary Health Center (PHC) staff.",
        integrationTitle: "Realtime WebRTC & Google Gemini AI Integration",
        integration: "Integrated peer-to-peer encrypted WebRTC video streaming for direct doctor teleconsultations. Leveraged the Google Gemini AI API to provide intelligent symptom assessment triage and automated specialist physician recommendations.",
        sandbox: {
          title: "Sample REST Endpoint Sandbox:",
          endpoint: "POST /api/v1/telehealth/triage-assessment",
          payloadComment: "// Payload: { patientId: \"P-8821\", symptoms: [\"acute cephalalgia\", \"elevated vitals\"], triageTier: \"CRITICAL\" }",
          response: "Response [200 OK]: { status: \"DISPATCHED\", assignedDoctorId: \"DOC-409\", queuePosition: 1, p2pToken: \"jwt_webrtc_live\" }"
        }
      }
    },
    {
      id: "travel",
      title: "Smart Travel Booking Engine",
      type: "Full Stack Web Application",
      badge: "FULL STACK WEB APPLICATION",
      badgeColor: "border-violet-500/30 text-cyber-violet bg-violet-500/10",
      securityPill: "SUB-SECOND LATENCY",
      endpointsCount: "ACID Verified",
      description: "Developed an integrated multi-modal travel booking platform consolidating flight, train, and hotel reservations into a centralized interface with real-time itinerary management.",
      technologies: ["Python", "Java", "Spring Boot", "JavaScript", "MySQL", "HTML5", "CSS3", "REST APIs", "Responsive Web Design"],
      github: "https://github.com/Cherukuri-Venkatesh",
      live: "#",
      metrics: [
        { label: "Query Speed", val: "< 45ms" },
        { label: "Consistency", val: "100% ACID" },
        { label: "Multi-Modal", val: "Flight + Train + Hotel" }
      ],
      highlights: [
        "Multi-Modal Aggregator: Unified booking pipelines for flights, railways, and hotels under one umbrella.",
        "Payload Optimization: Engineered lightweight REST DTOs achieving sub-second search latency across catalogs.",
        "100% ACID Integrity: Normalized MySQL database schemas with optimized indexes and consistent transaction states."
      ],
      blueprint: {
        architectureTitle: "Multi-Modal Aggregation Pipeline",
        architecture: "Consolidated flights, railway schedules, and hotel reservation systems into a single centralized booking interface. Users experience seamless cross-modal itinerary planning with live price comparison and seat reservation.",
        securityTitle: "High-Throughput Sub-Second Search Latency",
        security: "Engineered optimized RESTful API services and streamlined DTO serialization. Reduced search payload overhead, allowing clients to query dense travel catalogs with sub-second response times.",
        integrationTitle: "Database Normalization & ACID Transactional Integrity",
        integration: "Designed a 3NF normalized MySQL database schema with composite indexes on route origins, travel timestamps, and pricing tiers. Utilized row-level transactional locks to prevent overbooking and maintain 100% data consistency.",
        sandbox: {
          title: "Sample REST Endpoint Sandbox:",
          endpoint: "GET /api/v1/routes/multi-modal?origin=VTZ&dest=HYD&mode=ALL",
          payloadComment: "// Query executed in 14ms across indexed flight and rail schemas",
          response: "Response [200 OK]: { availableRoutes: 42, latency: \"14ms\", consistency: \"ACID_COMMITTED\" }"
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
      desc: "Extensive competitive programming practice with 1000+ verified solved problems spanning arrays, math, graphs, and dynamic programming."
    },
    {
      platform: "LeetCode",
      handle: "kl2400032597",
      url: "https://leetcode.com/u/kl2400032597/",
      highlight: "Active Solver",
      color: "#f97316",
      badge: "DATA STRUCTURES",
      desc: "Daily consistency solving Easy, Medium, and Hard algorithmic problems with a focus on optimal runtime and memory percentiles."
    },
    {
      platform: "HackerRank",
      handle: "kl2400032597",
      url: "https://www.hackerrank.com/profile/kl2400032597",
      highlight: "Badged Practitioner",
      color: "#10b981",
      badge: "CORE MASTERY",
      desc: "Gold/Silver verified badges in Problem Solving, Java, Python, and SQL domains with clean algorithmic implementations."
    },
    {
      platform: "GitHub",
      handle: "Cherukuri-Venkatesh",
      url: "https://github.com/Cherukuri-Venkatesh",
      highlight: "Open Repositories",
      color: "#ffffff",
      badge: "OPEN SOURCE",
      desc: "Repository source code for full-stack Java Spring Boot projects, ML pipelines, and algorithmic solution libraries."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "KL University, Andhra Pradesh, India",
      period: "2024 – 2028 (Expected)",
      score: "CGPA: 9.67 / 10.00",
      status: "Active Student",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "Java Enterprise Development",
        "Python for Data Science",
        "Operating Systems & Multithreading",
        "Computer Networks",
        "Software Engineering Principles"
      ]
    },
    {
      degree: "Intermediate (Class XII - MPC)",
      institution: "Kalams Junior College, Andhra Pradesh",
      period: "2022 – 2024",
      score: "Percentage: 93.0%",
      status: "Completed",
      coursework: ["Mathematics (Calculus, Algebra)", "Physics (Mechanics, Electromagnetism)", "Chemistry"]
    },
    {
      degree: "Secondary School Certificate (Class X - SSC)",
      institution: "Ravindra Bharathi School, Andhra Pradesh",
      period: "2021 – 2022",
      score: "Percentage: 92.0%",
      status: "Completed",
      coursework: ["Mathematics", "Science", "Computer Fundamentals", "Social Studies"]
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Verified",
      badge: "CLOUD INFRASTRUCTURE",
      color: "#0089D6",
      desc: "Demonstrated foundational knowledge of cloud concepts, Azure architectural components, compute & networking services, security, governance, and compliance."
    },
    {
      title: "ServiceNow Certified: Data Foundations",
      issuer: "ServiceNow",
      date: "Verified",
      badge: "ENTERPRISE DATA",
      color: "#81B5A1",
      desc: "Validated proficiency in enterprise schema architectures, Configuration Management Database (CMDB), data models, and workflow automation tables."
    },
    {
      title: "GitHub Copilot Certification (GH-300)",
      issuer: "GitHub",
      date: "Verified",
      badge: "AI DEVELOPER ACCELERATION",
      color: "#8b5cf6",
      desc: "Certified in AI-assisted software development, generative prompt engineering, test automation generation, and rapid developer productivity workflows."
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      date: "Verified",
      badge: "CORE PYTHON",
      color: "#3b82f6",
      desc: "Comprehensive dual certification covering Python syntax, data collections, object-oriented design, exceptions, file I/O, and modular programming."
    },
    {
      title: "Cambridge Linguaskill English Language Certification",
      issuer: "Cambridge Assessment English",
      date: "Verified",
      badge: "BUSINESS COMMUNICATION",
      color: "#ec4899",
      desc: "Certified B1 business and professional English communication, listening, and technical reading comprehension competency."
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
      badgeColor: "border-cyan-500/30 text-cyber-cyan bg-cyan-500/10",
      icon: "Users",
      description: "Selected and served as Team Lead for a 6-member cross-functional engineering team across two national editions, orchestrating sprint workflows, backend architecture, and final demos."
    },
    {
      title: "Academic Hackathon Leadership & Technical Mentorship",
      category: "LEADERSHIP & INNOVATION",
      badgeColor: "border-emerald-500/30 text-cyber-emerald bg-emerald-500/10",
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
