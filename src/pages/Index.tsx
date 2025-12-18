import { useEffect, useState } from 'react';

import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Loading Screen */}
        <div
          className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-700 ${
            isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center space-y-4">
            <div className="relative">
              <span className="text-4xl font-syne font-bold fluid-text">JD</span>
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
            </div>
            <p className="text-muted-foreground font-space text-sm tracking-widest animate-pulse">
              Loading experience...
            </p>
          </div>
        </div>
  
        {/* Fluid Background */}
        <FluidBackground />
  
        {/* Navigation */}
        <Navigation />
  
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default Index;
  