"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
    <>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width: scrolled ? "60%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-white/20 bg-white/30 backdrop-blur-md md:max-w-4xl dark:border-neutral-800/50 dark:bg-neutral-900/30"
      >
        <div className="flex max-w-full items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar.jpg"
              alt="avatar"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex">
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

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center p-1 text-neutral-900 md:hidden dark:text-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 right-4 left-4 z-40 rounded-xl border border-white/20 bg-white/30 backdrop-blur-md md:hidden dark:border-neutral-800/50 dark:bg-neutral-900/30"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block w-full rounded-lg px-4 py-2 text-sm text-neutral-900 transition-colors hover:bg-neutral-100/60 dark:text-neutral-100 dark:hover:bg-neutral-700/60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
