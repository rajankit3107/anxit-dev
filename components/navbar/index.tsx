"use client";

import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="shadow-custom fixed inset-x-0 top-0 mx-auto flex max-w-4xl items-center justify-between rounded-md p-2"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
        />

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
                  className="absolute inset-0 z-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-700"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
