import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Target, Users2, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Clairvoix</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are passionate about empowering hospitality businesses with the insights they need to thrive. 
              Our mission is to transform raw data into actionable intelligence that drives real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Clairvoix emerged from a simple observation: the hospitality industry 
                  was sitting on a goldmine of data but lacked the tools to unlock its potential. Our founders, 
                  with decades of combined experience in both hospitality and data analytics, set out to bridge this gap.
                </p>
                <p>
                  Today, we serve hundreds of businesses across the hospitality spectrum, from boutique hotels 
                  to major restaurant chains. Our platform has processed millions of transactions, helping our 
                  clients increase revenue by an average of 23% and improve operational efficiency by 35%.
                </p>
                <p>
                  We believe that every business, regardless of size, deserves access to enterprise-level 
                  analytics. That's why we've made our platform accessible, intuitive, and powerful.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">23%</div>
                  <div className="text-sm text-muted-foreground">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We deliver accurate, reliable data that you can trust to make critical business decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously evolve our platform with cutting-edge technology and industry insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We work alongside our clients as true partners in their success, not just service providers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We set the highest standards for ourselves and our solutions, never settling for "good enough."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry experts and data scientists working together to revolutionize hospitality analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Leadership Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experienced executives from leading hospitality and technology companies, providing strategic vision and industry expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Data Scientists</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  PhD-level data scientists and analysts who transform complex hospitality data into actionable business insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated professionals ensuring every client maximizes their return on investment with our platform.
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
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Clairvoix can help transform your hospitality business with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;