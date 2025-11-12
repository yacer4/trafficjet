import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Plane, TrendingUp, Target, Sparkles, Users, Star } from "lucide-react";
import heroJet from "@/assets/hero-jet.jpg";

const Home = () => {
  const taglines = [
    "Cleared for Takeoff",
    "Now Boarding: Premium Social Media Marketing",
    "Ready for Takeoff – Digital Campaigns That Soar",
    "Check-In Open – Time to Elevate Your Brand",
    "All Passengers Onboard – Next Stop: Viral Reach",
    "Runway Cleared – Let's Launch Your Campaign",
    "Now Departing: Destination Digital Success",
    "Fasten Your Seatbelts – Engagement Levels Rising",
    "Prepare for Liftoff – Social Growth in Progress",
    "Gate Open: Marketing Flight 101 Ready to Depart",
    "Final Call: Your Brand Is Ready for Takeoff",
  ];

  const [currentTagline, setCurrentTagline] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    setCurrentTagline(randomTagline);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      icon: Target,
      title: "Social Media Strategy",
      description: "Custom flight plans to reach your target audience and dominate your industry."
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising",
      description: "ROI-focused campaigns that accelerate your brand to cruising altitude."
    },
    {
      icon: Sparkles,
      title: "Branding & Web Design",
      description: "Premium visual identity that makes your brand stand out in any sky."
    },
    {
      icon: Users,
      title: "Content Creation",
      description: "Engaging content that connects with passengers on their journey."
    },
  ];

  const testimonials = [
    {
  name: "Ayesha Khan",
  company: "PureGym UAE",
  rating: 5,
  text: "Traffic Jet Media revitalized our social media. Engagement and membership inquiries surged!"
},
{
  name: "Omar Al Farsi",
  company: "Espace Real Estate",
  rating: 5,
  text: "Lead inquiries and social growth skyrocketed. Their luxury-focused approach works perfectly."
},
{
  name: "Leila Hassan",
  company: "Excelsa Café",
  rating: 5,
  text: "Their content transformed our Instagram. Footfall and engagement increased noticeably!"
},
{
  name: "Sara Al Mazrouei",
  company: "SKIN III",
  rating: 5,
  text: "Paid ad campaigns delivered amazing results. Appointment bookings and leads jumped fast!"
},
{
  name: "Rami Haddad",
  company: "Flashmob Nation",
  rating: 5,
  text: "Brand identity and website design captured our style perfectly. Traffic and engagement grew."
},
{
  name: "Maya Kapoor",
  company: "Tranquil Boutique",
  rating: 5,
  text: "Branding and website highlight our luxury homes and boosted bookings. Amazing attention to detail!"
}
  ];

  // Function to shuffle and distribute testimonials uniquely - memoized to prevent re-renders
  const randomizedRows = useMemo(() => {
    const getRandomizedRow = (rowIndex: number) => {
      const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
      // Rotate the array based on row index to ensure different order per row
      const rotated = [...shuffled.slice(rowIndex), ...shuffled.slice(0, rowIndex)];
      return [...rotated, ...rotated];
    };

    return {
      row1: getRandomizedRow(0),
      row2: getRandomizedRow(1),
      row3: getRandomizedRow(2),
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${heroJet})`,
            backgroundPosition: window.innerWidth < 768 ? '30% center' : 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up -mt-24 md:-mt-16 sm:mt-8">
            <div className="inline-flex items-center gap-2 bg-primary/30 backdrop-blur-sm border border-primary rounded-full px-6 py-2 text-sm">
              <div className="flex items-center gap-2 animate-pulse">
                <Plane className="w-4 h-4 text-primary-glow" />
                <span className="text-primary-glow font-semibold">{currentTagline}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mt-16">
              Your Brand,<br />
              <span className="text-gradient">Cleared for <br />
              Take-Off</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              We help businesses reach new heights through creative social media marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="shadow-jet text-lg px-8 py-6">
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-foreground hover:bg-white hover:text-primary text-lg px-8 py-6">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Flight Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic services designed to propel your brand to viral altitude
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-jet transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-2"
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 space-y-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Passenger Reviews
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about their journey with us
            </p>
          </div>

          {/* Row 1 - Scrolling Right */}
          <div className="relative">
            <div className={`flex gap-4 ${isMobile ? 'animate-scroll-right-mobile' : 'animate-scroll-right'}`}>
              {randomizedRows.row1.map((testimonial, index) => (
                <Link
                  key={`row1-${index}`}
                  to="/portfolio#reviews"
                  className={`flex-shrink-0 relative cursor-pointer hover:scale-[1.02] transition-transform h-[150px] ${isMobile ? 'w-[304px]' : 'w-[380px]'}`}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-xl relative overflow-hidden flex border">
                    {/* Left side - Review and Rating */}
                    <div className={`p-5 flex flex-col justify-between ${isMobile ? 'w-[190px]' : 'w-[200px]'}`}>
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-foreground font-medium text-xs leading-snug flex-1 line-clamp-4">
                        "{testimonial.text}"
                      </p>

                    </div>

                    {/* Vertical dotted divider - perforation style */}
                    <div className={`flex flex-col justify-between items-center -my-3 px-2 ${isMobile ? 'ml-0' : 'ml-20'}`}>
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                      ))}
                    </div>

                    {/* Right side - Name and Company (rotated) */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-2 text-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                        <p className="font-bold text-foreground text-base tracking-wider break-words max-w-[120px]">{testimonial.name.toUpperCase()}</p>
                        <p className="text-muted-foreground text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Left */}
          <div className="relative">
            <div className={`flex gap-4 ${isMobile ? 'animate-scroll-left-mobile' : 'animate-scroll-left'}`}>
              {randomizedRows.row2.map((testimonial, index) => (
                <Link
                  key={`row2-${index}`}
                  to="/portfolio#reviews"
                  className={`flex-shrink-0 relative cursor-pointer hover:scale-[1.02] transition-transform h-[150px] ${isMobile ? 'w-[304px]' : 'w-[380px]'}`}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-xl relative overflow-hidden flex border">
                    {/* Left side - Review and Rating */}
                    <div className={`p-5 flex flex-col justify-between ${isMobile ? 'w-[190px]' : 'w-[200px]'}`}>
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-foreground font-medium text-xs leading-snug flex-1 line-clamp-4">
                        "{testimonial.text}"
                      </p>

                    </div>

                    {/* Vertical dotted divider - perforation style */}
                    <div className={`flex flex-col justify-between items-center -my-3 px-2 ${isMobile ? 'ml-0' : 'ml-20'}`}>
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                      ))}
                    </div>

                    {/* Right side - Name and Company (rotated) */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-2 text-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                        <p className="font-bold text-foreground text-base tracking-wider break-words max-w-[120px]">{testimonial.name.toUpperCase()}</p>
                        <p className="text-muted-foreground text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 3 - Scrolling Right */}
          <div className="relative">
            <div className={`flex gap-4 ${isMobile ? 'animate-scroll-right-mobile' : 'animate-scroll-right'}`}>
              {randomizedRows.row3.map((testimonial, index) => (
                <Link
                  key={`row3-${index}`}
                  to="/portfolio#reviews"
                  className={`flex-shrink-0 relative cursor-pointer hover:scale-[1.02] transition-transform h-[150px] ${isMobile ? 'w-[304px]' : 'w-[380px]'}`}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-xl relative overflow-hidden flex border">
                    {/* Left side - Review and Rating */}
                    <div className={`p-5 flex flex-col justify-between ${isMobile ? 'w-[190px]' : 'w-[200px]'}`}>
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-foreground font-medium text-xs leading-snug flex-1 line-clamp-4">
                        "{testimonial.text}"
                      </p>

                    </div>

                    {/* Vertical dotted divider - perforation style */}
                    <div className={`flex flex-col justify-between items-center -my-3 px-2 ${isMobile ? 'ml-0' : 'ml-20'}`}>
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                      ))}
                    </div>

                    {/* Right side - Name and Company (rotated) */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-2 text-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                        <p className="font-bold text-foreground text-base tracking-wider break-words max-w-[120px]">{testimonial.name.toUpperCase()}</p>
                        <p className="text-muted-foreground text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
            Ready to Take Flight?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's grow your brand together. Schedule a free strategy call and discover how we can elevate your social media presence.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-elevation text-lg px-8 py-6">
            <Link to="/contact">
              Book Your Flight Now
              <Plane className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
