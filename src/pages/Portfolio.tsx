import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Eye, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import EspaceRealEstateImg from "@/assets/EspaceRealEstate.jpg";
import Flan from "@/assets/Flan.jpg";
import Tra from "@/assets/Tra.jpg";
import caf from "@/assets/caf.jpg";
import SKIN from "@/assets/SKIN.jpg";
import Pure from "@/assets/Pure.jpg";


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
  name: "Espace Real Estate",
  category: "Social Media",
  industry: "Real Estate",
  description: "Developed a high-end social media strategy to elevate brand credibility, showcase luxury listings, and generate qualified property leads across Dubai.",
  image: EspaceRealEstateImg,
  link: "https://www.instagram.com/espacerealestate/",
  metrics: [
    { label: "Lead Inquiries", value: "+185%", icon: TrendingUp },
    { label: "Follower Growth", value: "+8K", icon: Users },
    { label: "Monthly Reach", value: "100K+", icon: Eye },
  ],
  results: "Generated 200+ qualified leads through organic social content and paid campaigns.",
},
    {
  name: "Flashmob Nation",
  category: "Branding & Website",
  industry: "Fashion & Retail",
  description: "Developed complete brand identity and website to position Flashmob Nation as Dubai's go-to fashion collective for stylish global travelers and trendsetters.",
  image: Flan,
  link: "https://flashmobnation.com/",
  metrics: [
    { label: "Website Visits", value: "+5K", icon: Eye },
    { label: "Leads Captured", value: "+320", icon: Users },
    { label: "Engagement Rate", value: "18%", icon: TrendingUp },
  ],
  results: "Viral food content drove massive foot traffic and established brand as local favorite.",
},
    {
  name: "PureGym UAE",
  category: "Social Media",
  industry: "Health & Wellness",
  description: "Developed a high-impact social media strategy to boost local awareness, drive membership sign-ups, and position PureGym as Dubai's go-to affordable fitness brand.",
  image: Pure,
  link: "https://www.instagram.com/puregymae",
  metrics: [
    { label: "Follower Growth", value: "+5K", icon: Users },
    { label: "Engagement Rate", value: "16.8%", icon: TrendingUp },
    { label: "Monthly Reach", value: "42K+", icon: Eye },
  ],
  results: "Created engaged community that regularly attends classes and refers new members.",
},
    {
  name: "SKIN 111",
  category: "Paid Ads",
  industry: "Health & Wellness",
  description: "Ran targeted Meta and Google Ads campaigns to drive consultations, appointments, and conversions for aesthetic treatments and wellness services.",
  image: SKIN,
  link: "https://www.instagram.com/skin.111",
  metrics: [
    { label: "Increase in Appointment Bookings", value: "+35%", icon: TrendingUp },
    { label: "New Leads Generated", value: "+4.5K", icon: Users },
    { label: "Ad Impressions / Monthly Reach", value: "120K+", icon: Eye },
  ],
  results: "Strategic influencer campaigns and ads drove significant revenue increase.",
},
    {
  name: "Excelsa Café",
  category: "Content Creation",
  industry: "Food & Beverage",
  description: "Produced high-quality, visually engaging content to showcase specialty brews, gourmet delights, and café ambience — driving footfall and online engagement.",
  image: caf,
  link: "https://www.instagram.com/excelsacafe.uae/",
  metrics: [
    { label: "Follower Growth", value: "+2.1K", icon: Users },
    { label: "Engagement Rate", value: "18%", icon: TrendingUp },
    { label: "Content Reach", value: "35K+", icon: Eye },
  ],
  results: "Positioned executives as industry leaders, generating high-quality B2B leads.",
},
    {
  name: "Tranquil Boutique",
  category: "Branding & Website",
  industry: "Travel & Tourism",
  description: "Created premium branding and a website for Dubai luxury holiday homes, emphasizing exclusivity and seamless booking.",
  image: Tra,
  link: "https://www.tranquilboutique.com/",
  metrics: [
    { label: "Website Visits", value: "+3K", icon: Eye },
    { label: "Leads Captured", value: "+250", icon: Users },
    { label: "Engagement Rate", value: "22%", icon: TrendingUp },
  ],
  results: "Captivating travel content inspired wanderlust and drove significant booking increases.",
},
  ];

  const filters = ["All", "Social Media", "Content Creation", "Paid Ads", "Branding & Website"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const reviews = [
    {
  name: "Omar Al Farsi",
  company: "Espace Real Estate",
  role: "Sales Director",
  rating: 5,
  text: "Working with Traffic Jet was a game-changer for our property marketing. Lead inquiries surged 185%, and our social audience grew steadily. Their luxury-focused approach really speaks to high-end buyers.",
  date: "December 2024",
},
    {
  name: "Rami Haddad",
  company: "Flashmob Nation",
  role: "Founder",
  rating: 5,
  text: "Traffic Jet helped us establish a strong brand identity and website. The design captured our style perfectly and helped us connect with the right audience. Website traffic and engagement grew quickly.",
  date: "November 2024",
},
    {
      name: "Ayesha Khan",
      company: "PureGym UAE",
      role: "Marketing Manager",
      rating: 5,
      text: "Traffic Jet Media completely revitalized our social media presence. Their strategy increased our engagement and membership inquiries significantly. The team is professional, responsive, and truly understands fitness marketing.",
      date: "October 2024",
    },
    {
      name: "Dr. Sara Al Mazrouei",
      company: "SKIN III",
      role: "Clinic Director",
      rating: 5,
      text: "Traffic Jet's paid ad campaigns delivered incredible results. Appointment bookings went up 35% and we generated thousands of new leads. Their targeting and creative strategy are spot-on for the wellness and aesthetics market.",
      date: "September 2024",
    },
    {
      name: "Leila Hassan",
      company: "Excelsa Café",
      role: "Owner",
      rating: 5,
      text: "The content Traffic Jet created for us completely transformed our Instagram. Footfall increased, and engagement skyrocketed. Their visuals perfectly captured the vibe of our café - we couldn't be happier!",
      date: "August 2024",
    },
    {
      name: "Maya Kapoor",
      company: "Tranquil Boutique",
      role: "Co-Founder",
      rating: 5,
      text: "Traffic Jet crafted our branding and website beautifully. It highlights the luxury and exclusivity of our holiday homes while driving bookings and leads. Professional team with amazing attention to detail.",
      date: "July 2024",
    },
  ];

  const stats = [
    { label: "Average Rating", value: "5.0" },
    { label: "Client Reviews", value: "150+" },
    { label: "Satisfaction Rate", value: "99%" },
    { label: "Repeat Clients", value: "92%" },
  ];

  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    e.preventDefault();
    setTouchedIndex(index);

    // Clear previous timeout
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }

    // Set timeout to clear touch state after 7 seconds
    touchTimeoutRef.current = setTimeout(() => {
      setTouchedIndex(null);
    }, 7000);
  };

  const handleTouchEnd = () => {
    // Keep showing for a bit, then hide
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    touchTimeoutRef.current = setTimeout(() => {
      setTouchedIndex(null);
    }, 7000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Flight Log
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Successful campaigns and transformations we're proud to showcase
          </p>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className="px-6 py-2"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer block"
                onTouchStart={(e) => handleTouchStart(index, e)}
                onTouchEnd={handleTouchEnd}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  touchedIndex === index ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-white/90 mb-4">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-lg font-bold">{metric.value}</p>
                          <p className="text-xs text-white/70">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Client Satisfaction</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Passenger Reviews</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Don't just take our word for it—see what our clients say about their journey with Traffic Jet Media.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                  "{review.text}"
                </p>

                {/* Author info */}
                <div className="space-y-1 pt-4 border-t">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                  <p className="text-sm text-primary font-medium">{review.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a case study for your brand. Schedule a free consultation to get started.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-elevation text-lg px-8 py-6">
            <Link to="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;