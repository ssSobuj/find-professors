
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import ProfessorCard from "@/components/ProfessorCard";
import { professors, Professor } from "@/utils/mockData";

const ProfessorSearch = () => {
  const [filteredProfessors, setFilteredProfessors] = useState<Professor[]>(professors);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (filters: {
    country: string;
    university: string;
    department: string;
    researchArea: string;
    keyword: string;
  }) => {
    setIsLoading(true);

    // Simulate API call with a small delay
    setTimeout(() => {
      const filtered = professors.filter((professor) => {
        // Filter by country
        if (filters.country && professor.country !== filters.country) {
          return false;
        }

        // Filter by university
        if (filters.university && professor.university !== filters.university) {
          return false;
        }

        // Filter by department
        if (filters.department && professor.department !== filters.department) {
          return false;
        }

        // Filter by research area
        if (
          filters.researchArea &&
          !professor.researchInterests.includes(filters.researchArea)
        ) {
          return false;
        }

        // Filter by keyword (search in name, university, department, and research interests)
        if (filters.keyword) {
          const keyword = filters.keyword.toLowerCase();
          const nameMatch = professor.name.toLowerCase().includes(keyword);
          const universityMatch = professor.university.toLowerCase().includes(keyword);
          const departmentMatch = professor.department.toLowerCase().includes(keyword);
          const researchMatch = professor.researchInterests.some((interest) =>
            interest.toLowerCase().includes(keyword)
          );
          const publicationMatch = professor.publications.some((pub) =>
            pub.toLowerCase().includes(keyword)
          );

          if (!(nameMatch || universityMatch || departmentMatch || researchMatch || publicationMatch)) {
            return false;
          }
        }

        return true;
      });

      setFilteredProfessors(filtered);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl text-academic-900 mb-2">
              Find Professors
            </h1>
            <p className="text-gray-600">
              Search for professors based on your research interests, university preferences, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <SearchForm onSearch={handleSearch} />
              </div>
            </div>

            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-academic-700"></div>
                </div>
              ) : filteredProfessors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProfessors.map((professor) => (
                    <ProfessorCard key={professor.id} professor={professor} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center bg-white rounded-lg border border-gray-200 p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">No professors found</h3>
                  <p className="text-gray-500">
                    Try adjusting your search filters to find more results.
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

export default ProfessorSearch;
