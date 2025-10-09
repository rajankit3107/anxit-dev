import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");

  const folders = fs
    .readdirSync(blogDir)
    .filter(
      (name) =>
        fs.statSync(path.join(blogDir, name)).isDirectory() &&
        !name.startsWith("["),
    );

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

  // Sort newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Return only the 3 most recent posts
  return posts.slice(0, 3);
}
