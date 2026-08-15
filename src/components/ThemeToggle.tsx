import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`glass glass-hover group relative h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    >
      {/* The two icons swap by sliding through each other */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Sun
          className={`absolute h-[18px] w-[18px] text-accent transition-all duration-500 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          className={`absolute h-[18px] w-[18px] text-primary transition-all duration-500 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
