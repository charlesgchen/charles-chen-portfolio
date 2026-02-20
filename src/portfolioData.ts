// ─────────────────────────────────────────────
// portfolioData.ts — Central data store
// Edit this file to add/update projects, experience, skills, etc.
// ─────────────────────────────────────────────

export interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    featured?: boolean;
}

export interface Experience {
    company: string;
    role: string;
    dateRange: string;
    bullets: string[];
}

export interface Skill {
    name: string;
    category: "Languages" | "Frontend" | "Backend & Data" | "Cloud & DevOps" | "ML / AI" | "Practices";
}

export interface SocialLink {
    label: string;
    url: string;
    icon: "github" | "linkedin" | "email";
}

// ─── Hero ───────────────────────────────────
export const heroData = {
    name: "Charles Chen",
    title: "Full-Stack Developer & ML Student",
    tagline:
        "UofT Computer Science & Statistics (ML) student. AWS-certified developer building full-stack applications with React, TypeScript, Java, and Python — from scalable REST APIs to machine learning pipelines.",
};

// ─── About ──────────────────────────────────
export const aboutData = {
    bio: [
        "I'm a Computer Science and Statistics (Machine Learning & Data Mining) student at the University of Toronto (GPA 3.62/4.0), passionate about building impactful software that solves real problems. With hands-on co-op experience and an AWS Developer Associate certification, I bring both academic rigor and production-ready skills to every project.",
        "I thrive in fast-paced Agile teams, and constantly seek practical applications for software. Whether it's designing MCP Gateway architectures, automating legacy migrations, or winning datathons, I'm driven by curiosity and the desire to ship clean, testable code.",
    ],
};

// ─── Skills ─────────────────────────────────
export const skills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "C / C++", category: "Languages" },
    { name: "TS / JS", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Bash", category: "Languages" },
    { name: "HTML / CSS", category: "Languages" },

    // Frontend
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Vite", category: "Frontend" },

    // Backend & Data
    { name: "ExpressJS", category: "Backend & Data" },
    { name: "FastAPI", category: "Backend & Data" },
    { name: "RESTful APIs", category: "Backend & Data" },
    { name: "PostgreSQL", category: "Backend & Data" },
    { name: "Firebase", category: "Backend & Data" },
    { name: "DynamoDB", category: "Backend & Data" },
    { name: "Apache Spark", category: "Backend & Data" },

    // Cloud & DevOps
    { name: "AWS (Lambda, S3, SQS/SNS, CloudFront)", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Kubernetes", category: "Cloud & DevOps" },
    { name: "Jenkins", category: "Cloud & DevOps" },
    { name: "Git / GitHub", category: "Cloud & DevOps" },
    { name: "CI / CD", category: "Cloud & DevOps" },

    // ML / AI
    { name: "Pandas / NumPy", category: "ML / AI" },
    { name: "ML Libraries (Scikit-learn, Pytorch, Tensorflow)", category: "ML / AI" },
    { name: "Generative AI / LLMs", category: "ML / AI" },
    { name: "MCP Servers", category: "ML / AI" },

    // Practices
    { name: "Agile (Scrum)", category: "Practices" },
    { name: "OOP / SOLID", category: "Practices" },
    { name: "Test Driven Development", category: "Practices" },
    { name: "Code Reviews", category: "Practices" },
];

// ─── Projects ───────────────────────────────
// Add a new object to this array to add a project card.
export const projects: Project[] = [
    {
        title: "MCP Gateway — Agentiiv",
        description:
            "Managed MCP Gateway for an enterprise AI agent platform, abstracting MCP servers (Postgres, Slack, Google Drive) behind a single interface. Features SSO + RBAC, tool registry, audit logging, and containerized PostgreSQL.",
        tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "MCP Servers"],
        featured: true,
    },
    {
        title: "Brawl Stars Performance Insights",
        description:
            "Full-stack web app using the Brawl Stars API to retrieve and serve player stats and performance history. Includes React dashboards, RESTful APIs, database schema with caching, async workflows, and CI/CD on AWS.",
        tech: ["React", "TypeScript", "PostgreSQL", "REST APIs", "AWS"],
        github: "https://github.com/bob-th/brawl-analytics",
        featured: true,
    },
    {
        title: "DS3 Datathon — 3rd Place 🏆",
        description:
            "Achieved 99.79% accuracy predicting used-car value using classification models (Random Forest, KNN, Logistic Regression). Boosted performance ~15% through optimized preprocessing and feature selection.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        featured: true,
    },
    {
        title: "Hack The Valley — Waste Management App",
        description:
            "Built a waste management web app in a 4-person hackathon team. Integrated computer vision model for garbage classification via OpenCV, exposed to the UI through a REST API.",
        tech: ["Django", "React", "Python", "OpenCV", "REST APIs"],
        featured: false,
    },
    {
        title: "CO2 Tracker Android App",
        description:
            "Android app to track and visualize personal carbon emissions in real time. Features real-time Firebase sync across concurrent user sessions and a data visualization dashboard. Led Agile execution with Jira.",
        tech: ["Java", "Android Studio", "Firebase", "Agile / Jira"],
        github: "https://github.com/shahriyarkhan6/Plantze_application",
        featured: false,
    },
];

// ─── Experience ─────────────────────────────
// Add a new object to this array to add an experience entry.
export const experiences: Experience[] = [
    {
        company: "Agentiiv (UTMIST)",
        role: "Developer",
        dateRange: "Dec 2025 – Present",
        bullets: [
            "Contributing to design and implementation of managed MCP Gateway for enterprise AI agent platform, abstracting MCP servers behind a single interface",
            "Implementing SSO + Role-Based Access Control (RBAC) for enterprise security",
            "Designing API key service, database schema, and containerized PostgreSQL for tool registry, user/org identity, and audit/usage logs",
            "Prioritizing small, safe PRs to improve review efficiency and code maintainability",
        ],
    },
    {
        company: "Toronto Transit Commission (TTC)",
        role: "Systems Developer Co-op",
        dateRange: "Sept – Dec 2025",
        bullets: [
            "Proposed and delivered automated InfoPath → Power Apps migration solution, saving 400+ hours across 11 forms; adopted as team standard",
            "Built Python + JavaScript pipeline to automate Power Apps creation from legacy form definitions with validation and error handling",
            "Deployed 11 production Power Apps forms and supported cutover for 1,000+ users",
            "Accelerated delivery using LLM tools for specs, regression tests, unit-test scaffolds, and documentation",
        ],
    },
];

// ─── Social Links ───────────────────────────
export const socialLinks: SocialLink[] = [
    { label: "GitHub", url: "https://github.com/charlesgchen", icon: "github" },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/charles-chen-089272308/",
        icon: "linkedin",
    },
    { label: "Email", url: "mailto:charlesg.chen@mail.utoronto.ca", icon: "email" },
];
