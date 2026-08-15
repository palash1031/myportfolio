import { useEffect, useState } from 'react';
import { sections } from '@/lib/sections';

/**
 * Tracks which section is currently in view.
 *
 * Uses a scroll listener rather than IntersectionObserver because sections have
 * wildly different heights — we want "whichever section covers the sight line",
 * which is simpler to express directly than as a set of thresholds.
 */
export const useActiveSection = (offset = 140) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    let frame: number | null = null;

    const update = () => {
      frame = null;

      // Bottom of the page always resolves to the last section, otherwise a
      // short final section can never win the sight-line test.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [offset]);

  return activeSection;
};
