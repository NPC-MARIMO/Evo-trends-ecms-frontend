import React from "react";
import { 
  HousePlug, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Heart,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Custom CSS for the footer
const footerStyles = `
  .aesthetic-footer {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .footer-bg {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-bg) 100%);
    border-top: 1px solid rgba(49, 46, 129, 0.1);
  }

  .footer-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .footer-link:hover {
    color: var(--dark-accent);
    transform: translateX(4px);
  }

  .footer-link::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .footer-link:hover::before {
    opacity: 1;
  }

  .newsletter-input {
    border: 1px solid rgba(49, 46, 129, 0.2);
    transition: all 0.3s ease;
  }

  .newsletter-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(179, 138, 105, 0.1);
  }

  .social-icon {
    transition: all 0.3s ease;
    border: 1px solid rgba(49, 46, 129, 0.1);
  }

  .social-icon:hover {
    background: linear-gradient(135deg, var(--dark-accent), #4F46E5);
    color: white;
    transform: translateY(-2px);
    border-color: transparent;
  }

  .subscribe-btn {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    transition: all 0.3s ease;
  }

  .subscribe-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(49, 46, 129, 0.3);
  }
`;

export default function ShoppingFooter() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="w-full aesthetic-footer footer-bg">
        {/* Main Footer Content */}
        <div className="px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Link to="/shop/home" className="flex items-center gap-3 mb-6 group">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#312E81] to-[#4F46E5] group-hover:from-[#B38A69] group-hover:to-[#312E81] transition-all duration-300">
                    <HousePlug className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl bg-gradient-to-r from-[#312E81] to-[#B38A69] bg-clip-text text-transparent">
                    Jhankaar
                  </span>
                </Link>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Discover exquisite jewelry that tells your story. Crafted with passion, designed for elegance.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-4 w-4 text-[#B38A69]" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-4 w-4 text-[#B38A69]" />
                    <span className="text-sm">hello@jhankaar.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-[#B38A69]" />
                    <span className="text-sm">123 Jewelry Street, City</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-[#312E81] mb-6 text-lg tracking-wide">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Home", path: "/shop/home" },
                    { name: "About Us", path: "/about" },
                    { name: "Services", path: "/services" },
                    { name: "Products", path: "/shop/listing" },
                    { name: "Contact", path: "/contact" }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="footer-link text-gray-600 hover:text-[#312E81] text-sm flex items-center"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore Collection */}
              <div>
                <h3 className="font-semibold text-[#312E81] mb-6 text-lg tracking-wide">Collections</h3>
                <ul className="space-y-3">
                  {[
                    "Necklaces",
                    "Earrings", 
                    "Bracelets",
                    "Rings",
                    "New Arrivals",
                    "Best Sellers"
                  ].map((item) => (
                    <li key={item}>
                      <a 
                        href={`/collection/${item.toLowerCase()}`}
                        className="footer-link text-gray-600 hover:text-[#312E81] text-sm flex items-center"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Social */}
              <div>
                <h3 className="font-semibold text-[#312E81] mb-6 text-lg tracking-wide">Stay Updated</h3>
                
                {/* Newsletter */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to get updates on new collections and exclusive offers.
                  </p>
                  <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="newsletter-input flex-1 text-sm rounded-lg"
                    />
                    <Button className="subscribe-btn rounded-lg px-4">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-gray-600 text-sm mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, href: "https://instagram.com" },
                      { icon: Facebook, href: "https://facebook.com" },
                      { icon: Twitter, href: "https://twitter.com" }
                    ].map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon p-2 rounded-lg bg-white text-gray-600 hover:text-white"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm text-center lg:text-left">
                &copy; {new Date().getFullYear()} Jhankaar. Crafted with <Heart className="inline h-3 w-3 text-red-400" /> for elegance
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-gray-500 hover:text-[#312E81] transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-500 hover:text-[#312E81] transition-colors">
                  Terms of Service
                </a>
                <a href="/shipping" className="text-gray-500 hover:text-[#312E81] transition-colors">
                  Shipping Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}