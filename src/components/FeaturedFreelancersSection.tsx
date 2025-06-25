
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const FeaturedFreelancersSection = () => {
  const featuredFreelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      skills: ["React", "Node.js", "MongoDB"],
      avatar: "👩‍💻"
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "UI/UX Designer",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 65,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      avatar: "👨‍🎨"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Strategist",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 55,
      skills: ["SEO Writing", "Content Strategy", "Copywriting"],
      avatar: "👩‍📝"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Freelancers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFreelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{freelancer.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{freelancer.name}</h3>
                    <p className="text-gray-600">{freelancer.title}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{freelancer.rating}</span>
                  <span className="ml-1 text-gray-600">({freelancer.reviews} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${freelancer.hourlyRate}/hr</span>
                  <Button size="sm">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancersSection;
