import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { SocialSidebar } from "@/components/socials";

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
        >
          <SocialSidebar />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
