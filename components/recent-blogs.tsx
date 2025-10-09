import getBlogPosts from "@/lib/getBlogs";
import { Link } from "next-view-transitions";

const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function RecentBlogs() {
  const recentPosts = getBlogPosts();

  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
        <p className="mt-1.5 text-sm text-gray-500">
          Latest thoughts on software development and engineering
        </p>
      </div>

      <div className="space-y-0">
        {recentPosts.map((post) => (
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
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h2 className="text-xl leading-snug font-bold text-gray-900 transition-colors group-hover:text-gray-600">
                    {post.title}
                  </h2>
                  <time className="flex-shrink-0 text-xs whitespace-nowrap text-gray-400">
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          </Link>
        ))}

        {/* Empty state */}
        {recentPosts.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-lg text-gray-500">No blogs published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
