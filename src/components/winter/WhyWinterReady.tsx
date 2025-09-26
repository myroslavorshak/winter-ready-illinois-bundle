import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    stat: "40%",
    label: "Longer braking distance on snow",
    impact: "Winter tires & alignment matter"
  },
  {
    stat: "25°F",
    label: "Battery power loss in cold",
    impact: "Professional testing prevents failure"
  },
  {
    stat: "15%",
    label: "Reduced traction in slush",
    impact: "Proper tire rotation extends grip"
  }
];

export const WhyWinterReady = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Why Winter-Ready Matters
          </h2>
          <p className="text-winter-gray text-lg max-w-2xl mx-auto">
            Illinois winters demand preparation. Here's what professional service prevents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((item) => (
            <Card key={item.label} className="text-center shadow-card hover:shadow-winter transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-winter-amber mb-4">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-winter-blue mb-3">
                  {item.label}
                </h3>
                <p className="text-winter-gray">
                  {item.impact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-winter-blue text-white shadow-winter">
          <CardContent className="p-8 text-center">
            <div className="text-winter-amber text-sm font-semibold uppercase tracking-wide mb-4">
              Service Department Excellence
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Certified Nissan Technicians
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Our factory-trained team uses genuine Nissan parts and follows manufacturer specifications. 
              Every service includes digital inspection reports and comes with our workmanship guarantee.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};