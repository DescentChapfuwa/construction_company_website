import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phone = "263771649030";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-xl
      hover:scale-110
      transition
      z-50
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
