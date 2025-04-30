export interface BookListing {
  id: string;
  title: string;
  price: number;
  negotiable: boolean;
  location: string;
  seller: string;
  date: string;
  views: number;
  image: string;
  category: string;
  bookType: string;
  condition: string;
  liked?: boolean;
}

export const featuredBooks: BookListing[] = [
  {
    id: "book1",
    title: "চাপ 'ক' গ্রুপটাকে",
    price: 70,
    negotiable: true,
    location: "Agrabad, Chittagong",
    seller: "bookworm123",
    date: "March 29, 2025",
    views: 57,
    image: "/images/book1.jpeg",
    category: "Education",
    bookType: "Textbook",
    condition: "Good",
  },
  {
    id: "book2",
    title: "Reckless by Lauren Roberts",
    price: 310,
    negotiable: true,
    location: "Khilgaon Chowdhurypara malti mozshid 4/A, 215, Block B",
    seller: "novelReader",
    date: "March 11, 2025",
    views: 64,
    image: "/images/book2.jpeg",
    category: "Fiction",
    bookType: "Fantasy Romance Novel",
    condition: "Like New",
  },
  {
    id: "book3",
    title: "Powerless by Lauren Roberts",
    price: 350,
    negotiable: true,
    location: "Khilgaon Chowdhurypara malti mozshid 4/A, 215, Block B",
    seller: "novelReader",
    date: "March 11, 2025",
    views: 45,
    image: "/images/book3.jpeg",
    category: "Fiction",
    bookType: "Fantasy Romance Book",
    condition: "Excellent",
  },
  {
    id: "book4",
    title: "গার্লস গাইড",
    price: 3895,
    negotiable: true,
    location: "ঘোড়াশাল, পলাশ, নরসিংদী",
    seller: "guideBooks",
    date: "March 11, 2025",
    views: 122,
    image: "/images/book4.jpeg",
    category: "Education",
    bookType: "Guide Book",
    condition: "Good",
  },
  {
    id: "book5",
    title: "Hsc higher math 1st, 2nd paper book & 1st guide",
    price: 2000,
    negotiable: true,
    location: "Gazipur Raillgate (Joydebpur)",
    seller: "hscHelper",
    date: "March 7, 2025",
    views: 83,
    image: "/images/book2.jpeg",
    category: "Education",
    bookType: "Textbook",
    condition: "Fair",
  },
  {
    id: "book6",
    title: "ek dojon rohosho golpo",
    price: 150,
    negotiable: true,
    location: "192/1A west tezr.mohommadpur.dhaka-1207",
    seller: "mysteryFan",
    date: "February 27, 2025",
    views: 38,
    image: "/images/book3.jpeg",
    category: "Fiction",
    bookType: "Mystery",
    condition: "Good",
  },
  {
    id: "book7",
    title: "HSC 2025/2026/27 Suggestion & Special Preparation",
    price: 2970,
    negotiable: false,
    location: "Natunbazar (Rampura)",
    seller: "examPrep",
    date: "February 27, 2025",
    views: 94,
    image: "/images/book1.jpeg",
    category: "Education",
    bookType: "Exam Preparation",
    condition: "New",
  },
  {
    id: "book8",
    title: "Highlighted English Suggestion",
    price: 350,
    negotiable: true,
    location: "Patpazu,Coxesbazar",
    seller: "englishTutor",
    date: "February 27, 2025",
    views: 63,
    image: "/images/book4.jpeg",
    category: "Education",
    bookType: "Study Guide",
    condition: "Good",
  },
];

export const allCategories = [
  "All Categories",
  "Education",
  "Fiction",
  "Non-Fiction",
  "Children's Books",
  "Comics",
  "Religious",
  "Business",
  "Science",
  "History",
  "Arts",
  "Computer",
  "Cooking",
  "Health",
  "Travel",
];
