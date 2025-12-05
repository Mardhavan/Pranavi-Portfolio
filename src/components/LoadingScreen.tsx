import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated Loader */}
      <div className="relative mb-8 w-24 h-24">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-accent animate-spin" style={{ animationDuration: '1.5s' }} />
        
        {/* Middle pulsing ring */}
        <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-secondary border-l-primary animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        
        {/* Inner glowing core */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary via-accent to-secondary animate-pulse">
          <div className="absolute inset-1 rounded-full bg-background" />
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-[42%] rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
        
        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 120}deg) translateX(40px) translateY(-50%)`,
              animation: `spin 2s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        
        {/* Background glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 animate-pulse" />
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-muted-foreground text-sm tracking-wider">
        Loading Portfolio...
      </p>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
