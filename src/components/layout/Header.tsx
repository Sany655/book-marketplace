"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Plus } from "lucide-react";

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "BLOG", href: "/blog" },
  { title: "LISTINGS", href: "/listings" },
  { title: "REGISTER", href: "/register" },
  { title: "CONTACT", href: "/contact" },
  { title: "SEARCH", href: "/search" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container-custom py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="PuranBoi"
            width={150}
            height={60}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active-link" : ""}`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/login">
            <Button variant="outline" size="sm">
              LOGIN
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" size="sm">
              REGISTER
            </Button>
          </Link>
          <Link href="/listings/new">
            <Button size="sm" className="flex items-center">
              <Plus className="mr-1 h-4 w-4" /> ADD LISTING
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 mb-4 border-b">
                <Image
                  src="/images/logo.png"
                  alt="PuranBoi"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-5 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-lg ${
                      isActive(link.href) ? "active-link" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col space-y-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    LOGIN
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    REGISTER
                  </Button>
                </Link>
                <Link href="/listings/new" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full flex items-center justify-center">
                    <Plus className="mr-1 h-4 w-4" /> ADD LISTING
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
