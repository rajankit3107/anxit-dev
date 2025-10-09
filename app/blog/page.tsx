// app/blog/page.tsx (Server Component)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPageClient from "./blog-page-client";

export const metadata = {
  title: "All Blogs",
};

export default function BlogPage() {
  // ✅ Read blogs from /content/blog (SERVER SIDE)
  const blogDir = path.join(process.cwd(), "content/blog");
  const folders = fs
    .readdirSync(blogDir)
    .filter(
      (name) =>
        fs.statSync(path.join(blogDir, name)).isDirectory() &&
        !name.startsWith("["),
    );

  // ✅ Extract frontmatter
  const posts = folders.map((folder) => {
    const filePath = path.join(blogDir, folder, "page.mdx");
    const file = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(file);
    return {
      slug: folder,
      title: data.title || folder,
      description: data.description || "",
      date: data.date || "",
    };
  });

  // ✅ Sort newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pass data to client component
  return <BlogPageClient posts={posts} />;
}
