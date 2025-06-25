
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of successful freelancers and clients on SB Works</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            onClick={() => navigate('/freelancer')}
          >
            Start Freelancing <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => navigate('/admin')}
          >
            Admin Portal <Shield className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
