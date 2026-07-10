import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Company */}

        <div>
          <h2 className="text-3xl font-bold">
            Build<span className="text-[#F4B400]">Pro</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Providing quality construction, brick manufacturing and property
            rental services throughout Zimbabwe.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-bold text-xl">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3 className="font-bold text-xl">Services</h3>

          <div className="mt-4 flex flex-col gap-3">
            <p>Construction</p>

            <p>Brick Manufacturing</p>

            <p>Property Rentals</p>
          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-bold text-xl">Contact</h3>

          <div className="mt-4 space-y-3">
            <p>📍 Chiredzi, Zimbabwe</p>

            <p>📞 +263 77 164 9030</p>

            <p>✉ info@company.co.zw</p>
          </div>

          <div className="flex gap-4 mt-6 text-2xl">
            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/263771649030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} BuildPro Construction. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
