import { Button } from "@/components/ui/button";
import heroImage from "@/assets/winter-driving-hero.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Drive into winter
          <span className="block text-winter-amber">fully set</span>
          <span className="block text-3xl md:text-4xl font-normal mt-4">
            —only at Old Orchard Nissan
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90 max-w-2xl mx-auto">
          Everything your Nissan needs for Illinois winters, bundled together with professional service and guaranteed savings.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-winter-amber hover:bg-winter-amber/90 text-white font-semibold text-lg px-8 py-6 animate-slide-up shadow-winter"
        >
          Reserve My Bundle Now
        </Button>
      </div>
    </section>
  );
};