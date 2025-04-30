import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blogData";
import BlogPostCard from "@/components/features/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog - PuranBoi",
  description: "Read the latest articles about book buying, selling and more at PuranBoi.",
};

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary/10 py-12">
        <div className="container-custom">
          <h1 className="page-title text-center">Latest Stories</h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={post.id}
              post={post}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
