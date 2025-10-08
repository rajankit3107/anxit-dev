"use client";

import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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
      <nav className="flex items-center justify-between p-2">
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
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-700"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};
