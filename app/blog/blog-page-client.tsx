"use client";

import { Link } from "next-view-transitions";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogPageClient({ posts }: { posts: Post[] }) {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const formatDate = (dateString: string) => {
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
        <div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <Highlighter action="underline" color="#FF9800">
            Thoughts on
          </Highlighter>{" "}
          <Highlighter action="highlight" color="#87CEFA">
            software development, engineering, technology,
          </Highlighter>{" "}
          and{" "}
          <Highlighter action="highlight" color="#87CEFA">
            life
          </Highlighter>
        </div>

        {/* Blog list */}
        <div className="relative space-y-0" ref={timelineRef}>
          {/* Animated dot that moves down as you scroll */}
          <motion.div
            style={{ top: dotY }}
            className="absolute left-[5px] z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-500 shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gray-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline"
            >
              <motion.article
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="group relative flex gap-6"
              >
                <div className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                    className="h-3 w-3 rounded-full bg-gray-300 transition-colors group-hover:bg-gray-400"
                  />
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
                  <p className="text-sm leading-relaxed text-gray-600">
                    {post.description}
                  </p>
                </div>
              </motion.article>
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
