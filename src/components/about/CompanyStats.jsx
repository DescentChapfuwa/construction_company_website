import statistics from "../../data/statistics";

const CompanyStats = () => {
  return (
    <section className="bg-[#1F2937] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-5xl">{stat.icon}</div>

              <h2 className="mt-6 text-5xl font-bold text-[#F4B400]">
                {stat.value}
              </h2>

              <p className="mt-3 text-lg text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
