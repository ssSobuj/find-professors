import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Write the Perfect Cold Email to Professors",
    excerpt:
      "Learn the essential components that make your email stand out and increase your chances of getting a response.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 8, 2025",
    category: "Email Tips",
  },
  {
    title: "Finding the Right Professor: Research Compatibility Guide",
    excerpt:
      "Discover how to identify professors whose research interests align with your academic goals.",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 2, 2025",
    category: "Research",
  },
  {
    title: "Scholarship Opportunities for International Graduate Students",
    excerpt:
      "A comprehensive guide to finding and securing funding for your graduate studies abroad.",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 25, 2025",
    category: "Scholarships",
  },
];

const Blog = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Latest from Our Blog
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Tips, strategies and insights to help you succeed in your academic
            journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                  <p className="text-gray-600">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto"
                  >
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-50"
            >
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
