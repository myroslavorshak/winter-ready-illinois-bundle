import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const StickyReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <Button 
        onClick={scrollToContact}
        size="lg"
        className="bg-winter-amber hover:bg-winter-amber/90 text-white font-semibold shadow-winter animate-float"
      >
        Reserve My Bundle Now
      </Button>
    </div>
  );
};