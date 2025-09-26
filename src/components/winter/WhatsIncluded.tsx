import { 
  Car, 
  Snowflake, 
  RotateCcw, 
  AlignStartVertical, 
  Smartphone, 
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import allWeatherMatsImage from "@/assets/all-weather-mats.jpg";
import winterPrepImage from "@/assets/winter-prep-service.jpg";
import tireRotationImage from "@/assets/tire-rotation.jpg";
import alignmentCheckImage from "@/assets/alignment-check.jpg";
import remoteStartImage from "@/assets/remote-start-app.jpg";
import emergencyKitImage from "@/assets/emergency-kit.jpg";

const services = [
  {
    icon: Car,
    title: "All-Weather Mats",
    description: "Model-specific floor protection designed for Illinois weather conditions",
    image: allWeatherMatsImage
  },
  {
    icon: Snowflake,
    title: "Winter Prep Service",
    description: "Complete battery test, fluid check, and tire pressure optimization",
    image: winterPrepImage
  },
  {
    icon: RotateCcw,
    title: "2 Tire Rotations",
    description: "Professional rotation service to maximize tire life through winter months",
    image: tireRotationImage
  },
  {
    icon: AlignStartVertical,
    title: "Alignment Check",
    description: "Precision alignment inspection and adjustment for optimal winter handling",
    image: alignmentCheckImage
  },
  {
    icon: Smartphone,
    title: "Remote Start Setup",
    description: "App activation and training for compatible trims (warm up before you step out)",
    image: remoteStartImage
  },
  {
    icon: Shield,
    title: "Emergency Kit",
    description: "Compact winter emergency kit including essentials for roadside situations",
    image: emergencyKitImage
  }
];

export const WhatsIncluded = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            What's Included
          </h2>
          <p className="text-winter-gray text-lg max-w-2xl mx-auto">
            Six essential services and accessories to keep you safe and comfortable all winter long.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden border-2 hover:border-winter-blue/30 transition-all duration-300 group shadow-card hover:shadow-winter hover:-translate-y-2 animate-fade-in">
              {/* Top Section - Image Only */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                
                {/* Title positioned over image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-2xl font-bold text-white bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg group-hover:bg-black/70 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Bottom Section - Description with Dark Blue Background */}
              <CardContent className="p-0">
                <div className="bg-white text-winter-blue p-6 group-hover:bg-gray-50 transition-all duration-300 border-t border-gray-100">
                  <p className="leading-relaxed text-center text-winter-blue group-hover:text-winter-blue/90 transition-all duration-300">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};