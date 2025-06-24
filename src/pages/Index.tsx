
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Briefcase, Shield, ArrowRight, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [userType, setUserType] = useState<'freelancer' | 'client' | 'admin' | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const services = [
    { name: "Web Development", projects: 1250, icon: "💻" },
    { name: "Graphic Design", projects: 980, icon: "🎨" },
    { name: "Content Writing", projects: 750, icon: "✍️" },
    { name: "Digital Marketing", projects: 650, icon: "📱" },
    { name: "Data Analysis", projects: 420, icon: "📊" },
    { name: "Mobile Development", projects: 380, icon: "📱" },
  ];

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

  const testimonials = [
    {
      name: "David Park",
      company: "TechStart Inc.",
      text: "SB Works helped us find the perfect developer for our project. The quality of work exceeded our expectations.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "Creative Agency",
      text: "As a freelancer, this platform has connected me with amazing clients and helped grow my business significantly.",
      rating: 5
    }
  ];

  if (userType) {
    return (
      <div className="min-h-screen bg-gray-50">
        {userType === 'freelancer' && <FreelancerDashboard />}
        {userType === 'client' && <ClientDashboard />}
        {userType === 'admin' && <AdminDashboard />}
        <Button 
          onClick={() => setUserType(null)}
          className="fixed top-4 left-4"
          variant="outline"
        >
          ← Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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
              onClick={() => setUserType('freelancer')}
            >
              I'm a Freelancer
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setUserType('client')}
            >
              I'm a Client
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.projects.toLocaleString()} projects available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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

      {/* Featured Freelancers */}
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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of successful freelancers and clients on SB Works</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Start Freelancing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setUserType('admin')}
            >
              Admin Portal <Shield className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

// Dashboard Components
const FreelancerDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Freelancer Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">3</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>This Month's Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$2,450</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profile Views</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">127</p>
        </CardContent>
      </Card>
    </div>
    
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
        <CardDescription>Your latest project submissions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">E-commerce Website Development</h3>
              <p className="text-gray-600">Due: Dec 15, 2024</p>
            </div>
            <Badge>In Progress</Badge>
          </div>
          <div className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">Mobile App UI Design</h3>
              <p className="text-gray-600">Due: Dec 20, 2024</p>
            </div>
            <Badge variant="secondary">Review</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ClientDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">5</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">12</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Completed Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">28</p>
        </CardContent>
      </Card>
    </div>
    
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Project Management</CardTitle>
        <CardDescription>Track your projects and communicate with freelancers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">Website Redesign Project</h3>
              <p className="text-gray-600">Freelancer: Sarah Johnson</p>
            </div>
            <div className="flex gap-2">
              <Badge>Active</Badge>
              <Button size="sm">Message</Button>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">Content Marketing Campaign</h3>
              <p className="text-gray-600">Freelancer: Emily Rodriguez</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Awaiting Review</Badge>
              <Button size="sm">Review</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const AdminDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">1,247</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">89</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Disputes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">3</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Platform Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$24,780</p>
        </CardContent>
      </Card>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent User Activity</CardTitle>
          <CardDescription>Monitor user engagement and platform usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>New freelancer registrations</span>
              <Badge>+15 today</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Project submissions</span>
              <Badge>+8 today</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Client inquiries</span>
              <Badge>+23 today</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>System Maintenance</CardTitle>
          <CardDescription>Platform health and policy enforcement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button className="w-full" variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Review Reported Content
            </Button>
            <Button className="w-full" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage User Accounts
            </Button>
            <Button className="w-full" variant="outline">
              <Briefcase className="mr-2 h-4 w-4" />
              Project Quality Control
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Index;
