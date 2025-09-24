import { useEffect } from "react";
import { HeroSection } from "@/components/winter/HeroSection";
import { ModelsCarousel } from "@/components/winter/ModelsCarousel";
import { WhatsIncluded } from "@/components/winter/WhatsIncluded";
import { SavingsModule } from "@/components/winter/SavingsModule";
import { WhyWinterReady } from "@/components/winter/WhyWinterReady";
import { CustomerPhotos } from "@/components/winter/CustomerPhotos";
import { FAQSection } from "@/components/winter/FAQSection";
import { TermsSection } from "@/components/winter/TermsSection";
import { ContactSection } from "@/components/winter/ContactSection";
import { StickyReserveButton } from "@/components/winter/StickyReserveButton";

const WinterReady = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Illinois Winter-Ready Nissan Bundle | Springfield Nissan, IL";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Get your Nissan winter-ready with our complete Illinois bundle: all-weather mats, winter prep, tire rotations, alignment, remote start & emergency kit. Save $254!'
      );
    }

    // Add canonical URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${window.location.origin}/winter-ready`;
    document.head.appendChild(canonical);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      "name": "Springfield Nissan",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Winter Drive",
        "addressLocality": "Springfield",
        "addressRegion": "IL",
        "postalCode": "62701"
      },
      "telephone": "(555) 123-WINTER",
      "makesOffered": ["Nissan"],
      "serviceOffered": {
        "@type": "Service",
        "name": "Winter-Ready Bundle",
        "description": "Complete winter preparation package for Nissan vehicles"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) canonicalToRemove.remove();
      
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ModelsCarousel />
      <WhatsIncluded />
      <SavingsModule />
      <WhyWinterReady />
      <CustomerPhotos />
      <FAQSection />
      <TermsSection />
      <ContactSection />
      <StickyReserveButton />
    </main>
  );
};

export default WinterReady;