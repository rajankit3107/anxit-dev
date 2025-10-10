"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion, useMotionValueEvent, useScroll } from "motion/react"; // ✅ fix import

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setScrolled(latestValue > 20);
  });

  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled ? "var(--shadow-custom)" : "none",
        width: scrolled ? "60%" : "100%",
        y: scrolled ? 10 : 0,
      }}
      transition={{ duration: 0.4, ease: "linear" }}
      className={`fixed top-4 left-1/2 z-50 flex max-w-4xl -translate-x-1/2 items-center justify-between rounded-xl border border-white/20 bg-white/30 px-4 py-2 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-900/30`}
    >
      <Link href={"/"}>
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex items-center gap-4">
        {navItems.map((item, idx) => (
          <Link
            className="relative px-2 py-1 text-sm"
            href={item.href}
            key={idx}
            onMouseEnter={() => setHoveredItem(idx)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 z-0 h-full w-full rounded-md bg-neutral-100/60 dark:bg-neutral-700/60"
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
