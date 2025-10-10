"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";
import { motion } from "motion/react";

export default function ProjectsPage() {
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

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen px-10 md:pt-20 md:pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} transition={transition}>
            <Heading>Projects</Heading>
          </motion.div>

          <motion.div variants={itemVariants} transition={transition}>
            <SubHeading>
              I'm a passionate software engineer dedicated to crafting elegant
              solutions for complex problems. With expertise in full-stack
              development, I enjoy building user-centric applications that make
              a difference.
            </SubHeading>
          </motion.div>

          <motion.div
            variants={itemVariants}
            transition={transition}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
            initial="hidden"
          >
            <Projects />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
