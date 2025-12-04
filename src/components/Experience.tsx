import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Business Development Associate",
      company: "Applywizz",
      period: "August 2024 - Present",
      description:
        "Driving lead generation and sales pipeline optimization through strategic use of CRM platforms and sales automation tools. Managing client acquisition and account management in the EdTech and SaaS sectors.",
      achievements: [
        "Created dynamic lead generation strategy identifying 200+ qualified leads per quarter, improving pipeline by 35%",
        "Optimized outreach efforts through HubSpot CRM and Lemlist, achieving 35% improvement in reply rates and 40% faster response times",
        "Integrated HubSpot automation with Google Sheets, enhancing operational efficiency by 20%",
        "Collaborated with marketing and analytics teams, resulting in 22% increase in lead-to-demo conversion rates",
        "Developed custom business proposals securing contracts exceeding ₹15L in the EdTech sector",
        "Automated client onboarding process, reducing timelines by 25%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-0 cursor-glow-section">
      <div className="w-full max-w-full md:px-8 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-glow transition-all bg-gradient-card relative overflow-hidden group hover-glow-card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center text-primary gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 font-medium">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">▸</span>
                        {achievement}
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
  );
};

export default Experience;
