import {
  FaCheckCircle,
  FaUserTie,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

const RecentActivity = () => {
  const activities = [
    {
      icon: <FaCheckCircle />,
      text: 'Startup "AgriTech AI" registered successfully.',
      color: "text-green-600",
    },
    {
      icon: <FaUserTie />,
      text: "Mentor Dr. John assigned.",
      color: "text-blue-600",
    },
    {
      icon: <FaMoneyBillWave />,
      text: "Funding request submitted.",
      color: "text-yellow-600",
    },
    {
      icon: <FaCalendarAlt />,
      text: "Pitch event scheduled for 25 July.",
      color: "text-red-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold text-[#4A4A4A] mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-center gap-4 border-b pb-3 last:border-none"
          >

            <div className={`text-2xl ${activity.color}`}>
              {activity.icon}
            </div>

            <p className="text-gray-700">
              {activity.text}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentActivity;