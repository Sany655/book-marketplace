import { type BookListing, featuredBooks } from "@/lib/data/bookData";
import BookCard from "./BookCard";

interface FeaturedListingsProps {
  title?: string;
  subtitle?: string;
  books?: BookListing[];
  limit?: number;
}

const FeaturedListings = ({
  title = "নিজের পছন্দ খুঁজে নিন",
  subtitle,
  books = featuredBooks,
  limit = 8,
}: FeaturedListingsProps) => {
  // Limit the number of books shown
  const displayedBooks = books.slice(0, limit);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedBooks.map((book) => (
            <div key={book.id}>
              <BookCard book={book} featured={book.id === "book1" || book.id === "book4"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
