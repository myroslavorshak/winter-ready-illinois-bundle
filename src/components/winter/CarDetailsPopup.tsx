import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Fuel, Settings, Shield, Star } from "lucide-react";

interface CarModel {
  name: string;
  trim: string;
  stock: string;
  image: string;
  eligible: boolean;
  msrp: string;
  mpg: string;
  engine: string;
  drivetrain: string;
  features: string[];
  year: string;
}

interface CarDetailsPopupProps {
  car: CarModel | null;
  isOpen: boolean;
  onClose: () => void;
  onReserve: (car: CarModel) => void;
}

export const CarDetailsPopup = ({ car, isOpen, onClose, onReserve }: CarDetailsPopupProps) => {
  if (!car) return null;

  const handleReserve = () => {
    onReserve(car);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-winter-blue">
            {car.year} Nissan {car.name} {car.trim}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Car Image */}
          <div className="relative">
            <img 
              src={car.image}
              alt={`${car.name} ${car.trim}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-winter-amber text-white">
                Bundle Eligible
              </Badge>
            </div>
          </div>

          {/* Car Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-winter-blue" />
                <span className="font-semibold">Stock #:</span>
                <span>{car.stock}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="h-4 w-4 text-winter-blue" />
                <span className="font-semibold">MPG:</span>
                <span>{car.mpg}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-winter-blue" />
                <span className="font-semibold">Engine:</span>
                <span>{car.engine}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-winter-blue" />
                <span className="font-semibold">Drivetrain:</span>
                <span>{car.drivetrain}</span>
              </div>
            </div>
          </div>

          {/* MSRP */}
          <div className="bg-winter-gray-light p-4 rounded-lg">
            <div className="text-center">
              <span className="text-sm text-winter-gray">MSRP Starting At</span>
              <div className="text-3xl font-bold text-winter-blue">{car.msrp}</div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-winter-blue mb-3 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-winter-amber rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reserve Button */}
          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button 
              onClick={handleReserve}
              variant="nissan"
              size="lg"
              className="w-full"
            >
              Reserve This {car.name} with Winter Bundle
            </Button>
            <p className="text-xs text-center text-winter-gray">
              * Bundle includes all-weather mats, winter prep service, tire rotation, alignment check, remote start, and emergency kit
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};