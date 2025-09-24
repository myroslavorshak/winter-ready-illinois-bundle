import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-winter-amber text-white text-lg px-4 py-2 mb-4">
            Ready to Reserve?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Secure Your Winter-Ready Bundle
          </h2>
          <p className="text-winter-gray text-lg max-w-2xl mx-auto">
            Limited to first 25 bundles each month. Reserve yours today and drive with confidence all winter long.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-winter">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-winter-blue mb-6">
                Reserve Your Bundle
              </h3>
              <div className="space-y-6">
                <div className="bg-winter-blue-light rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-winter-blue mb-2">$299</div>
                  <div className="text-winter-gray">Complete Winter Bundle</div>
                  <div className="text-sm text-winter-amber font-semibold mt-2">Save $254!</div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-winter-amber hover:bg-winter-amber/90 text-white font-semibold text-lg py-6"
                >
                  Reserve My Bundle Now
                </Button>
                
                <div className="text-center">
                  <Button variant="outline" size="lg" className="border-winter-blue text-winter-blue hover:bg-winter-blue hover:text-white">
                    Schedule Service Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-winter-blue rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-winter-blue">Call Service Department</h4>
                    <p className="text-winter-gray">(555) 123-WINTER</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-winter-blue rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-winter-blue">Visit Our Service Center</h4>
                    <p className="text-winter-gray">123 Winter Drive, Springfield, IL 62701</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-winter-blue rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-winter-blue">Service Hours</h4>
                    <p className="text-winter-gray">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-winter-amber/10 rounded-lg p-6">
              <h4 className="font-semibold text-winter-blue mb-2">Next Available Appointments:</h4>
              <div className="space-y-2 text-sm text-winter-gray">
                <div>• Tuesday, December 12th - 2 slots available</div>
                <div>• Wednesday, December 13th - 4 slots available</div>
                <div>• Friday, December 15th - 1 slot available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};