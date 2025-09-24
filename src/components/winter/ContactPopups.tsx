import { Phone, MessageCircle, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

interface PhonePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhonePopup = ({ isOpen, onClose }: PhonePopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-nissan-red" />
            Call Old Orchard Nissan
          </DialogTitle>
          <DialogDescription>
            Speak directly with our sales team about the Winter-Ready Bundle.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center py-4">
            <div className="text-3xl font-bold text-nissan-red mb-2">
              (555) 123-4567
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Sales Hours: Mon-Sat 9AM-8PM, Sun 11AM-6PM
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center justify-center gap-2 bg-nissan-red hover:bg-nissan-red/90 text-nissan-red-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-3">Or send us a message:</p>
            <ContactForm
              title="Phone Inquiry"
              defaultMessage="I'm interested in learning more about the Winter-Ready Bundle. Please call me at your earliest convenience."
              onClose={onClose}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface TextPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TextPopup = ({ isOpen, onClose }: TextPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-nissan-red" />
            Text Old Orchard Nissan
          </DialogTitle>
          <DialogDescription>
            Send us a text message and we'll respond quickly during business hours.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center py-4">
            <div className="text-3xl font-bold text-nissan-red mb-2">
              (555) 123-4567
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Text us between 9AM-8PM for fastest response
            </p>
            <a 
              href="sms:5551234567?body=Hi! I'm interested in the Winter-Ready Bundle. Can you tell me more?"
              className="inline-flex items-center justify-center gap-2 bg-nissan-red hover:bg-nissan-red/90 text-nissan-red-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Send Text
            </a>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-3">Or send us a detailed message:</p>
            <ContactForm
              title="Text Inquiry"
              defaultMessage="Hi! I'm interested in the Winter-Ready Bundle. Please text me back with more information."
              onClose={onClose}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingPopup = ({ isOpen, onClose }: BookingPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-nissan-red" />
            Book Your Appointment
          </DialogTitle>
          <DialogDescription>
            Schedule your Winter-Ready Bundle installation or test drive your next Nissan.
          </DialogDescription>
        </DialogHeader>
        
        <ContactForm
          title="Book Appointment"
          defaultMessage="I'd like to schedule an appointment for the Winter-Ready Bundle. Please let me know your available times."
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};