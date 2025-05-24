
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Linkedin, Mail, MapPin, MessageSquare, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("Message sent successfully! We'll get back to you soon.", {
      description: "Thank you for reaching out to us.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-stretch">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 md:p-10 h-full shadow-xl">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                <p className="text-indigo-100">We're here to help with any questions about our services</p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-indigo-100" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">481 Hinkler Road, Southampton,</p>
                    <p className="text-lg text-indigo-100">SO19 6DN, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-white/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-indigo-100" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">mail@mailprofessor.com</p>
                    <p className="text-lg text-indigo-100">info@mailprofessor.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-white/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-indigo-100" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">+44 744 1913232</p>
                    <p className="text-lg text-indigo-100">+880 131 3941 166</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="mb-3 text-indigo-100 font-medium">Connect with us</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Have questions? We're here to help you succeed.
              </p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="bg-gray-50 border-gray-200 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                <Input 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-gray-50 border-gray-200 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                <Textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?" 
                  className="bg-gray-50 border-gray-200 focus:border-indigo-500 min-h-[180px] resize-none"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-full py-6"
                >
                  SEND MESSAGE
                </Button>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="border-green-500 text-green-600 hover:bg-green-50 flex items-center justify-center gap-2 w-full py-6"
                  >
                    <MessageSquare className="h-5 w-5" />
                    SCHEDULE A CALL
                  </Button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
