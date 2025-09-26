import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Configurable savings data
const savingsData = {
  services: [
    { name: "All-Weather Mats", individual: 129, bundled: 0 },
    { name: "Winter Prep Service", individual: 89, bundled: 0 },
    { name: "2 Tire Rotations", individual: 120, bundled: 0 },
    { name: "Alignment Check", individual: 95, bundled: 0 },
    { name: "Remote Start Setup", individual: 75, bundled: 0 },
    { name: "Emergency Kit", individual: 45, bundled: 0 }
  ],
  bundlePrice: 299
};

export const SavingsModule = () => {
  const totalIndividual = savingsData.services.reduce((sum, service) => sum + service.individual, 0);
  const totalSavings = totalIndividual - savingsData.bundlePrice;

  return (
    <section className="py-16 bg-winter-blue-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Complete Winter Protection
          </h2>
          <p className="text-winter-gray text-lg">
            Everything you need, professionally installed and serviced.
          </p>
        </div>

        <Card className="shadow-winter">
          <CardContent className="p-8">
            <div className="space-y-4 mb-8">
              {savingsData.services.map((service) => (
                <div key={service.name} className="flex justify-between items-center py-2 border-b border-winter-gray-light">
                  <span className="text-winter-blue font-medium">{service.name}</span>
                  <span className="text-winter-gray line-through">${service.individual}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t-2 border-winter-blue pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-winter-blue">Individual Total:</span>
                <span className="text-xl text-winter-gray line-through">${totalIndividual}</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-winter-blue">Bundle Price:</span>
                <span className="text-3xl font-bold text-winter-blue">${savingsData.bundlePrice}</span>
              </div>
              
              <div className="text-center bg-winter-amber text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">Save ${totalSavings}</div>
                <div className="text-lg">That's {Math.round((totalSavings / totalIndividual) * 100)}% off individual pricing!</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};