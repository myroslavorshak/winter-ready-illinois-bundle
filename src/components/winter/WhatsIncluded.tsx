import { 
  Car, 
  Snowflake, 
  RotateCcw, 
  AlignStartVertical, 
  Smartphone, 
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "All-Weather Mats",
    description: "Model-specific floor protection designed for Illinois weather conditions"
  },
  {
    icon: Snowflake,
    title: "Winter Prep Service",
    description: "Complete battery test, fluid check, and tire pressure optimization"
  },
  {
    icon: RotateCcw,
    title: "2 Tire Rotations",
    description: "Professional rotation service to maximize tire life through winter months"
  },
  {
    icon: AlignStartVertical,
    title: "Alignment Check",
    description: "Precision alignment inspection and adjustment for optimal winter handling"
  },
  {
    icon: Smartphone,
    title: "Remote Start Setup",
    description: "App activation and training for compatible trims (warm up before you step out)"
  },
  {
    icon: Shield,
    title: "Emergency Kit",
    description: "Compact winter emergency kit including essentials for roadside situations"
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
            <Card key={service.title} className="border-2 hover:border-winter-blue/30 transition-all duration-300 group shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-winter-blue-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-winter-blue group-hover:text-white transition-all duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-winter-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-winter-gray leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};