import {
  FaUserPlus,
  FaLightbulb,
  FaClipboardCheck,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Register",
    desc: "Create your startup account."
  },
  {
    icon: <FaLightbulb />,
    title: "Submit Idea",
    desc: "Present your innovative business idea."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Admin Review",
    desc: "Application verification process."
  },
  {
    icon: <FaUsers />,
    title: "Mentor Assigned",
    desc: "Get guidance from industry experts."
  },
  {
    icon: <FaChartLine />,
    title: "Grow Startup",
    desc: "Track progress and scale your startup."
  },
];

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="bg-[#FFFFE3] py-20"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#4A4A4A]">
          How It Works
        </h2>

        <p className="text-center mt-3 text-gray-600 mb-16">
          Your startup journey in five simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="w-20 h-20 bg-[#6D8196] rounded-full mx-auto flex items-center justify-center text-white text-3xl shadow-lg">

                {step.icon}

              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#4A4A4A]">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Workflow;