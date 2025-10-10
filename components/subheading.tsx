"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const SubHeading = ({
  as: Tag = "h2",
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
        delay: 0.2,
      }}
    >
      <Tag className={cn("text-secondary pt-4 text-sm md:text-sm", classname)}>
        {children}
      </Tag>
    </motion.div>
  );
};
