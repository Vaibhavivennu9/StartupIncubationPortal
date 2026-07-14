const MentorSessions = () => {
  const sessions = [
    {
      mentor: "Dr. John",
      topic: "Business Model Review",
      date: "25 July 2026",
      time: "10:30 AM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      mentor: "Ms. Priya",
      topic: "Pitch Deck Review",
      date: "28 July 2026",
      time: "2:00 PM",
      mode: "Offline",
      status: "Upcoming",
    },
    {
      mentor: "Mr. Rahul",
      topic: "Marketing Strategy",
      date: "15 July 2026",
      time: "11:00 AM",
      mode: "Online",
      status: "Completed",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Mentor Sessions
      </h1>

      <div className="space-y-6">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#4A4A4A]">
                {session.topic}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  session.status === "Upcoming"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              >
                {session.status}
              </span>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <p><strong>Mentor:</strong> {session.mentor}</p>
              <p><strong>Date:</strong> {session.date}</p>
              <p><strong>Time:</strong> {session.time}</p>
              <p><strong>Mode:</strong> {session.mode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSessions;