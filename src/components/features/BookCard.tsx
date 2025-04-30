"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BookListing } from "@/lib/data/bookData";
import { Heart, MapPin, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface BookCardProps {
  book: BookListing;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  const [isLiked, setIsLiked] = useState(book.liked || false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Calculate time difference
  const getTimeAgo = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <Link href={`/listings/${book.id}`}>
      <div className="book-card group h-full flex flex-col">
        {/* Card Header with Image */}
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div
            className={`absolute top-2 right-2 z-10 ${
              isLiked ? "text-red-500" : "text-gray-100"
            }`}
            onClick={toggleLike}
          >
            <Heart
              className={`w-6 h-6 drop-shadow-md cursor-pointer transition-colors ${
                isLiked ? "fill-red-500" : "fill-transparent hover:fill-red-200"
              }`}
            />
          </div>
          {featured && (
            <Badge className="absolute top-2 left-2 bg-primary text-white">
              Featured
            </Badge>
          )}
        </div>

        {/* Card Content */}
        <div className="p-3 flex flex-col flex-grow">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs font-normal">
              {book.category}
            </Badge>
          </div>

          <h3 className="book-title mb-1">
            {book.title}
          </h3>

          <div className="flex items-center text-gray-500 text-xs mb-2">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="truncate">{book.location}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Eye className="w-3 h-3" />
            <span>{book.views}</span>
            <span className="ml-2 text-gray-400">{getTimeAgo(book.date)}</span>
          </div>

          <div className="mt-auto pt-3">
            <div className="book-price">
              ৳{book.price.toFixed(2)}
              {book.negotiable && (
                <span className="text-sm text-gray-500 ml-1">(Negotiable)</span>
              )}
            </div>
            <Button variant="default" size="sm" className="w-full mt-2">
              VIEW AD
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
