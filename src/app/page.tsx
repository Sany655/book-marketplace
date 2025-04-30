import HeroSection from "@/components/features/HeroSection";
import FeaturedListings from "@/components/features/FeaturedListings";
import ProcessSteps from "@/components/features/ProcessSteps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PuranBoi - Buy and Sell Old Books Easily",
  description: "Buy and sell old books easily on PuranBoi. The best marketplace for used books in Bangladesh.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedListings subtitle="Puranboi.com এ আপনি আপনার পুরাতন বই গুলো খুব সহজেই বিক্রি করে দিতে পারবেন" />
      <ProcessSteps />
    </div>
  );
}
