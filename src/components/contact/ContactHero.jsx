const ContactHero = () => {
  return (
    <section
      className="relative h-[55vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/contact/contact-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl *:font-bold">Get In Touch</h1>

        <p className="mt-5 text-xl text-gray-200">
          Let's discuss your construction project, brick order or rental
          enquiry.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
