import company from "../../data/company";

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/about/about_hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold">About {company.name}</h1>

        <p className="mt-6 text-xl max-w-2xl text-gray-200">{company.slogan}</p>
      </div>
    </section>
  );
};

export default AboutHero;
