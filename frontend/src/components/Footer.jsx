import {
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#4A4A4A] text-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Footer */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#6D8196]">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-[#6D8196] p-3 rounded-full">

                <FaRocket className="text-xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  IncubateX
                </h2>

                <p className="text-[#CBCBCB] text-sm">
                  Startup Incubation Portal
                </p>

              </div>

            </div>

            <p className="text-[#CBCBCB] leading-7">
              Empowering entrepreneurs through innovation,
              mentorship, collaboration and startup
              incubation programs.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#CBCBCB]">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#FFFFE3]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#workflow"
                  className="hover:text-[#FFFFE3]"
                >
                  Workflow
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-[#FFFFE3]"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#stories"
                  className="hover:text-[#FFFFE3]"
                >
                  Success Stories
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-[#CBCBCB]">

              <div className="flex items-center gap-3">

                <FaEnvelope />

                support@incubatex.com

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt />

                +91 9876543210

              </div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1" />

                Innovation Center,
                Hyderabad,
                India

              </div>

            </div>

          </div>

          {/* Social Media */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-[#CBCBCB] mb-5">
              Stay connected with our startup community.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-[#6D8196] p-3 rounded-full hover:bg-[#FFFFE3] hover:text-[#4A4A4A] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="bg-[#6D8196] p-3 rounded-full hover:bg-[#FFFFE3] hover:text-[#4A4A4A] transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="bg-[#6D8196] p-3 rounded-full hover:bg-[#FFFFE3] hover:text-[#4A4A4A] transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="flex flex-col md:flex-row justify-between items-center py-6">

          <p className="text-[#CBCBCB] text-center md:text-left">
            © 2026 IncubateX. All Rights Reserved.
          </p>

          {/* Scroll to Top */}

          <a
            href="#home"
            className="mt-4 md:mt-0 bg-[#6D8196] p-3 rounded-full hover:bg-[#FFFFE3] hover:text-[#4A4A4A] transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;