import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 mx-auto max-w-[800px] text-gray-600 md:text-xl">
            Choose the plan that fits your academic journey and unlock your path
            to success
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
            {/* Free Plan */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-green-100 bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-shadow">
              <div className="p-6 md:p-8 border-b border-green-100">
                <div className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  Free Plan
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Start Finding Professors
                </h3>
                <p className="mt-2 text-gray-600">
                  Begin your academic journey with our free offering
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-green-800 mb-4">
                    <span className="text-2xl font-bold">
                      Free for 4 Universities
                    </span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Access to{" "}
                        <span className="text-xl font-bold">
                          4 Universities
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Available for{" "}
                        <span className="font-bold text-lg">USA</span>,{" "}
                        <span className="font-bold text-lg">Canada</span>, and{" "}
                        <span className="font-bold text-lg">Australia</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic professor matching</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Always FREE</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full mt-8 py-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-lg">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Professor Search Pricing */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-shadow">
              <div className="p-6 md:p-8 border-b border-blue-100">
                <div className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  Professor Search
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Find Your Academic Mentor
                </h3>
                <p className="mt-2 text-gray-600">
                  Access our database of professors who match your research
                  interests
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    For <span className="font-bold text-lg">Canada</span> and{" "}
                    <span className="font-bold text-lg">Australia</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>50 Universities available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">
                        $25 for all 50 Universities
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    For <span className="font-bold text-lg">USA</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>400 Universities available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$0.5 Per University (30-100 Universities)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$0.45 Per University (101-400 Universities)</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full mt-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Email Generation Pricing */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-shadow">
              <div className="p-6 md:p-8 border-b border-purple-100">
                <div className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                  Email Generation
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Personalized Outreach
                </h3>
                <p className="mt-2 text-gray-600">
                  Generate custom emails that get responses from professors
                </p>
              </div>

              <div className="p-6 md:p-8">
                <ul className="space-y-3 mb-10">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Starts at 30 professors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">$0.4 per Email</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tailored to professor's research</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Includes professional formatting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Higher response rate guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One revision included</span>
                  </li>
                </ul>

                <Button className="w-full mt-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg">
                  Start Generating Emails
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Do you offer refunds?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer a 7-day money-back guarantee if you're not
                  satisfied with our services.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  How accurate is the professor matching?
                </h3>
                <p className="mt-2 text-gray-600">
                  Our algorithm has a 95% accuracy rate in matching students
                  with professors based on research interests.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Can I purchase both services together?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer bundle discounts when you purchase both
                  professor search and email generation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PricingPage;
