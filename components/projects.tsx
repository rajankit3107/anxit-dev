"use client";
import Image from "next/image";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "next-view-transitions";
import { Github, Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project, projects as defaultProjects } from "@/constants/projects";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="py-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-secondary pt-4 pb-4 text-sm md:text-base"
      >
        I love building web applications and products that can impact millions
        of lives.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full"
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />

      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-neutral-200/50 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-neutral-300/50 dark:bg-neutral-900 dark:shadow-neutral-950/50 dark:group-hover:shadow-neutral-950/80">
        {/* Image container with advanced hover effects */}
        <div className="relative aspect-[16/9] w-full flex-shrink-0 overflow-hidden">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
          />

          {/* Gradient overlay that's always visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Hover overlay with actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100"
          >
            <Link
              href={project.github}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Github size={20} className="text-white" />
            </Link>
            <Link
              href={project.demo}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Globe size={20} className="text-white" />
            </Link>
          </motion.div>

          {/* Top right corner link indicator */}
          <div className="absolute top-4 right-4 flex translate-y-[-10px] items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Project
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
              {project.title}
            </h3>
            <ExternalLink
              size={18}
              className="text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            />
          </div>

          <p className="mb-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-neutral-700" />
      </div>
    </motion.div>
  );
};
