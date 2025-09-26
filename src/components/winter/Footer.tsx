import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-winter-blue-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-winter-amber">Old Orchard Nissan</h3>
            <p className="text-gray-300 mb-4">
              Your trusted Nissan dealer serving Springfield, Illinois and surrounding communities since 1985.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 123 Winter Drive, Springfield, IL 62701</p>
              <p>📞 (555) 123-WINTER</p>
              <p>✉️ service@oldorchardnissan.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-winter-amber">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• New Nissan Inventory</li>
              <li>• Certified Pre-Owned</li>
              <li>• Service Department</li>
              <li>• Parts & Accessories</li>
              <li>• Financing Options</li>
              <li>• Trade-In Value</li>
            </ul>
          </div>

          {/* Bundle Terms Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-winter-amber">Winter Bundle Terms</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Valid with eligible 2025 Nissan purchase</li>
              <li>• Limited to first 25 bundles monthly</li>
              <li>• Services must be completed within 60 days</li>
              <li>• Subject to parts availability</li>
              <li>• See dealer for complete details</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-8" />

        {/* Legal Disclaimers */}
        <div className="space-y-6">
          <Card className="bg-winter-blue/20 border-gray-600">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-winter-amber">Important Legal Disclaimers</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300 leading-relaxed">
                <div>
                  <h5 className="font-medium mb-2 text-white">Bundle Offer Terms:</h5>
                  <p className="mb-3">
                    Winter-Ready Bundle offer valid only with the purchase or lease of select new 2025 Nissan vehicles. 
                    Bundle includes all-weather floor mats, winter prep service, two tire rotations, alignment check, 
                    remote start setup, and emergency kit (total retail value $553). Offer limited to first 25 bundles 
                    per calendar month. Cannot be combined with other service offers. Services must be completed within 
                    60 days of vehicle delivery. Some restrictions apply.
                  </p>
                  
                  <h5 className="font-medium mb-2 text-white">Vehicle Compatibility:</h5>
                  <p>
                    Remote start features and compatibility vary by trim level and model year. All-weather mats are 
                    model-specific. Emergency kits subject to manufacturer availability. Dealer reserves the right 
                    to substitute items of equal or greater value when necessary.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 text-white">Service Terms:</h5>
                  <p className="mb-3">
                    All services performed by certified Nissan technicians using genuine Nissan parts where applicable. 
                    30-day satisfaction guarantee on all bundled services. Workmanship warranty included. Additional 
                    charges may apply for services beyond normal scope of bundled items.
                  </p>
                  
                  <h5 className="font-medium mb-2 text-white">Illinois Specific Terms:</h5>
                  <p>
                    This offer is valid at Old Orchard Nissan locations in Illinois only. All transactions subject to 
                    Illinois motor vehicle dealer regulations and Illinois Consumer Fraud Act protections. Required 
                    fees and taxes not included in bundle pricing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-winter-blue/20 border-gray-600">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-winter-amber">Regulatory Compliance & Consumer Protection</h4>
              <div className="text-xs text-gray-300 leading-relaxed space-y-3">
                <p>
                  <strong>Illinois Motor Vehicle Dealer License:</strong> Old Orchard Nissan is a licensed motor vehicle dealer 
                  in the State of Illinois (License #D-12345). All sales and service transactions are subject to Illinois 
                  Secretary of State Motor Vehicle Services Division regulations and oversight.
                </p>
                
                <p>
                  <strong>Equal Credit Opportunity:</strong> We comply with the Equal Credit Opportunity Act and do not 
                  discriminate on the basis of race, color, religion, national origin, sex, marital status, age, or because 
                  all or part of an applicant's income derives from any public assistance program.
                </p>
                
                <p>
                  <strong>Privacy Notice:</strong> Information collected through this website and in-store interactions is 
                  protected under our Privacy Policy and Illinois Personal Information Protection Act. We do not sell 
                  personal information to third parties without explicit consent.
                </p>
                
                <p>
                  <strong>Warranty Disclaimer:</strong> This promotional bundle does not extend the manufacturer's warranty. 
                  All vehicles sold are subject to Nissan's New Vehicle Limited Warranty terms. Service work performed as 
                  part of this bundle carries a 30-day workmanship guarantee separate from manufacturer warranty coverage.
                </p>
                
                <p>
                  <strong>Right to Cancel:</strong> In accordance with Illinois consumer protection laws, customers have the 
                  right to cancel bundle services within 7 days of scheduling, provided services have not yet been performed. 
                  Cancellation requests must be made in writing to our service department.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-winter-blue/20 border-gray-600">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-winter-amber">Additional Terms & Conditions</h4>
              <div className="text-xs text-gray-300 leading-relaxed space-y-2">
                <p>
                  • Offer valid for Illinois residents only and cannot be transferred or assigned to another party.
                </p>
                <p>
                  • Bundle pricing and availability subject to change without notice. Dealer reserves the right to 
                  modify or terminate this promotion at any time.
                </p>
                <p>
                  • Customer is responsible for maintaining vehicle according to Nissan's recommended maintenance 
                  schedule to ensure warranty coverage remains valid.
                </p>
                <p>
                  • Any disputes arising from this promotion will be resolved through binding arbitration in 
                  accordance with Illinois state law in Sangamon County, Illinois.
                </p>
                <p>
                  • Environmental fees, shop supplies, and applicable taxes are additional and not included in 
                  bundle pricing.
                </p>
                <p>
                  • Appointment scheduling subject to service department availability. Peak season appointments 
                  may require extended lead times.
                </p>
                <p>
                  • Photography and vehicle images are for illustration purposes only and may not reflect exact 
                  vehicle specifications or available inventory.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="bg-gray-600 my-8" />

        {/* Copyright and Final Legal */}
        <div className="text-center text-xs text-gray-400 space-y-2">
          <p>
            © 2025 Old Orchard Nissan. All rights reserved. Nissan, the Nissan logo, and all Nissan model names 
            are trademarks of Nissan Motor Co., Ltd.
          </p>
          <p>
            This website and all promotional materials are subject to Illinois advertising regulations and 
            Federal Truth in Advertising standards.
          </p>
          <p>
            For complete terms and conditions, please visit our dealership or contact our customer service team. 
            Illinois Motor Vehicle Dealer License #D-12345.
          </p>
        </div>
      </div>
    </footer>
  );
};