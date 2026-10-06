import React, { useState, useRef } from 'react';

import { usePortfolio } from '../context/PortfolioContext';

import {
  PythonLogo,
  JavaLogo,
  SpringBootLogo,
  SpringSecurityLogo,
  MicroservicesLogo,
  MySQLLogo,
  PostgreSQLLogo,
  AwsRdsLogo,
  DockerLogo,
  GitGitHubLogo,
  RenderLogo,
  JiraLogo,
  PandasLogo,
  NumPyLogo,
  MatplotlibLogo,
  PythonDsaLogo,
  PromptEngineeringLogo,
  AzureLogo,
  McpServerLogo
} from './icons/OfficialIcons';

import {
  Sparkles,
  Layers,
  Terminal,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Skills' },
  { id: 'programming', label: 'Programming' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai_infra', label: 'AI' },
  { id: 'cloud_devops', label: 'Cloud & Tools' },
  { id: 'database', label: 'Data & Databases' },
  { id: 'dsa_core', label: 'DSA & Design' },
  { id: 'vibe_coding', label: 'Vibe Coding' }
];

const SKILLS_MATRIX = [
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    badge: 'PRIMARY',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 94,
    icon: PythonLogo,
    desc: 'Python is my main programming language. I use it for problem solving, data work, scripting, and projects.',
    tags: ['Python', 'OOP', 'DSA', 'Scripting']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    badge: 'SECONDARY',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 88,
    icon: JavaLogo,
    desc: 'Java is my secondary programming language. I use it mainly for backend development, OOP, and problem solving.',
    tags: ['Java', 'OOP', 'Backend', 'Problem Solving']
  },

  {
    id: 'spring_boot',
    name: 'Spring Boot',
    category: 'backend',
    badge: 'BACKEND',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 91,
    icon: SpringBootLogo,
    desc: 'I use Spring Boot to build backend applications, REST APIs, and services for my projects.',
    tags: ['Spring Boot', 'REST APIs', 'JPA', 'Hibernate']
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'cloud_devops',
    badge: 'AZURE',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 90,
    icon: AzureLogo,
    desc: 'I have AZ-104 and AZ-900 certifications and use Azure to learn cloud computing, virtual machines, networking, and services.',
    tags: ['AZ-104', 'AZ-900', 'Azure VM', 'Networking']
  },
  {
    id: 'microservices',
    name: 'REST APIs & Microservices',
    category: 'backend',
    badge: 'MICROSERVICES',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 88,
    icon: MicroservicesLogo,
    desc: 'I build REST APIs and work with Spring Boot microservices, API Gateway, and service discovery.',
    tags: ['REST APIs', 'Microservices', 'API Gateway', 'Eureka']
  },
  {
    id: 'spring_security',
    name: 'Spring Security & JWT',
    category: 'backend',
    badge: 'SECURITY',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 84,
    icon: SpringSecurityLogo,
    desc: 'I have worked with Spring Security, JWT authentication, and role-based access control in backend projects.',
    tags: ['Spring Security', 'JWT', 'RBAC', 'Authentication']
  },
  {
    id: 'prompt_engineering',
    name: 'Prompt Engineering & Generative AI',
    category: 'ai_infra',
    badge: 'AI',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 84,
    icon: PromptEngineeringLogo,
    desc: 'I am exploring prompt engineering and generative AI APIs to add AI features to applications.',
    tags: ['Prompt Engineering', 'Gemini API', 'OpenAI API', 'Gen AI']
  },
  {
    id: 'copilot_mcp',
    name: 'GitHub Copilot & MCP',
    category: 'ai_infra',
    badge: 'AI TOOLS',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 82,
    icon: McpServerLogo,
    desc: 'I use GitHub Copilot as a development tool and am exploring MCP and AI-assisted software development.',
    tags: ['GitHub Copilot', 'MCP', 'AI Tools', 'Development']
  },
  {
    id: 'aws',
    name: 'AWS Basics',
    category: 'cloud_devops',
    badge: 'CLOUD',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 76,
    icon: AwsRdsLogo,
    desc: 'I have basic experience with AWS services such as RDS and S3 while learning cloud deployment concepts.',
    tags: ['AWS', 'RDS', 'S3', 'Cloud Basics']
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud_devops',
    badge: 'CONTAINERS',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 82,
    icon: DockerLogo,
    desc: 'I use Docker to containerize applications and understand the basics of images, containers, and deployment.',
    tags: ['Docker', 'Containers', 'Images', 'Deployment']
  },
  {
    id: 'git_github',
    name: 'Git & GitHub',
    category: 'cloud_devops',
    badge: 'VERSION CONTROL',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 92,
    icon: GitGitHubLogo,
    desc: 'I use Git and GitHub for version control, branches, pull requests, and collaborative project work.',
    tags: ['Git', 'GitHub', 'Branches', 'Pull Requests']
  },
  {
    id: 'render_vercel',
    name: 'Vercel, Netlify & Render',
    category: 'cloud_devops',
    badge: 'DEPLOYMENT',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 84,
    icon: RenderLogo,
    desc: 'I have worked with Vercel, Netlify, and Render for deploying web and backend projects.',
    tags: ['Vercel', 'Netlify', 'Render', 'Deployment']
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'cloud_devops',
    badge: 'PROJECT WORK',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 80,
    icon: JiraLogo,
    desc: 'I use Jira for organizing tasks, tracking project work, and working with team members.',
    tags: ['Jira', 'Tasks', 'Sprints', 'Teamwork']
  },

  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    badge: 'DATABASE',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 90,
    icon: MySQLLogo,
    desc: 'I use MySQL for application data, table design, relationships, queries, and backend projects.',
    tags: ['MySQL', 'SQL', 'Relationships', 'Queries']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    badge: 'DATABASE',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 86,
    icon: PostgreSQLLogo,
    desc: 'I use PostgreSQL for relational data, queries, table design, and application development.',
    tags: ['PostgreSQL', 'SQL', 'Data Modeling']
  },
  {
    id: 'pandas_numpy',
    name: 'Pandas & NumPy',
    category: 'database',
    badge: 'DATA',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 89,
    icon: PandasLogo,
    desc: 'I use Pandas and NumPy for data cleaning, analysis, transformations, and working with datasets.',
    tags: ['Pandas', 'NumPy', 'Data Cleaning', 'Analysis']
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    category: 'database',
    badge: 'DATA ANALYSIS',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 82,
    icon: MatplotlibLogo,
    desc: 'I use Matplotlib for charts and exploratory data analysis when working with datasets.',
    tags: ['Matplotlib', 'EDA', 'Charts', 'Analysis']
  },

  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'dsa_core',
    badge: 'DSA',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 91,
    icon: PythonDsaLogo,
    desc: 'I regularly practice Data Structures and Algorithms on platforms such as CodeChef and LeetCode.',
    tags: ['DSA', 'CodeChef', 'LeetCode', 'Problem Solving']
  },
  {
    id: 'oop_architecture',
    name: 'OOP & Software Design',
    category: 'dsa_core',
    badge: 'DESIGN',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 88,
    icon: MicroservicesLogo,
    desc: 'I apply OOP concepts and basic design principles when building backend applications and projects.',
    tags: ['OOP', 'SOLID', 'Design Patterns', 'Architecture']
  },

  {
    id: 'react',
    name: 'React',
    category: 'vibe_coding',
    badge: 'FRONTEND',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 88,
    icon: Layers,
    desc: 'I use React to build reusable components, interactive interfaces, and modern web applications.',
    tags: ['React', 'Components', 'Hooks', 'State']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'vibe_coding',
    badge: 'WEB',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 87,
    icon: Terminal,
    desc: 'I use JavaScript to add logic, interactions, and dynamic features to web applications.',
    tags: ['JavaScript', 'ES6+', 'DOM', 'Interactions']
  },
  {
    id: 'ui_ux',
    name: 'UI & UX Design',
    category: 'vibe_coding',
    badge: 'DESIGN',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 84,
    icon: Sparkles,
    desc: 'I enjoy creating clean interfaces with good spacing, visual hierarchy, and a simple user experience.',
    tags: ['UI Design', 'UX', 'Layouts', 'Visual Design']
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    category: 'vibe_coding',
    badge: 'FRONTEND',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 90,
    icon: Layers,
    desc: 'I build responsive web interfaces and focus on clean layouts, usability, and interactive experiences.',
    tags: ['HTML', 'CSS', 'React', 'Responsive Design']
  },
  {
    id: 'animations',
    name: 'Frontend Animations',
    category: 'vibe_coding',
    badge: 'MOTION',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 86,
    icon: Sparkles,
    desc: 'I use transitions, hover effects, motion, and interactive elements to make interfaces feel more engaging.',
    tags: ['Animations', 'Transitions', 'Motion', 'Interactions']
  },
  {
    id: 'web_design',
    name: 'Web Design',
    category: 'vibe_coding',
    badge: 'CREATIVE',
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    level: 85,
    icon: Sparkles,
    desc: 'I like experimenting with layouts, typography, visual effects, and modern web experiences.',
    tags: ['Layouts', 'Typography', 'Visuals', 'Web Design']
  },
  {
    id: 'vibe_coding',
    name: 'Vibe Coding',
    category: 'vibe_coding',
    badge: 'BUILDING',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    level: 88,
    icon: Sparkles,
    desc: 'I use AI coding tools to explore ideas, build prototypes faster, experiment with interfaces, and improve my development workflow.',
    tags: ['AI Coding', 'Rapid Prototyping', 'Experimentation', 'Development']
  }
];

function SkillCard3D({ skill, index, className = '' }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  const IconComponent = skill.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1})`,
        transition:
          rotate.x === 0
            ? 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)'
            : 'transform 0.08s ease-out',
        transformStyle: 'preserve-3d'
      }}
      className={`relative rounded-3xl p-6 sm:p-7 border border-white/10 bg-obsidian-950/80 backdrop-blur-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(255,87,34,0.18)] hover:border-orange-500/40 transition-colors flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 87, 34, ${glare.opacity}), transparent 60%)`
        }}
      />

      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-orange-500/15 transition-all duration-500" />

      <div
        style={{ transform: 'translateZ(20px)' }}
        className="space-y-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-300">
            <IconComponent className="w-9 h-9 object-contain" />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${skill.badgeColor} tracking-wider`}
            >
              {skill.badge}
            </span>

            <span className="font-display font-black text-2xl text-white tracking-tight group-hover:text-orange-400 transition-colors">
              {skill.level}%
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight group-hover:text-orange-300 transition-colors">
            {skill.name}
          </h3>
        </div>

        <div className="w-full bg-obsidian-900 h-2 rounded-full overflow-hidden border border-white/10 p-[1px]">
          <div
            className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,87,34,0.5)]"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        <p className="text-xs sm:text-[12.5px] text-slate-300 font-sans leading-relaxed">
          {skill.desc}
        </p>
      </div>

      <div
        style={{ transform: 'translateZ(14px)' }}
        className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-4"
      >
        {skill.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="font-mono text-[10px] px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/5 text-slate-400 group-hover:text-slate-200 group-hover:border-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { playSound } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter(
          (skill) => skill.category === selectedCategory
        );

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setShowAllSkills(false);
    playSound('click');
  };

  const isAllCategory = selectedCategory === 'all';

  return (
    <section id="skills" className="space-y-10 scroll-mt-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-xs text-orange-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></span>
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-1.5 tracking-tight">
            Technical Arsenal &amp;{' '}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 text-glow-ember">
              Core Stack
            </span>
          </h2>
        </div>

        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed">
          Enterprise backend frameworks, distributed databases, cloud systems, and modern AI engineering tooling.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all shadow-sm cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-obsidian-950 font-bold shadow-[0_0_15px_rgba(255,87,34,0.35)] scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-orange-500/30'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => {
          // If in 'All Skills' and not expanded:
          // Desktop shows top 7 (index 0 to 6).
          if (isAllCategory && !showAllSkills && index >= 7) {
            return null;
          }

          // Mobile view shows top 5 (index 0 to 4).
          // Hide items at index 5 and 6 on screens smaller than lg (mobile/tablet).
          const hideOnMobile = (isAllCategory && !showAllSkills && index >= 5) ? 'hidden lg:flex' : '';

          return (
            <React.Fragment key={skill.id}>
              <SkillCard3D
                skill={skill}
                index={index}
                className={hideOnMobile}
              />

                  {/* Mobile View "Show More" Button - Displayed right after the 5th skill (index 4) */}
                  {isAllCategory && !showAllSkills && index === 4 && (
                    <div className="lg:hidden col-span-full pt-2">
                      <button
                        onClick={() => {
                          playSound('click');
                          setShowAllSkills(true);
                        }}
                        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition hover:bg-orange-500/30 cursor-pointer shadow-lg"
                      >
                        <span>SHOW MORE</span>
                        <ChevronDown className="w-4 h-4 text-orange-400" />
                      </button>
                    </div>
                  )}

                  {/* Desktop View "Show More" Tile - Occupies Row 3, Columns 2 & 3 right after the 7th skill (index 6) */}
                  {isAllCategory && !showAllSkills && index === 6 && (
                    <div className="hidden lg:flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-orange-500/40 bg-gradient-to-br from-obsidian-950/90 via-obsidian-950/80 to-orange-950/20 backdrop-blur-2xl shadow-xl hover:shadow-[0_20px_50px_rgba(255,87,34,0.22)] hover:border-orange-500/70 transition-all group col-span-2 relative overflow-hidden select-none">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-orange-500/40 text-orange-400 bg-orange-500/10 tracking-widest uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-orange-400 animate-pulse" />
                            <span>ALL TECHNICAL CAPABILITIES</span>
                          </span>
                          <span className="font-mono text-xs text-slate-400">Total: {filteredSkills.length} Verified Skills</span>
                        </div>

                        <h3 className="font-display font-black text-2xl text-white tracking-tight group-hover:text-orange-300 transition-colors">
                          Explore All Technologies &amp; Tooling
                        </h3>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-lg">
                          View full engineering matrix including MySQL, PostgreSQL, Docker, Git, Pandas, NumPy, Matplotlib, Vercel, Jira, React, and Software Design Architecture.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10 mt-4">
                        <button
                          onClick={() => {
                            playSound('click');
                            setShowAllSkills(true);
                          }}
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-obsidian-950 font-display font-black text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(255,87,34,0.4)] hover:shadow-[0_0_35px_rgba(255,87,34,0.7)] hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer"
                        >
                          <span>SHOW MORE</span>
                          <ChevronDown className="w-4 h-4 text-obsidian-950 stroke-[3]" />
                        </button>
                        <span className="font-mono text-[11px] text-slate-400">
                          Click to expand full matrix
                        </span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}

          {/* When expanded, show a "Show Less" button */}
          {isAllCategory && showAllSkills && (
            <div className="col-span-full flex justify-center pt-4">
              <button
                onClick={() => {
                  playSound('click');
                  setShowAllSkills(false);
                  const el = document.getElementById('skills');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-obsidian-900 border border-orange-500/40 hover:border-orange-500 text-slate-200 hover:text-white font-mono text-xs flex items-center gap-2 transition hover:scale-105 cursor-pointer shadow-lg"
              >
                <span>SHOW LESS</span>
                <ChevronUp className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          )}
        </div>
      </section>
  );
}

export default SkillsSection;