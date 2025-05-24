
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="py-12 md:py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Our Team
            </h1>
            <p className="mt-4 mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Meet the experts behind MailProfessor who are dedicated to connecting students with the right academic mentors.
            </p>
          </div>
        </div>
        
        <Team />
        <Contact />
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

export default TeamPage;
