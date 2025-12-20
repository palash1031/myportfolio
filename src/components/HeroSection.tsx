import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {/* Intro line */}
          <div className="overflow-hidden">
            <p
              className="text-muted-foreground text-lg md:text-xl font-space tracking-wide opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-syne font-bold tracking-tighter leading-none opacity-0 animate-text-reveal"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                <span className="block">Palash</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-syne font-bold tracking-tighter leading-none fluid-text opacity-0 animate-text-reveal"
                style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
              >
                <span className="block">Patel</span>
              </h1>
            </div>
          </div>

          {/* Role & Description */}
          <div className="max-w-xl space-y-6">
            <div className="overflow-hidden">
              <p
                className="text-xl md:text-2xl font-syne font-medium text-foreground/90 opacity-0 animate-fade-up"
                style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
              >
                Software Engineer
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0 animate-fade-up"
                style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
              >
                I'm a Software Engineer passionate about creating impactful and aesthetic digital experiences.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={scrollToWork}
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-syne font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground font-syne font-semibold rounded-full transition-all duration-300 hover:bg-secondary hover:border-primary/50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
