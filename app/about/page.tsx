"use client";

import { DraggableCard } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { SubHeadingTravelHighlighted } from "@/components/travel-highlight";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AboutPage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const transition = {
    duration: 0.6,
    ease: "easeOut" as const,
  };

  const achievements = [
    {
      year: "2022 - present",
      title: "Bachelor of Engineering at Bennett University",
      description:
        "Pursuing Computer Science Engineering at Bennett University, Greater Noida. Current CGPA: 8.6/10.",
    },
    {
      year: "2025",
      title: "Research Publication",
      description:
        "AI-Driven Smart Home Surveillance: Enhanced YOLO Model for Optimal Security. Published research on real-time anomaly detection.",
    },
    {
      year: "2024",
      title: "Backend Developer at suraksha.ai",
      description:
        "Architected REST APIs with 99.9% uptime. Built AI-powered security system processing 50,000+ surveillance frames daily with 97% accuracy.",
    },
    {
      year: "2024",
      title: "Full Stack Engineer at sway.club",
      description:
        "Engineered responsive UIs with React, improving engagement by 35%. Implemented CI/CD pipeline reducing deployment time by 60%.",
    },

    {
      year: "2021",
      title: "CBSE Senior Secondary (12th Grade)",
      description:
        "Completed senior secondary education at Sunshine Residential Public School, Patna with 86%.",
    },
    {
      year: "2019",
      title: "CBSE Secondary (10th Grade)",
      description:
        "Completed secondary education at D.A.V. Public School, Jamui, Bihar with 87%.",
    },
  ];

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen px-10 md:pt-20 md:pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg"
        >
          <motion.div variants={itemVariants} transition={transition}>
            <Heading>About Me</Heading>
          </motion.div>

          <motion.div variants={itemVariants} transition={transition}>
            <SubHeading>
              I am a passionate software engineer dedicated to crafting elegant
              solutions for complex problems. With expertise in full-stack
              development, I enjoy building user-centric applications that make
              a difference.
            </SubHeading>
          </motion.div>

          <motion.div variants={itemVariants} transition={transition}>
            <SubHeadingTravelHighlighted />
          </motion.div>

          <motion.div variants={itemVariants} transition={transition}>
            <DraggableCard />
          </motion.div>

          <div className="pt-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-lg font-bold text-neutral-900 dark:text-neutral-100"
            >
              Timeline
            </motion.h2>

            <div className="relative pl-8" ref={timelineRef}>
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-600 dark:via-neutral-700" />

              {/* Animated dot that moves down as you scroll */}
              <motion.div
                style={{ top: dotY }}
                className="absolute left-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-neutral-500 shadow-lg dark:bg-blue-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-neutral-500 dark:bg-neutral-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Timeline items */}
              <div className="space-y-12">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="absolute top-1 -left-4 h-2 w-2 rounded-full border border-neutral-400 bg-neutral-500 dark:border-neutral-500 dark:bg-neutral-400"
                    />

                    {/* Content */}
                    <div>
                      <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
