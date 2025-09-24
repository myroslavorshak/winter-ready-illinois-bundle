import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    eligible: true
  },
  {
    name: "Ariya",
    trim: "Engage+",
    stock: "N24-002",
    image: ariyaImage,
    eligible: true
  },
  {
    name: "Pathfinder",
    trim: "SL AWD",
    stock: "N24-003",
    image: pathfinderImage,
    eligible: true
  },
  {
    name: "Altima",
    trim: "2.5 SV",
    stock: "N24-004",
    image: altimaImage,
    eligible: true
  }
];

export const ModelsCarousel = () => {
  return (
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
            <Card key={model.stock} className="overflow-hidden shadow-card hover:shadow-winter transition-all duration-300 group">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};