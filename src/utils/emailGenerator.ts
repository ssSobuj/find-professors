
import { Professor } from './mockData';

interface StudentInfo {
  name: string;
  degree: string;
  university: string;
  researchInterests: string[];
  skills: string[];
  experience: string;
}

export const generateEmailDraft = (
  professor: Professor,
  studentInfo: StudentInfo
): string => {
  // Find matching research interests
  const matchingInterests = professor.researchInterests.filter(interest => 
    studentInfo.researchInterests.includes(interest)
  );

  // Generate the email based on the available information
  const email = `Subject: Interest in ${matchingInterests.length > 0 ? matchingInterests.join(", ") : "Your Research"} - Prospective ${studentInfo.degree} Student

Dear ${professor.title} ${professor.name},

I hope this email finds you well. My name is ${studentInfo.name}, and I am currently ${
    studentInfo.university 
      ? `completing my studies at ${studentInfo.university}` 
      : "preparing for graduate studies"
  } with a strong interest in pursuing a ${studentInfo.degree} degree at ${professor.university} in the ${professor.department} department.

${
  matchingInterests.length > 0 
    ? `I am particularly interested in your work on ${matchingInterests.join(", ")}, which aligns with my research interests. ${
        professor.publications.length > 0 
          ? `Your recent publication "${professor.publications[0]}" especially caught my attention, and I would love to contribute to this line of research.` 
          : ""
      }`
    : `I am particularly interested in your research focus areas, especially ${professor.researchInterests.join(", ")}.`
}

My background includes ${studentInfo.experience}. ${
  studentInfo.skills.length > 0 
    ? `I have developed skills in ${studentInfo.skills.join(", ")}, which I believe would be valuable for research in your lab.` 
    : ""
}

I would greatly appreciate the opportunity to discuss potential ${studentInfo.degree} positions in your research group. Would it be possible to schedule a brief meeting to discuss how my research interests and background might align with your current projects?

Thank you for considering my inquiry. I look forward to your response.

Sincerely,
${studentInfo.name}
`;

  return email;
};
