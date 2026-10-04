import React from 'react';

// 1. Python Official Logo (Two interlocking snakes in blue & yellow)
export function PythonLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <path
        d="M63.58 4.25c-30.82 0-28.91 13.37-28.91 13.37l.03 13.85h29.47v4.18H20.61S4.25 33.8 4.25 64.6c0 30.82 14.33 29.74 14.33 29.74h8.54V82.02s-.47-14.33 14.07-14.33h24.18s13.6.22 13.6-13.38V17.62S80.95 4.25 63.58 4.25zm-15.6 9.38c2.97 0 5.38 2.41 5.38 5.38 0 2.96-2.41 5.37-5.38 5.37-2.96 0-5.37-2.41-5.37-5.37 0-2.97 2.41-5.38 5.37-5.38z"
        fill="#3776AB"
      />
      <path
        d="M64.42 123.75c30.82 0 28.91-13.37 28.91-13.37l-.03-13.85H63.83v-4.18h43.56s16.36 1.85 16.36-28.95c0-30.82-14.33-29.74-14.33-29.74h-8.54v12.32s.47 14.33-14.07 14.33H62.63s-13.6-.22-13.6 13.38v36.69s-1.98 13.37 15.39 13.37zm15.6-9.38c-2.97 0-5.38-2.41-5.38-5.38 0-2.96 2.41-5.37 5.38-5.37 2.96 0 5.37 2.41 5.37 5.37 0 2.97-2.41 5.38-5.37 5.38z"
        fill="#FFD438"
      />
    </svg>
  );
}

// 2. Java Official Logo (Coffee Cup with red/blue steam)
export function JavaLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <path
        d="M48.15 88.37c0 0-8.91 2.33-2.96 9.4 6.7 7.97 10.96 8.52 23.36 3.12 10.45-4.55 19.38-3.08 24.52.88 0 0 2.76-7.39-10.48-11.23-14.28-4.14-25.75-5.35-34.44-2.17z"
        fill="#E76F00"
      />
      <path
        d="M41.42 104.75c0 0-6.19 4.67 4.3 6.94 11.83 2.56 26.83 2.78 40.54-3.5 0 0 2.82 4.41-6.17 7.78-15.65 5.86-36.93 4.28-46.12-3.15-7.77-6.28 7.45-8.07 7.45-8.07z"
        fill="#E76F00"
      />
      <path
        d="M72.03 57.65c6.54 7.55-1.74 14.54-1.74 14.54s17.07-8.94 9.17-20.25c-7.46-10.68-13.14-16.03 17.75-32.89 0 0-36.63 9.38-25.18 38.6z"
        fill="#5382A1"
      />
      <path
        d="M43.07 80.89c0 0-16.52 3.65-5.91 12.87 11.25 9.77 24.08 8.04 38.16 3.32 11.45-3.83 26.23-1.87 26.23-1.87s-3.74-4.83-14.61-7.23c-14.07-3.1-31.06-9.76-43.87-7.09z"
        fill="#5382A1"
      />
      <path
        d="M87.35 70.36s7.81-4.73 14.15-1.72c6.91 3.28 9.94 13.9-3.79 17.59-1.35.36-1.52.92-.76 1.74 1.34 1.45 2.11 1.78 4.25.96 11.96-4.58 14.69-20.89.51-24.8-13.25-3.66-14.36 6.23-14.36 6.23z"
        fill="#E76F00"
      />
      <path
        d="M59.43 11.05s-14.49 13.57 2.37 28.52c14.05 12.45 4.3 22.09 4.3 22.09s7.49-8.45-3.08-18.72c-12.78-12.4-7.55-24.62-3.59-31.89z"
        fill="#5382A1"
      />
    </svg>
  );
}

// 3. Spring Boot Official Logo (Green Hexagon with Leaf)
export function SpringBootLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <path
        d="M64 6L14 35v58l50 29 50-29V35L64 6z"
        fill="#6DB33F"
      />
      <path
        d="M64 16.5l39.5 23v46L64 108.5 24.5 85.5v-46L64 16.5z"
        fill="#4F9B2C"
      />
      <path
        d="M84.5 48.5C81.8 45.8 77.2 44 71.5 44c-12.8 0-23.2 10.4-23.2 23.2 0 7.2 3.3 13.6 8.5 17.8l-1.3 5.5 5.5-1.3c4.2 2.2 8.9 3.5 13.9 3.5 16.8 0 30.5-13.7 30.5-30.5 0-5.7-1.8-10.3-4.5-13.7l-16.4 16.4-3.5-3.5 19.5-19.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 4. Spring Security & JWT Logo (Shield with Lock & Key)
export function SpringSecurityLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <path
        d="M64 8l48 18v38c0 34-21 66-48 76-27-10-48-42-48-76V26L64 8z"
        fill="#2E3842"
        stroke="#6DB33F"
        strokeWidth="6"
      />
      <path
        d="M64 18l38 14v30c0 26-16 52-38 60-22-8-38-34-38-60V32l38-14z"
        fill="#6DB33F"
        fillOpacity="0.25"
      />
      {/* Keyhole / Lock */}
      <rect x="50" y="58" width="28" height="24" rx="4" fill="#6DB33F" />
      <path
        d="M55 58V48a9 9 0 0 1 18 0v10"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="64" cy="68" r="3" fill="#FFFFFF" />
      <path d="M64 71v5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Microservices Logo (Interconnected Hexagonal Nodes / Service Mesh)
export function MicroservicesLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <circle cx="64" cy="64" r="16" fill="#FF5722" />
      <circle cx="28" cy="38" r="12" fill="#00BCD4" />
      <circle cx="100" cy="38" r="12" fill="#4CAF50" />
      <circle cx="28" cy="90" r="12" fill="#9C27B0" />
      <circle cx="100" cy="90" r="12" fill="#FF9800" />
      {/* Connecting Mesh Lines */}
      <path d="M40 44l14 12M88 44L74 56M40 84l14-12M88 84L74 72" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 3" />
      <path d="M28 50v28M100 50v28" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
      <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
    </svg>
  );
}

// 6. MySQL Official Logo (Dolphin Silhouette & Blue/Orange)
export function MySQLLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#00758F" />
      {/* Dolphin leaping curve */}
      <path
        d="M32 78c6-14 18-32 38-36 14-3 26 2 34 10-6-1-12 1-16 4-6 5-10 12-14 18-2 3-8 9-16 8-6-1-14-3-26-4z"
        fill="#FFFFFF"
      />
      <path
        d="M70 42c8-8 20-12 32-10 2 0 4 2 2 4-8 5-16 12-18 18-4-4-9-9-16-12z"
        fill="#F29111"
      />
      <circle cx="78" cy="50" r="2.5" fill="#00758F" />
      {/* Wave splash */}
      <path
        d="M26 88c12 2 28-2 42-6 16-4 32-2 44 4"
        stroke="#F29111"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 7. PostgreSQL Official Logo (Slonik Elephant Silhouette)
export function PostgreSQLLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#336791" />
      <path
        d="M64 24c-22 0-38 14-38 34 0 12 6 22 16 28v18c0 4 6 6 8 2l8-10c2 0 4 0 6 0 22 0 38-14 38-34S86 24 64 24z"
        fill="#FFFFFF"
      />
      {/* Ear and trunk contours */}
      <path
        d="M52 46c-6 2-10 8-10 16 0 10 6 18 14 18s12-8 12-18-6-16-16-16z"
        fill="#336791"
        opacity="0.3"
      />
      <path
        d="M74 48c0 2-2 4-4 4s-4-2-4-4 2-4 4-4 4 2 4 4z"
        fill="#336791"
      />
      <path
        d="M78 66c6 8 8 18 8 26 0 8-4 12-8 12s-6-4-6-10c0-8 2-18 6-28z"
        fill="#336791"
      />
    </svg>
  );
}

// 8. AWS RDS Official Logo (Cloud Database Cube)
export function AwsRdsLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#232F3E" />
      {/* Isometric Database Cylinder / Cube in AWS Blue/Orange */}
      <path
        d="M64 26l36 18v40L64 102 28 84V44L64 26z"
        fill="#3B48CC"
        stroke="#527FFF"
        strokeWidth="3"
      />
      {/* Top Face */}
      <path d="M64 26l36 18-36 18-36-18 36-18z" fill="#527FFF" />
      {/* Internal DB Disks */}
      <ellipse cx="64" cy="58" rx="24" ry="10" fill="#2C3688" />
      <ellipse cx="64" cy="72" rx="24" ry="10" fill="#2C3688" />
      {/* AWS Smile / Arrow Accent */}
      <path
        d="M38 98c16 8 36 8 52 0"
        stroke="#FF9900"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M92 94l4 4-6 2" fill="#FF9900" />
    </svg>
  );
}

// 9. Docker Official Logo (Blue Whale with Cargo Containers)
export function DockerLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#0db7ed" />
      {/* Containers */}
      <rect x="42" y="38" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="54" y="38" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="30" y="49" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="42" y="49" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="54" y="49" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="66" y="49" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="42" y="60" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="54" y="60" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="66" y="60" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      <rect x="78" y="60" width="10" height="9" rx="1.5" fill="#FFFFFF" />
      {/* Whale body */}
      <path
        d="M108 67c-3-1-7-1-10 1-2-12-14-14-14-14H18c-2 10 2 24 10 31 10 9 26 9 44 5 16-3 28-1 34 7 6-4 10-13 10-21 0-3-4-8-8-9z"
        fill="#FFFFFF"
      />
      <circle cx="34" cy="78" r="2.5" fill="#0db7ed" />
    </svg>
  );
}

// 10. Git & GitHub Logo (Git Orange Diamond & GitHub Octocat)
export function GitGitHubLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#181717" />
      {/* Git Diamond */}
      <path
        d="M64 22L98 56a6 6 0 0 1 0 8.5L64 98.5a6 6 0 0 1-8.5 0L30 64.5a6 6 0 0 1 0-8.5L64 22z"
        fill="#F05032"
      />
      {/* Git Branch Lines */}
      <circle cx="54" cy="74" r="6" fill="#FFFFFF" />
      <circle cx="74" cy="54" r="6" fill="#FFFFFF" />
      <circle cx="54" cy="46" r="6" fill="#FFFFFF" />
      <path d="M54 52v16M54 62l16-12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 11. Vercel Official Logo (Black/White Triangle)
export function VercelLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#000000" stroke="#333333" strokeWidth="2" />
      <path d="M64 30L102 96H26L64 30z" fill="#FFFFFF" />
    </svg>
  );
}

// 12. Netlify Official Logo (Turquoise Diamond)
export function NetlifyLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#002838" />
      <path
        d="M64 22l38 38-38 38-38-38 38-38z"
        fill="#00C7B7"
      />
      <path
        d="M44 48l16 16-16 16 16 16 16-16-16-16 16-16-16-16-16 16z"
        fill="#24C1E0"
        opacity="0.6"
      />
      <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
    </svg>
  );
}

// 13. Atlassian Jira Official Logo (Blue Dynamic Diamond)
export function JiraLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#0052CC" />
      <path
        d="M64 28l28 28-28 28-28-28 28-28z"
        fill="#2684FF"
      />
      <path
        d="M64 48l18 18-18 18-18-18 18-18z"
        fill="#FFFFFF"
      />
      <path
        d="M48 64l16 16-8 8-16-16 8-8z"
        fill="#0052CC"
        opacity="0.8"
      />
    </svg>
  );
}

// 14. Pandas Official Logo (Data Blocks)
export function PandasLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#150458" />
      {/* 4 Colored Bars / Matrix */}
      <rect x="34" y="32" width="12" height="34" rx="3" fill="#E70488" />
      <rect x="50" y="44" width="12" height="48" rx="3" fill="#FFD43B" />
      <rect x="66" y="32" width="12" height="60" rx="3" fill="#00A2D3" />
      <rect x="82" y="56" width="12" height="36" rx="3" fill="#E70488" />
    </svg>
  );
}

// 15. NumPy Official Logo (Isometric 3D Matrix Cube)
export function NumPyLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#013243" />
      {/* Isometric Cube in NumPy Blues */}
      <path d="M64 24l36 20v40L64 104 28 84V44L64 24z" fill="#4DABCF" />
      <path d="M64 24l36 20-36 20-36-20 36-20z" fill="#88D1EC" />
      <path d="M28 44l36 20v40L28 84V44z" fill="#2F7B99" />
      {/* 'N' glyph on front */}
      <text
        x="48"
        y="78"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="36"
      >
        N
      </text>
    </svg>
  );
}

// 16. Matplotlib Official Logo (Circular Colormap Visualization)
export function MatplotlibLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#11557C" />
      <circle cx="64" cy="64" r="36" fill="#1C3D5A" />
      {/* Multi-slice pie / radar plot */}
      <path d="M64 64L40 38a36 36 0 0 1 48 0L64 64z" fill="#FFA15A" />
      <path d="M64 64l24-26a36 36 0 0 1 12 36L64 64z" fill="#19D3F3" />
      <path d="M64 64l36 10a36 36 0 0 1-28 26L64 64z" fill="#00CC96" />
      <path d="M64 64L72 100a36 36 0 0 1-36-8L64 64z" fill="#AB63FA" />
      <path d="M64 64L36 92a36 36 0 0 1-8-36L64 64z" fill="#EF553B" />
      <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
    </svg>
  );
}

// 17. Python DSA Official Logo (Python Snake + Binary Tree)
export function PythonDsaLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#1E293B" />
      {/* Root Node */}
      <circle cx="64" cy="36" r="12" fill="#38BDF8" />
      <text x="60" y="41" fill="#0F172A" fontFamily="monospace" fontWeight="900" fontSize="14">R</text>
      {/* Left Node */}
      <circle cx="40" cy="72" r="10" fill="#F59E0B" />
      <text x="37" y="76" fill="#0F172A" fontFamily="monospace" fontWeight="900" fontSize="12">L</text>
      {/* Right Node */}
      <circle cx="88" cy="72" r="10" fill="#10B981" />
      <text x="84" y="76" fill="#0F172A" fontFamily="monospace" fontWeight="900" fontSize="12">R</text>
      {/* Tree Branches */}
      <path d="M56 44L44 64M72 44L84 64" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <circle cx="28" cy="100" r="7" fill="#F43F5E" />
      <circle cx="52" cy="100" r="7" fill="#8B5CF6" />
      <circle cx="76" cy="100" r="7" fill="#06B6D4" />
      <circle cx="100" cy="100" r="7" fill="#EAB308" />
      <path d="M36 80L30 94M44 80L50 94M84 80L78 94M92 80L98 94" stroke="#64748B" strokeWidth="2.5" />
    </svg>
  );
}

// 18. Prompt Engineering & Google Gemini Logo (AI Sparkle)
export function PromptEngineeringLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#0B0F19" />
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9B72CF" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      {/* Gemini 4-Point Star Sparkle */}
      <path
        d="M64 16c0 26.5-21.5 48-48 48 26.5 0 48 21.5 48 48 0-26.5 21.5-48 48-48-26.5 0-48-21.5-48-48z"
        fill="url(#geminiGrad)"
      />
      <circle cx="96" cy="32" r="6" fill="#FFD438" />
      <circle cx="32" cy="96" r="4" fill="#38BDF8" />
    </svg>
  );
}

// 19. Microsoft Azure Official Logo
export function AzureLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#0078D4" fillOpacity="0.15" stroke="#0078D4" strokeWidth="2" />
      <path
        d="M32 96l24-44 14 18-20 26H32z"
        fill="#0078D4"
      />
      <path
        d="M56 28h26L48 96h-16l24-68z"
        fill="#5EA0EF"
      />
      <path
        d="M68 68l16-24 16 52H82l-14-28z"
        fill="#005A9E"
      />
      <path
        d="M82 96l14-24 4 12c2 6-2 12-8 12H82z"
        fill="#0078D4"
      />
    </svg>
  );
}

// 20. Render Cloud Platform Official Logo
export function RenderLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#000000" stroke="#46E3B7" strokeWidth="2" />
      {/* Render stylized 'R' in signature neon cyan-mint */}
      <path
        d="M44 32h24c16 0 28 8 28 22 0 11-7 19-17 21l21 21H84L66 76H56v20H44V32zm12 32h12c8 0 14-4 14-10s-6-10-14-10H56v20z"
        fill="#46E3B7"
      />
    </svg>
  );
}

// 21. JavaScript Official Logo
export function JavaScriptLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#F7DF1E" />
      <path
        d="M36 102c4 6 10 10 18 10 10 0 16-6 16-16V46H56v50c0 4-2 6-6 6-4 0-6-2-8-6l-6 6zm42-2c6 8 16 14 28 14 16 0 26-8 26-22 0-14-10-18-20-22l-6-3c-6-2-10-4-10-8 0-4 4-8 10-8 6 0 10 3 14 8l10-8c-6-10-14-14-24-14-14 0-24 8-24 20 0 12 8 18 18 22l6 3c6 2 12 4 12 8 0 6-6 10-12 10-8 0-14-4-18-10l-10 8z"
        fill="#000000"
      />
    </svg>
  );
}

// 22. MCP Servers (Model Context Protocol) Logo
export function McpServerLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#18181B" stroke="#A855F7" strokeWidth="2" />
      {/* Central neural hub with connectors */}
      <circle cx="64" cy="64" r="18" fill="#A855F7" />
      <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
      <circle cx="28" cy="40" r="10" fill="#38BDF8" />
      <circle cx="100" cy="40" r="10" fill="#34D399" />
      <circle cx="28" cy="88" r="10" fill="#F43F5E" />
      <circle cx="100" cy="88" r="10" fill="#FBBF24" />
      <path d="M38 46l16 10M90 46L74 56M38 82l16-10M90 82L74 72" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="3 3" />
    </svg>
  );
}

