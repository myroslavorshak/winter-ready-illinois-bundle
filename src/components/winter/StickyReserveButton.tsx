import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ClaimBundleForm } from "./ClaimBundleForm";

export const StickyReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleReserveClick = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}>
        <Button 
          onClick={handleReserveClick}
          size="lg"
          className="bg-winter-amber hover:bg-winter-amber/90 text-white font-semibold shadow-winter animate-bounce px-8 py-4 text-lg"
        >
          🎁 Reserve My FREE Bundle
        </Button>
      </div>

      <ClaimBundleForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};