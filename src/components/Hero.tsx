import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-20 relative overflow-hidden">
      <div className="w-full max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="flex-1 space-y-3 md:space-y-4 animate-in fade-in slide-in-from-bottom duration-700 text-center lg:text-left">
            <p className="text-sm md:text-base lg:text-lg" style={{ color: 'hsl(25, 95%, 53%)' }}>Hi, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="gradient-text font-extrabold">PRANAVI CHINTHAKAYALA</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground font-bold typing-animation inline-block">
              Cloud & DevOps Engineer
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl pt-2">
              Computer Science Graduate skilled in AWS Cloud, DevOps, Python, and SQL. 
              Hands-on experience in deploying scalable infrastructures using Terraform, Docker, and Kubernetes. 
              Proficient in CI/CD pipelines, Linux administration, and machine learning applications.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4 md:pt-6">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 border-0 text-sm md:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a 
                href="/PRANAVI_CHINTHAKAYALA_Resume.pdf" 
                download="Pranavi_Chinthakayala_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 h-10 md:h-11 rounded-md px-6 md:px-8 bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium text-sm border-0"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Photo - Right Side */}
          <div className="flex-shrink-0 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] animate-float">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-30 blur-2xl animate-glow-pulse" />
              
              {/* Outer decorative ring - rotating */}
              <div className="absolute -inset-2 rounded-full border border-primary/20 animate-rotate-slow" />
              
              {/* Border ring with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 p-[3px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/10 shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Pranavi Chinthakayala" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
