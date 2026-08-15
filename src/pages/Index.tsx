import { useEffect, useState } from 'react';

import Navigation from '@/components/Navigation';
import MobileTabBar from '@/components/MobileTabBar';
import AuroraBackground from '@/components/AuroraBackground';
import FocalBlur from '@/components/FocalBlur';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Loading veil — frosts the page, then dissolves */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-2xl transition-all duration-700 ${
          isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="glass flex flex-col items-center gap-4 rounded-3xl px-10 py-8">
          <div className="relative">
            <span className="fluid-text font-syne text-4xl font-bold">PP</span>
            <div className="absolute -inset-5 animate-pulse-glow rounded-full bg-primary/20 blur-xl" />
          </div>
          <p className="animate-pulse font-space text-sm tracking-widest text-muted-foreground">
            Loading experience...
          </p>
        </div>
      </div>

      {/* Aurora field behind every glass surface */}
      <AuroraBackground />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Extra bottom room on mobile so the tab bar never covers the footer */}
      <div className="pb-tabbar md:pb-0">
        <Footer />
      </div>

      {/* Sits above the page (z-40) but under the chrome (z-50), so the nav and
          tab bar stay perfectly sharp while content softens past them */}
      <FocalBlur />

      <MobileTabBar />
    </div>
  );
};

export default Index;
