import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";

const UpcomingSessions = () => {
  const sessions = [
    {
      title: "Business Model Review",
      date: "25 July 2026",
      time: "10:30 AM",
      mode: "Online",
    },
    {
      title: "Funding Strategy",
      date: "28 July 2026",
      time: "02:00 PM",
      mode: "Offline",
    },
    {
      title: "Pitch Deck Preparation",
      date: "30 July 2026",
      time: "11:00 AM",
      mode: "Online",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold text-[#4A4A4A] mb-5">
        Upcoming Sessions
      </h2>

      <div className="space-y-4">

        {sessions.map((session, index) => (

          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >

            <h3 className="font-semibold text-lg text-[#4A4A4A]">
              {session.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <FaCalendarAlt />
              <span>{session.date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <FaClock />
              <span>{session.time}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <FaVideo />
              <span>{session.mode}</span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default UpcomingSessions;