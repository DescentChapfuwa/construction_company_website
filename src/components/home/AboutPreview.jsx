import Button from "../common/Button";

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="/images/construction/team.jpg"
            alt="Construction team"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-boldtext-[#1F2937]">
            Building Trust Through Quality
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We are a dedicated team of builders committed to delivering quality
            construction, manufacturing durable bricks, and providing reliable
            property solutions.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            Our goal is to create structures that bring value to families,
            businesses and communities.
          </p>

          <div className="mt-8">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
