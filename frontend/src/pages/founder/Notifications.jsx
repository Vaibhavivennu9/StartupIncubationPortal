import { FaBell, FaCheckCircle, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

const Notifications = () => {
  const notifications = [
    {
      icon: <FaCalendarAlt className="text-blue-500 text-xl" />,
      title: "Mentoring Session",
      message: "Your mentoring session with Dr. John is scheduled for 25 July at 10:30 AM.",
      time: "2 hours ago",
    },
    {
      icon: <FaMoneyBillWave className="text-green-500 text-xl" />,
      title: "Funding Approved",
      message: "Congratulations! ₹15 Lakhs funding has been approved.",
      time: "Yesterday",
    },
    {
      icon: <FaCheckCircle className="text-orange-500 text-xl" />,
      title: "Application Approved",
      message: "Your startup has been accepted into the incubation program.",
      time: "3 days ago",
    },
    {
      icon: <FaBell className="text-purple-500 text-xl" />,
      title: "Reminder",
      message: "Submit your monthly startup progress report before 30 July.",
      time: "1 week ago",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Notifications
      </h1>

      <div className="space-y-5">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 flex gap-4 hover:shadow-lg transition"
          >
            <div>{notification.icon}</div>

            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#4A4A4A]">
                {notification.title}
              </h2>

              <p className="text-gray-600 mt-1">
                {notification.message}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;