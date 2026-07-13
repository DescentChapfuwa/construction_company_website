import SectionTitle from "../common/SectionTitle";
import steps from '/src/data/steps.js';

const Process = () => {
  return (
    <section className="py-24 bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Process"
          subtitle="Simple steps from idea to completion"
        />

        <div className="grid md:grid-cols-6 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:flex-row lg:justify-center"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#F4B400] text-black flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <p className="mt-4">{step}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="mt-4 text-3xl text-[#F4B400] lg:mt-0 lg:ml-4">
                  <span className="hidden lg:inline">→</span>
                  <span className="inline lg:hidden">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
