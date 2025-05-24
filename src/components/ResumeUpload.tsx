import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

interface ResumeUploadProps {
  onStudentInfoChange: (studentInfo: {
    name: string;
    degree: string;
    university: string;
    researchInterests: string[];
    skills: string[];
    experience: string;
  }) => void;
}

const ResumeUpload = ({ onStudentInfoChange }: ResumeUploadProps) => {
  const { toast } = useToast();
  const [name, setName] = useState<string>("");
  const [degree, setDegree] = useState<string>("MS");
  const [university, setUniversity] = useState<string>("");
  const [researchInterests, setResearchInterests] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onStudentInfoChange({
      name,
      degree,
      university,
      researchInterests: researchInterests
        .split(",")
        .map((interest) => interest.trim()),
      skills: skills.split(",").map((skill) => skill.trim()),
      experience,
    });

    toast({
      title: "Profile Updated",
      description: "Your information has been successfully saved.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    toast({
      title: "Processing CV",
      description: "Your CV is being analyzed. This may take a moment.",
    });

    // Simulate CV processing (in a real app, this would call an API)
    setTimeout(() => {
      // Mock data as if extracted from CV
      setName("John Doe");
      setDegree("PhD");
      setUniversity("University of Technology");
      setResearchInterests(
        "Machine Learning, Computer Vision, Natural Language Processing"
      );
      setSkills("Python, TensorFlow, PyTorch, Data Analysis");
      setExperience(
        "2 years of research experience in Computer Vision, including a publication on image segmentation and a summer internship at Tech Research Lab"
      );

      toast({
        title: "CV Processed Successfully",
        description:
          "We've extracted your information. Please review and edit if needed.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div>
        <h3 className="text-lg font-semibold">Upload Your CV</h3>
        <p className="text-sm text-gray-500">
          Upload your CV to automatically fill in your information or enter it
          manually below.
        </p>
        <div className="mt-3">
          <Input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      <Separator />

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-semibold">Your Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Degree Program</Label>
            <select
              id="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="MS">Master&apos;s (MS)</option>
              <option value="PhD">PhD</option>
              <option value="PostDoc">Post-Doctoral</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">Current University</Label>
            <Input
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="Enter your current university"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="researchInterests">Research Interests</Label>
            <Input
              id="researchInterests"
              value={researchInterests}
              onChange={(e) => setResearchInterests(e.target.value)}
              placeholder="Enter research interests separated by commas"
              required
            />
            <p className="text-xs text-gray-500">
              E.g., Machine Learning, Computer Vision, Robotics
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="skills">Technical Skills</Label>
            <Input
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter skills separated by commas"
            />
            <p className="text-xs text-gray-500">
              E.g., Python, TensorFlow, Data Analysis
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Briefly describe your relevant experience"
              rows={4}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-academic-700 hover:bg-academic-800"
        >
          Save Information
        </Button>
      </form>
    </div>
  );
};

export default ResumeUpload;
