import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Key Metrics Every Hotel Manager Should Track",
      excerpt: "Discover the essential performance indicators that can transform your hotel's profitability and guest satisfaction.",
      category: "Hotel Analytics",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Restaurant Revenue Optimization: A Data-Driven Approach",
      excerpt: "Learn how top restaurants use analytics to increase table turnover, optimize pricing, and boost profitability.",
      category: "Restaurant Analytics",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "The Future of Hospitality: AI and Predictive Analytics",
      excerpt: "Explore how artificial intelligence is revolutionizing customer service and operational efficiency in hospitality.",
      category: "Industry Trends",
      author: "Dr. Emily Watson",
      date: "March 10, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Coffee Shop Success: Understanding Peak Hours and Customer Flow",
      excerpt: "How independent cafes can use customer flow data to optimize staffing and inventory management.",
      category: "Cafe Analytics",
      author: "James Thompson",
      date: "March 8, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Multi-Location Management: Insights for Restaurant Chains",
      excerpt: "Best practices for monitoring and optimizing performance across multiple restaurant locations.",
      category: "Chain Management",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Customer Satisfaction Tracking: Beyond Star Ratings",
      excerpt: "Advanced methods for measuring and improving guest satisfaction in the digital age.",
      category: "Customer Experience",
      author: "Robert Kim",
      date: "March 3, 2024",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = ["All", "Hotel Analytics", "Restaurant Analytics", "Industry Trends", "Cafe Analytics", "Chain Management", "Customer Experience"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Insights & <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of industry trends with expert insights, best practices, and actionable strategies 
            for hospitality analytics and business optimization.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="border border-border bg-card shadow-elegant hover:shadow-warm transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="px-4 pb-16 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground pt-16">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="border border-border bg-card shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                  <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-primary text-primary-foreground border-0 shadow-elegant">
            <CardContent className="text-center py-12 px-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Get the latest insights and industry trends delivered to your inbox. 
                No spam, just valuable content for hospitality professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-foreground bg-primary-foreground placeholder:text-muted-foreground"
                />
                <Button variant="secondary" className="px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Join 2,000+ hospitality professionals already subscribed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blogs;