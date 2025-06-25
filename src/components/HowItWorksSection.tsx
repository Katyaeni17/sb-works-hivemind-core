
import { Search, Users, Shield } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How SB Works Functions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Post Your Project</h3>
            <p className="text-gray-600">Describe your project requirements and get proposals from qualified freelancers.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Choose Your Freelancer</h3>
            <p className="text-gray-600">Review profiles, portfolios, and ratings to select the perfect match.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Get Results</h3>
            <p className="text-gray-600">Collaborate securely and receive high-quality work with our protection guarantee.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
