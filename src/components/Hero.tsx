"use client";

import { Button } from "@/components/ui/button";
import { Search, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="container px-4 md:px-6 relative">
        {/* Background elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center relative z-10">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-2">
              <span className="animate-pulse mr-1.5">●</span> Trusted by 5,000+
              students worldwide
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none">
                Find Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Perfect Research
                </span>{" "}
                Mentor
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Automatically discover professors who match your research
                interests and generate personalized outreach emails for academic
                success in{" "}
                <span className="font-bold text-indigo-700">USA</span>,{" "}
                <span className="font-bold text-indigo-700">Canada</span>, and{" "}
                <span className="font-bold text-indigo-700">Australia</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white gap-2 py-6 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Search size={18} />
                  Find Professors
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-indigo-500 text-indigo-700 hover:bg-indigo-50 gap-2 py-6 px-8 text-lg rounded-xl"
                >
                  <Mail size={18} />
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  alt="User"
                />
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-indigo-600">500+</span>{" "}
                students matched this month
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Students discussing research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 text-indigo-800 font-medium py-1 px-3 rounded-full text-sm">
                    Academic Research
                  </div>
                  <div className="text-green-600 font-medium text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-1.5"></span>
                    Live Matching
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI-Powered Academic Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Find professors whose research aligns perfectly with your
                  interests across <span className="font-bold">USA</span>,{" "}
                  <span className="font-bold">Canada</span>, and{" "}
                  <span className="font-bold">Australia</span>.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-indigo-600 text-2xl font-bold">
                    Free for 4 universities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 relative z-10">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 mb-4 w-14 h-14 flex items-center justify-center">
              <Search className="h-6 w-6 text-indigo-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Professor Search</h3>
            <p className="text-gray-600">
              Find professors whose research aligns with your academic interests
              across top universities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 mb-4 w-14 h-14 flex items-center justify-center">
              <Mail className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tailored Email Drafts</h3>
            <p className="text-gray-600">
              Generate personalized email templates based on professor&apos;s
              research interests.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 mb-4 w-14 h-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-pink-700"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5Z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Academic Success</h3>
            <p className="text-gray-600">
              Increase your chances of admission with personalized outreach
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
