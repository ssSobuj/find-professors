
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { departments, universities, researchAreas } from "@/utils/mockData";

interface SearchFormProps {
  onSearch: (filters: {
    country: string;
    university: string;
    department: string;
    researchArea: string;
    keyword: string;
  }) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [country, setCountry] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [researchArea, setResearchArea] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ country, university, department, researchArea, keyword });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Countries</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="university">University</Label>
          <Select value={university} onValueChange={setUniversity}>
            <SelectTrigger id="university">
              <SelectValue placeholder="Select a university" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Universities</SelectItem>
              {universities
                .filter(uni => !country || uni.country === country)
                .map((uni, index) => (
                  <SelectItem key={index} value={uni.name}>{uni.name}</SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger id="department">
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Departments</SelectItem>
              {departments.map((dept, index) => (
                <SelectItem key={index} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="researchArea">Research Area</Label>
          <Select value={researchArea} onValueChange={setResearchArea}>
            <SelectTrigger id="researchArea">
              <SelectValue placeholder="Select a research area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Research Areas</SelectItem>
              {researchAreas.map((area, index) => (
                <SelectItem key={index} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keyword">Keyword Search</Label>
        <Input
          id="keyword"
          placeholder="Search by keyword (e.g., machine learning, robotics)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full bg-academic-700 hover:bg-academic-800">
        Search Professors
      </Button>
    </form>
  );
};

export default SearchForm;
