export type Category =
  | "AI Engineering & Dev Tools"
  | "Digital Humanities"
  | "Business Solutions"
  | "Esoteric & Experimental";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  repo?: string;
  category: Category;
}

export const categories: Category[] = [
  "AI Engineering & Dev Tools",
  "Digital Humanities",
  "Business Solutions",
  "Esoteric & Experimental",
];

export const categoryDescriptions: Record<Category, string> = {
  "AI Engineering & Dev Tools":
    "Tools and teaching materials for building reliable AI systems with Claude Code.",
  "Digital Humanities":
    "Interactive portals for exploring intellectual traditions — Marx, alchemy, esotericism.",
  "Business Solutions":
    "Sales demos and operational guides built for a real moving company client.",
  "Esoteric & Experimental":
    "Interactive toys and portfolio pieces at the intersection of code and the weird.",
};

export const projects: Project[] = [
  // AI Engineering & Dev Tools
  {
    title: "PKD Planning Site",
    description:
      "Interactive guide to 33 Claude Code slash commands named after Philip K. Dick characters. Features a diagnostic quiz, failure-mode trainer, and a workflow complexity slider.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://t3dy.github.io/pkd-planning-site/",
    category: "AI Engineering & Dev Tools",
  },
  {
    title: "DebugComix",
    description:
      "13 instructional comics teaching AI engineering principles. Each pairs a visual metaphor with a real Claude Code terminal screenshot — from hook guardians to agent swarm strike teams.",
    tech: ["HTML", "CSS", "JavaScript", "DALL-E"],
    url: "https://t3dy.github.io/DebugComix/",
    category: "AI Engineering & Dev Tools",
  },
  {
    title: "Draft Academy",
    description:
      "Teaches data science, AI engineering, and systems thinking through Magic: The Gathering draft analysis. 30+ content nodes with 5-layer progressive disclosure across 5 learning pathways.",
    tech: ["React", "TypeScript", "Vite", "React Router"],
    url: "https://t3dy.github.io/draft-academy/",
    category: "AI Engineering & Dev Tools",
  },

  // Digital Humanities
  {
    title: "Marxist Portal",
    description:
      "A curated companion to Capital RAG — guided tours of Marxist thought, a dictionary of terms, biographical timelines, and contemporary analysis through four theoretical traditions.",
    tech: ["HTML", "Tailwind CSS", "Markdown", "gray-matter"],
    url: "https://t3dy.github.io/MarxistPortal/",
    category: "Digital Humanities",
  },
  {
    title: "Marxist Tradition",
    description:
      "Explores the Marxist intellectual tradition through thinkers, texts, and terms. Organized around Classical Marxism, Value-Form Theory, Harvey's Geographical Materialism, and Structuralism.",
    tech: ["HTML", "Tailwind CSS", "Markdown", "gray-matter"],
    url: "https://t3dy.github.io/MarxistTradition/",
    category: "Digital Humanities",
  },
  {
    title: "AlchemyDB",
    description:
      "A local-first digital humanities archive for alchemical and esoteric studies. Immutable PDF corpus with relational database, extraction pipeline, and a live web dashboard.",
    tech: ["React", "TypeScript", "Vite", "Python", "SQLite"],
    url: "https://t3dy.github.io/AlchemyDB/",
    category: "Digital Humanities",
  },

  // Business Solutions
  {
    title: "BizSolutionsBarton",
    description:
      "A 9-page interactive SaaS demo for a moving company — quote calculator, AI chat assistant, lead dashboard, crew scheduling, customer portal, review automation, and analytics.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    url: "https://t3dy.github.io/BizSolutionsBarton/",
    category: "Business Solutions",
  },
  {
    title: "Barton Catalog",
    description:
      "Explains 8 software solutions in business-friendly language with CS concepts translated to plain English. Includes difficulty ratings, cost estimates, and off-the-shelf alternatives.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://t3dy.github.io/BartonCatalog/",
    category: "Business Solutions",
  },
  {
    title: "Barton Hiring",
    description:
      "Complete action map for the mover hiring lifecycle. 51+ actions across 8 pipeline stages, 30+ software tools with pricing, and an interactive cost calculator.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://t3dy.github.io/BartonHiring/",
    category: "Business Solutions",
  },

  // Esoteric & Experimental
  {
    title: "TreeTapper",
    description:
      "Interactive Kabbalistic Tree of Life diagram inspired by Ian Bogost's Cow Clicker. Tap to cycle Sefirot and paths through Golden Dawn color scales as a meditative study tool.",
    tech: ["React Native", "Expo", "SVG", "TypeScript"],
    url: "https://t3dy.github.io/TreeTapper/",
    category: "Esoteric & Experimental",
  },
  {
    title: "Internship Showcase",
    description:
      "Multi-agent synthesis hub and portfolio command center. Real-time engineering visualizations, hour analysis, and links to AlchemyDB, TreeTapper, and MTGOverlay archive.",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Recharts"],
    url: "https://t3dy.github.io/InternshipPitch/",
    category: "Esoteric & Experimental",
  },
  {
    title: "Esoteric Beat",
    description:
      "Portfolio and episode guide for podcasts on Western esotericism, Renaissance magic, tarot, and Philip K. Dick. Ornate gold-and-purple aesthetic with filterable episode archive.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://t3dy.github.io/esoteric-beat-site/",
    category: "Esoteric & Experimental",
  },
];
