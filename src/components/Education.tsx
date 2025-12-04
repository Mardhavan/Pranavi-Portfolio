import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Malla Reddy University, Hyderabad",
      period: "Sep 2020 - May 2024",
      description: "Strong foundation in computer science principles with focus on software development, cloud computing, and machine learning.",
      achievements: [
        "Developed expertise in AWS cloud infrastructure and DevOps practices",
        "Applied machine learning to real-world projects in fraud detection and healthcare",
        "Built full-stack applications with Python, SQL, and modern deployment pipelines",
      ],
    },
    {
      degree: "Board of Intermediate Education",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Narayana Junior College, Hyderabad",
      period: "Jun 2018 - Mar 2020",
      description: "Completed intermediate education with focus on science and mathematics.",
      achievements: [
        "Built strong analytical and problem-solving skills",
        "Developed foundation for engineering studies",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-0 cursor-glow-section">
      <div className="w-full max-w-full md:px-8 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous pursuit of knowledge
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-glow transition-all bg-gradient-card relative overflow-hidden hover-glow-card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">
                      {edu.degree} - {edu.field}
                    </h3>
                    <div className="flex items-center text-primary gap-2">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 font-medium">
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Award className="h-4 w-4" />
                    <h4>Key Highlights:</h4>
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
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

export default Education;
