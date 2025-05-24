import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Award, Leaf, Clock, Users } from "lucide-react";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Why Choose MailProfessor Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50  px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose MailProfessor?
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
              Our AI-driven platform helps you connect with the perfect academic
              mentors and simplifies your graduate school application process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Exclusive Scholarship Insights
                </h3>
                <p className="text-gray-500">
                  Access in-depth scholarship information and research funding
                  tips for top study destinations. Our resources include guides
                  on scholarship applications, financial aid, and university
                  research grants.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Tailored Academic Mentorship
                </h3>
                <p className="text-gray-500">
                  Get matched with professors whose research expertise aligns
                  with your interests. Our smart matching system uses top
                  academic keywords and trends to connect you with leaders in
                  your field.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mb-2">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Time-Saving Automation</h3>
                <p className="text-gray-500">
                  Generate professional outreach emails in seconds. Our
                  platform&apos;s automation tools save you time while ensuring
                  your application meets the high standards of academic
                  institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 mb-2">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Trusted by Scholars Worldwide
                </h3>
                <p className="text-gray-500">
                  Join a growing community of students and researchers who have
                  successfully connected with top professors and secured full or
                  partial scholarships through our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Choose the plan that fits your academic journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Professor Search Pricing */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-gray-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      PRICING FOR
                    </p>
                    <h3 className="text-2xl font-bold">
                      Premium Find Professor
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-medium text-blue-800">
                        For Canada and Australia
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-700 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-600">
                            50 Universities available
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-700 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-600">
                            $25 for all 50 Universities
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-medium text-blue-800">
                        For USA
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-700 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-600">
                            400 Universities available
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-700 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-600">
                            $0.5 Per University for 30-100 Universities |
                            max-100
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-700 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-600">
                            $0.45 Per University for 101-400 Universities |
                            max-400
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Generation Pricing */}
            <Card className="bg-gradient-to-br from-green-50 to-teal-100 border-gray-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      PRICING FOR
                    </p>
                    <h3 className="text-2xl font-bold">
                      Generate Cold & Personalized Emails to Professors
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-700 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-gray-600">
                          Starts at 30 professors
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-700 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-gray-600">
                          0.4 dollar per Email
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                    Start Generating Emails
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Our User Feedback
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Here&apos;s what our users are saying about their success with
              MailProfessor
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Sarah Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-sm text-gray-500">
                      PhD Student, Computer Science
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">
                  I applied to 12 professors using MailProfessor&apos;s
                  personalized email templates and got 5 positive responses! The
                  professor matching was incredibly accurate, finding
                  researchers whose interests aligned perfectly with mine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="James Wilson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">James Wilson</h4>
                    <p className="text-sm text-gray-500">
                      MS Student, Data Science
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">
                  The time I saved using MailProfessor was incredible. The
                  platform analyzed my CV and created personalized outreach that
                  actually got responses. I&apos;m now working with my top
                  choice professor at MIT!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Priya Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">
                      PhD Student, Bioengineering
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  As an international student, I was struggling to make
                  connections with professors. MailProfessor helped me find the
                  right mentors and create compelling outreach emails that
                  showcased my research potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-indigo-100 to-blue-50 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Stand Out with Personalized Outreach
              </h2>
              <p className="text-gray-600 md:text-xl">
                Increase your chances of acceptance by sending tailored emails
                that demonstrate your genuine interest in a professor&apos;s
                research.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-600">
                    Email templates customized to each professor&apos;s research
                    focus
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-600">
                    Highlight relevant skills and experiences from your CV
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-600">
                    Reference specific publications and research projects
                  </span>
                </li>
              </ul>
              <Link href="/email">
                <Button
                  variant="outline"
                  className="border-indigo-500 text-indigo-700 hover:bg-indigo-50"
                >
                  Create Your First Email
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Students working together"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
