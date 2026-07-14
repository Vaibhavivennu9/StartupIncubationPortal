import { Link } from "react-router-dom";
import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import startup from "../assets/startup.png";

const Header = () => {
  return (
    <section
      id="home"
      className="bg-[#FFFFE3] min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}

        <div>

          {/* Small Badge */}

          <div className="inline-block bg-[#CBCBCB] text-[#4A4A4A] px-5 py-2 rounded-full font-medium mb-6">
            🚀 Startup Incubation Platform
          </div>

          {/* Heading */}

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-[#4A4A4A]">

            Empowering

            <br />

            Tomorrow's

            <span className="text-[#6D8196]">
              {" "}Innovators
            </span>

            <br />

            & Entrepreneurs

          </h1>

          {/* Description */}

          <p className="text-lg text-[#4A4A4A] opacity-80 mt-8 leading-8">

            Transform your innovative ideas into successful startups
            through expert mentorship, structured incubation
            programs, funding opportunities, and real-time
            progress tracking.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/register"
              className="bg-[#6D8196] text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-[#4A4A4A] transition duration-300"
            >
              Register Startup

              <FaArrowRight />

            </Link>

            <Link
              to="/programs"
              className="border-2 border-[#6D8196] text-[#6D8196] px-8 py-4 rounded-xl hover:bg-[#6D8196] hover:text-white transition duration-300"
            >
              Explore Programs
            </Link>

          </div>

          {/* Statistics */}

          <div className="flex flex-wrap gap-10 mt-14">

            <div className="flex items-center gap-3">

              <div className="bg-[#6D8196] p-3 rounded-full">

                <FaRocket className="text-white text-lg" />

              </div>

              <div>

                <h2 className="font-bold text-[#4A4A4A] text-xl">
                  500+
                </h2>

                <p className="text-[#4A4A4A]">
                  Startups
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="bg-[#6D8196] p-3 rounded-full">

                <FaUsers className="text-white text-lg" />

              </div>

              <div>

                <h2 className="font-bold text-[#4A4A4A] text-xl">
                  120+
                </h2>

                <p className="text-[#4A4A4A]">
                  Mentors
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="bg-[#6D8196] p-3 rounded-full">

                <FaChartLine className="text-white text-lg" />

              </div>

              <div>

                <h2 className="font-bold text-[#4A4A4A] text-xl">
                  85%
                </h2>

                <p className="text-[#4A4A4A]">
                  Success Rate
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex justify-center">

          <img
            src={startup}
            alt="Startup Illustration"
            className="w-full max-w-xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Header;