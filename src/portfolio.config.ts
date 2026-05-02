/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION
 *  Edit this file to personalize your portfolio.
 *  No other files need to be touched for basic customization.
 * ============================================================
 */

export const config = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Alex Rivera",
  title: "Full-Stack Engineer",
  tagline: "I build thoughtful software that scales.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  avatarUrl: "", // URL to your profile photo. Leave empty to use initials.

  // ── Resume ─────────────────────────────────────────────────
  // Provide a direct URL to your resume PDF (Google Drive, Dropbox, etc.)
  // For GitHub Pages: put your resume.pdf in the /public folder and use "/resume.pdf"
  resumeUrl: "/resume.pdf",
  resumeFileName: "Alex_Rivera_Resume.pdf", // The filename used when downloading

  // ── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "", // Leave empty to hide
    website: "", // Personal blog or website
  },

  // ── About ──────────────────────────────────────────────────
  about: `I'm a full-stack engineer with 5+ years of experience building products 
    that people love. I specialize in React, Node.js, and distributed systems. 
    When I'm not coding, I'm hiking trails or experimenting with new coffee brewing methods.`,

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] },
    { category: "Tools", items: ["Git", "Figma", "Jest", "Storybook", "Datadog"] },
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      company: "Acme Corp",
      role: "Senior Full-Stack Engineer",
      period: "2022 – Present",
      description:
        "Led migration of monolithic Rails app to microservices. Reduced p99 latency by 60%. Mentored a team of 4 engineers.",
      highlights: ["Microservices migration", "60% latency reduction", "Team leadership"],
    },
    {
      company: "Startup XYZ",
      role: "Software Engineer",
      period: "2020 – 2022",
      description:
        "Built real-time collaboration features for a SaaS platform serving 50k users. Owned the entire frontend from scratch.",
      highlights: ["Real-time collaboration", "50k users", "Frontend ownership"],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2018 – 2020",
      description:
        "Delivered 20+ web projects for small businesses and agencies across e-commerce, marketing, and internal tools.",
      highlights: ["20+ projects", "E-commerce", "Internal tools"],
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      name: "OpenDesk",
      description:
        "An open-source project management tool built with React and Go. 2.3k GitHub stars. Real-time updates via WebSockets.",
      tags: ["React", "Go", "WebSockets", "PostgreSQL"],
      liveUrl: "https://opendesk.example.com",
      repoUrl: "https://github.com/yourusername/opendesk",
      featured: true,
    },
    {
      name: "CodeLens",
      description:
        "VS Code extension that uses AI to generate inline documentation. 10k+ installs from the marketplace.",
      tags: ["TypeScript", "OpenAI", "VS Code API"],
      liveUrl: "",
      repoUrl: "https://github.com/yourusername/codelens",
      featured: true,
    },
    {
      name: "PriceWatch",
      description:
        "Browser extension that tracks price history on e-commerce sites and alerts users to drops.",
      tags: ["JavaScript", "Chrome API", "Node.js"],
      liveUrl: "https://pricewatch.example.com",
      repoUrl: "https://github.com/yourusername/pricewatch",
      featured: false,
    },
    {
      name: "Logbook",
      description:
        "A minimalist journaling app with end-to-end encryption. Built in a weekend. 500+ users.",
      tags: ["React Native", "SQLite", "Crypto"],
      liveUrl: "",
      repoUrl: "https://github.com/yourusername/logbook",
      featured: false,
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2014 – 2018",
    },
  ],

  // ── Availability ───────────────────────────────────────────
  // Show/hide the "Open to work" badge in the hero
  openToWork: true,

  // ── Theme ──────────────────────────────────────────────────
  // "system" | "light" | "dark" — default color scheme
  defaultTheme: "system" as "system" | "light" | "dark",
};
