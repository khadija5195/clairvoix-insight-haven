import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Building2, 
  UtensilsCrossed, 
  Coffee, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Settings,
  CheckCircle
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
            Comprehensive analytics solutions tailored for every segment of the hospitality industry. 
            From hotels to fast food chains, we have the expertise to drive your success by making your customers satisfied.
          </p>
        </div>
      </section>

      {/* Main Services - Hotels & Restaurants */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core Specializations
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto">
              Deep expertise in the two largest segments of the hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Hotels */}
            <Card className="border-2 border-primary/20 bg-card shadow-elegant">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-5">CORE SPECIALIZATION</Badge>
                <CardTitle className="text-3xl text-primary">Hotel Analytics</CardTitle>
                <CardDescription className="text-base text-lg">
                  Comprehensive revenue management and operational optimization for hotels and resorts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Real-time Guest Sentiment Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Experience Insight Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Guest Satisfaction</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Competitive Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Satisfaction & Revenue Correlation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">AI Generated Insights</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/contact">Get Hotel Analytics</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card className="border-2 border-primary/20 bg-card shadow-elegant">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-2">CORE SPECIALIZATION</Badge>
                <CardTitle className="text-3xl text-primary">Restaurant Analytics</CardTitle>
                <CardDescription className="text-base text-lg">
                  Advanced insights for fine dining, casual dining, and restaurant chains.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Sentiment Breakdown</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Service Touch point insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Real-time Feedback Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Customer Preferences</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">Staff Productivity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-lg">AI Driven Insights</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/contact">Get Restaurant Analytics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 text-foreground">
              Additional Services
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto">
              Expanding our expertise to cover all segments of the hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cafes */}
            <Card className="border border-border bg-card shadow-warm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Cafe & Coffee Shop Analytics</CardTitle>
                <CardDescription className="text-base text-lg">
                  Specialized solutions for independent cafes and coffee shop chains.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Customer sentiment analysis</li>
                  <li>• Menu & Beverage Feedback Trends</li>
                  <li>• Loyalty program insights</li>
                  <li>• Seasonal trend analysis</li>
                  <li>• Operational Efficiency Insights</li>
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fast Food */}
            <Card className="border border-border bg-card shadow-warm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Fast Food Chain Analytics</CardTitle>
                <CardDescription className="text-base text-lg">
                  Multi-location insights for quick service restaurant chains.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Multi-location performance tracking</li>
                  <li>• Drive-through efficiency</li>
                  <li>• Experience Factors</li>
                  <li>• Quality & Consistency Insights</li>
                  <li>• Speed of service optimization</li>
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and insights available across all our service offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Live monitoring of key performance indicators with customizable views.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Forecast trends and anticipate business needs with AI-powered predictions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Deep understanding of customer behavior and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Custom Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Seamless integration with your existing systems and workflows.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss which analytics solution is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;