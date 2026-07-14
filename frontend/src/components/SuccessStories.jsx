import {
  FaRocket,
  FaArrowUp,
  FaMoneyBillWave,
} from "react-icons/fa";

const stories = [
  {
    startup: "AgriAI",
    founder: "Rahul Sharma",
    domain: "Agritech",
    funding: "₹25 Lakhs",
    status: "Incubated Successfully",
    description:
      "Developed an AI-powered crop disease prediction platform and secured seed funding through the incubation program.",
  },

  {
    startup: "HealthSync",
    founder: "Priya Verma",
    domain: "Healthcare",
    funding: "₹40 Lakhs",
    status: "Investment Secured",
    description:
      "Built a smart patient monitoring system with mentor guidance and successfully launched into the market.",
  },

  {
    startup: "EduSpark",
    founder: "Amit Patel",
    domain: "EdTech",
    funding: "₹18 Lakhs",
    status: "Growing Startup",
    description:
      "Created an adaptive learning platform helping thousands of students while expanding across multiple cities.",
  },
];

const SuccessStories = () => {
  return (
    <section
      id="stories"
      className="bg-[#FFFFE3] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-center text-[#4A4A4A]">
          Startup Success Stories
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Discover how innovative startups transformed their ideas into
          successful businesses through our incubation ecosystem.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((story, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Card Header */}

              <div className="bg-[#6D8196] text-white p-6">

                <div className="flex justify-between items-center">

                  <FaRocket className="text-3xl" />

                  <span className="text-sm bg-white text-[#6D8196] px-3 py-1 rounded-full font-semibold">
                    {story.domain}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {story.startup}
                </h3>

                <p className="opacity-90">
                  Founder: {story.founder}
                </p>

              </div>

              {/* Body */}

              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">

                  <FaMoneyBillWave
                    className="text-[#6D8196] text-xl"
                  />

                  <span className="font-semibold text-[#4A4A4A]">
                    {story.funding}
                  </span>

                </div>

                <div className="flex items-center gap-3 mb-5">

                  <FaArrowUp
                    className="text-green-600"
                  />

                  <span className="text-[#4A4A4A] font-medium">
                    {story.status}
                  </span>

                </div>

                <p className="text-gray-600 leading-7">
                  {story.description}
                </p>

                {/* Button */}

                <button
                  className="mt-8 w-full bg-[#6D8196] text-white py-3 rounded-xl hover:bg-[#4A4A4A] transition duration-300"
                >
                  Read Story
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default SuccessStories;