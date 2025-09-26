import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Springfield, IL",
    rating: 5,
    date: "2 weeks ago",
    review: "Outstanding winter service! The remote start installation was flawless and the team explained everything. My Rogue is now perfectly ready for Illinois winters. Saved me $250+ compared to getting services separately.",
    avatar: "SM",
    verified: true
  },
  {
    name: "Mike Thompson", 
    location: "Peoria, IL",
    rating: 5,
    date: "1 month ago", 
    review: "Best car service experience I've had. The winter prep bundle is incredible value - battery test, alignment, tire rotation, plus emergency kit. Professional technicians and honest pricing. Highly recommend!",
    avatar: "MT",
    verified: true
  },
  {
    name: "Jennifer Rodriguez",
    location: "Rockford, IL", 
    rating: 5,
    date: "3 weeks ago",
    review: "Amazing service for my Pathfinder! The all-weather mats fit perfectly and the winter prep service caught a potential battery issue. The team is knowledgeable and the bundle pricing saved me a lot. Will be back!",
    avatar: "JR",
    verified: true
  }
];

export const CustomerPhotos = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? "fill-winter-amber text-winter-amber" 
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-winter-blue-light via-background to-winter-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Winter-Ready Customers
          </h2>
          <p className="text-winter-gray text-lg">
            See what our customers say about their winter bundle experience.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-winter-blue font-semibold">5.0</span>
            <span className="text-winter-gray">• Based on Google Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-winter transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-winter-amber">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-winter-blue text-white font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-winter-blue">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-winter-amber/10 text-winter-amber px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-winter-gray">{review.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-winter-gray">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="relative">
                  <Quote className="h-6 w-6 text-winter-amber/30 absolute -top-2 -left-1" />
                  <p className="text-winter-gray leading-relaxed pl-6">
                    {review.review}
                  </p>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-winter-gray-light">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-winter-gray">Posted on</span>
                    <span className="text-xs font-semibold text-blue-600">Google</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-lg px-8 py-4 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-winter-blue">5.0</div>
              <div className="flex gap-1 justify-center mb-1">
                {renderStars(5)}
              </div>
              <div className="text-sm text-winter-gray">Google Rating</div>
            </div>
            <div className="h-12 w-px bg-winter-gray-light"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-winter-blue">147</div>
              <div className="text-sm text-winter-gray">Total Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};