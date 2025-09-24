import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import oldOrchardLogo from "@/assets/old-orchard-nissan-logo.png";
import { PhonePopup, TextPopup, BookingPopup } from "./ContactPopups";

export const Header = () => {
  const [phonePopupOpen, setPhonePopupOpen] = useState(false);
  const [textPopupOpen, setTextPopupOpen] = useState(false);
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img 
            src={oldOrchardLogo} 
            alt="Old Orchard Nissan" 
            className="h-8 w-auto"
          />
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Phone button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={() => setPhonePopupOpen(true)}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(555) 123-4567</span>
          </Button>

          {/* Text Us button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={() => setTextPopupOpen(true)}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Text Us</span>
          </Button>

          {/* Book Appointment CTA */}
          <Button 
            variant="nissan" 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => setBookingPopupOpen(true)}
          >
            Book My Appointment
          </Button>
          <Button 
            variant="nissan" 
            size="sm" 
            className="sm:hidden"
            onClick={() => setBookingPopupOpen(true)}
          >
            Book
          </Button>
        </div>
      </div>
    </header>

    {/* Popup Forms */}
    <PhonePopup 
      isOpen={phonePopupOpen} 
      onClose={() => setPhonePopupOpen(false)} 
    />
    <TextPopup 
      isOpen={textPopupOpen} 
      onClose={() => setTextPopupOpen(false)} 
    />
    <BookingPopup 
      isOpen={bookingPopupOpen} 
      onClose={() => setBookingPopupOpen(false)} 
    />
  </>
);
};