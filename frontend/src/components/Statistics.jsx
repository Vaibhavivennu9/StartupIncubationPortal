import {
  FaRocket,
  FaUserTie,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket />,
    value: "500+",
    title: "Startups Incubated",
  },
  {
    icon: <FaUserTie />,
    value: "120+",
    title: "Expert Mentors",
  },
  {
    icon: <FaMoneyBillWave />,
    value: "₹12 Cr+",
    title: "Funding Raised",
  },
  {
    icon: <FaChartLine />,
    value: "85%",
    title: "Success Rate",
  },
];

const Statistics = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#4A4A4A]">
          Our Impact
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Helping entrepreneurs transform ideas into successful businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#CBCBCB] rounded-2xl p-8 text-center shadow-md hover:bg-[#6D8196] hover:text-white transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p className="mt-3 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;