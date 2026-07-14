import {
  FaRocket,
  FaUserTie,
  FaSearch,
  FaBell,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Startup Registration",
    desc: "Submit your startup profile and business plan."
  },
  {
    icon: <FaUserTie />,
    title: "Mentor Management",
    desc: "Connect startups with experienced mentors."
  },
  {
    icon: <FaSearch />,
    title: "Search & Filter",
    desc: "Find startups by domain or funding stage."
  },
  {
    icon: <FaBell />,
    title: "Notifications",
    desc: "Never miss mentoring sessions and milestones."
  },
  {
    icon: <FaChartBar />,
    title: "Analytics Dashboard",
    desc: "Track incubation progress with insights."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Authentication",
    desc: "Role-based access for Admin, Mentor and Founder."
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white py-20"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#4A4A4A]">
          Platform Features
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-14">
          Everything needed to manage the startup incubation lifecycle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#CBCBCB] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-[#6D8196] flex items-center justify-center text-white text-2xl mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-700 leading-7">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;