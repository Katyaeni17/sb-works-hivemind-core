
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SB Works</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Find Talent</Button>
            <Button variant="ghost">Find Work</Button>
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
