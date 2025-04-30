import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MessageSquare, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data/blogData";
import { format } from "date-fns";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found - PuranBoi",
    };
  }

  return {
    title: `${post.title} - PuranBoi Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  // Find related posts (exclude the current post and limit to 3)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container-custom py-16 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-white mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-80">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{format(new Date(post.date), "MMMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{post.comments} Comments</span>
            </div>
            <div>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/profile-icon.png"
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{post.author}</p>
                    <p className="text-gray-500 text-sm">Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                    <div className="flex items-center gap-3 group">
                      <div className="w-16 h-14 relative flex-shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog?category=tips"
                    className="text-gray-600 hover:text-primary transition flex items-center"
                  >
                    <span className="text-xs text-primary mr-2">▶</span>
                    টিপস
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=guide"
                    className="text-gray-600 hover:text-primary transition flex items-center"
                  >
                    <span className="text-xs text-primary mr-2">▶</span>
                    গাইড
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=description"
                    className="text-gray-600 hover:text-primary transition flex items-center"
                  >
                    <span className="text-xs text-primary mr-2">▶</span>
                    বিবরণ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
