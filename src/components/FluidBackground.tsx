import { useEffect, useState } from 'react';

const FluidBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cursor glow effect */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Primary blob */}
      <div
        className="absolute w-[600px] h-[600px] bg-primary/20 fluid-blob"
        style={{
          top: '10%',
          left: '60%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      {/* Secondary blob */}
      <div
        className="absolute w-[500px] h-[500px] bg-accent/15 fluid-blob"
        style={{
          top: '50%',
          left: '10%',
          animationDelay: '-7s',
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute w-[400px] h-[400px] bg-fluid-coral/10 fluid-blob"
        style={{
          top: '70%',
          left: '70%',
          animationDelay: '-14s',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />

      {/* Small floating particles */}
      <div className="absolute w-2 h-2 rounded-full bg-primary/40 animate-float" style={{ top: '20%', left: '20%' }} />
      <div className="absolute w-3 h-3 rounded-full bg-accent/30 animate-float" style={{ top: '60%', left: '80%', animationDelay: '-2s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-fluid-peach/40 animate-float" style={{ top: '80%', left: '40%', animationDelay: '-4s' }} />

      {/* Grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default FluidBackground;
