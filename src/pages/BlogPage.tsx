
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How to Write the Perfect Cold Email to Professors",
    excerpt: "Learn the essential components that make your email stand out and increase your chances of getting a response.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 8, 2025",
    category: "Email Tips",
    content: "Cold emailing professors can be intimidating, but it's often necessary if you want to pursue graduate studies or research opportunities. A well-crafted email can open doors to potential mentorship, research collaborations, or even funded positions. In this guide, we'll walk through the key components of an effective cold email to professors, with examples and templates you can adapt for your own use."
  },
  {
    title: "Finding the Right Professor: Research Compatibility Guide",
    excerpt: "Discover how to identify professors whose research interests align with your academic goals.",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 2, 2025",
    category: "Research",
    content: "When pursuing graduate studies, finding the right professor to work with is just as important as choosing the right university. Your academic advisor will guide your research, help shape your academic career, and potentially open doors for your professional future. The compatibility between your research interests and those of your prospective professor can significantly impact your success and satisfaction in your program."
  },
  {
    title: "Scholarship Opportunities for International Graduate Students",
    excerpt: "A comprehensive guide to finding and securing funding for your graduate studies abroad.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 25, 2025",
    category: "Scholarships",
    content: "Pursuing graduate studies abroad can be a transformative experience, but the cost of international tuition and living expenses can be prohibitive. Fortunately, numerous scholarship opportunities exist specifically for international students. This comprehensive guide will help you navigate the complex landscape of graduate funding for international students."
  },
  {
    title: "How to Analyze a Professor's Research Publications",
    excerpt: "Tips for understanding academic papers to better connect with potential advisors.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 18, 2025",
    category: "Research",
    content: "Understanding a professor's research publications before reaching out to them is crucial for making a good impression and demonstrating genuine interest. However, academic papers can be dense and challenging to understand, especially if you're still developing expertise in the field. This guide provides strategies for effectively analyzing research publications even when the subject matter is complex."
  },
  {
    title: "Building Your Academic CV for Graduate Applications",
    excerpt: "Essential elements to include in your CV to impress potential research advisors.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 10, 2025",
    category: "Application Tips",
    content: "Your academic CV is a crucial component of your graduate school application and professor outreach. Unlike a regular resume, an academic CV focuses on your scholarly achievements, research experience, and academic qualifications. Creating an effective academic CV requires careful consideration of what to include and how to present your accomplishments in a way that resonates with academic reviewers."
  },
  {
    title: "Navigating Academic Conferences as a Graduate Student",
    excerpt: "How to make the most of conference opportunities for networking and career advancement.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 3, 2025",
    category: "Career Development",
    content: "Academic conferences are valuable opportunities for graduate students to present their research, network with potential mentors and collaborators, and stay current in their field. However, these events can be overwhelming, especially for first-time attendees. This guide offers strategies to help graduate students navigate conferences effectively and maximize their professional development benefits."
  }
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Blog Hero */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MailProfessor Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Insights, tips and strategies to help you succeed in your academic journey
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Grid */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] relative">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-gray-500">{post.date}</p>
                      <h3 className="text-xl font-bold hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full py-6 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/ddddafbc-db8c-4079-9147-70aea8fcab0d.png" alt="MailProfessor Logo" className="h-10 mr-2" />
              <p className="text-sm text-gray-300">
                © 2025 MailProfessor. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
