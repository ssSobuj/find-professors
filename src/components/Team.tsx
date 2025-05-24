
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Nurul Alam (Siam)",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    initials: "NS",
    social: {
      linkedin: "#",
      email: "nurul@mailprofessor.com",
    }
  },
  {
    name: "Shah Alam (Shaikat)",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    initials: "SS",
    social: {
      linkedin: "#",
      email: "shah@mailprofessor.com",
    }
  },
  {
    name: "Alamgir Hossain",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    initials: "AH",
    social: {
      linkedin: "#",
      email: "alamgir@mailprofessor.com",
    }
  },
  {
    name: "MD Rassel Hossain",
    role: "Frontend-Designer",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    initials: "MR",
    social: {
      linkedin: "#",
      email: "rassel@mailprofessor.com",
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="w-full py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Meet Our Expert Team
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            The professionals behind MailProfessor dedicated to your academic success
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-indigo-200">{member.role}</p>
                    <div className="flex gap-3 mt-3">
                      {member.social?.linkedin && (
                        <a href={member.social.linkedin} className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social?.email && (
                        <a href={`mailto:${member.social.email}`} className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
