import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, MessageSquare } from "lucide-react";
import type { BlogPost } from "@/lib/data/blogData";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 h-full flex flex-col">
      <Link href={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-0 left-0 bg-primary text-white text-xs px-3 py-1">
            Featured
          </div>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <div className="ml-auto flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
          </div>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-gray-600">By {post.author}</span>
          <div className="flex items-center text-sm text-gray-500">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
