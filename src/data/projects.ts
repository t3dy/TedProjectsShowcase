export type Category =
  | "AI Engineering & Dev Tools"
  | "Digital Humanities"
  | "Business Solutions"
  | "Esoteric & Experimental";

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
];
