import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

// ✅ Pre-generate slugs
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const folders = fs
    .readdirSync(blogDir)
    .filter((name) => fs.statSync(path.join(blogDir, name)).isDirectory());

  return folders.map((folder) => ({
    slug: folder,
  }));
}

// ✅ Fix: make params async
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // ✅ await here

  const filePath = path.join(process.cwd(), "content/blog", slug, "page.mdx");
  if (!fs.existsSync(filePath)) return {};

  const file = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(file);

  return {
    title: data.title || "Blog Post",
    description: data.description || "",
  };
}

// ✅ Fix: await params here too
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await here

  const filePath = path.join(process.cwd(), "content/blog", slug, "page.mdx");
  if (!fs.existsSync(filePath)) return notFound();

  const file = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(file);

  return (
    <article className="mx-auto max-w-3xl py-16">
      <h1 className="mb-6 text-4xl font-bold">{data.title}</h1>
      <p className="mb-8 text-gray-500">{data.date}</p>
      <div className="prose prose-neutral max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
