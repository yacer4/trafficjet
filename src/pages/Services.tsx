import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import currencySymbol from "@/assets/dirham.jpg";
import {
  Target,
  TrendingUp,
  Sparkles,
  Users,
  BarChart3,
  Megaphone,
  Camera,
  Lightbulb,
  ArrowRight,
  Check,
  Plane,
  Star,
  Crown,
} from "lucide-react";

const Services = () => {
  const mainServices = [
 {
  icon: Target,
  title: "Social Media Strategy",
  tagline: "Your Strategic Flight Plan",
  description:
    "We analyze your current social media presence and craft a clear, data-driven roadmap for growth. From audience insights to posting strategy, we define exactly what to do for better engagement and results.",
  features: [
    "Audience & competitor analysis",
    "Platform review & optimization",
    "Content direction & calendar framework",
    "Growth goals & KPI setup",
    "Actionable recommendations",
  ],
},
 {
  icon: TrendingUp,
  title: "Paid Advertising",
  tagline: "Accelerate to Cruising Altitude",
  description:
    "We run high-impact advertising campaigns that deliver measurable results. Across Facebook, Instagram, LinkedIn, and Google, we target the right audience, optimize your budget, and turn clicks into customers.",
  features: [
    "Campaign strategy & setup",
    "Ad creative design & copywriting",
    "Audience targeting & retargeting",
    "Budget optimization & management",
    "Performance tracking & A/B testing",
  ],
},
    {
  icon: Sparkles,
  title: "Branding & Web Design",
  tagline: "Your Brand, Cleared for Takeoff",
  description:
    "We build premium brand identities and websites that make your business unforgettable. From visual assets to fully functional, high-converting websites, we craft designs and experiences that soar.",
  features: [
    "Logo & brand identity design",
    "Social media graphics & templates",
    "Brand guidelines & style guides",
    "Marketing collateral & visual assets",
    "Website & landing page design & development",
  ],
},
    {
  icon: Users,
  title: "Content Creation",
  tagline: "Engage Your Passengers",
  description:
    "We craft scroll-stopping AI-powered content that captures attention and drives engagement. From social media posts to UGC-style videos and branded visuals, every piece is designed to tell your story and convert viewers into customers.",
  features: [
    "AI photo & video ad creation",
    "AI UGC & influencer-style videos",
    "Social media post creation & copywriting",
    "Graphic design & animations",
    "Content repurposing & optimization",
  ],
},
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to track your growth and optimize performance.",
    },
    {
      icon: Megaphone,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your reach.",
    },
    {
      icon: Camera,
      title: "Community Management",
      description: "Engage with your audience and build lasting relationships.",
    },
    {
      icon: Lightbulb,
      title: "Strategy Consulting",
      description: "Expert guidance to navigate the digital marketing landscape.",
    },
  ];

  const packages = [
    {
  icon: Plane,
  name: "Economy Class",
  tagline: "Basic Package",
  price: "499",
  currency: "symbol",
  period: "/month",
  description: "Affordable social media flight plan to get your brand off the ground.",
  gate: "TJM01",
  flight: "Starter2025",
  features: [
    {
      main: "10 posts per month",
      sub: ["7 static posts", "2 carousels", "1 reel"]
    },
    "1 social media platform",
    "Basic engagement monitoring",
    "Monthly performance report",
    "Content calendar",
    "AI-powered image generation for posts",
  ],
  cta: "Book Your Seat",
  popular: false,
  gradient: "from-gray-50 to-gray-100",
},
    {
      icon: Star,
      name: "Business Class",
      tagline: "Standard Package",
      price: "1399",
      currency: "symbol",
      period: "/month",
      description: "Fly smoother with a full-service marketing strategy.",
      gate: "TJM02",
      flight: "Growth2025",
      features: [
  {
    main: "20 posts per month",
    sub: ["12 static posts", "5 carousels", "3 reels"]
  },
  "2 social media platforms",
  {
    main: "Ad campaign setup & management",
    sub: ["2 Ad creatives"]
  },
  "Content calendar & strategy",
  "Bi-weekly performance reports",
  "Community management",
  "AI-powered image and video generation for posts",
],
      cta: "Upgrade to Business Class",
      popular: true,
      gradient: "from-primary/5 to-primary/10",
    },
    {
      icon: Sparkles,
      name: "First Class",
      tagline: "Premium Package",
      price: "2499",
      currency: "symbol",
      period: "/month",
      description: "Experience luxury marketing — your brand, our first priority.",
      gate: "TJM03",
      flight: "Elite2025",
      features: [
  {
    main: "30+ posts per month",
    sub: ["18 static posts", "8 carousels", "6 reels"]
  },
  "3+ social media platforms",
  {
    main: "Full ad campaign management",
    sub: ["5 ad creatives", "Campaigns across 3+ platforms"]
  },
  "Advanced analytics dashboard",
  "Weekly strategy calls",
  "Priority support 24/7",
  "Dedicated account manager",
  "AI-powered image and video generation for posts",
  "AI-powered UGC (User Generated Content) creation",
],
      cta: "Take the First Class Route",
      popular: false,
      gradient: "from-amber-50 to-amber-100",
    },
    {
      icon: Crown,
      name: "Private Jet",
      tagline: "Custom Charter",
      price: "Custom",
      period: "pricing",
      description: "Your exclusive charter to unlimited growth.",
      gate: "TJM∞",
      flight: "Custom2025",
      features: [
  "Fully customizable package",
  "Unlimited platforms & content",
  "360° digital management",
  "Fully tailored advertising campaigns",
  "Advanced AI photo, video, and UGC content",
  "Dedicated creative & Management team",
  "Influencer & PR campaigns",
  "White-glove service",
  "Everything from First Class +",
],
      cta: "Design Your Charter",
      popular: false,
      gradient: "from-purple-50 to-purple-100",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Everything you need to soar in the digital space
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="p-8 md:p-12 hover:shadow-jet transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="text-primary font-semibold mb-4">{service.tagline}</p>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting services to complete your marketing journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-elevation transition-all cursor-pointer group">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Packages</h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Choose your class and take flight with the perfect package for your brand
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-jet transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  pkg.popular ? "border-2 border-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-6 bg-gradient-to-br ${pkg.gradient}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${pkg.popular ? 'bg-primary text-white' : ''}`}>
                      <pkg.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div>Gate: {pkg.gate}</div>
                      <div>Flight: {pkg.flight}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-4">{pkg.tagline}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      {pkg.currency === "symbol" && (
                        <img src={currencySymbol} alt="currency" className="w-6 h-6" />
                      )}
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 italic">
                    "{pkg.description}"
                  </p>
                </div>

                <div className="p-6 space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
  {pkg.features.map((feature, idx) => (
    <li key={idx}>
      {typeof feature === 'object' && feature.main ? (
        <div className="space-y-1">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature.main}</span>
          </div>
          <ul className="ml-11 space-y-0.5">
            {feature.sub.map((subFeature, subIdx) => (
              <li key={subIdx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm text-muted-foreground/70">{subFeature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">{feature}</span>
        </div>
      )}
    </li>
  ))}
</ul>

                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? 'shadow-jet' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">{pkg.cta}</Link>
                  </Button>
                </div>

                {/* Boarding Pass Perforation Effect */}
                <div className="absolute left-0 right-0 top-[240px] h-[2px] bg-border">
                  <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-background border-2 border-border" />
                  <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-background border-2 border-border" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              All packages include creative strategy, ongoing support, and monthly reporting.
              <br />
              Not sure which package is right for you? We'll help you choose.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
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
            Ready to Take Off?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help your brand reach new heights. Book a free strategy call today.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-elevation text-lg px-8 py-6">
            <Link to="/contact">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;