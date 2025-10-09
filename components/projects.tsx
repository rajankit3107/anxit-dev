"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react"; // ✅ switched to framer-motion
import { Link } from "next-view-transitions";
import { Github, Globe } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Sweetly",
      src: "/projects/sweetly.png",
      description: "A modern sweet shop e-commerce platform with a clean UI.",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Suraksha AI",
      src: "/projects/suraksha_ai.png",
      description: "An AI-powered security and monitoring web application.",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Shopify Clone",
      src: "/projects/shopify.png",
      description: "A Shopify-like storefront built with Next.js and Tailwind.",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Muzer",
      src: "/projects/muzer.png",
      description: "A music streaming app with playlist and search features.",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
  ];

  return (
    <div className="py-12">
      <p className="text-secondary mb-8 pt-4 text-sm md:text-base">
        I love building web applications and products that can impact millions
        of lives.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            className="group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image container with hover overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  href={project.github}
                  target="_blank"
                  className="rounded-full bg-white p-2 text-black hover:bg-neutral-200"
                >
                  <Github size={18} />
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="rounded-full bg-white p-2 text-black hover:bg-neutral-200"
                >
                  <Globe size={18} />
                </Link>
              </div>
            </div>

            {/* Text below image */}
            <h2 className="z-20 mt-2 ml-1 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="z-20 mt-2 ml-1 text-sm tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
