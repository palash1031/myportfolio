import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GrFan } from 'react-icons/gr';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile sheet on Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          aria-label="Back to top"
          className="glass glass-hover group flex h-11 w-11 shrink-0 animate-fade-up items-center justify-center rounded-full opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <GrFan
            size={20}
            className="text-primary transition-transform duration-700 group-hover:rotate-180"
          />
        </button>

        {/* Desktop links — one floating glass pill */}
        <div
          className={`glass hidden items-center gap-1 rounded-full p-1.5 transition-all duration-500 md:flex ${
            isScrolled ? 'shadow-lg' : ''
          }`}
        >
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative animate-fade-up rounded-full px-4 py-2 text-sm font-medium tracking-wide opacity-0 transition-colors duration-300 lg:px-5 ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.08}s`, animationFillMode: 'forwards' }}
            >
              {activeSection === item.id && (
                <span className="glass-subtle absolute inset-0 rounded-full" />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right cluster */}
        <div
          className="flex animate-fade-up items-center gap-3 opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <div className="glass hidden items-center gap-2 rounded-full px-4 py-2.5 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground">Probably awake right now</span>
          </div>

          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            {isMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`px-6 md:hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`glass-strong mt-3 overflow-hidden rounded-3xl transition-all duration-500 ${
            isMenuOpen
              ? 'max-h-96 translate-y-0 opacity-100'
              : 'max-h-0 -translate-y-2 border-transparent opacity-0 shadow-none'
          }`}
        >
          <div className="flex flex-col gap-1 p-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                tabIndex={isMenuOpen ? 0 : -1}
                className={`rounded-2xl px-4 py-3 text-left font-syne text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'glass-subtle text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
