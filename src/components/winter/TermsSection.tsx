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