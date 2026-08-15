import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';
import { sections, scrollToSection } from '@/lib/sections';
import { useActiveSection } from '@/hooks/use-active-section';

const icons = {
  home: Home,
  work: Briefcase,
  projects: Layers,
  about: User,
  contact: Mail,
} as const;

/**
 * App-style bottom navigation. Replaces the hamburger sheet on small screens —
 * every section stays one thumb-tap away instead of two.
 */
const MobileTabBar = () => {
  const activeSection = useActiveSection();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-safe pt-2 md:hidden"
    >
      <div className="glass-strong flex items-stretch justify-between gap-1 rounded-[1.75rem] p-1.5">
        {sections.map((section) => {
          const Icon = icons[section.id];
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? 'true' : undefined}
              className="relative flex flex-1 flex-col items-center gap-1 rounded-3xl px-1 py-2.5 transition-colors duration-300"
            >
              {isActive && (
                <span className="glass-subtle absolute inset-0 rounded-3xl transition-opacity duration-300" />
              )}
              <Icon
                className={`relative h-[18px] w-[18px] transition-all duration-300 ${
                  isActive ? 'scale-110 text-primary' : 'text-muted-foreground'
                }`}
              />
              <span
                className={`relative text-[10px] font-medium leading-none tracking-tight transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileTabBar;
