"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Heading = ({
  as: Tag = "h1",
  children,
  classname,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  classname?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <Tag
        className={cn(
          "text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
          classname,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
