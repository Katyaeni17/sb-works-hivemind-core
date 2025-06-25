
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    { name: "Web Development", projects: 1250, icon: "💻" },
    { name: "Graphic Design", projects: 980, icon: "🎨" },
    { name: "Content Writing", projects: 750, icon: "✍️" },
    { name: "Digital Marketing", projects: 650, icon: "📱" },
    { name: "Data Analysis", projects: 420, icon: "📊" },
    { name: "Mobile Development", projects: 380, icon: "📱" },
  ];

  return (
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
  );
};

export default ServicesSection;
