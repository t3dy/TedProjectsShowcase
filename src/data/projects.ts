export type Category =
  | "AI Engineering & Dev Tools"
  | "Digital Humanities"
  | "Business Solutions"
  | "Esoteric & Experimental"
  | "Mobile & Desktop Apps"
  | "Data & Knowledge Tools";

export interface ProjectDetails {
  process: string;
  techStack: string;
  learningCurve: string;
  mistakes: string;
  debugging: string;
  takeaways: string;
  nextSteps: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  repo?: string;
  category: Category;
  details: ProjectDetails;
}

export const categories: Category[] = [
  "AI Engineering & Dev Tools",
  "Digital Humanities",
  "Business Solutions",
  "Mobile & Desktop Apps",
  "Data & Knowledge Tools",
  "Esoteric & Experimental",
];

export const categoryDescriptions: Record<Category, string> = {
  "AI Engineering & Dev Tools":
    "Tools and teaching materials for building reliable AI systems with Claude Code.",
  "Digital Humanities":
    "Interactive portals for exploring intellectual traditions — Marx, alchemy, esotericism.",
  "Business Solutions":
    "Sales demos and operational guides built for a real moving company client.",
  "Mobile & Desktop Apps":
    "Android and desktop applications for voice capture, field inspection, and report writing.",
  "Data & Knowledge Tools":
    "Pipelines and toolkits for turning personal archives into searchable knowledge bases.",
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
    details: {
      process:
        "Started by cataloging all 33 slash commands I'd built over months of Claude Code use. Organized them by failure mode rather than alphabetically — the site structure mirrors how you'd actually reach for a skill when something goes wrong. The diagnostic quiz was the last feature added and ended up being the most useful entry point.",
      techStack:
        "React with TypeScript for type safety across the skill registry data model. Tailwind for rapid styling iteration — I changed the color scheme three times in one session. Vite for instant HMR so I could see quiz logic changes in real time.",
      learningCurve:
        "This was my first project where the data model mattered more than the UI. Learning to type a 33-item registry with nested metadata (triggers, anti-patterns, related skills) forced me to think in interfaces before thinking in components.",
      mistakes:
        "Initially tried to render all 33 skills on one scrollable page. It was overwhelming and unusable. The category grouping and quiz funnel emerged from that failure — sometimes the first version has to be bad to reveal the right structure.",
      debugging:
        "The workflow complexity slider had edge cases where skill recommendations would overlap or contradict. Spent time building a priority system so that higher-complexity workflows would surface advanced skills without hiding foundational ones.",
      takeaways:
        "A tool that helps you pick the right tool is more valuable than the tools themselves. The quiz and failure-mode trainer get more use than the raw skill reference. Design for the moment of confusion, not the moment of mastery.",
      nextSteps:
        "Want to add a 'skill composer' that lets you chain multiple PKD skills into a custom workflow template. Also considering a Claude Code hook that auto-suggests relevant skills based on your current git diff.",
    },
  },
  {
    title: "DebugComix",
    description:
      "13 instructional comics teaching AI engineering principles. Each pairs a visual metaphor with a real Claude Code terminal screenshot — from hook guardians to agent swarm strike teams.",
    tech: ["HTML", "CSS", "JavaScript", "DALL-E"],
    url: "https://t3dy.github.io/DebugComix/",
    category: "AI Engineering & Dev Tools",
    details: {
      process:
        "Each comic started as a concept: what's the one thing a new Claude Code user needs to understand about hooks? About agent delegation? About context window management? I'd write the teaching point first, then design a visual metaphor, then generate the art with DALL-E, then pair it with a real terminal screenshot showing the concept in action.",
      techStack:
        "Deliberately kept this as plain HTML/CSS/JS — no framework, no build step. The content is the product, not the tech. DALL-E 3 for the comic art, with careful prompting to maintain a consistent visual style across all 13 panels.",
      learningCurve:
        "Learned more about prompt engineering for image generation than I expected. Getting DALL-E to produce consistent characters across panels required developing a 'style bible' prompt prefix. Also learned that pairing generated art with real screenshots creates a trust bridge — readers believe the teaching because they can see the real terminal.",
      mistakes:
        "First three comics were too text-heavy. The visual metaphor was decoration, not instruction. Had to learn that in a comic, the image should teach and the text should reinforce — not the other way around.",
      debugging:
        "Image sizing and responsive layout across 13 different aspect ratios was surprisingly painful in plain CSS. Should have used a grid system from the start instead of hand-positioning each panel.",
      takeaways:
        "Visual teaching scales differently than text teaching. These comics get shared in ways my technical blog posts never did. The barrier to understanding drops when you can see the concept before reading about it.",
      nextSteps:
        "Planning a second series focused on multi-agent patterns — coordinator agents, specialist agents, and the handoff protocols between them. Also want to animate key panels to show state transitions.",
    },
  },
  {
    title: "Draft Academy",
    description:
      "Teaches data science, AI engineering, and systems thinking through Magic: The Gathering draft analysis. 30+ content nodes with 5-layer progressive disclosure across 5 learning pathways.",
    tech: ["React", "TypeScript", "Vite", "React Router"],
    url: "https://t3dy.github.io/draft-academy/",
    category: "AI Engineering & Dev Tools",
    details: {
      process:
        "Mapped out the learning pathways first on paper — what concepts does someone need to understand before they can grasp MCTS simulations? Before they can reason about color-pair archetypes? The 5-layer progressive disclosure system emerged from wanting to serve both casual MTG players and people who want to understand the math behind pick-order optimization.",
      techStack:
        "React Router for pathway navigation — each learning path is its own route tree. TypeScript interfaces for the content node model so every node has consistent metadata (prerequisites, difficulty, related nodes). Vite for development speed since I was iterating on 30+ content pages.",
      learningCurve:
        "This project taught me information architecture. 30+ content nodes with cross-references and prerequisites is essentially a directed acyclic graph. I had to learn to think about content as a graph traversal problem, not a linear curriculum.",
      mistakes:
        "Built the content nodes before designing the navigation. Ended up with orphan nodes that were hard to discover and circular prerequisite chains that confused the progressive disclosure system. Should have designed the graph structure first.",
      debugging:
        "React Router nested routes with dynamic content loading created some tricky state management issues. Navigating between nodes in the same pathway needed to preserve scroll position and disclosure state without a full re-render.",
      takeaways:
        "Domain expertise plus technical skill creates something neither can create alone. No pure MTG site teaches systems thinking, and no pure CS site uses draft analysis as a vehicle. The intersection is where the value lives.",
      nextSteps:
        "Want to add interactive draft simulators where you can practice pick decisions and see the data science concepts applied in real time. Also planning integration with 17lands data for live metagame analysis.",
    },
  },

  // Digital Humanities
  {
    title: "Marxist Portal",
    description:
      "A curated companion to Capital RAG — guided tours of Marxist thought, a dictionary of terms, biographical timelines, and contemporary analysis through four theoretical traditions.",
    tech: ["HTML", "Tailwind CSS", "Markdown", "gray-matter"],
    url: "https://t3dy.github.io/MarxistPortal/",
    category: "Digital Humanities",
    details: {
      process:
        "Built as the human-readable companion to a RAG pipeline I'd set up over Marx's Capital. The RAG could answer questions, but people needed context to ask good questions. Organized around four traditions (Classical, Value-Form, Harvey, Structuralist) because that's how the scholarly conversation is actually structured — not by chapter, but by interpretive framework.",
      techStack:
        "Markdown with gray-matter frontmatter for content management — each entry has metadata for tradition, period, and cross-references. Tailwind for styling. No React needed here because the content is mostly static text with navigation.",
      learningCurve:
        "Learned how to structure scholarly content for web consumption. Academic writing assumes linear reading; web reading is non-linear. Converting a bibliography into a navigable knowledge graph required rethinking how ideas connect across traditions.",
      mistakes:
        "First version tried to be comprehensive — every thinker, every text. It was unusable. Curation is harder than collection. The current version is opinionated about what matters and that makes it actually useful as a study companion.",
      debugging:
        "gray-matter parsing edge cases with special characters in Marxist terminology (especially German terms with umlauts) required careful encoding handling. Also had to work around Markdown rendering of economic formulas like M-C-M'.",
      takeaways:
        "A curated portal with 50 well-chosen entries is more valuable than a comprehensive database with 500 entries and no editorial voice. The curation is the product.",
      nextSteps:
        "Planning to connect this directly to the Capital RAG so readers can click any concept and ask follow-up questions in context. Also want to add a reading group mode with discussion prompts for each guided tour.",
    },
  },
  {
    title: "Marxist Tradition",
    description:
      "Explores the Marxist intellectual tradition through thinkers, texts, and terms. Organized around Classical Marxism, Value-Form Theory, Harvey's Geographical Materialism, and Structuralism.",
    tech: ["HTML", "Tailwind CSS", "Markdown", "gray-matter"],
    url: "https://t3dy.github.io/MarxistTradition/",
    category: "Digital Humanities",
    details: {
      process:
        "A deeper companion to the Marxist Portal, this site focuses on the intellectual lineages themselves. Each tradition page traces the chain of influence: who read whom, what concepts evolved, where the disagreements live. Built by reading across the traditions and mapping the conversation structure.",
      techStack:
        "Same stack as the Portal — Markdown, gray-matter, Tailwind. Reused the content model but added relationship metadata so each thinker entry knows its tradition, influences, and key debates.",
      learningCurve:
        "Mapping intellectual influence is harder than it looks. You can't just list who cited whom — you need to capture what they took and what they rejected. This project taught me to think about knowledge as a conversation, not a catalog.",
      mistakes:
        "Tried to maintain strict chronological ordering within each tradition. Doesn't work because intellectual influence doesn't respect timelines — a 1960s structuralist can influence a 1990s value-form theorist who reinterprets an 1867 text. Had to switch to thematic ordering.",
      debugging:
        "Cross-references between traditions created some circular dependency issues in the build. A thinker who appears in two traditions needed a canonical entry with references, not duplicate content.",
      takeaways:
        "The relationship between entries is more important than the entries themselves. People don't come here to read about Althusser in isolation — they come to understand how Althusser relates to Marx, to Gramsci, to the structuralist project.",
      nextSteps:
        "Want to add a visual graph view showing influence lines between thinkers across traditions. Also considering a 'debate simulator' where you can see how different traditions would analyze the same passage from Capital.",
    },
  },
  {
    title: "AlchemyDB",
    description:
      "A local-first digital humanities archive for alchemical and esoteric studies. Immutable PDF corpus with relational database, extraction pipeline, and a live web dashboard.",
    tech: ["React", "TypeScript", "Vite", "Python", "SQLite"],
    url: "https://t3dy.github.io/AlchemyDB/",
    category: "Digital Humanities",
    details: {
      process:
        "Started from a personal PDF collection of 200+ alchemical and esoteric texts. Built a Python extraction pipeline to pull metadata, then a SQLite database to make it queryable, then a React dashboard to make it browsable. The 'local-first' constraint was intentional — these PDFs shouldn't be hosted publicly, but the metadata and navigation should be.",
      techStack:
        "Python for the PDF extraction pipeline (pdfminer, custom parsers for inconsistent formatting). SQLite for the relational store — lightweight, portable, no server needed. React + TypeScript + Vite for the web dashboard. The architecture splits cleanly: Python for data, React for display.",
      learningCurve:
        "First time working across two languages in one project. The Python-to-SQLite-to-React pipeline taught me to think about data contracts between systems. Also learned that PDF extraction is a nightmare — every publisher formats differently.",
      mistakes:
        "Tried to automate metadata extraction completely. Alchemical texts from the 16th century don't have consistent title pages. Ended up needing a hybrid approach: automated extraction with manual correction for the tricky cases.",
      debugging:
        "SQLite date handling for texts spanning centuries (some dates are approximate, some are ranges like '1550-1560', some are 'circa 1400') required a flexible date model that could represent uncertainty. Standard DATE columns don't cut it.",
      takeaways:
        "Local-first is a legitimate architecture for digital humanities. Not everything needs to be a cloud service. A SQLite file and a static React dashboard can serve a researcher's needs without any infrastructure cost.",
      nextSteps:
        "Planning to add a semantic search layer using embeddings so researchers can find texts by concept rather than just metadata. Also want to build a citation graph showing which alchemical texts reference each other.",
    },
  },

  // Business Solutions
  {
    title: "BizSolutionsBarton",
    description:
      "A 9-page interactive SaaS demo for a moving company — quote calculator, AI chat assistant, lead dashboard, crew scheduling, customer portal, review automation, and analytics.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    url: "https://t3dy.github.io/BizSolutionsBarton/",
    category: "Business Solutions",
    details: {
      process:
        "Built as a sales demo for a real moving company client. The goal was to show what custom software could do for their business — not as a wireframe or slide deck, but as a working interactive prototype. Each of the 9 pages demonstrates a different business capability with realistic fake data.",
      techStack:
        "React + TypeScript for the component architecture — 9 pages means lots of shared UI patterns. Tailwind for consistent styling across pages. Recharts for the analytics dashboard with realistic-looking business metrics. All data is hardcoded but structured to be replaceable with real API calls.",
      learningCurve:
        "First time building something for a non-technical client. Learned that what impresses developers (clean code, type safety) is invisible to business owners. What they care about: does the quote calculator match their actual pricing? Does the schedule view match how they actually assign crews?",
      mistakes:
        "Over-built the first version. Had authentication flows, settings pages, user management — features the client didn't ask for and couldn't evaluate. Stripped it down to the 9 core pages that directly addressed their pain points.",
      debugging:
        "The quote calculator had edge cases around the moving company's actual pricing model (distance tiers, crew size multipliers, seasonal rates). Had to iterate with the client to get the formula right — this was business logic debugging, not code debugging.",
      takeaways:
        "A working demo is worth a thousand slides. The client could click through the prototype and say 'yes, but the scheduling should work like this' — feedback you can't get from a static mockup. Ship the demo, iterate on reality.",
      nextSteps:
        "Client is evaluating whether to fund full development. If they do, the demo becomes the specification — every page already defines the expected behavior. The gap between demo and product is smaller than you'd think.",
    },
  },
  {
    title: "Barton Catalog",
    description:
      "Explains 8 software solutions in business-friendly language with CS concepts translated to plain English. Includes difficulty ratings, cost estimates, and off-the-shelf alternatives.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://t3dy.github.io/BartonCatalog/",
    category: "Business Solutions",
    details: {
      process:
        "The client asked 'what else could software do for my business?' This catalog was the answer. Each of the 8 solutions includes a plain-English explanation, a difficulty rating, a rough cost estimate, and off-the-shelf alternatives they could use instead of custom development. Honesty about alternatives built more trust than a hard sell.",
      techStack:
        "React + TypeScript with a card-based layout. Each solution is a data object with structured fields (description, difficulty, cost range, alternatives, prerequisites). Tailwind for clean, professional styling that doesn't look like a developer's portfolio.",
      learningCurve:
        "Translating CS concepts to business language is a real skill. 'CRUD application' means nothing to a moving company owner. 'A system where your office manager can add, update, and look up customer records without calling you' — that they understand.",
      mistakes:
        "First version was too technical. Used words like 'database', 'API', 'webhook'. Rewrote every description through the lens of 'what does the person sitting at the front desk need to know?' The technical details moved to a collapsible section for the curious.",
      debugging:
        "The cost estimates were the hardest part. Too low and you set unrealistic expectations. Too high and you lose the client. Ended up providing ranges with clear explanations of what drives the cost up or down.",
      takeaways:
        "Presenting off-the-shelf alternatives alongside custom solutions made the catalog more trustworthy. When a client sees you recommending a cheaper existing tool for 3 of the 8 solutions, they trust your judgment on the 5 where custom development actually makes sense.",
      nextSteps:
        "Want to add a 'solution builder' where the client can check which solutions they're interested in and see a combined cost estimate and implementation timeline. Also planning to link each solution to its corresponding demo page in BizSolutionsBarton.",
    },
  },
  {
    title: "Barton Hiring",
    description:
      "Complete action map for the mover hiring lifecycle. 51+ actions across 8 pipeline stages, 30+ software tools with pricing, and an interactive cost calculator.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://t3dy.github.io/BartonHiring/",
    category: "Business Solutions",
    details: {
      process:
        "The client's biggest operational pain was hiring. Mapped out every step of their hiring process — from writing job posts through onboarding — and identified 51+ discrete actions across 8 pipeline stages. Then matched each action to software tools that could help, with real pricing.",
      techStack:
        "React + TypeScript with an accordion-based pipeline view. Each stage expands to show its actions, recommended tools, and cost implications. The cost calculator aggregates tool subscriptions across the pipeline so the client can see total monthly spend for different configurations.",
      learningCurve:
        "Learned that operational processes are rarely linear. The hiring pipeline has branches (background check fails, candidate ghosts, seasonal surge hiring) that don't fit a simple stage model. Had to build a flexible enough data model to represent optional and conditional actions.",
      mistakes:
        "Initially organized by tool rather than by pipeline stage. Made sense to me as a developer (group by vendor) but made no sense to the client (group by what I'm doing today). Restructured around the client's mental model of their workflow.",
      debugging:
        "The cost calculator had compounding issues — some tools have per-seat pricing, some are flat monthly, some have per-transaction fees. Normalizing these into a comparable monthly cost required careful math and clear assumptions displayed to the user.",
      takeaways:
        "When you map someone's process at this level of detail, the automation opportunities become obvious. The client didn't need me to tell them what to automate — seeing 51 actions laid out made the bottlenecks self-evident.",
      nextSteps:
        "Planning to add a 'current vs. optimized' comparison view so the client can see time and cost savings from adopting recommended tools. Also want to add integration notes showing which tools connect to each other.",
    },
  },

  // Esoteric & Experimental
  {
    title: "TreeTapper",
    description:
      "Interactive Kabbalistic Tree of Life diagram inspired by Ian Bogost's Cow Clicker. Tap to cycle Sefirot and paths through Golden Dawn color scales as a meditative study tool.",
    tech: ["React Native", "Expo", "SVG", "TypeScript"],
    url: "https://t3dy.github.io/TreeTapper/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "The idea came from Bogost's Cow Clicker — what if the most minimal possible interaction (a tap) could be meaningful? Each tap cycles a Sefirah through its four Golden Dawn color scales (King, Queen, Prince, Princess). The interaction is meditative: tap, observe the color change, contemplate the correspondence.",
      techStack:
        "React Native with Expo for cross-platform deployment (iOS, Android, web). SVG for the Tree of Life diagram — each Sefirah and path is a precisely positioned SVG element with tap handlers. TypeScript for the color scale data model, which maps 10 Sefirot x 4 scales = 40 distinct colors.",
      learningCurve:
        "First React Native project. Coming from web React, the differences are subtle but real — no CSS grid, different touch event model, SVG rendering quirks on different platforms. Also learned the Golden Dawn color scale system in depth to get the correspondences right.",
      mistakes:
        "Tried to make it too game-like initially. Added scoring, achievements, unlockable paths. It ruined the meditative quality. Stripped everything back to just the tap and the color change. The constraint made it better.",
      debugging:
        "SVG touch targets on mobile are finicky. The paths between Sefirot are thin lines that are hard to tap accurately. Had to add invisible expanded hit areas while keeping the visual lines thin. Also dealt with color rendering differences between iOS and Android.",
      takeaways:
        "Constraint-driven design works. By limiting the interaction to a single tap, every design decision becomes clear: what should the tap do? What should the user see? What should they feel? Fewer features meant more intentionality in every remaining detail.",
      nextSteps:
        "Want to add a study mode that displays correspondences (Hebrew letter, astrological sign, tarot attribution) on tap instead of just color changes. Also planning haptic feedback patterns for each Sefirah.",
    },
  },
  {
    title: "Internship Showcase",
    description:
      "Multi-agent synthesis hub and portfolio command center. Real-time engineering visualizations, hour analysis, and links to AlchemyDB, TreeTapper, and MTGOverlay archive.",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Recharts"],
    url: "https://t3dy.github.io/InternshipPitch/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "Built as a meta-portfolio to document my self-directed 'internship' with Claude Code. Aggregates metrics from multiple projects (commit history, hours logged, tech diversity) into a single dashboard. The engineering visualizations show patterns across projects — which weeks were most productive, which tech stacks I gravitated toward.",
      techStack:
        "React + TypeScript + Vite for the app shell. Framer Motion for entrance animations and page transitions — this is a portfolio piece, so it needed to feel polished. Recharts for the hour analysis and engineering metric visualizations.",
      learningCurve:
        "First time using Framer Motion. Animation is a different kind of thinking — you're designing temporal experiences, not just spatial layouts. Learning to sequence animations so they tell a story (first this appears, then that slides in) was a new skill.",
      mistakes:
        "Over-animated the first version. Every element had a bounce, slide, or fade. It was distracting and slow. Learned to use animation surgically — only where it guides attention or creates delight, never where it slows comprehension.",
      debugging:
        "Framer Motion's AnimatePresence component had tricky interactions with React Router's route transitions. Exit animations would sometimes conflict with enter animations on the next page. Had to carefully manage animation lifecycle and z-ordering.",
      takeaways:
        "A portfolio that shows your process is more compelling than one that just shows your output. The hour analysis and commit visualizations tell a story about growth and consistency that a gallery of screenshots can't convey.",
      nextSteps:
        "Want to make the metrics live — pulling from GitHub API to show real-time commit activity across all projects. Also planning to add a 'journey map' visualization showing the chronological progression from first project to latest.",
    },
  },
  {
    title: "Goetia Sigil Analysis",
    description:
      "Computer vision pipeline for reverse-engineering the construction grammar of the 72 Goetic seals. 8-script pipeline from grid segmentation through hierarchical clustering, with an interactive dashboard.",
    tech: ["Python", "OpenCV", "scikit-image", "D3.js"],
    url: "https://t3dy.github.io/goetia-sigil-analysis/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "Started from the question: can we decompose the 72 Goetic sigils into a formal visual vocabulary? Built an 8-script pipeline that progresses from raw image segmentation through skeleton topology, Hough geometry detection, feature extraction, dimensionality reduction, and hierarchical clustering. Each script produces both data and visualizations, feeding the next stage.",
      techStack:
        "Pure Python with OpenCV for image processing, scikit-image for skeletonization (Zhang-Suen thinning), scipy for clustering and spatial analysis, matplotlib for static visualizations. The interactive dashboard uses D3.js to let you explore the sigil feature space, cluster dendrograms, and per-sigil analysis overlays.",
      learningCurve:
        "First serious computer vision project. Learned morphological operations (dilation, erosion, skeletonization) not from a textbook but from needing them to solve a specific problem — isolating 72 sigils from a dense grid image. The Hough transform went from abstract math to intuitive tool once I saw it detect the orthogonal bias in sigil construction.",
      mistakes:
        "Tried to skip the segmentation step and manually crop sigils. Lasted about 10 before automating. Also initially over-tuned the dilation parameter for one source image — broke when I tried a different scan. The automatic dilation sweep (testing iterations 1-7 and picking the count closest to 76) was the fix.",
      debugging:
        "Skeleton topology extraction had edge cases where junction detection over-counted — a 3-way branch in a skeleton occupies multiple pixels, not one. Used scipy.ndimage.label on dilated junction masks to merge pixel clusters into single logical junctions. Also spent time calibrating the Hough circle detector's radius range to catch terminal bubbles without false-positiving on noise.",
      takeaways:
        "The biggest finding validated the initial intuition: the global angle distribution shows massive bias toward 0 and 90 degrees, confirming these sigils are built on an orthogonal grid like circuit diagrams. The terminal vocabulary is also surprisingly small (~5 types), suggesting a constrained decorative grammar. Computational analysis revealed structure that centuries of occult scholarship described qualitatively but never quantified.",
      nextSteps:
        "Planning to train a generative model that can produce new sigils in the style of the historical corpus — constrained by the discovered grammar rules. Also want to compare the Goetic sigil grammar against other seal traditions (Enochian, planetary seals) to see if the construction rules are unique or shared.",
    },
  },
  {
    title: "Esoteric Beat",
    description:
      "Portfolio and episode guide for podcasts on Western esotericism, Renaissance magic, tarot, and Philip K. Dick. Ornate gold-and-purple aesthetic with filterable episode archive.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://t3dy.github.io/esoteric-beat-site/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "Built to showcase podcast content about Western esotericism. The design needed to feel like the subject matter — ornate, mysterious, but navigable. Gold-on-purple color scheme references historical esoteric manuscripts. The episode archive needed filtering because the content spans diverse topics (tarot, alchemy, PKD, Renaissance magic).",
      techStack:
        "Plain HTML, CSS, and JavaScript. No framework, no build tool. This was one of my earliest projects and I wanted to understand the fundamentals before reaching for abstractions. Custom CSS for the ornate aesthetic — no Tailwind, no component library.",
      learningCurve:
        "This was genuinely my starting point. Learning CSS positioning, responsive design, and vanilla JavaScript event handling from scratch. Every layout problem that would be trivial with Flexbox or Grid I solved the hard way first. Painful but foundational.",
      mistakes:
        "The ornate styling was initially inconsistent — different pages had slightly different gold tones, different border treatments, different spacing. Without a design system or CSS variables, consistency was manual and error-prone. Later projects used Tailwind specifically to solve this problem.",
      debugging:
        "The filterable episode archive had performance issues with vanilla JS when the episode count grew. DOM manipulation without a virtual DOM means every filter change rebuilds the entire list. Worked around it with document fragments but it was clunky compared to what React gives you for free.",
      takeaways:
        "Building without a framework first was the right call. When I later learned React, I understood why it exists — not from a tutorial telling me, but from experiencing the pain points it solves. The ornate CSS work also taught me that aesthetic ambition and technical craft reinforce each other.",
      nextSteps:
        "Considering a rebuild in React to add features like search, bookmarking, and a recommendation engine. But there's something authentic about the hand-crafted HTML version that I might preserve as-is and build the enhanced version as a separate project.",
    },
  },

  // Mobile & Desktop Apps
  {
    title: "VoxFugiens",
    description:
      "Local-first, AI-native Android voice notes app. Record voice memos, get automatic transcripts via offline Vosk STT, and query your notes with natural language.",
    tech: ["Kotlin", "Jetpack Compose", "Vosk", "SQLite"],
    url: "https://github.com/t3dy/VoxFugiens",
    category: "Mobile & Desktop Apps",
    details: {
      process:
        "Built in phases: Phase 0 was a bare recorder that saves WAV files. Phase 1 added playback and file management. Phase 2 integrated Vosk for fully offline speech-to-text. Phase 3 added a transcription pipeline that processes recordings in the background. Each phase had a clear acceptance gate before moving on.",
      techStack:
        "Kotlin with Jetpack Compose for the UI. Vosk for offline speech-to-text — no cloud API, no network dependency, the model runs on-device. SQLite for the local note database. The architecture is intentionally local-first: your voice data never leaves your phone.",
      learningCurve:
        "First Android project. Coming from web development, the Android lifecycle (activities, fragments, services) was a paradigm shift. Jetpack Compose helped because it's declarative like React, but background audio recording and service management were genuinely new territory.",
      mistakes:
        "Tried to integrate Vosk transcription synchronously in the UI thread. Predictably froze the app on longer recordings. Had to learn Android's coroutine and background service patterns to run transcription asynchronously while keeping the UI responsive.",
      debugging:
        "Audio recording permissions on Android are a maze — runtime permissions, background recording restrictions, and different behavior across Android versions. Also dealt with Vosk model loading time (the offline model is ~50MB) requiring a loading state on first launch.",
      takeaways:
        "Local-first isn't just a privacy feature — it's a reliability feature. The app works in airplane mode, in basements with no signal, anywhere. Offline STT via Vosk is surprisingly good for English speech and eliminates the latency and cost of cloud transcription.",
      nextSteps:
        "Phase 4 is semantic search across all transcripts. Phase 5 is an answer-from-notes chat interface. Also planning PDF and web import so the app becomes a general-purpose knowledge capture tool, not just voice notes.",
    },
  },
  {
    title: "OldRAGDonald",
    description:
      "Android mobile-first food safety inspection tool. Capture voice, photo, and text observations in the field with offline Vosk transcription, then export structured case bundles for ScribeFarm.",
    tech: ["Kotlin", "Jetpack Compose", "Vosk", "SQLite"],
    url: "https://github.com/t3dy/OldRAGDonald",
    category: "Mobile & Desktop Apps",
    details: {
      process:
        "Built as the field companion to ScribeFarm. An inspector walks through a facility, captures observations (voice memos, photos, typed notes), and the app structures everything into exportable case bundles. The key insight: capture is mobile, analysis is desktop. Don't try to do both on a phone.",
      techStack:
        "Same Kotlin/Compose/Vosk stack as VoxFugiens, but with a domain-specific data model for food safety inspections. Each observation is tagged with location, category, and severity. Export produces a JSON manifest plus Markdown summary plus media files — a complete case bundle.",
      learningCurve:
        "Learned to design for field conditions: one-handed operation, gloved fingers, noisy environments. UI decisions that seem minor on a desktop (button size, tap target spacing, contrast ratios) become critical when someone is using the app in a cold storage facility.",
      mistakes:
        "First version tried to include too much structure upfront — required inspectors to categorize every observation before saving. Field testers hated it. Switched to capture-first, categorize-later: get the observation recorded immediately, organize it when you're back at your desk.",
      debugging:
        "Photo capture and voice recording competing for device resources caused issues on lower-end Android devices. Had to implement careful resource management so the camera and microphone don't conflict. Also dealt with storage management for large photo sets.",
      takeaways:
        "The best field tool is the one that gets out of your way. Every tap, every required field, every confirmation dialog is friction that slows down an inspector doing time-sensitive work. Minimize capture friction, maximize organization flexibility.",
      nextSteps:
        "Planning to add real-time checklist overlays based on facility type, so inspectors can follow regulatory checklists while capturing observations. Also want offline sync so multiple inspectors on the same site can merge their bundles.",
    },
  },
  {
    title: "ScribeFarm",
    description:
      "Desktop RAG-assisted writing environment for food safety inspection reports. Ingests case bundles from OldRAGDonald and augments drafting with a regulatory document corpus for citation-traced writing.",
    tech: ["Python", "FastAPI", "React", "TypeScript"],
    url: "https://github.com/t3dy/ScribeFarm",
    category: "Mobile & Desktop Apps",
    details: {
      process:
        "Designed as the desktop counterpart to OldRAGDonald. Import a case bundle, see all your field observations organized by location and severity, then draft your report with RAG-assisted citation from a corpus of food safety regulations and guidance documents. The writing environment knows what you observed and what regulations apply.",
      techStack:
        "FastAPI backend for document ingestion, corpus management, and RAG retrieval. React + TypeScript frontend for the writing workspace. The architecture separates the intelligence layer (Python/FastAPI) from the interaction layer (React) so each can evolve independently.",
      learningCurve:
        "First full-stack project with a Python backend and React frontend. Learning to design the API contract between them — what data flows where, what the frontend needs from the backend, how to handle async operations — was the real education. Also learned FastAPI's dependency injection system.",
      mistakes:
        "Initially tried to build the RAG pipeline and the writing UI simultaneously. Both were half-finished and neither worked well. Switched to phased delivery: Phase 1 is just bundle ingestion and display. RAG-assisted drafting comes in Phase 3. Ship what works, then add intelligence.",
      debugging:
        "Document corpus ingestion for regulatory PDFs was messy — inconsistent formatting, tables that don't parse cleanly, cross-references between documents. Had to build custom parsers for the specific regulation formats rather than relying on generic PDF extraction.",
      takeaways:
        "The OldRAGDonald + ScribeFarm pair taught me that mobile and desktop aren't competitors — they're collaborators. Mobile captures, desktop analyzes. Designing for this handoff (the case bundle format) was more important than any individual feature in either app.",
      nextSteps:
        "Phase 2 is corpus search and retrieval. Phase 3 is the evidence-linked drafting workspace where every claim in your report is traceable to an observation and a regulation. Phase 5 is the RAG chat assistant for 'what regulation covers this finding?' queries.",
    },
  },

  // Data & Knowledge Tools
  {
    title: "Twitter Archive Toolkit",
    description:
      "Turn your Twitter/X data export into a searchable, tagged, visualized personal knowledge base — entirely on your own machine. Built for 100K+ tweet archives.",
    tech: ["Python", "SQLite", "sentence-transformers"],
    url: "https://github.com/t3dy/twitter-archive-toolkit",
    category: "Data & Knowledge Tools",
    details: {
      process:
        "Started from the question: what have I been thinking about for the last decade? Twitter archives are massive but opaque — a JSON dump isn't a knowledge base. Built a pipeline that ingests the export, creates a searchable SQLite database, auto-tags topics, tracks 'haunting subjects' (recurring obsessions over time), and generates portfolio-ready visualizations.",
      techStack:
        "Pure Python with SQLite for the local database. sentence-transformers for semantic embedding and clustering — lets you search by meaning, not just keywords. matplotlib for visualizations. PDF export for focused LLM conversations. No cloud, no API keys, everything runs locally.",
      learningCurve:
        "First time working with sentence-transformers for semantic search. The jump from keyword search to vector similarity search was conceptually eye-opening — suddenly 'what was I angry about in 2019' returns meaningful results even without the word 'angry' appearing in any tweet.",
      mistakes:
        "Tried to process the entire 100K+ archive in memory. Python happily ate 8GB of RAM before I noticed. Switched to batch processing with SQLite as the intermediate store. Also over-complicated the tagging system before discovering that simple keyword frequency + embedding clusters cover 90% of use cases.",
      debugging:
        "Twitter's archive format changed between export versions. JSON structure, field names, and media URL patterns all shifted. Had to build a flexible parser that detects the archive version and adapts. Also dealt with Unicode edge cases in old tweets (emoji encoding, broken HTML entities).",
      takeaways:
        "Your own archive is the most undervalued dataset you own. A decade of tweets is a map of your intellectual development, your recurring concerns, your forgotten ideas. The 'haunting subjects' feature — tracking what topics you return to year after year — revealed patterns I never consciously noticed.",
      nextSteps:
        "Planning to add a 'forgotten ideas' extractor that surfaces tweets with low engagement that contain novel ideas — the thoughts that fell through the cracks. Also want cross-archive support for Mastodon and Bluesky exports.",
    },
  },
  {
    title: "RevEng Zebrapedia",
    description:
      "AI-assisted reverse-engineering of Penn State's Zebrapedia PKD Exegesis transcription project. Produced a complete humanities infrastructure audit: data model, IA, workflows, UX patterns, and a build spec.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://t3dy.github.io/RevEngZebrapedia/",
    category: "Digital Humanities",
    details: {
      process:
        "Conducted entirely in Claude Code as a single reverse-engineering session. Started by examining the public-facing Zebrapedia site, then systematically documented its data model, information architecture, research workflows, and UX patterns. The output is both an audit of the existing system and a specification for a local-first AI-assisted replacement.",
      techStack:
        "The deliverable is a static HTML site documenting the analysis. The interesting tech is in the process: using Claude Code as a reverse-engineering partner to decompose a complex humanities infrastructure into its constituent design decisions.",
      learningCurve:
        "Learned to think like a systems archaeologist. Reverse-engineering a live web application means inferring data models from URL patterns, deducing workflows from navigation structure, and understanding design constraints from what's absent as much as what's present.",
      mistakes:
        "Initially tried to document everything at once — data model, IA, UX, workflows, all in one pass. The analysis was shallow. Switched to focused passes: one session for data model, one for workflows, one for UX patterns. Depth per pass, breadth across passes.",
      debugging:
        "Some aspects of the Zebrapedia architecture were ambiguous from the public interface alone. Had to make educated inferences and clearly mark them as assumptions in the documentation. The audit is honest about what's observed vs. what's inferred.",
      takeaways:
        "Reverse-engineering existing systems is one of the most valuable things you can do before building a replacement. The Zebrapedia team made specific design decisions for specific reasons. Understanding those reasons — even when you disagree — prevents you from repeating their mistakes or accidentally discarding their insights.",
      nextSteps:
        "The build spec at the end of the audit is the blueprint for a local-first AI-assisted Exegesis research tool. Planning to prototype the core features: local PDF corpus, AI-assisted annotation, and collaborative transcription with version control.",
    },
  },
  {
    title: "MTGOverlay93",
    description:
      "Archive of MTG draft overlay tools and analysis prototypes. Early experiments in game data visualization that informed the Draft Academy project.",
    tech: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/t3dy/MTGOverlay93",
    category: "Data & Knowledge Tools",
    details: {
      process:
        "A collection of early experiments in MTG draft data visualization — overlays, pick trackers, and color analysis tools. These prototypes were the proving ground for ideas that eventually matured into Draft Academy's more structured learning pathways.",
      techStack:
        "Vanilla JavaScript, HTML, and CSS. No frameworks, no build tools. These were rapid prototypes meant to test ideas, not ship products. The code is rough but the concepts are sound.",
      learningCurve:
        "These were some of my earliest coding experiments. Working with game data — card pools, pick orders, color distributions — taught me data manipulation fundamentals before I knew what 'data engineering' meant.",
      mistakes:
        "No version control discipline. Many experiments were just files in a folder. The lack of structure made it hard to revisit and build on earlier work. Draft Academy exists partly because these prototypes needed a proper home and architecture.",
      debugging:
        "Data scraping from draft logs was fragile — format changes would break parsers. Learned the hard way that any pipeline depending on external data formats needs defensive parsing and clear error messages.",
      takeaways:
        "Messy prototypes are valuable. Not everything needs to be a polished product. These experiments built intuition about game data that made Draft Academy possible. The archive exists as an honest record of the learning process.",
      nextSteps:
        "Most of this functionality has been superseded by Draft Academy. The archive remains as a reference for the evolution from prototype to product.",
    },
  },
  {
    title: "Team Discord Learning Community",
    description:
      "Data mining and analysis of an MTG Discord server to study how learning communities form, share knowledge, and develop collective expertise over time.",
    tech: ["Python", "SQLite"],
    url: "https://github.com/t3dy/TeamDiscordLearningCommunity",
    category: "Data & Knowledge Tools",
    details: {
      process:
        "Exported message history from an MTG-focused Discord server and built analysis pipelines to study the community as a learning system. Who teaches whom? What topics generate the most discussion? How does collective knowledge evolve over draft seasons?",
      techStack:
        "Python for data processing and analysis. SQLite for the message database. The focus is on the analysis, not the tooling — simple scripts that answer specific research questions about community learning dynamics.",
      learningCurve:
        "First time thinking about social data as a research corpus. Discord messages aren't tweets — they're threaded, contextual, and conversational. Learning to extract meaningful signal from casual chat required different techniques than structured data analysis.",
      mistakes:
        "Tried to apply NLP sentiment analysis to Discord messages. Casual gaming chat is full of sarcasm, in-jokes, and context-dependent meaning that sentiment models completely miss. Switched to simpler metrics: message volume, topic frequency, response patterns.",
      debugging:
        "Discord's export format includes rich embeds, reactions, and reply chains that complicate simple text analysis. Had to build parsers that handle the full message structure rather than just extracting raw text.",
      takeaways:
        "Learning communities have visible patterns if you know where to look. The transition from 'asking basic questions' to 'answering others' questions' is trackable. Expertise development leaves traces in message data.",
      nextSteps:
        "Planning to cross-reference Discord activity with draft performance data to see if community participation correlates with skill improvement. Also want to build a 'knowledge map' showing which topics the community has deep expertise in vs. gaps.",
    },
  },
  {
    title: "Arcana Desktop",
    description:
      "Digital tarot and divination app with a full 78-card Rider-Waite Smith deck, interactive spread designer, and an MTG Oracle engine that interprets Magic cards via semantic feature extraction.",
    tech: ["React", "TypeScript", "Electron", "Vite"],
    url: "https://t3dy.github.io/Ted-s-Tarot-App/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "Started as a simple digital tarot deck, then scope-crept into something much weirder: what if you could do tarot readings with Magic: The Gathering cards? The MTG Oracle engine extracts semantic features from card art, flavor text, and mechanics to generate divination-style interpretations. It's absurd and it works surprisingly well.",
      techStack:
        "React + TypeScript + Vite for the web version, with Electron wrapping for desktop. The spread designer uses drag-and-drop positioning so users can create custom layouts. The MTG Oracle uses a feature extraction pipeline that maps card properties to traditional tarot correspondences.",
      learningCurve:
        "First time building a drag-and-drop interface. React DnD (or the native HTML5 drag API) has quirks that only emerge when you're trying to position cards in a free-form layout rather than reordering a list. Also learned about the Rider-Waite Smith tarot system in enough depth to build accurate card data.",
      mistakes:
        "The MTG Oracle's first interpretation algorithm was too literal — mapping creature types to tarot suits (e.g., Angels = Major Arcana). The readings felt mechanical. Switching to semantic feature extraction (color palette, keywords in flavor text, mechanical themes like 'sacrifice' or 'transform') produced much richer interpretations.",
      debugging:
        "Card image loading for 78 tarot cards plus MTG card images was a performance issue. Lazy loading with intersection observer solved it for the browsing view, but the spread view needed all selected cards loaded simultaneously. Ended up pre-loading the current spread's cards when the reading starts.",
      takeaways:
        "The weirdest project ideas often produce the most interesting technical challenges. Building the MTG Oracle forced me to think about semantic feature extraction in a context where there's no 'correct' answer — just interpretations that feel more or less resonant. That's a different kind of AI problem than classification or search.",
      nextSteps:
        "Want to add a reading journal that saves past spreads with personal notes. Also planning a 'deck builder' that lets users create custom divination decks from any card game or image set, using the same semantic extraction pipeline.",
    },
  },
  {
    title: "Alchemy Board Game",
    description:
      "Solo browser board game prototype exploring alchemical themes. Six playable versions showing design evolution from mobile prototype through 'The Merchant of Secrets' — manage Gold, Salts, Elixir, and Health to achieve Magnum Opus.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://t3dy.github.io/AlchemyBoardGame/",
    category: "Esoteric & Experimental",
    details: {
      process:
        "Built iteratively across six versions, each exploring a different game design direction. Version 1 was a minimal mobile prototype. Version 6 ('The Merchant of Secrets') is a full resource management game with multiple win conditions. The version history is preserved so you can see the design evolution.",
      techStack:
        "Vanilla HTML, CSS, and JavaScript for all six versions. No framework, no build step. Each version is a self-contained single-page app. The simplicity of the stack meant I could iterate on game mechanics without fighting tooling.",
      learningCurve:
        "Game design is a completely different discipline from software engineering. Balancing resource curves (how fast should Gold accumulate vs. Health decay?) requires playtesting and intuition, not just logic. Learned that game feel is as important as game mechanics.",
      mistakes:
        "Version 3 added too many resources at once (6 simultaneous meters to manage). Players couldn't form a strategy because there were too many variables. Version 4 simplified back to 4 core resources and the game became playable. Complexity isn't depth.",
      debugging:
        "Game state management in vanilla JS without a framework meant manually tracking every resource, every turn counter, every win/loss condition. State bugs were subtle — a resource going negative, a turn counter not resetting. Would use React state management if rebuilding.",
      takeaways:
        "Shipping six versions of the same game taught me more about iterative design than any methodology. Each version's failures directly informed the next version's improvements. The version history is the design document.",
      nextSteps:
        "Considering a React rebuild with proper state management and a more polished UI. Also want to add a multiplayer mode where players trade resources, turning it from a solo puzzle into a negotiation game.",
    },
  },
];
