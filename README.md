# The Vibe Coding Garage

**[View the live site](https://t3dy.github.io/TedProjectsShowcase/)**

A showcase of 12 projects built across AI engineering, digital humanities, business software, and esoteric computing — all vibe-coded with Claude.

---

## What This Is

This is a single-page portfolio site that catalogs every project I've shipped from my one-person "vibe coding garage." Each card links to a live GitHub Pages deployment with a description, tech stack badges, and category grouping.

## The Process

Every project on this site followed the same workflow:

1. **Idea in plain English** — I describe what I want to Claude Code in conversational terms
2. **Scope with slash commands** — I use my custom PKD Planning System (33 Claude Code skills named after Philip K. Dick characters) to scope, slice, and gate-check before writing code
3. **Build in one or two sessions** — Claude writes the code, I steer. Most projects went from zero to deployed in a single sitting
4. **Deploy to GitHub Pages** — Static builds via GitHub Actions, no servers to maintain

This showcase site itself was built the same way — scaffolded, styled, populated, and deployed in one session.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| AI | Claude Code (Opus) |

## The Projects

### AI Engineering & Dev Tools
- **PKD Planning Site** — Interactive guide to 33 Claude Code slash commands with diagnostic quiz and failure-mode trainer
- **DebugComix** — 13 instructional comics pairing visual metaphors with real terminal screenshots
- **Draft Academy** — Data science and AI engineering taught through Magic: The Gathering draft analysis

### Digital Humanities
- **Marxist Portal** — Guided tours of Marxist thought with dictionary, timelines, and four theoretical traditions
- **Marxist Tradition** — Deep dives into Classical Marxism, Value-Form Theory, Harvey, and Structuralism
- **AlchemyDB** — Local-first digital humanities archive for alchemical and esoteric studies
- **RevEng Zebrapedia** — AI-assisted reverse-engineering of Penn State's PKD Exegesis transcription project

### Business Solutions
- **BizSolutionsBarton** — 9-page interactive SaaS demo for a moving company
- **Barton Catalog** — 8 software solutions explained in business-friendly language
- **Barton Hiring** — 51+ actions across 8 pipeline stages for the mover hiring lifecycle

### Mobile & Desktop Apps
- **VoxFugiens** — Local-first Android voice notes app with offline Vosk speech-to-text
- **OldRAGDonald** — Mobile food safety inspection tool with structured case bundle export
- **ScribeFarm** — Desktop RAG-assisted writing environment for inspection reports

### Data & Knowledge Tools
- **Twitter Archive Toolkit** — Turn your Twitter/X export into a searchable, tagged knowledge base
- **MTGOverlay93** — Archive of MTG draft overlay tools and analysis prototypes
- **Team Discord Learning Community** — Data mining a Discord server to study learning community dynamics

### Esoteric & Experimental
- **Goetia Sigil Analysis** — Computer vision pipeline reverse-engineering the construction grammar of 72 Goetic seals
- **TreeTapper** — Interactive Kabbalistic Tree of Life diagram with Golden Dawn color scales
- **Internship Showcase** — Multi-agent synthesis hub and portfolio command center
- **Esoteric Beat** — Podcast portal for Western esotericism, Renaissance magic, and PKD
- **Arcana Desktop** — Digital tarot app with MTG Oracle engine for card-based divination
- **Alchemy Board Game** — Solo browser board game with six iterative versions exploring alchemical resource management

## Learning Curve & Growth Story

I started this journey as someone with a background in critical theory, digital humanities, and esoteric studies — not a traditional software engineer. The progression tells the story:

**Phase 1: Static sites and finding my feet.** The earliest projects (Esoteric Beat, Marxist Portal) were hand-styled HTML/CSS with minimal JavaScript. I was learning what a build tool even was.

**Phase 2: React and component thinking.** The Barton business suite pushed me into React and TypeScript. Building a quote calculator and crew scheduler taught me state management, component composition, and data flow — not from a textbook, but from needing it to work for a real client.

**Phase 3: Systems thinking and AI engineering.** Draft Academy and the PKD Planning System represent a shift from "building things" to "building systems that help build things." I went from using Claude as a code generator to designing agentic workflows, prompt pipelines, and multi-agent architectures.

**Phase 4: The meta layer.** This showcase site is the meta layer — a project that documents projects, built with the same tools and process it describes. The PKD slash commands I built to plan other projects were used to plan this one.

The common thread across all four phases: every project shipped. Not as a tutorial exercise, not as a half-finished repo — as a live, deployed site that someone can use. Vibe coding with Claude made that possible at a pace and scope that would have been unthinkable working alone.

## Running Locally

```bash
git clone https://github.com/t3dy/TedProjectsShowcase.git
cd TedProjectsShowcase
npm install
npm run dev
```

## License

MIT
