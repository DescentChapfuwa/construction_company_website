import properties from "../../data/properties";

const RentalService = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1F2937]">
          Property Rentals
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <div
              key={property.title}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{property.title}</h3>

                <p className="mt-3 text-gray-600">📍 {property.location}</p>

                <p className="mt-2 text-[#F4B400] font-bold">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalService;
