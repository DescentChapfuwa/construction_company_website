import { useState } from "react";
import Button from "../common/Button";
import company from "../../data/company";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `
Hello ${company.name}

Name:
${form.name}

Phone:
${form.phone}

Service:
${form.service}

Message:
${form.message}

`,
    );

    window.open(
      `https://wa.me/${company.whatsapp}?text=${message}`,

      "_blank",
    );
  };

  return (
    <section className="py-24 bg-[#F9FAFB] grid md:justify-center">
      <div className="max-w-3xl *:mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Request A Quotation</h2>

        <form onSubmit={sendWhatsApp} className="mt-10 space-y-5">
          <input
            required
            placeholder="Your Name"
            className="input"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            required
            placeholder="Phone Number"
            className="input"
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <select
            className="input"
            onChange={(e) => setForm({...form,service: e.target.value,})}
          >
            <option>Select Service</option>

            <option>Construction</option>

            <option>Bricks</option>

            <option>Rentals</option>
          </select>

          <textarea
            placeholder="Tell us what you need"
            className="input"
            rows="5"
            onChange={(e) => setForm({...form,message: e.target.value,})}
          />

          <Button >Send WhatsApp Request</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
