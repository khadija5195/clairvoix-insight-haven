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
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Clairvoix</span>
            </h1>
            <p className="text-3xl text-muted-foreground mb-8 leading-relaxed italic">
              Where Every Scan Sparks a Voice <br />
              A place where every customer can be heard. <br />
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              We aim to transform raw feedbacks into actionable intelligence that drives real business results.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-xl text-muted-foreground">
                <p>
                  Clairvoix is built on a simple belief: every customer deserves to be heard. 
                  Our platform turns everyday feedback into powerful insights that help hospitality businesses understand their guests better. 
                  With each scan, review, or response, we transform raw voices into clear patterns that reveal what truly matters.
                </p>
                <p>
                  We go beyond traditional surveys and ratings. 
                  Clairvoix captures authentic customer experiences in real time, making it easy for restaurants, cafés, hotels, and fast-food chains to identify strengths and spot opportunities for improvement. 
                  By converting scattered opinions into structured intelligence, we give businesses the clarity they need to act with confidence.
                </p>
                <p>
                  Our mission is to close the gap between businesses and their guests. Clairvoix isn’t just a feedback tool. It’s a bridge of trust, designed to empower hospitality brands with data that feels human. 
                  Because when every scan sparks a voice, and every voice is valued, better experiences naturally follow.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
              <h3 className="text-4xl font-semibold mb-6 text-primary">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-lg text-muted-foreground">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">23%</div>
                  <div className="text-lg text-muted-foreground">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-lg text-muted-foreground">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-lg text-muted-foreground">Support Available</div>
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
            <h2 className="text-5xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto">
              Our foundation rests on values that drive meaningful impact across hospitality. <br />
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed">
                 We deliver accurate, reliable data that you can trust to make critical business decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed">
                  We continuously evolve our platform with cutting-edge technology and industry insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed">
                  We work alongside our clients as true partners in their success, not just service providers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed">
                  We set the highest standards for ourselves and our solutions, never settling for "good enough."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* Mission & Vision Section */}
<section className="py-16 px-4 bg-card/20">
  <div className="container mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Mission & Vision</h2>
    <p className="text-xl md:text-2xl text-muted-foreground max-w-7xl mx-auto">
      At Clairvoix, we strive to empower hospitality businesses with innovative, AI-driven solutions that streamline operations, enhance customer experiences, and drive sustainable growth.
    </p>
  </div>

  <div className="flex flex-col gap-8 items-center">
    {/* Vision Box - shifted left */}
    <Card className="text-center border-border bg-card shadow-elegant max-w-5xl w-full ml-0">
      <CardHeader>
        <h3 className="text-3xl font-bold mb-2 italic underline">Our Vision</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-2xl">
          To become the leading AI-powered platform for the hospitality industry, enabling businesses to thrive through innovation, efficiency, and exceptional customer experiences.
        </CardDescription>
      </CardContent>
    </Card>

    {/* Mission Box - shifted right */}
    <Card className="text-center border-border bg-card shadow-elegant max-w-5xl w-full mr-0">
      <CardHeader>
        <h3 className="text-3xl font-bold mb-2 italic underline">Our Mission</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-2xl">
          We empower hospitality businesses with smart, scalable SaaS solutions that optimize customer engagement, deliver actionable insights, and drive sustainable growth while upholding innovation, integrity, and care for people.
        </CardDescription>
      </CardContent>
    </Card>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto">
              Meet the team of experts combining strategy, technology, and client success to shape the future of hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Operations & Strategy Lead</CardTitle>
                <p className="text-xl text-muted-foreground mt-1 font-bold italic">(Khadija Zafar)</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Oversees internal processes, workflows, and finances, shapes long-term business strategy, supports product and client-facing teams, ensures smooth operations and sustainable growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Marketing & Client Success Lead</CardTitle>
                 <p className="text-xl text-muted-foreground mt-1 font-bold italic">(Roha Abid)</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Drives marketing, business development, and client relationships, manages outreach, partnerships, and pricing, ensures customer satisfaction, trust, and long-term loyalty.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-elegant">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Tech & AI Lead</CardTitle>
                 <p className="text-xl text-muted-foreground mt-1 font-bold italic">(Abdul Hanan)</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Builds and maintains Clairvoix’s web and AI systems, ensures platform reliability and scalability, delivers actionable insights, transforms complex technology into seamless solutions.
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
            Let's discuss how Clairvoix can help transform your hospitality business with data-driven insights and improved customer experience.
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