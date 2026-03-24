// ─── Profile Data ─────────────────────────────────────────────────────────────
// Edit this file to update all personal information across the site.

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const profile = {
  name: "Biswajyoti Nath",
  nameDisplay: { first: "BISWAJYOTI", last: "NATH." },
  badge: "SYS.SEC_RESEARCH_MODE",
  headline: "I build resilient machine learning pipelines and research the foundational limits of quantum cryptography.",
  bio: "As a systems engineer, my core focus lies in the structural integrity, security, and scalability of computational models. I bridge the gap between deep theoretical research and high-performance production environments.",
  tagline: "Building resilient ML infrastructure & researching adversarial randomness in the quantum era.",
  email: "biswajyotinath125@gmail.com",
  cvPath: "/image/Biswajyoti_Nath_CV_1.pdf",
  splineScene: "https://prod.spline.design/p8NTHTPG4so8FDlE/scene.splinecode",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/biswajyoti-nath",
      ariaLabel: "View GitHub profile",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/biswajyoti-nath-984404323",
      ariaLabel: "View LinkedIn profile",
    },
  ] satisfies SocialLink[],
  counterNamespace: "biswajyoti-nath-portfolio",
  counterKey: "visits",
  counterSeed: 1247,
} as const;
