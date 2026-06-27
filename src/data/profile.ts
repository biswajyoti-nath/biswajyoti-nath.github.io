export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const profile = {
  name: "Biswajyoti Nath",
  role: "Undergraduate Researcher",
  institution: "Computer Science",
  location: "B.Tech CSE @ BVEC (ASTU) · Silchar, India",
  status: {
    label: "Ongoing",
    text: "Developing quantitative constraint-interaction framework for symbolic regression"
  },
  focus: [
    "Symbolic Regression",
    "Evolutionary Computation",
    "Interpretable ML",
    "Scientific AI",
  ],
  tagline:
    "Exploring how representation, constraints, and search shape intelligent systems.",
  bio: [
    "I study the algorithms that discover algorithms. As an undergraduate researcher, my work focuses on symbolic regression and evolutionary computation—specifically, how we can constrain learning systems to produce mathematically interpretable and physically valid models.",
    "Rather than treating AI as a black box, I am interested in how representation, constraints, and search strategies fundamentally change the behavior of learning systems. Currently, my research involves analyzing search-space bottlenecks in grammar-constrained evolutionary systems and building robust computational pipelines for automated scientific discovery.",
  ],
  email: "biswajyotinath125@gmail.com",
  cvPath: "/image/Biswajyoti_Nath_CV.pdf",
  avatar: "/image/profile.png",
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
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0009-7230-6192",
      ariaLabel: "View ORCID record",
    }
  ] satisfies SocialLink[],
  zenodo: "https://zenodo.org/search?q=biswajyoti+nath",
} as const;
