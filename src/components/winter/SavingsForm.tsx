import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Car, Clock, User } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface SavingsFormProps {
  isOpen: boolean;
  onClose: () => void;
  totalSavings: number;
  savingsPercentage: number;
}

// Eligible vehicles for the winter bundle
const eligibleVehicles = [
  "2025 Nissan Rogue SV AWD",
  "2025 Nissan Ariya Engage+", 
  "2025 Nissan Pathfinder SL AWD",
  "2025 Nissan Altima 2.5 SV",
  "Other Nissan Vehicle"
];

export const SavingsForm = ({ isOpen, onClose, totalSavings, savingsPercentage }: SavingsFormProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    vehicle: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and phone are required to reserve your savings.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Savings Reserved!",
      description: `We'll contact you soon to schedule your Winter Bundle appointment and confirm your $${totalSavings} savings.`,
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-winter-blue text-center">
            Save ${totalSavings}. That's {savingsPercentage}% off individual pricing!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Savings Highlight */}
          <div className="bg-winter-amber text-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">Your Savings: ${totalSavings}</div>
            <p className="text-lg">Reserve now to lock in this exclusive winter bundle pricing!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Preferred Appointment Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                Your Nissan Vehicle
              </Label>
              <Select value={formData.vehicle} onValueChange={(value) => handleInputChange("vehicle", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your Nissan model" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  {eligibleVehicles.map((vehicle) => (
                    <SelectItem key={vehicle} value={vehicle}>
                      {vehicle}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Notes</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Any specific requests or questions about your winter bundle..."
                rows={3}
              />
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button 
                type="submit"
                variant="nissan"
                size="lg"
                className="w-full"
              >
                Reserve My ${totalSavings} Savings Now
              </Button>
              <p className="text-xs text-center text-winter-gray">
                * No payment required to reserve. We'll contact you to schedule your appointment.
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};