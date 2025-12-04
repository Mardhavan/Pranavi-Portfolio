import { FolderGit2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const projects = [
    {
      title: "Online Transaction Fraud Detection",
      tech: "Python, Django, SQL, Docker, GitHub Actions",
      description:
        "Built a robust fraud detection system with real-time capabilities and automated deployments.",
      achievements: [
        "Engineered and preprocessed transaction datasets with Python (Pandas, NumPy) and SQL, applying feature engineering, class balancing, and cross-validation",
        "Trained and tuned Decision Tree and ensemble models using scikit-learn, achieving 82% detection accuracy while reducing false positives",
        "Integrated models into a Django web application, connected to a SQL backend",
        "Deployed via Docker & GitHub Actions, enabling secure, real-time fraud detection with automated builds",
      ],
    },
    {
      title: "Children's ADHD Detection",
      tech: "Python, TensorFlow, OpenCV, Flask, Docker, AWS S3",
      description:
        "Developed an ML-powered diagnostic tool for ADHD detection using video behavioral analysis.",
      achievements: [
        "Extracted behavioral pose features from video data using OpenCV/MediaPipe and processed them with NumPy/Pandas",
        "Built and evaluated SVM and TensorFlow CNN-LSTM models, achieving 78% diagnostic accuracy",
        "Deployed the trained model via TensorFlow Serving + Flask API, containerized with Docker",
        "Implemented version control for datasets and models using DVC & S3 storage",
      ],
    },
    {
      title: "Highly Available 3-Tier Architecture",
      tech: "AWS, Terraform, ECS/Fargate, GitHub Actions, Grafana",
      description:
        "Designed and implemented a production-ready, highly available cloud infrastructure on AWS.",
      achievements: [
        "Designed and provisioned VPC with public/private subnets, NAT Gateway, and IAM roles using Terraform modules",
        "Implemented EC2 Auto Scaling Groups with Application Load Balancer for fault tolerance and zero-downtime scaling",
        "Configured Amazon RDS (MySQL Multi-AZ) with automated backups, snapshots, and read replicas",
        "Built CI/CD pipelines with GitHub Actions and containerized services deployed to ECS/Fargate",
        "Monitored health with CloudWatch dashboards and Grafana, enforced compliance through KMS encryption, IAM policies, and WAF",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-0 cursor-glow-section">
      <div className="w-full max-w-full md:px-8 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on experience building scalable, production-ready applications
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-glow transition-all bg-gradient-card relative overflow-hidden group hover-glow-card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <div className="flex items-center text-primary gap-2">
                      <FolderGit2 className="h-4 w-4" />
                      <span className="font-semibold text-sm">{project.tech}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
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
