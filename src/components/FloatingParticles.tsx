import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "circle" | "square" | "triangle";
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const shapes: Particle["type"][] = ["circle", "square", "triangle"];
    const generated: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setParticles(generated);
  }, []);

  const renderShape = (particle: Particle) => {
    const baseClasses = "absolute opacity-20 animate-particle";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
    };

    switch (particle.type) {
      case "circle":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-primary/40 to-accent/40`}
            style={style}
          />
        );
      case "square":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-sm bg-gradient-to-br from-accent/40 to-secondary/40 rotate-45`}
            style={style}
          />
        );
      case "triangle":
        return (
          <div
            key={particle.id}
            className={`${baseClasses} border-l-transparent border-r-transparent border-b-primary/30`}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeftWidth: particle.size / 2,
              borderRightWidth: particle.size / 2,
              borderBottomWidth: particle.size,
              background: "transparent",
            }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(renderShape)}
    </div>
  );
};

export default FloatingParticles;
