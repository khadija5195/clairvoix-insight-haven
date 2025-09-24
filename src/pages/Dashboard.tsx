import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Clock,
  Building2,
  UtensilsCrossed
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Dashboard <span className="text-primary">Demo</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the power of Clairvoix analytics with our interactive demo. 
            See how our insights can transform your hospitality business.
          </p>
          <Badge variant="secondary" className="mb-8">
            Live Demo Environment
          </Badge>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-border bg-card shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-foreground">$124,532</p>
                    <p className="text-xs text-green-600">+12.5% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-foreground">87.3%</p>
                    <p className="text-xs text-green-600">+5.2% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Customer Satisfaction</p>
                    <p className="text-2xl font-bold text-foreground">4.8/5</p>
                    <p className="text-xs text-green-600">+0.3 from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                    <p className="text-2xl font-bold text-foreground">2.3min</p>
                    <p className="text-xs text-green-600">-15% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Placeholder */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Dashboard Area */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-dashed border-primary/30 bg-card/50 shadow-warm">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Power BI Dashboard Integration</CardTitle>
                  <CardDescription className="text-base">
                    This area is reserved for your custom Power BI dashboard embedding.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="bg-muted/50 rounded-lg p-12 border-2 border-dashed border-border">
                    <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">Dashboard Placeholder</p>
                    <p className="text-muted-foreground mb-4">
                      Your custom HTML/JavaScript code for Power BI dashboard will be embedded here.
                      This could include interactive charts, real-time data visualizations, and custom reports.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      <div className="bg-card p-4 rounded-lg border">
                        <TrendingUp className="h-6 w-6 text-primary mb-2" />
                        <p className="text-sm font-medium">Revenue Trends</p>
                        <p className="text-xs text-muted-foreground">Monthly performance charts</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border">
                        <Users className="h-6 w-6 text-primary mb-2" />
                        <p className="text-sm font-medium">Customer Analytics</p>
                        <p className="text-xs text-muted-foreground">Behavior and satisfaction metrics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-left space-y-2">
                    <h4 className="font-semibold text-foreground">Integration Instructions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Replace this placeholder with your Power BI embed code</li>
                      <li>• Customize dimensions and styling to match your brand</li>
                      <li>• Configure real-time data connections</li>
                      <li>• Set up user permissions and access controls</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Demo Controls */}
              <Card className="border border-border bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Demo Controls</CardTitle>
                  <CardDescription>
                    Interact with the demo environment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Building2 className="h-4 w-4 mr-2" />
                    Hotel View
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <UtensilsCrossed className="h-4 w-4 mr-2" />
                    Restaurant View
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Insights */}
              <Card className="border border-border bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Recent Insights</CardTitle>
                  <CardDescription>
                    AI-generated recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground">Revenue Opportunity</p>
                    <p className="text-xs text-muted-foreground">
                      Increase weekend rates by 15% to match market demand
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-sm font-medium text-foreground">Staffing Alert</p>
                    <p className="text-xs text-muted-foreground">
                      Consider additional staff for Friday evening peak hours
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-sm font-medium text-foreground">Menu Optimization</p>
                    <p className="text-xs text-muted-foreground">
                      Top 3 dishes account for 45% of revenue - promote more
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border border-border bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full">
                    Generate Report
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Schedule Analysis
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Set Alert
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">What You'll Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your actual dashboard will include these powerful features and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center border border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Live data updates with interactive charts and customizable views for immediate insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Predictive Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered forecasting and trend analysis to help you stay ahead of market changes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Customer Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep customer behavior analysis and segmentation for personalized experiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Build Your Dashboard?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a custom analytics dashboard tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Request Custom Dashboard</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;