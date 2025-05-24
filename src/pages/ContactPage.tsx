
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Contact Us
            </h1>
            <p className="mt-4 mx-auto max-w-[700px] text-gray-600 md:text-xl">
              We're here to help you with any questions about our services or how we can assist your academic journey
            </p>
          </div>
        </section>
        
        <Contact />

        {/* Map Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.3302110875726!2d-1.3668653!3d50.9253358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48747483d16a5b41%3A0x183b1e9b13e35531!2sSouthampton%20SO19%206DN%2C%20UK!5e0!3m2!1sen!2sus!4v1705487898000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

export default ContactPage;
