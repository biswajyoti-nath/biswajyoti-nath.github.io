export interface Publication {
  title: string;
  year: number;
  venue: string;
  doi: string;
  href: string;
  abstract: string;
  isPrevious?: boolean;
}

export interface OpenSourceProject {
  title: string;
  language: string;
  description: string;
  href: string;
}

export interface AppliedProject {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  highlights: string[];
  href?: string;
  demo?: string;
}

export interface TimelineEntry {
  year: string | number;
  title: string;
}

export interface BlogPost {
  title: string;
  status: "Draft" | "Published";
  date: string;
  excerpt: string;
  href?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: "Symbolic Regression",
    description:
      "Learning mathematical expressions from data; grammar-constrained search; operator representation effects.",
  },
  {
    title: "Evolutionary Computation",
    description:
      "Grammar-guided genetic programming; rejection-aware evaluation; evolutionary throughput analysis.",
  },
  {
    title: "Interpretable ML",
    description:
      "Structure-aware search; inductive bias quantification; reproducible evaluation frameworks.",
  },
  {
    title: "Scientific AI",
    description:
      "Quantitative frameworks for multi-constraint symbolic regression; search-space geometry; automated discovery.",
  },
];

export const publications: Publication[] = [
  {
    title: "EML Framework: Symbolic Regression Representation Study",
    year: 2025,
    venue: "Zenodo Preprint",
    doi: "10.5281/zenodo.19991771",
    href: "https://doi.org/10.5281/zenodo.19991771",
    abstract:
      "Conducted a controlled empirical study on constrained operator representations in symbolic regression. Quantified structural effects including node inflation, depth increase, and task-dependent inductive biases under constrained operator grammars. Built a reproducible evolutionary pipeline with strict numeric validation and multi-trial evaluation.",
  },
  {
    title: "Randomness in Quantum Cryptography",
    year: 2024,
    venue: "Zenodo Preprint",
    doi: "10.5281/zenodo.15867370",
    href: "https://doi.org/10.5281/zenodo.15867370",
    abstract:
      "Comprehensive report analyzing randomness in quantum cryptographic structures. Exploring Bell tests, quantum random number generation (QRNG), and adversarial boundaries of pseudorandomness in post-quantum environments.",
    isPrevious: true,
  },
];

export const openSource: OpenSourceProject[] = [
  {
    title: "eml-framework",
    language: "Python",
    description:
      "**Problem:** Existing symbolic regression frameworks obscure how operator constraints alter the evolutionary search space. **Approach:** Built a reproducible Python pipeline designed specifically for validity-aware structural tracking and multi-trial empirical evaluation. **Impact:** Enabled precise quantification of node inflation and depth bias caused by constrained grammars.",
    href: "https://github.com/biswajyoti-nath/eml-framework",
  },
  {
    title: "startup-llm-content-pipeline",
    language: "Python",
    description:
      "**Problem:** Transforming raw, unstructured interview transcripts into coherent narratives is highly labor-intensive. **Approach:** Engineered a multi-agent pipeline utilizing Claude for synthesis, Gemini for stylistic refinement, and Tavily for contextual enrichment. **Impact:** Automates the production of high-fidelity, structured profiles from noisy conversational data.",
    href: "https://github.com/biswajyoti-nath/startup-llm-content-pipeline",
  },
];

export const appliedProjects: AppliedProject[] = [
  {
    title: "Pather Saathi",
    subtitle: "Smart Fleet Booking Platform for Barak Valley",
    tech: ["Next.js 15", "Supabase", "PostgreSQL", "Upstash Redis", "Tailwind"],
    description:
      "**Problem:** Rural transport operators lacked digital infrastructure for fleet management, leading to inefficient analog booking systems. **Approach:** Architected a serverless, full-stack booking platform with a normalized PostgreSQL database, Upstash Redis rate limiting, and robust Row-Level Security. **Impact:** Delivered a secure, high-throughput production environment capable of handling concurrent fleet ticketing.",
    highlights: [
      "Designed normalized relational database architecture",
      "Built secure RBAC using PostgreSQL Row Level Security",
      "Fixed infinite recursion in RLS policies using SECURITY DEFINER helper functions",
      "Implemented distributed rate limiting with Upstash Redis",
      "Built server-side booking validation and authorization",
      "Created production-ready authentication and session management",
    ],
    demo: "https://pathersaathi.in",
    href: "https://github.com/Subinoy-Nath/pathersaathi",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "Ongoing",
    title: "Developing quantitative constraint-interaction framework for symbolic regression",
  },
  {
    year: 2025,
    title: "Published EML Framework preprint on Zenodo",
  },
  {
    year: 2025,
    title: "Conducted correspondence with Prof. Gilles Brassard & Prof. Nicolas Gisin on quantum entropy",
  },
  {
    year: 2025,
    title: "Built Pather Saathi full-stack fleet booking platform",
  },
  {
    year: 2024,
    title: "Published Randomness in Quantum Cryptography preprint on Zenodo",
  },
  {
    year: 2024,
    title: "Started undergraduate Computer Science program",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "On Representation in Symbolic Regression",
    status: "Draft",
    date: "Coming soon",
    excerpt: "Notes on how grammar constraints shape the inductive biases of search algorithms.",
  },
  {
    title: "Grammar Constraints and Search Geometry",
    status: "Draft",
    date: "Coming soon",
    excerpt: "Exploring the structural inflation effects of validity-aware evolutionary search.",
  },
];
