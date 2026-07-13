import Button from "../common/Button";

const BrickService = () => {
  const phone = "263771649030";

  const message = encodeURIComponent("I would like to order bricks.");

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#1F2937]">
            Quality Bricks For Sale
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Our durable bricks are manufactured for strong and long-lasting
            structures.
          </p>

          <div className="mt-6 space-y-3">
            <p>🧱 Common Bricks</p>

            <p>🧱 Face Bricks</p>

            <p>🧱 Bulk Orders</p>

            <p>🚚 Delivery Available</p>
          </div>

          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <Button>Order Bricks</Button>
          </a>
        </div>

        <img
          src="/images/services/bricks.jpg"
          alt="Bricks"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default BrickService;
