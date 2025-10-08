import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "anxit.dev",
  description: "A portfolio website to showcase my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container classname="px-10 md:pt-20 md:pb-10 min-h-screen prose">
      {children}
    </Container>
  );
}
