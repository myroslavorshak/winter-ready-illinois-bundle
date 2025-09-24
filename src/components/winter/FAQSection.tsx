import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if my vehicle isn't compatible with remote start?",
    answer: "We'll substitute with an equivalent or greater value service, such as additional detailing or extended warranty coverage. All substitutions are discussed before service begins."
  },
  {
    question: "Are the all-weather mats custom-fitted?",
    answer: "Yes! Each set is specifically designed for your vehicle's year, make, and model. They provide superior protection compared to universal-fit mats."
  },
  {
    question: "How long does the complete bundle service take?",
    answer: "Most bundles are completed within 3-4 hours. We'll provide you with an accurate timeline when you schedule your appointment."
  },
  {
    question: "Is the emergency kit suitable for Illinois winters?",
    answer: "Absolutely. Each kit includes items specifically chosen for Midwest winter conditions: emergency blanket, ice scraper, tow strap, emergency flares, and more."
  },
  {
    question: "What's included in the winter prep service?",
    answer: "Battery load test, coolant system check, windshield washer fluid top-off, tire pressure adjustment for cold weather, and multi-point inspection of belts and hoses."
  },
  {
    question: "Can I schedule the bundle for a future date?",
    answer: "Yes! Bundle reservations can be scheduled up to 30 days in advance. We recommend booking early as we limit bundles to 25 per month."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-winter-gray text-lg">
            Everything you need to know about our Winter-Ready Bundle.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-winter-gray-light rounded-lg px-6 hover:border-winter-blue/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-winter-blue hover:text-winter-blue/80 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-winter-gray leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};