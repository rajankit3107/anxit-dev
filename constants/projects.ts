export type Project = {
  title: string;
  src: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Sweetly",
    src: "/projects/sweetly.png",
    description: "A modern sweet shop e-commerce platform with a clean UI.",
    tags: ["Node.js", "TypeScript", "Tailwind", "React"],
    demo: "https://ankit-sweets.vercel.app",
    github: "https://github.com/rajankit3107/sweetly",
  },
  {
    title: "Suraksha AI",
    src: "/projects/suraksha_ai.png",
    description: "An AI-powered security and monitoring web application.",
    tags: ["Python", "AI/ML", "Flask"],
    demo: "https://shopify-peach-seven.vercel.app",
    github: "https://github.com/rajankit3107/shopify",
  },
  {
    title: "Shopify",
    src: "/projects/shopify.png",
    description: "A Shopify-like storefront built with Next.js and Tailwind.",
    tags: ["Node.js", "React", "E-commerce", "Razorpay"],
    demo: "https://shopify-peach-seven.vercel.app",
    github: "https://github.com/rajankit3107/shopify",
  },
  {
    title: "Muzer",
    src: "/projects/muzer.png",
    description: "A music streaming app with playlist and search features.",
    tags: ["React", "Node.js", "Postgresql"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
  },
];
