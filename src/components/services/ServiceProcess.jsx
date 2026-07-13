import steps from "../../data/steps";

const ServiceProcess = () => {
  return (
    <section className="py-24 bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">How We Work</h2>

        <div className="grid md:grid-cols-6 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div className="bg-[#F4B400] text-black w-14 h-14 rounded-full mx-auto flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="mt-4">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
