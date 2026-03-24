// ─── Projects & Content Data ──────────────────────────────────────────────────
// Add/edit projects, certifications, and publications here.

export interface Project {
  title: string;
  description: string;
  href: string;
}

export interface Certification {
  title: string;
  issuer: string;
  img?: string; // undefined = show icon fallback
  href: string;
  ongoing?: boolean;
}

export interface Publication {
  title: string;
  venue: string;
  doi: string;
  href: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Startup LLM Pipeline",
    description: "End-to-end AI pipeline orchestrating startup discovery operations.",
    href: "https://github.com/biswajyoti-nath/startup-llm-content-pipeline",
  },
  {
    title: "Cattle Condition Analyzer",
    description: "Computer vision inference engine via YOLOv8 for automated analytics.",
    href: "https://github.com/biswajyoti-nath/ATC_Project",
  },
  {
    title: "Sample Site Startup",
    description: "Custom frontend systems architecture and web deployment.",
    href: "https://github.com/biswajyoti-nath/sample-site-startup",
  },
];

export const capabilities: string[] = [
  "Python & C/C++",
  "Scikit-Learn",
  "YOLO & OpenCV",
  "Ethical Hacking",
  "Linux Systems",
  "Quantum Comp",
];

export const publication: Publication = {
  title: "Randomness in Quantum Cryptography",
  venue: "Zenodo Preprint",
  doi: "10.5281/zenodo.15867370",
  href: "https://doi.org/10.5281/zenodo.15867370",
  description:
    "Comprehensive report analyzing randomness in quantum cryptographic structures. Exploring Bell tests, quantum random number generation (QRNG), and adversarial boundaries of pseudorandomness in post-quantum environments.",
};

export const researchFraming = {
  title: "PQC & Quantum Entropy",
  description:
    "Conceptual framing around quantum distribution and randomness boundaries established through exchanges with Prof. Gilles Brassard and Prof. Nicolas Gisin.",
};

export const certifications: Certification[] = [
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco / Credly",
    img: "/image/cisco-ethical-hacker.png",
    href: "https://www.credly.com/badges/0a0a3b9c-f4b4-4efb-86e2-d0a04e03df08",
  },
  {
    title: "IBM Quantum Enigmas",
    issuer: "IBM / Credly",
    img: "/image/ibm-quantum-enigmas.png",
    href: "https://www.credly.com/badges/e3b74512-fb95-4fce-ab1f-0722bb5d45a9",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco / Credly",
    img: "/image/Python1.png",
    href: "https://www.credly.com/badges/dd414912-2a92-4f2a-89d6-9feba448f778/public_url",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco / Credly",
    img: "/image/Python2.png",
    href: "https://www.credly.com/badges/627bcdfe-9f8b-404d-9ab6-01c1e978a223/public_url",
  },
  {
    title: "Applied ML Inference",
    issuer: "Great Learning",
    href: "https://www.mygreatlearning.com/academy/learn-for-free/courses/machine-learning-with-python",
    ongoing: true,
  },
];
