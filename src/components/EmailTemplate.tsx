
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Professor } from "@/utils/mockData";

interface EmailTemplateProps {
  professor: Professor;
  emailDraft: string;
}

const EmailTemplate = ({ professor, emailDraft }: EmailTemplateProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>(emailDraft);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard",
      description: "Email draft has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-6 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div>
        <h3 className="text-lg font-semibold">Email Draft for {professor.name}</h3>
        <p className="text-sm text-gray-500">
          This email has been generated based on your profile and {professor.name}'s research interests. 
          Feel free to edit it before sending.
        </p>
      </div>

      <Tabs defaultValue="edit">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <Textarea
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-h-[400px] font-mono text-sm"
          />
        </TabsContent>
        <TabsContent value="preview" className="border rounded-md p-4 min-h-[400px] whitespace-pre-wrap">
          {email.split('\n').map((line, i) => (
            <div key={i} className={line.startsWith('Subject:') ? 'font-bold mb-2' : ''}>
              {line}
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="flex gap-4">
        <Button onClick={handleCopy} className="bg-academic-700 hover:bg-academic-800">
          Copy to Clipboard
        </Button>
        <a
          href={`mailto:${professor.email}?subject=${encodeURIComponent(
            email.split('\n')[0].replace('Subject: ', '')
          )}&body=${encodeURIComponent(email.split('\n').slice(1).join('\n'))}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" className="border-academic-500 text-academic-700 hover:bg-academic-50">
            Open in Email Client
          </Button>
        </a>
      </div>
    </div>
  );
};

export default EmailTemplate;
