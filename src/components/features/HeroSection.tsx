import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const categories = [
  { value: "all", label: "Select Category" },
  { value: "textbooks", label: "Textbooks" },
  { value: "novels", label: "Novels" },
  { value: "comics", label: "Comics" },
  { value: "education", label: "Education" },
  { value: "history", label: "History" },
  { value: "science", label: "Science" },
  { value: "business", label: "Business" },
];

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container-custom hero-content text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          কি বই খুঁজছেন?
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          পুরাতন বইয়ের নিজস্ব ঘেরা একমাত্র আপনার নিজের!
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 bg-white rounded-md p-2">
            <Input
              placeholder="What Are You Looking For?"
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Select defaultValue="all">
              <SelectTrigger className="md:w-[180px] border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="lg" className="gap-2">
              <Search size={18} />
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
