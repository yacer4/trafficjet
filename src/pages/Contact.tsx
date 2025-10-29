import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, Instagram, Linkedin, MapPin, Send } from "lucide-react";
import runwayAbstract from "@/assets/runway-abstract.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success("Message sent! We'll be in touch soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@trafficjet.media",
      href: "mailto:support@trafficjet.media",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 50 234 9724",
      href: "tel:+971502349724",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/trafficjet.media/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/trafficjetmedia/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Book Your Flight
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch and let's start your journey to social media success.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 hover:shadow-elevation transition-all">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Business Name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your business name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and goals..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-jet" disabled={isLoading}>
                  <Send className="mr-2 w-5 h-5" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Whether you're ready to start a project or just want to learn more about our services, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <Card className="p-8 gradient-primary text-white">
                <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
                <p className="opacity-90 mb-6">
                  Connect with us on social media for marketing tips, case studies, and behind-the-scenes content.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-bold mb-3">Schedule a Call</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer to speak directly? Book a free 30-minute consultation to discuss your goals.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Calendar
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
