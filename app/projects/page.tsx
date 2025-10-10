"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import { motion } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";

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
      <Container classname="min-h-screen px-4 pt-32 md:pt-36 lg:pt-32 pb-10">
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
              I&apos;m a passionate{" "}
              <Highlighter action="underline" color="#FF9800">
                software engineer
              </Highlighter>{" "}
              dedicated to crafting elegant solutions for{" "}
              <Highlighter action="highlight" color="#87CEFA">
                complex problems
              </Highlighter>
              . With expertise in{" "}
              <Highlighter action="highlight" color="#FFD700">
                full-stack development
              </Highlighter>
              , I enjoy building{" "}
              <Highlighter action="underline" color="#FF9800">
                user-centric applications
              </Highlighter>{" "}
              that make a difference.
            </SubHeading>
          </motion.div>
          <motion.div
            variants={itemVariants}
            transition={transition}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
            initial="hidden"
          >
            <Projects projects={projects} />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
