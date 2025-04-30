import type { Metadata } from "next";
import { featuredBooks, allCategories } from "@/lib/data/bookData";
import BookCard from "@/components/features/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Listings - PuranBoi",
  description: "Browse and find old books for sale on PuranBoi. Filter by category, price, and more.",
};

export default function ListingsPage() {
  const priceRanges = [
    { id: "price-1", label: "Under ৳100", value: "0-100" },
    { id: "price-2", label: "৳100 - ৳500", value: "100-500" },
    { id: "price-3", label: "৳500 - ৳1000", value: "500-1000" },
    { id: "price-4", label: "৳1000 - ৳2000", value: "1000-2000" },
    { id: "price-5", label: "Over ৳2000", value: "2000+" },
  ];

  const conditions = [
    { id: "condition-1", label: "New", value: "new" },
    { id: "condition-2", label: "Like New", value: "like-new" },
    { id: "condition-3", label: "Excellent", value: "excellent" },
    { id: "condition-4", label: "Good", value: "good" },
    { id: "condition-5", label: "Fair", value: "fair" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary/10 py-12">
        <div className="container-custom">
          <h1 className="page-title text-center">Book Listings</h1>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 bg-white rounded-md p-2">
              <Input
                placeholder="Search books..."
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="lg" className="gap-2">
                <Search size={18} />
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-4 rounded-md shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Filters</h3>
                <SlidersHorizontal size={20} className="text-gray-500" />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Category</h4>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCategories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox id={range.id} />
                      <label
                        htmlFor={range.id}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Condition</h4>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition.id} className="flex items-center space-x-2">
                      <Checkbox id={condition.id} />
                      <label
                        htmlFor={condition.id}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {condition.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Listings */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{featuredBooks.length} books found</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>

            {/* Pagination (if needed) */}
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
