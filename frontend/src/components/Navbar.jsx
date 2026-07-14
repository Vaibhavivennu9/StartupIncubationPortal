import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFFFE3] shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-[#6D8196] p-2 rounded-full">
            <FaRocket className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#4A4A4A]">
              IncubateX
            </h1>

            <p className="text-xs text-[#6D8196]">
              Startup Incubation Portal
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 font-medium text-[#4A4A4A]">

          <li>
            <a
              href="#home"
              className="hover:text-[#6D8196] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#workflow"
              className="hover:text-[#6D8196] transition duration-300"
            >
              Workflow
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="hover:text-[#6D8196] transition duration-300"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#stories"
              className="hover:text-[#6D8196] transition duration-300"
            >
              Success Stories
            </a>
          </li>

          <li>
            <a
              href="#footer"
              className="hover:text-[#6D8196] transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Buttons */}

        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border-2 border-[#6D8196] text-[#6D8196] hover:bg-[#6D8196] hover:text-white transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-[#6D8196] text-white hover:bg-[#4A4A4A] transition duration-300"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#4A4A4A]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#FFFFE3] border-t border-[#CBCBCB]">

          <ul className="flex flex-col items-center py-6 gap-6 text-[#4A4A4A] font-medium">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#workflow" onClick={() => setMenuOpen(false)}>
                Workflow
              </a>
            </li>

            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
            </li>

            <li>
              <a href="#stories" onClick={() => setMenuOpen(false)}>
                Success Stories
              </a>
            </li>

            <li>
              <a href="#footer" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <Link
              to="/login"
              className="border-2 border-[#6D8196] px-6 py-2 rounded-lg text-[#6D8196]"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#6D8196] text-white px-6 py-2 rounded-lg"
            >
              Register
            </Link>

          </ul>

        </div>

      )}

    </nav>
  );
};

export default Navbar;