const StartupProgress = ({ stage }) => {

  const startupStages = [
    "Idea",
    "Prototype",
    "MVP",
    "Growth",
    "Scaling"
  ];

  const currentStage = startupStages.indexOf(stage);

  const stages = [
    {
      title: "Idea Submitted",
      completed: currentStage >= 0,
    },
    {
      title: "Prototype Completed",
      completed: currentStage >= 1,
    },
    {
      title: "MVP Ready",
      completed: currentStage >= 2,
    },
    {
      title: "Growth Stage",
      completed: currentStage >= 3,
    },
    {
      title: "Scaling",
      completed: currentStage >= 4,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">
        Startup Progress
      </h2>

      <div className="space-y-5">

        {stages.map((item, index) => (

          <div key={index}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {item.title}
              </span>

              <span
                className={
                  item.completed
                    ? "text-green-600 font-semibold"
                    : "text-gray-500"
                }
              >
                {item.completed ? "Completed" : "Pending"}
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className={`h-3 rounded-full ${
                  item.completed
                    ? "bg-green-500 w-full"
                    : "bg-[#6D8196] w-1/2"
                }`}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StartupProgress;