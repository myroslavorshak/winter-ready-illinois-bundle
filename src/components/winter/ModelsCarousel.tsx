import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CarDetailsPopup } from "./CarDetailsPopup";
import { useToast } from "@/hooks/use-toast";
import rogueImage from "@/assets/rogue-winter.jpg";
import ariyaImage from "@/assets/ariya-winter.jpg";
import pathfinderImage from "@/assets/pathfinder-winter.jpg";
import altimaImage from "@/assets/altima-winter.jpg";

const models = [
  {
    name: "Rogue",
    trim: "SV AWD",
    stock: "N24-001",
    image: rogueImage,
    eligible: true,
    year: "2024",
    msrp: "$34,250",
    mpg: "28 city / 35 hwy",
    engine: "2.5L 4-Cylinder",
    drivetrain: "AWD",
    features: [
      "Intelligent All-Wheel Drive",
      "ProPILOT Assist",
      "Heated Front Seats",
      "Remote Engine Start",
      "NissanConnect® Services",
      "Rear Cross Traffic Alert"
    ]
  },
  {
    name: "Ariya",
    trim: "Engage+",
    stock: "N24-002",
    image: ariyaImage,
    eligible: true,
    year: "2024",
    msrp: "$39,590",
    mpg: "304 mile range",
    engine: "Electric Motor",
    drivetrain: "FWD",
    features: [
      "Zero Emission Electric",
      "ProPILOT Assist 2.0",
      "Heated & Ventilated Seats",
      "12.3\" Touchscreen Display",
      "Wireless Apple CarPlay®",
      "e-Pedal Step Technology"
    ]
  },
  {
    name: "Pathfinder",
    trim: "SL AWD",
    stock: "N24-003",
    image: pathfinderImage,
    eligible: true,
    year: "2024",
    msrp: "$45,850",
    mpg: "24 city / 30 hwy",
    engine: "3.5L V6",
    drivetrain: "AWD",
    features: [
      "3-Row Seating for 8",
      "Intelligent 4WD",
      "Tow Capacity up to 6,000 lbs",
      "Tri-Zone Climate Control",
      "Wireless Device Charging",
      "Safety Shield® 360"
    ]
  },
  {
    name: "Altima",
    trim: "2.5 SV",
    stock: "N24-004",
    image: altimaImage,
    eligible: true,
    year: "2024",
    msrp: "$26,250",
    mpg: "28 city / 39 hwy",
    engine: "2.5L 4-Cylinder",
    drivetrain: "FWD",
    features: [
      "Variable Compression Turbo",
      "Intelligent Forward Collision Warning",
      "Heated Front Seats",
      "8\" Touchscreen Display",
      "Apple CarPlay® & Android Auto™",
      "Intelligent Driver Alertness"
    ]
  }
];

export const ModelsCarousel = () => {
  const [selectedCar, setSelectedCar] = useState<typeof models[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { toast } = useToast();

  const handleCarClick = (car: typeof models[0]) => {
    setSelectedCar(car);
    setIsPopupOpen(true);
  };

  const handleReserve = (car: typeof models[0]) => {
    toast({
      title: "Reservation Request Submitted",
      description: `We'll contact you shortly about your ${car.year} ${car.name} ${car.trim} with Winter Bundle.`,
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <section className="py-16 bg-winter-gray-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
              Eligible Models
            </h2>
            <p className="text-winter-gray text-lg max-w-2xl mx-auto">
              Select from our winter-ready inventory, each pre-qualified for the complete bundle package.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <Card 
                key={model.stock} 
                className="overflow-hidden shadow-card hover:shadow-winter transition-all duration-300 group cursor-pointer"
                onClick={() => handleCarClick(model)}
              >
                <div className="relative">
                  <img 
                    src={model.image}
                    alt={`${model.name} ${model.trim}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-winter-amber text-white">
                      Bundle Eligible
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-winter-blue mb-2">
                    {model.name}
                  </h3>
                  <p className="text-winter-gray mb-1">{model.trim}</p>
                  <p className="text-sm text-winter-gray">Stock #: {model.stock}</p>
                  <p className="text-xs text-winter-amber mt-2 font-medium">
                    Click for details →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CarDetailsPopup
        car={selectedCar}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onReserve={handleReserve}
      />
    </>
  );
};