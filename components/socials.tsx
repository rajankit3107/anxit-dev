"use client";

import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rajankit3107",
    color: "hover:text-slate-900 dark:hover:text-slate-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/anxit0731",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/anxit_0731",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anxit3107@gmail.com",
    color: "hover:text-red-500 dark:hover:text-red-400",
  },
];

export function SocialSidebar() {
  return (
    <TooltipProvider>
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-1/2 left-0 z-50 hidden -translate-y-1/2 flex-col items-center gap-8 px-6 py-8 md:flex"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-24 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent dark:from-slate-600 dark:via-slate-700"
        />

        <div className="flex flex-col gap-6">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + idx * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm transition-colors duration-300 ${social.color} dark:border-slate-700 dark:bg-slate-900/50`}
                    >
                      <Icon size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    sideOffset={12}
                    className="text-xs font-medium"
                  >
                    {social.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-24 w-px bg-gradient-to-t from-slate-300 via-slate-200 to-transparent dark:from-slate-600 dark:via-slate-700"
        />
      </motion.aside>
    </TooltipProvider>
  );
}
