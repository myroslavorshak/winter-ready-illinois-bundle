import customer1 from "@/assets/customer-winter-1.jpg";
import customer2 from "@/assets/customer-winter-2.jpg";
import customer3 from "@/assets/customer-winter-3.jpg";

const photos = [
  {
    image: customer1,
    caption: "Sarah M. - 'Remote start is a game changer!'"
  },
  {
    image: customer2,
    caption: "Johnson Family - 'Peace of mind for winter trips'"
  },
  {
    image: customer3,
    caption: "Mike T. - 'Bundle saved me time and money'"
  }
];

export const CustomerPhotos = () => {
  return (
    <section className="py-16 bg-winter-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-winter-blue mb-4">
            Winter-Ready Customers
          </h2>
          <p className="text-winter-gray text-lg">
            See how fellow Illinois drivers are staying prepared this season.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-card group-hover:shadow-winter transition-all duration-300">
                <img 
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-winter-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-winter-gray mt-4 font-medium">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};