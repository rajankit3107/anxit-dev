import type { Metadata } from "next";
import "../globals.css";
import { Container } from "@/components/container";

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
