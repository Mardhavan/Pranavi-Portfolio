import { Cloud, Server, Code, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "AWS Cloud",
      description: "EC2, S3, Lambda, RDS, VPC, IAM, CloudWatch, ELB, Auto Scaling, CloudFormation",
    },
    {
      icon: Server,
      title: "DevOps & IaC",
      description: "Terraform, Docker, Kubernetes, Jenkins, GitHub Actions, CI/CD Pipelines",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Python, SQL, HTML, CSS with automation scripting capabilities",
    },
    {
      icon: Database,
      title: "Machine Learning",
      description: "SVM, Decision Trees, TensorFlow, Model Deployment & Automation",
    },
  ];

  const stats = [
    { value: "82%", label: "Fraud Detection Accuracy" },
    { value: "78%", label: "ADHD Diagnostic Accuracy" },
    { value: "3-Tier", label: "AWS Architecture" },
    { value: "5+", label: "Certifications" },
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
              Computer Science Graduate skilled in AWS Cloud, DevOps, Python, and SQL, with hands-on experience 
              in deploying scalable infrastructures on AWS using Terraform, Docker, and Kubernetes. Proficient 
              in CI/CD pipelines (Jenkins, GitHub Actions), Linux administration, and SQL database optimization. 
              Applied Python and machine learning to real-world projects in fraud detection and healthcare analytics. 
              Seeking roles as a Cloud Engineer, DevOps Engineer, or Python Developer to deliver automation-driven, 
              secure, and reliable solutions.
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
