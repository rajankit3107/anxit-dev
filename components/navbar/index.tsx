import React from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
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
          {navItems.map((item) => (
            <Link className="text-sm" href={item.href} key={item.title}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};
