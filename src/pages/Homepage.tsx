
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedFreelancersSection from "@/components/FeaturedFreelancersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ServicesSection />
      <HowItWorksSection />
      <FeaturedFreelancersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Homepage;
