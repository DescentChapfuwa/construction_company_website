import { services } from "../../data/services";
import SectionTitle from "../common/SectionTitle";

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Choose what you need today"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="text-2xl font-bold mt-5text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
