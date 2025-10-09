import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Link } from "next-view-transitions";
import { ArrowRight, Calendar } from "lucide-react";

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
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Writing & Insights
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Blog Articles
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            Exploring software engineering, scalable systems, and development
            best practices. Currently crafting solutions at Google.
          </p>
        </div>

        {/* Blog list */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline"
            >
              <article className="group scale-[1.02] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mb-4 line-clamp-2 text-base leading-relaxed text-gray-600">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <time>{formatDate(post.date)}</time>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 group-hover:bg-gray-200">
                    <ArrowRight
                      size={20}
                      className="transform transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
              <p className="text-lg text-gray-500">No blogs published yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
