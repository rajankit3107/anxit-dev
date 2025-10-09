"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export function MDXContent({ content }: { content: string }) {
  const components = useMDXComponents({});
  return (
    <MDXProvider components={components}>
      <MDXRemote source={content} />
    </MDXProvider>
  );
}
