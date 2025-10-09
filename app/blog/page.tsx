import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Link } from "next-view-transitions";
import { Highlighter } from "@/components/ui/highlighter";

export const metadata = {
  title: "All Blogs",
};

export default function BlogPage() {
  // ✅ Read blogs from /content/blog
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

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <Highlighter action="underline" color="#FF9800">
            Thoughts on
          </Highlighter>{" "}
          <Highlighter action="highlight" color="#87CEFA">
            software development,
          </Highlighter>{" "}
          <Highlighter action="highlight" color="#87CEFA">
            engineering,
          </Highlighter>{" "}
          <Highlighter action="highlight" color="#87CEFA">
            technology,
          </Highlighter>{" "}
          <Highlighter action="highlight" color="#87CEFA">
            life
          </Highlighter>{" "}
        </div>

        {/* Blog list */}
        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline"
            >
              <article className="group relative flex gap-6">
                <div className="relative flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-gray-300 transition-colors group-hover:bg-gray-400"></div>
                  <div className="w-px flex-1 bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-10">
                  <div className="mb-2 flex items-baseline gap-4">
                    <h2 className="text-2xl leading-snug font-bold text-gray-900 transition-colors group-hover:text-gray-600">
                      {post.title}
                    </h2>
                    <time className="flex-shrink-0 text-sm whitespace-nowrap text-gray-400">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-lg text-gray-500">No blogs published yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
