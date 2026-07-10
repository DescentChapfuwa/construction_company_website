import Button from "./Button";

const CTA = () => {
  const phone = "263771649030";
  const message = encodeURIComponent(
    "Hello, I would like to request a quotation for your services.",
  );

  return (
    <section className="bg-[#F4B400] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1F2937]">
          Ready to Start Your Project?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-800">
          Whether you need construction services, quality bricks or rental
          properties, our team is ready to help.
        </p>

        <div className="mt-10">
          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button secondary>WhatsApp Us</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
