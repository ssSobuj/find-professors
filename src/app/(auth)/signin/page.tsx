"use client";

import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-24 min-h-screen flex items-center">
      <div className="container px-4 md:px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-md mx-auto relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to continue your research journey
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white gap-2 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign In
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Sign up
              </Link>
            </div>

            {/* Social Auth and Trusted Section same as previous */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-5 rounded-xl"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-5 rounded-xl"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Trusted section from hero */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <span className="animate-pulse mr-1.5">●</span> Trusted by 5,000+
              students worldwide
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
