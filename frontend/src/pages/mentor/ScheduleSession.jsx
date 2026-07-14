import { useState } from "react";

const ScheduleSession = () => {
  const [session, setSession] = useState({
    startup: "",
    date: "",
    time: "",
    mode: "",
  });

  const handleChange = (e) => {
    setSession({
      ...session,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Session Scheduled Successfully!");
    console.log(session);
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Schedule Session
      </h1>

      <div className="bg-white shadow-md rounded-xl p-8 max-w-3xl">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Startup */}

          <div>
            <label className="block mb-2 font-semibold">
              Startup
            </label>

            <select
              name="startup"
              value={session.startup}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Startup</option>
              <option>AgriTech AI</option>
              <option>HealthTech Plus</option>
              <option>EduConnect</option>
            </select>
          </div>

          {/* Date */}

          <div>
            <label className="block mb-2 font-semibold">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={session.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          {/* Time */}

          <div>
            <label className="block mb-2 font-semibold">
              Time
            </label>

            <input
              type="time"
              name="time"
              value={session.time}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          {/* Mode */}

          <div>
            <label className="block mb-2 font-semibold">
              Session Mode
            </label>

            <select
              name="mode"
              value={session.mode}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Choose Mode</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#6D8196] text-white px-8 py-3 rounded-lg hover:bg-[#4A4A4A]"
          >
            Schedule Session
          </button>

        </form>

      </div>

    </div>
  );
};

export default ScheduleSession;