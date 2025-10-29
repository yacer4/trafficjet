import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Target, Users, TrendingUp } from "lucide-react";
import yasar from "@/assets/yasar.jpg";
import taher from "@/assets/taher.jpg";
import lina from "@/assets/lina.jpg";
import ethan from "@/assets/ethan.jpg";

const About = () => {
  const team = [
  {
    name: "Yasar Khan",
    role: "Founder & Chief Pilot",
    bio: "Leading Traffic Jet Media with a vision for innovative social media strategies and creative campaigns that help brands soar to new heights.",
    image: yasar,
  },
  {
    name: "Taher Rangwala",
    role: "Co-Pilot & Digital Strategist",
    bio: "Guiding brands with creative social media strategies and innovative content ideas to help businesses reach new heights.",
    image: taher,
  },
  {
    name: "Lina Mansouri",
    role: "Flight Assistant & Content Specialist",
    bio: "Focused on crafting engaging narratives and visuals that elevate brand presence and connect with audiences.",
    image: lina,
  },
  {
    name: "Ethan James",
    role: "Navigator & Engagement Officer",
    bio: "Ensuring every campaign reaches its destination by optimizing audience engagement and enhancing brand visibility across social platforms.",
    image: ethan,
  },
];
  const milestones = [
  { year: "2020", event: "Traffic Jet Media takes flight" },
  { year: "2021", event: "Reached 50+ client partnerships" },
  { year: "2022", event: "Expanded to international markets" },
  { year: "2023", event: "Launched influencer division" },
  { year: "2024", event: "100+ brands elevated" },
  { year: "2025", event: "Industry awards & recognition" },
];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every campaign is optimized for measurable success and ROI.",
    },
    {
      icon: Users,
      title: "Client-First",
      description: "Your success is our mission. We're partners in your journey.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of trends to keep your brand at the forefront.",
    },
    {
      icon: Plane,
      title: "Excellence",
      description: "Premium quality in every detail, from strategy to execution.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Journey
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From startup to industry leader, we've been helping brands soar since 2020.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and campaign
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-elevation transition-all">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Meet the Crew</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experts behind your brand's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevation transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Journey So Far</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our flight path
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pt-0">
                    <Card className="p-4 hover:shadow-elevation transition-all">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </Card>
                  </div>
                </div>
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
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to take your brand to new heights? Let's chart your course together.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-elevation text-lg px-8 py-6">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
