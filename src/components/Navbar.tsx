"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" w-full border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="container flex h-20 items-center justify-between ">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/ddddafbc-db8c-4079-9147-70aea8fcab0d.png"
              alt="MailProfessor Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl hidden md:block font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              MailProfessor
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/team"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Our Team
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex border-indigo-500 text-indigo-700 hover:bg-indigo-50"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2 w-full md:w-[50%]">
          <nav className="flex flex-col space-y-3 px-4 py-3">
            <Link
              href="/"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Pricing
            </Link>
            <Link
              href="/team"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Our Team
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Contact Us
            </Link>
            <Button className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
