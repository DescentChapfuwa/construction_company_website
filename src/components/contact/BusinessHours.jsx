import company from "../../data/company";

const BusinessHours = () => {
  return (
    <section className="py-20 bg-[#1F2937] text-white">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold">Business Hours</h2>

        <div className="mt-6 space-y-3 text-gray-300">
          <p>{company.businessHours.weekdays}</p>

          <p>{company.businessHours.saturday}</p>

          <p>{company.businessHours.sunday}</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
