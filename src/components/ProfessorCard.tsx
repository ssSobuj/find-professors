import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Professor } from "@/utils/mockData";
import Link from "next/link";

interface ProfessorCardProps {
  professor: Professor;
}

const ProfessorCard = ({ professor }: ProfessorCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={professor.imageUrl}
          alt={professor.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white text-academic-800">
            {professor.country}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="font-bold text-xl">{professor.name}</h3>
          <p className="text-sm text-gray-500">
            {professor.title} at {professor.university}
          </p>
          <p className="text-sm text-gray-500">{professor.department}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Research Interests</h4>
            <div className="flex flex-wrap gap-1">
              {professor.researchInterests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-academic-50 text-academic-800 border-academic-200"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Latest Publication</h4>
            <p className="text-xs text-gray-600 line-clamp-2">
              {professor.publications[0] || "No publications listed"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 w-full">
          <Link to={`/email?professorId=${professor.id}`} className="w-full">
            <Button
              variant="outline"
              className="w-full border-academic-500 text-academic-700 hover:bg-academic-50"
            >
              Draft Email
            </Button>
          </Link>
          <a
            href={professor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-academic-700 hover:bg-academic-800">
              View Profile
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfessorCard;
