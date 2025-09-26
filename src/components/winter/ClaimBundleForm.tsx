import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const claimBundleSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  carModel: z.string().min(1, "Please select a car model"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional()
});

type ClaimBundleFormData = z.infer<typeof claimBundleSchema>;

interface ClaimBundleFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const carModels = [
  { value: "altima-2024", label: "2024 Nissan Altima" },
  { value: "rogue-2024", label: "2024 Nissan Rogue" },
  { value: "pathfinder-2024", label: "2024 Nissan Pathfinder" },
  { value: "ariya-2024", label: "2024 Nissan Ariya" },
  { value: "sentra-2024", label: "2024 Nissan Sentra" },
  { value: "murano-2024", label: "2024 Nissan Murano" },
  { value: "frontier-2024", label: "2024 Nissan Frontier" },
  { value: "titan-2024", label: "2024 Nissan Titan" }
];

export const ClaimBundleForm = ({ isOpen, onClose }: ClaimBundleFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ClaimBundleFormData>({
    resolver: zodResolver(claimBundleSchema)
  });

  const selectedCarModel = watch("carModel");

  const onSubmit = async (data: ClaimBundleFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Bundle Claim Submitted!",
        description: `Thank you ${data.firstName}! We'll contact you within 24 hours about your FREE Winter Bundle for the ${carModels.find(car => car.value === data.carModel)?.label}.`
      });
      
      reset();
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-winter-blue">
            Claim Your FREE Winter Bundle
          </DialogTitle>
          <p className="text-winter-gray">
            Complete the form below and we'll contact you to arrange your FREE $553 Winter Protection Bundle.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                className="mt-1"
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                className="mt-1"
                placeholder="Smith"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1"
              placeholder="john.smith@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="mt-1"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="carModel">Select Nissan Model *</Label>
            <Select
              value={selectedCarModel}
              onValueChange={(value) => setValue("carModel", value)}
            >
              <SelectTrigger className="mt-1 bg-white z-50">
                <SelectValue placeholder="Choose your Nissan model" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 max-h-48">
                {carModels.map((car) => (
                  <SelectItem key={car.value} value={car.value}>
                    {car.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.carModel && (
              <p className="text-red-500 text-sm mt-1">{errors.carModel.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="mt-1"
              placeholder="Any specific questions about the Winter Bundle or preferred contact time..."
              rows={3}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>


          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-winter-amber hover:bg-winter-amber/90"
            >
              {isSubmitting ? "Submitting..." : "Claim FREE Bundle"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};