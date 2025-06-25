
import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-6 w-6" />
              <span className="text-xl font-bold">SB Works</span>
            </div>
            <p className="text-gray-400">Connecting talent with opportunity worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2 text-gray-400">
              <li>How to Hire</li>
              <li>Talent Marketplace</li>
              <li>Project Catalog</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Freelancers</h4>
            <ul className="space-y-2 text-gray-400">
              <li>How to Find Work</li>
              <li>Direct Contracts</li>
              <li>Find Freelance Jobs</li>
              <li>Resource Center</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Leadership</li>
              <li>Investor Relations</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SB Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
