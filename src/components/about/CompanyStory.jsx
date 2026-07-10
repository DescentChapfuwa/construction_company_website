import company from "../../data/company";

const CompanyStory = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/images/about/company-story.jpg"
          alt={company.name}
          className="rounded-xl shadow-lg w-full"
        />

        <div>
          <h2 className="text-4xl font-bold text-[#1F2937]">Our Story</h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            {company.history}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
