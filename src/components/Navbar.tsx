"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Helper function to determine active link
  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/team", label: "Our Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className=" w-full border-b border-gray-200 bg-white/90 backdrop-blur-md relative lg:sticky top-0 z-50 px-4 sm:px-6 lg:px-12 xl:px-24">
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "text-indigo-600 hover:text-indigo-700 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex border-indigo-500 text-indigo-700 hover:bg-indigo-50"
          >
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
          >
            <Link href="/signup"> Get Started</Link>
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
        <div className="lg:hidden absolute h-[100vh] bg-white border-t border-gray-200 py-2 w-full md:w-[50%] left-0">
          <nav className="flex flex-col space-y-3 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors py-2 ${
                  isActive(link.href)
                    ? "text-indigo-600 hover:text-indigo-700 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
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
