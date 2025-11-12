import { Link, useNavigate, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to sections after navigation
    if (location.hash === '#reviews') {
      setTimeout(() => {
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.hash === '#packages') {
      setTimeout(() => {
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
          packagesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleReviewsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection && location.pathname === '/portfolio') {
      // Already on portfolio page, just scroll
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to portfolio with hash
      navigate('/portfolio#reviews');
    }
  };

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePackagesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const packagesSection = document.getElementById('packages');
    if (packagesSection && location.pathname === '/services') {
      // Already on services page, just scroll
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to services with hash
      navigate('/services#packages');
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Packages", path: "/services#packages", onClick: handlePackagesClick },
      { name: "Portfolio", path: "/portfolio", onClick: handlePortfolioClick },
    ],
    resources: [
      { name: "Reviews", path: "/portfolio#reviews", onClick: handleReviewsClick },
      { name: "Careers", path: "https://www.linkedin.com/company/trafficjetmedia/", external: true },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane w-6 h-6 transition-transform group-hover:translate-x-1"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
              <span className="text-lg font-bold">Traffic Jet Media</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Helping brands soar beyond limits with creative social media marketing and strategic growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/trafficjet.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/trafficjetmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@trafficjet.media"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  {link.onClick ? (
                    <a
                      href={link.path}
                      onClick={link.onClick}
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : link.onClick ? (
                    <a
                      href={link.path}
                      onClick={link.onClick}
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Our Journey</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Subscribe to get marketing tips and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-border/50"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="tel:+971502349724"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+971 50 234 9724</span>
              </a>
              <a
                href="mailto:support@trafficjet.media"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@trafficjet.media</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Traffic Jet Media. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
