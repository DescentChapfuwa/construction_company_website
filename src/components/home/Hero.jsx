import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/construction/hero.jpg')",
        backgroundSize: "100%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight text-gray-200">
          Building Strong Foundations For A Better Tomorrow
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Quality construction, durable bricks, and reliable property solutions
          from a trusted team.
        </p>

        <div className="flex gap-4 mt-8">
          <Button>Get A Quote</Button>

          <Button secondary>Explore Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
