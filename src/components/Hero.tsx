import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Mail, Book } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-purple-100/40">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Unlock Your Academic Potential
        </h1>
        <p className="mx-auto max-w-[900px] text-gray-600 md:text-xl mt-4">
          Connect with leading professors, craft compelling emails, and discover
          scholarship opportunities with our AI-powered platform.
        </p>
        <div className="space-x-4 mt-8">
          <Link to="/pricing">
            <Button size="lg">Explore Pricing</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 mt-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: Academic Matching */}
          <div className="rounded-xl shadow-lg hover:shadow-xl bg-white p-6 transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-indigo-100">
                <Search className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Academic Matching</h3>
            </div>
            <p className="text-gray-600 mb-4">Find professors whose research aligns perfectly with your interests across <span className="font-bold">USA</span>, <span className="font-bold">Canada</span>, and <span className="font-bold">Australia</span>.</p>
            <div className="flex justify-between items-center">
              <div className="text-indigo-600 text-2xl font-bold">
                Free for 4 universities
              </div>
            </div>
          </div>
          
          {/* Card 2: Email Generation */}
          <div className="rounded-xl shadow-lg hover:shadow-xl bg-white p-6 transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-green-100">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Email Generation</h3>
            </div>
            <p className="text-gray-600 mb-4">Generate custom emails that highlight your skills and experiences, tailored to each professor's specific research.</p>
            <div className="flex justify-between items-center">
              <div className="text-green-600 text-2xl font-bold">
                $0.4/Email
              </div>
            </div>
          </div>
          
          {/* Card 3: Scholarship Insights */}
          <div className="rounded-xl shadow-lg hover:shadow-xl bg-white p-6 transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-purple-100">
                <Book className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Scholarship Insights</h3>
            </div>
            <p className="text-gray-600 mb-4">Access a curated database of scholarships and funding opportunities to support your graduate studies.</p>
            <div className="flex justify-between items-center">
              <div className="text-purple-600 text-2xl font-bold">
                Unlock Funding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
