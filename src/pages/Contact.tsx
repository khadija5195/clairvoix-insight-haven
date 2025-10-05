import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl italic text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your hospitality business with data-driven insights? 
            Let's discuss how Clairvoix can help you achieve your goals.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Muhammad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Hassan" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="hassan@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Hotel/Restaurant Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+92 300 0000000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotel/Resort</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Cafe/Coffee Shop</SelectItem>
                      <SelectItem value="fastfood">Fast Food Chain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What are you most interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel-analytics">Hotel Customer Analytics</SelectItem>
                      <SelectItem value="restaurant-analytics">Restaurant Customer Analytics</SelectItem>
                      <SelectItem value="cafe-analytics">Cafe Customer Analytics</SelectItem>
                      <SelectItem value="fastfood-analytics">Fast Food Customer Analytics</SelectItem>
                      <SelectItem value="demo">Schedule a Demo</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business needs and how we can help..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full text-lg py-6">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border border-border bg-card shadow-warm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our team directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">clairvoixx@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+92 322 4338006</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Near Faisal Town, Lahore<br />
                      Pakistan, 54700
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                      24/7 Support Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border border-border bg-card shadow-warm">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
                <CardDescription>
                  Need something specific? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  Schedule a Demo
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Request a Quote
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Technical Support
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Partnership Inquiry
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="border border-primary/20 bg-gradient-subtle shadow-warm">
              <CardContent className="text-center py-6">
                <h3 className="font-semibold mb-2 text-foreground">Have Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our frequently asked questions or browse our knowledge base.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Clairvoix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast Response</h3>
              <p className="text-lg text-muted-foreground">
                24-hour response time guaranteed for all inquiries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert Consultation</h3>
              <p className="text-lg text-muted-foreground">
                Free initial consultation with our hospitality analytics experts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Ongoing Support</h3>
              <p className="text-lg text-muted-foreground">
                Dedicated support team available 24/7 for all clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;