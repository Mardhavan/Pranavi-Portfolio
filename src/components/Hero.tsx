import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-0 py-16 md:py-20 relative overflow-hidden">
      <div className="w-full max-w-full md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-left duration-700 w-full">
            <p className="text-sm md:text-base lg:text-lg" style={{ color: 'hsl(25, 95%, 53%)' }}>Hi, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text font-extrabold">MARDHAVAN ABBATHINI</span>
            </h1>
            
            {/* Photo on mobile - shown here */}
            <div className="flex justify-center md:hidden py-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow float-animation">
                  <img 
                    src={profilePhoto} 
                    alt="Mardhavan Abbathini - Business Development Associate" 
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-lg md:text-xl lg:text-3xl text-foreground font-bold typing-animation inline-block">
              Business Development Associate
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl pt-2">
              Transforming business challenges into growth opportunities through strategic B2C sales, 
              client acquisition, and data-driven CRM solutions.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
            <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 border-0 text-sm md:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a 
                href="/MARDHAVAN_ABBATHINI_BDA.pdf" 
                download="Mardhavan_Abbathini_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 h-10 md:h-11 rounded-md px-6 md:px-8 bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium text-sm border-0"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Photo on desktop - shown here */}
          <div className="hidden md:flex justify-end items-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/30 shadow-glow float-animation">
                <img 
                  src={profilePhoto} 
                  alt="Mardhavan Abbathini - Business Development Associate" 
                  className="w-full h-full object-cover object-center scale-110"
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
