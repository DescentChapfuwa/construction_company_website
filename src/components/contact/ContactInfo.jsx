import company from "../../data/company";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  const info = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      text: company.phone,
    },

    {
      icon: <FaEnvelope />,
      title: "Email",
      text: company.email,
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      text: company.address,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {info.map((item) => (
          <div
            key={item.title}
            className="bg-[#F9FAFB] p-8 rounded-xl text-center shadow"
          >
            <div className="text-[#F4B400] text-4xl flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mt-5">{item.title}</h3>

            <p className="mt-3 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
