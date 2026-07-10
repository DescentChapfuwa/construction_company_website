import SectionTitle from "../common/SectionTitle";
import { reviews } from "../../data/reviews";

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="What Clients Say"
          subtitle="Trusted by our customers"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 bg-[#F9FAFB] rounded-xl">
              <div className="flex items-center gap-4">
                <img
                  src="/images/team/client-avatar.svg"
                  alt="Client avatar"
                  className="w-14 h-14 rounded-full border-2 border-black object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Client</p>
                  <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-gray-700 italic">"{review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
