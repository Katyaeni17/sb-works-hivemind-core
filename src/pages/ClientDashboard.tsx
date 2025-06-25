
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Client Dashboard</h1>
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
    </div>
  );
};

export default ClientDashboard;
