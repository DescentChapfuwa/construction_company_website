import Button from "../common/Button";

const ConstructionService = () => {
  const phone = "263771649030";

  const message = encodeURIComponent(
    "I would like information about construction services.",
  );

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-autopx-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/services/construction.jpg"
          alt="Construction"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold text-[#1F2937]">
            Construction Services
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We specialize in residential, commercial and industrial construction
            projects delivered with quality workmanship.
          </p>

          <ul className="mt-6 space-y-3 text-gray-70">
            <li>✓ Residential Buildings</li>

            <li>✓ Commercial Buildings</li>

            <li>✓ Renovations</li>

            <li>✓ Extensions</li>

            <li>✓ Property Development</li>
          </ul>

          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <Button>Request Construction Quote</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConstructionService;
