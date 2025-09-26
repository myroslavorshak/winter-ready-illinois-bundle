import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TermsSection = () => {
  return (
    <section className="py-20 bg-winter-gray-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Bundle Terms & Guarantees
          </h2>
          <p className="text-winter-gray text-lg">
            Transparent terms with customer-first policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <Badge className="bg-winter-blue text-white mb-4">
                Service & Satisfaction
              </Badge>
              <h3 className="text-xl font-bold text-winter-blue mb-4">
                Service & Satisfaction Promise
              </h3>
              <ul className="space-y-3 text-winter-gray">
                <li>✓ All work performed by certified Nissan technicians</li>
                <li>✓ Genuine Nissan parts and accessories</li>
                <li>✓ 30-day satisfaction guarantee on all services</li>
                <li>✓ Digital inspection reports provided</li>
                <li>✓ Workmanship warranty included</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <Badge className="bg-winter-amber text-white mb-4">
                Terms & Conditions
              </Badge>
              <h3 className="text-xl font-bold text-winter-blue mb-4">
                Flexible & Fair Terms
              </h3>
              <ul className="space-y-3 text-winter-gray">
                <li>✓ Substitutions of equal/greater value when needed</li>
                <li>✓ Remote start limited to compatible trims</li>
                <li>✓ Emergency kits available while supplies last</li>
                <li>✓ Limited to first 25 bundles per month</li>
                <li>✓ 7-day cancellation policy (before service)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-winter-blue text-white shadow-winter">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Important Compliance Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-3 text-winter-amber">Compatibility Notes:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• All-weather mats are model-year specific</li>
                  <li>• Remote start features vary by trim level</li>
                  <li>• App setup requires compatible infotainment system</li>
                  <li>• Some services may require additional parts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-winter-amber">Availability & Limits:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• Emergency kits subject to manufacturer availability</li>
                  <li>• Bundle pricing valid for first 25 customers monthly</li>
                  <li>• Services must be completed within 60 days of purchase</li>
                  <li>• Substitutions pre-approved and value-equivalent</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};