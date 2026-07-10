import company from "../../data/company";
import SectionTitle from "../common/SectionTitle";

const CoreValues = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide everything we do."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {company.values.map((value) => (

            <div
              key={value}
              className="bg-[#F9FAFB] p-8 rounded-xl text-center shadow hover:-translate-y-2 transition"
            >
              <div className="text-5xl">⭐</div>

              <h3 className="mt-6 text-2xl font-bold text-[#1F2937]">
                {value}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoreValues;