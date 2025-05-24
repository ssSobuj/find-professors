
export interface Professor {
  id: string;
  name: string;
  title: string;
  university: string;
  department: string;
  country: 'USA' | 'Canada' | 'Australia';
  researchInterests: string[];
  email: string;
  website: string;
  publications: string[];
  imageUrl: string;
}

export const professors: Professor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Associate Professor",
    university: "Stanford University",
    department: "Computer Science",
    country: "USA",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    email: "sarah.johnson@stanford.edu",
    website: "https://cs.stanford.edu/~sjohnson",
    publications: [
      "Johnson, S. et al. (2023). Advances in Neural Network Architectures for NLP Tasks.",
      "Johnson, S. & Smith, T. (2022). Self-supervised Learning in Vision-Language Models."
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Professor",
    university: "Massachusetts Institute of Technology",
    department: "Electrical Engineering & Computer Science",
    country: "USA",
    researchInterests: ["Robotics", "Computer Vision", "Autonomous Systems"],
    email: "mchen@mit.edu",
    website: "https://eecs.mit.edu/~mchen",
    publications: [
      "Chen, M. & Garcia, L. (2023). Robust Vision-based Navigation for Autonomous Drones.",
      "Chen, M. et al. (2021). Learning from Demonstration in Robotic Manipulation Tasks."
    ],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Dr. Emily Wilson",
    title: "Associate Professor",
    university: "University of Toronto",
    department: "Computer Science",
    country: "Canada",
    researchInterests: ["Human-Computer Interaction", "Accessible Computing", "User Experience Design"],
    email: "emily.wilson@utoronto.ca",
    website: "https://cs.utoronto.ca/~ewilson",
    publications: [
      "Wilson, E. et al. (2023). Designing Voice Interfaces for Elderly Users.",
      "Wilson, E. & Johnson, K. (2022). Inclusive Design Patterns for Mobile Applications."
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Dr. James Thompson",
    title: "Professor",
    university: "University of Melbourne",
    department: "Computing and Information Systems",
    country: "Australia",
    researchInterests: ["Cybersecurity", "Cryptography", "Privacy Preserving Computation"],
    email: "j.thompson@unimelb.edu.au",
    website: "https://cis.unimelb.edu.au/~jthompson",
    publications: [
      "Thompson, J. & Lee, S. (2023). Secure Multi-party Computation for Healthcare Data.",
      "Thompson, J. et al. (2022). Quantum-resistant Cryptographic Protocols."
    ],
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Dr. Alicia Ramirez",
    title: "Assistant Professor",
    university: "University of California, Berkeley",
    department: "Data Science",
    country: "USA",
    researchInterests: ["Big Data Analytics", "Data Visualization", "Statistical Learning"],
    email: "aramirez@berkeley.edu",
    website: "https://datascience.berkeley.edu/~aramirez",
    publications: [
      "Ramirez, A. et al. (2023). Interactive Visualization Techniques for Large-scale Genomic Data.",
      "Ramirez, A. & Wang, H. (2022). Explainable AI Methods for Healthcare Applications."
    ],
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    title: "Professor",
    university: "University of British Columbia",
    department: "Computer Science",
    country: "Canada",
    researchInterests: ["Algorithms", "Computational Complexity", "Theoretical Computer Science"],
    email: "robert.kim@ubc.ca",
    website: "https://cs.ubc.ca/~rkim",
    publications: [
      "Kim, R. & Johnson, L. (2023). New Lower Bounds for Online Algorithms.",
      "Kim, R. et al. (2021). Approximation Algorithms for NP-Hard Graph Problems."
    ],
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export interface University {
  name: string;
  country: string;
}

export const universities: University[] = [
  { name: "Stanford University", country: "USA" },
  { name: "Massachusetts Institute of Technology", country: "USA" },
  { name: "Harvard University", country: "USA" },
  { name: "University of California, Berkeley", country: "USA" },
  { name: "California Institute of Technology", country: "USA" },
  { name: "University of Toronto", country: "Canada" },
  { name: "University of British Columbia", country: "Canada" },
  { name: "McGill University", country: "Canada" },
  { name: "University of Melbourne", country: "Australia" },
  { name: "University of Sydney", country: "Australia" },
  { name: "Australian National University", country: "Australia" }
];

export const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biomedical Engineering",
  "Data Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology"
];

export const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Robotics",
  "Human-Computer Interaction",
  "Cybersecurity",
  "Data Mining",
  "Bioinformatics",
  "Quantum Computing",
  "Internet of Things",
  "Cloud Computing",
  "Software Engineering",
  "Computer Networks"
];
