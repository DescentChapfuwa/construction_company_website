import SectionTitle from "../common/SectionTitle";
import { reasons } from "../../data/reasons";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Professional service you can depend on"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              className=" bg-white p-8 rounded-xl shadow text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
