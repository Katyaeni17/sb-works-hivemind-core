
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const HeroSection = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Connect with Top Freelancers & Quality Projects
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          SB Works brings together talented freelancers and clients for successful project collaborations.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-gray-900"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 py-3 text-gray-900">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="writing">Writing</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Search
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            onClick={() => navigate('/freelancer')}
          >
            I'm a Freelancer
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => navigate('/client')}
          >
            I'm a Client
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
