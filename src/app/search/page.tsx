import type { Metadata } from "next";
import { featuredBooks } from "@/lib/data/bookData";
import BookCard from "@/components/features/BookCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Search - PuranBoi",
  description: "Search for books on PuranBoi by title, author, or location.",
};

export default function SearchPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-primary/10 py-12">
        <div className="container-custom">
          <h1 className="page-title text-center mb-6">Search</h1>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 bg-white rounded-md p-2">
              <Input
                placeholder="What are you looking for?"
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="gap-2">
                <Search size={18} />
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-md shadow-sm sticky top-24">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Find Books Near You
              </h3>
              {/* Map placeholder */}
              <div className="aspect-square bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                <div className="text-center p-4">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p>Map will be displayed here</p>
                  <p className="text-xs mt-1">Shows book locations near you</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">Popular Locations</h4>
                <ul className="space-y-2">
                  <li className="text-sm flex items-center text-primary hover:underline cursor-pointer">
                    <MapPin className="mr-1 h-3 w-3" /> Dhaka
                  </li>
                  <li className="text-sm flex items-center text-primary hover:underline cursor-pointer">
                    <MapPin className="mr-1 h-3 w-3" /> Chittagong
                  </li>
                  <li className="text-sm flex items-center text-primary hover:underline cursor-pointer">
                    <MapPin className="mr-1 h-3 w-3" /> Khulna
                  </li>
                  <li className="text-sm flex items-center text-primary hover:underline cursor-pointer">
                    <MapPin className="mr-1 h-3 w-3" /> Rajshahi
                  </li>
                  <li className="text-sm flex items-center text-primary hover:underline cursor-pointer">
                    <MapPin className="mr-1 h-3 w-3" /> Sylhet
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-1">514 Results</h2>
              <p className="text-gray-500 text-sm">Showing books available for sale</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredBooks.slice(0, 6).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
