"use client";

import { motion } from "motion/react";

const allSkills = [
  "TypeScript",
  "JavaScript",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "tRPC",
  "Monorepos",
  "Zustand",
  "Redux",
  "Tailwind",
  "NextAuth",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "REST APIs",
  "Vercel",
  "Agile",
  "Scrum",
  "TDD",
  "CI/CD",
];

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-3"
    >
      {allSkills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
};
