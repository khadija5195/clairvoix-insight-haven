import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Turn Your Customer Feedback Into 
            <span className="text-primary block mt-2">Business Growth</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
  Clairvoix helps hotels, restaurants, and cafes capture real 
  <span className="text-primary font-bold"> guest experiences </span> 
  and translate them into smarter decisions that boost 
  <span className="text-primary font-bold"> satisfaction </span> 
  and 
  <span className="text-primary font-bold"> profitability</span>.
</p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">Explore Demo</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Clairvoix?
            </h2>
            <p className="text-2xl italic text-muted-foreground max-w-5xl mx-auto">
              We provide comprehensive solutions tailored to the unique needs of the hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Real-time insights into your business performance and customer satisfaction with interactive dashboards and reports.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Revenue Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Identify opportunities to increase revenue and reduce costs by improving customer satisfaction through data-driven recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Understand your customers better with detailed analytics on preferences and behavior patterns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Stay ahead with live monitoring of key metrics and instant alerts for critical changes in customer deamnds.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Industries We Serve
            </h2>
            <p className="text-2xl italic text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for every segment of the hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
              <h3 className="text-3xl font-semibold mb-4 text-primary">Hotels & Resorts</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Optimize occupancy rates, enhance guest experience, and maximize revenue per room with our comprehensive hotel analytics platform.
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Guest satisfaction tracking</li>
                <li>• Operational efficiency metrics</li>
                <li>• Customers expectations vs. reality</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
              <h3 className="text-3xl font-semibold mb-4 text-primary">Restaurants</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Improve table turnover, optimize menu performance, and enhance customer satisfaction with detailed restaurant analytics.
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Menu performance analysis</li>
                <li>• Customer preference insights</li>
                <li>• Staff productivity metrics</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
              <h3 className="text-3xl font-semibold mb-4 text-primary">Cafes & Coffee Shops</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Track customer flow, optimize feedbacks, and boost loyalty with specialized cafe analytics solutions.
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Customer flow & Loyalty program analysis</li>
                <li>• Feedback optimization</li>
                <li>• Seasonal & event-based analysis</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
              <h3 className="text-3xl font-semibold mb-4 text-primary">Fast Food Chains</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Scale efficiently across multiple locations with standardized metrics and performance benchmarking.
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Multi-location performance tracking</li>
                <li>• Drive-through optimization</li>
                <li>• Supply chain analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the new world of hospitality businesses by trusting Clairvoix for your analytics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;