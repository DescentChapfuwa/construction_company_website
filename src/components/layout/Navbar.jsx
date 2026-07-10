import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-[#1F2937]">
          Build<span className="text-[#F4B400]">Pro</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-700 hover:text-[#F4B400] transition"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/263771649030"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4B400] px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/263771649030"
            target="_blank"
            rel="noopener noreferrer"
            className="block m-6 text-center bg-[#F4B400] rounded-full py-3 font-semibold"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
