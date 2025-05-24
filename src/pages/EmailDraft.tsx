
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ResumeUpload from "@/components/ResumeUpload";
import EmailTemplate from "@/components/EmailTemplate";
import { professors, Professor } from "@/utils/mockData";
import { generateEmailDraft } from "@/utils/emailGenerator";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StudentInfo {
  name: string;
  degree: string;
  university: string;
  researchInterests: string[];
  skills: string[];
  experience: string;
}

const EmailDraft = () => {
  const [searchParams] = useSearchParams();
  const professorId = searchParams.get("professorId");
  const [professor, setProfessor] = useState<Professor | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    name: "",
    degree: "MS",
    university: "",
    researchInterests: [],
    skills: [],
    experience: ""
  });
  const [emailDraft, setEmailDraft] = useState<string>("");

  useEffect(() => {
    if (professorId) {
      const foundProfessor = professors.find(p => p.id === professorId);
      if (foundProfessor) {
        setProfessor(foundProfessor);
      }
    }
  }, [professorId]);

  useEffect(() => {
    if (professor && studentInfo.name) {
      const draft = generateEmailDraft(professor, studentInfo);
      setEmailDraft(draft);
    }
  }, [professor, studentInfo]);

  const handleStudentInfoChange = (info: StudentInfo) => {
    setStudentInfo(info);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl text-academic-900 mb-2">
              Create Email Draft
            </h1>
            <p className="text-gray-600">
              Generate a personalized email to a professor based on your profile and their research interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ResumeUpload onStudentInfoChange={handleStudentInfoChange} />
            </div>

            <div className="lg:col-span-2">
              {professor ? (
                <>
                  <div className="mb-6">
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={professor.imageUrl} 
                            alt={professor.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{professor.name}</h2>
                          <p className="text-gray-500">{professor.title} at {professor.university}</p>
                          <p className="text-gray-500">{professor.department}</p>
                          <div className="mt-2">
                            <Badge variant="outline" className="bg-academic-50 text-academic-800 border-academic-200">
                              {professor.country}
                            </Badge>
                          </div>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm font-medium">Research Interests:</p>
                            <div className="flex flex-wrap gap-1">
                              {professor.researchInterests.map((interest, index) => (
                                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {studentInfo.name ? (
                    <EmailTemplate professor={professor} emailDraft={emailDraft} />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center bg-white rounded-lg border border-gray-200 p-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Enter Your Information</h3>
                      <p className="text-gray-500">
                        Please fill in your information on the left to generate an email draft.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center bg-white rounded-lg border border-gray-200 p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Select a Professor</h3>
                  <p className="text-gray-500">
                    Start by selecting a professor from the search page, or complete your profile to create a general email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 bg-academic-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-300">
                © 2025 AcademicMatch. All rights reserved.
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

export default EmailDraft;
