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
            <Card key={service.title} className="overflow-hidden border-2 hover:border-winter-blue/30 transition-all duration-300 group shadow-card">
              {/* Top Section - Image with Icon and Title */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image with Fade */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Fade to White Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-winter-blue group-hover:text-white transition-all duration-300 shadow-lg">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-winter-blue bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Bottom Section - Description with Different Background */}
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-winter-gray-light to-winter-blue-light/10 p-6">
                  <p className="text-winter-gray leading-relaxed text-center">
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