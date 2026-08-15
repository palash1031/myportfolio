import { useState, useEffect, useRef } from 'react';
import { GrFan } from 'react-icons/gr';
import ThemeToggle from '@/components/ThemeToggle';
import { sections, scrollToSection } from '@/lib/sections';
import { useActiveSection } from '@/hooks/use-active-section';

/** The bar starts airy over the hero and thickens as content passes beneath it.
 *  Three channels ramp together — blur is the least visible of them over a soft
 *  aurora, so fill (--nav-progress) and saturation do most of the actual work. */
const BLUR_MIN = 14;
const BLUR_MAX = 30;
const SATURATE_MIN = 150;
const SATURATE_MAX = 210;
const BLUR_RAMP = 420; // px of scroll to reach full thickness

/**
 * Top bar. On desktop it carries the section pill; on mobile it shrinks to
 * brand + status + theme, because navigation lives in the bottom tab bar.
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame: number | null = null;

    // These custom properties are inherited, so setting them on the <nav>
    // retunes every .glass child at once. Written straight to the node —
    // routing them through state would re-render the bar on every frame.
    const paint = (progress: number) => {
      const nav = navRef.current;
      if (!nav) return;

      const blur = BLUR_MIN + (BLUR_MAX - BLUR_MIN) * progress;
      const saturate = SATURATE_MIN + (SATURATE_MAX - SATURATE_MIN) * progress;

      nav.style.setProperty('--glass-blur', `${blur.toFixed(1)}px`);
      nav.style.setProperty('--glass-saturate', `${saturate.toFixed(0)}%`);
      nav.style.setProperty('--nav-progress', progress.toFixed(3));
    };

    // The solidify surface rests thin by design, so reduced-motion visitors get
    // pinned to a solid mid-state rather than left on the thin end forever.
    if (prefersReducedMotion) {
      paint(0.7);
      const onScrollStatic = () => setIsScrolled(window.scrollY > 50);
      onScrollStatic();
      window.addEventListener('scroll', onScrollStatic, { passive: true });
      return () => window.removeEventListener('scroll', onScrollStatic);
    }

    const update = () => {
      frame = null;
      const y = window.scrollY;

      setIsScrolled(y > 50);
      paint(Math.min(1, y / BLUR_RAMP));
    };

    // Coalesce to one write per frame; scroll events fire far faster than that.
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 md:px-6">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
          className="glass glass-solidify glass-hover group flex h-11 w-11 shrink-0 animate-fade-up items-center justify-center rounded-full opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <GrFan
            size={20}
            className="text-primary transition-transform duration-700 group-hover:rotate-180"
          />
        </button>

        {/* Desktop section pill */}
        <div
          className={`glass glass-solidify hidden items-center gap-1 rounded-full p-1.5 transition-all duration-500 md:flex ${
            isScrolled ? 'shadow-lg' : ''
          }`}
        >
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative animate-fade-up rounded-full px-4 py-2 text-sm font-medium tracking-wide opacity-0 transition-colors duration-300 lg:px-5 ${
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.08}s`, animationFillMode: 'forwards' }}
            >
              {activeSection === section.id && (
                <span className="glass-subtle absolute inset-0 rounded-full" />
              )}
              <span className="relative">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Right cluster */}
        <div
          className="flex animate-fade-up items-center gap-2.5 opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <div className="glass glass-solidify flex items-center gap-2 rounded-full px-3 py-2.5 md:px-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {/* Full sentence has no room on a phone — the dot alone carries it */}
            <span className="hidden text-xs text-muted-foreground lg:inline">
              Probably awake right now
            </span>
            <span className="text-xs text-muted-foreground lg:hidden">Awake</span>
          </div>

          <ThemeToggle className="glass-solidify" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
