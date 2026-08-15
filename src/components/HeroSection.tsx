import { ArrowDown, Mail, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {/* Intro chip */}
          <div
            className="glass inline-flex animate-fade-up items-center gap-2 rounded-full px-4 py-2 opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <p className="font-space text-sm tracking-wide text-muted-foreground">
              Hello, I&apos;m
            </p>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <div className="overflow-hidden pb-1">
              <h1
                className="animate-text-reveal font-syne text-5xl font-bold leading-none tracking-tighter opacity-0 sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                <span className="block">Palash</span>
              </h1>
            </div>
            <div className="overflow-hidden pb-2">
              <h1
                className="fluid-text animate-text-reveal font-syne text-5xl font-bold leading-none tracking-tighter opacity-0 sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
              >
                <span className="block">Patel</span>
              </h1>
            </div>
          </div>

          {/* Role & description on a glass slab */}
          <div
            className="glass max-w-xl animate-fade-up space-y-4 rounded-3xl p-6 opacity-0 md:p-8"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
              <p className="font-syne text-xl font-medium text-foreground md:text-2xl">
                Software Engineer
              </p>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a Software Engineer passionate about creating impactful and aesthetic
              digital experiences.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex animate-fade-up flex-wrap gap-4 pt-2 opacity-0"
            style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollTo('work')}
              className="glass-button group rounded-full px-8 py-4 font-syne font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="glass glass-hover group rounded-full px-8 py-4 font-syne font-semibold text-foreground"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('work')}
        aria-label="Scroll to work experience"
        className="glass glass-hover absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-fade-up flex-col items-center gap-2 rounded-full px-3 py-4 opacity-0 md:flex"
        style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-float text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
