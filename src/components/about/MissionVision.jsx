import company from "../../data/company";

const MissionVision = () => {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-[#1F2937]">Our Mission</h3>

          <p className="mt-6 text-gray-600 leading-8">{company.mission}</p>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-[#1F2937]">Our Vision</h3>

          <p className="mt-6 text-gray-600 leading-8">{company.vision}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
