
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const FreelancerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Freelancer Dashboard</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            ← Back to Home
          </Button>
        </div>
        
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
    </div>
  );
};

export default FreelancerDashboard;
