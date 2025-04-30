import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const hotLinks = [
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Listings", href: "/listings" },
  { title: "Register", href: "/register" },
  { title: "Notifications", href: "/notifications" },
];

const quickLinks = [
  { title: "Profile", href: "/profile" },
  { title: "Login", href: "/login" },
  { title: "Privacy & Policy", href: "/privacy-policy" },
  { title: "Terms and Conditions", href: "/terms-conditions" },
  { title: "About", href: "/about" },
];

const recentPosts = [
  {
    title: "পুরাতন বই কিনুন সহজেই: প্রাকটিক্যাল গাইডলাইনস থেকে অভিজ্ঞতা",
    date: "March 22, 2025",
    image: "/images/books-bg.webp",
    href: "/blog/easy-book-buying",
  },
  {
    title: "পুরাতন বই বিক্রির ওয়েবসাইট",
    date: "August 26, 2022",
    image: "/images/book3.jpeg",
    href: "/blog/book-selling-website",
  },
  {
    title: "PuranBoi.com-পুরাতন বই এর নতুন প্রজন্ম",
    date: "April 21, 2021",
    image: "/images/logo.png",
    href: "/blog/new-generation",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Contact Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="PuranBoi"
                width={150}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                ঢাকা, বাংলাদেশ
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                +৮৮০১৯১২৩৪৫৬৭৮
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                contact@puranboi.com
              </p>
            </div>
            <div className="mt-6 flex space-x-3">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <div className="bg-white p-2 rounded-full text-gray-600 hover:text-primary transition">
                  <FaFacebook size={18} />
                </div>
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <div className="bg-white p-2 rounded-full text-gray-600 hover:text-primary transition">
                  <FaYoutube size={18} />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <div className="bg-white p-2 rounded-full text-gray-600 hover:text-primary transition">
                  <FaLinkedin size={18} />
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Hot Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-200">
              Hot Links
            </h3>
            <ul className="space-y-3">
              {hotLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition flex items-center"
                  >
                    <span className="text-xs text-primary mr-2">▶</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-200">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link href={post.href} key={post.href}>
                  <div className="flex items-center gap-3 group">
                    <div className="w-16 h-14 relative flex-shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition flex items-center"
                  >
                    <span className="text-xs text-primary mr-2">▶</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4">
        <div className="container-custom text-center text-sm text-gray-500">
          <p>
            Copyright 2025© <Link href="/" className="text-primary hover:underline">puranboi.com</Link> All Rights Reserved.{" "}
            <Link href="/privacy-policy" className="hover:underline">Privacy & Policy</Link>,{" "}
            <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
