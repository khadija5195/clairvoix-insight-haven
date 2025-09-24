import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-brown text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-pale-blush">Clairvoix</h3>
            <p className="mb-4 text-cream/80 leading-relaxed">
              Transforming hospitality through data-driven insights. We provide comprehensive analytics solutions for hotels, restaurants, cafes, and fast food chains.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-peachy-pink" />
                <span className="text-sm">contact@clairvoix.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-peachy-pink" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-peachy-pink" />
                <span className="text-sm">123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-pale-blush">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-cream/80 hover:text-peachy-pink transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-cream/80 hover:text-peachy-pink transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-cream/80 hover:text-peachy-pink transition-colors">
                Services
              </Link>
              <Link to="/blogs" className="block text-cream/80 hover:text-peachy-pink transition-colors">
                Blogs
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-pale-blush">Our Services</h4>
            <div className="space-y-2">
              <div className="text-cream/80">Hotel Analytics</div>
              <div className="text-cream/80">Restaurant Insights</div>
              <div className="text-cream/80">Cafe Solutions</div>
              <div className="text-cream/80">Fast Food Analytics</div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-brown/30 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {currentYear} Clairvoix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;