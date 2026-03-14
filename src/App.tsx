import { projects, categories, categoryDescriptions } from "./data/projects";
import type { Category } from "./data/projects";

const techColors: Record<string, string> = {
  React: "bg-sky-500/20 text-sky-300",
  TypeScript: "bg-blue-500/20 text-blue-300",
  Vite: "bg-purple-500/20 text-purple-300",
  "Tailwind CSS": "bg-teal-500/20 text-teal-300",
  HTML: "bg-orange-500/20 text-orange-300",
  CSS: "bg-pink-500/20 text-pink-300",
  JavaScript: "bg-yellow-500/20 text-yellow-300",
  Markdown: "bg-gray-500/20 text-gray-300",
  "gray-matter": "bg-gray-500/20 text-gray-300",
  Python: "bg-green-500/20 text-green-300",
  SQLite: "bg-amber-500/20 text-amber-300",
  Recharts: "bg-indigo-500/20 text-indigo-300",
  "React Router": "bg-red-500/20 text-red-300",
  "React Native": "bg-sky-500/20 text-sky-300",
  Expo: "bg-violet-500/20 text-violet-300",
  SVG: "bg-emerald-500/20 text-emerald-300",
  "Framer Motion": "bg-fuchsia-500/20 text-fuchsia-300",
  "DALL-E": "bg-lime-500/20 text-lime-300",
};

function ProjectCard({ title, description, tech, url }: (typeof projects)[0]) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-5 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/20"
    >
      <h3 className="mb-2 text-lg font-semibold text-zinc-100 group-hover:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${techColors[t] ?? "bg-zinc-700/50 text-zinc-400"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-500 group-hover:text-zinc-300">
        View live
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </a>
  );
}

function CategoryLane({ category }: { category: Category }) {
  const items = projects.filter((p) => p.category === category);
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-zinc-100">{category}</h2>
        <p className="mt-1 text-sm text-zinc-500">
          {categoryDescriptions[category]}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Hero */}
      <header className="border-b border-zinc-800 px-6 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          The Vibe Coding Garage
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          One-person shop building tools across AI engineering, digital
          humanities, business software, and esoteric computing. Everything here
          was vibe-coded with Claude.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="https://github.com/t3dy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Projects */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        {categories.map((cat) => (
          <CategoryLane key={cat} category={cat} />
        ))}
      </main>

      {/* About */}
      <footer className="border-t border-zinc-800 px-6 py-12 text-center">
        <h2 className="mb-3 text-xl font-semibold text-zinc-100">
          About the Garage
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
          Built by an interdisciplinary tinkerer working at the intersection of
          AI engineering, critical theory, esoteric studies, and game analytics.
          The common thread: using Claude Code to turn ideas into working
          software fast. Every project here went from concept to deployed site in
          one or two sessions.
        </p>
        <p className="mt-6 text-xs text-zinc-600">
          Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on
          GitHub Pages.
        </p>
      </footer>
    </div>
  );
}

export default App;
