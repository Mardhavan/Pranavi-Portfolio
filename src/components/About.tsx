import { Code, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "CRM & Sales Tech",
      description: "Expert in HubSpot, Salesforce, Apollo.io, and LinkedIn Sales Navigator",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "35% improvement in pipeline efficiency and 22% increase in conversions",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinker",
      description: "Data-driven approach to sales optimization and lead generation",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Secured contracts exceeding ₹15L through strategic partnerships",
    },
  ];

  const stats = [
    { value: "200+", label: "Qualified Leads/Quarter" },
    { value: "35%", label: "Pipeline Growth" },
    { value: "₹15L+", label: "Contracts Secured" },
    { value: "25%", label: "Faster Onboarding" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-0 bg-muted/30 cursor-glow-section">
      <div className="w-full max-w-full md:px-8 lg:px-12">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <Card className="p-6 md:p-8 bg-card/30 border-primary/10 backdrop-blur-sm hover-glow-card hover:shadow-glow transition-all">
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              As a Business Development Associate at Applywizz, I specialize in B2C sales, client acquisition, 
              and account management. My expertise lies in leveraging CRM platforms and 
              sales automation tools to efficiently manage sales pipelines and drive lead generation. 
              I've successfully optimized outreach efforts, achieving a 35% improvement in reply rates and 
              a 20% increase in operational efficiency.
            </p>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="group p-5 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/30 border-primary/10 hover:border-primary/30 hover-glow-card"
            >
              <div className="mb-3 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <highlight.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">{highlight.title}</h3>
              <p className="text-xs text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
