import { useEffect, useState } from "react";
import api from "../../services/api";

const ManageStartups = () => {

  const [startups, setStartups] = useState([]);
  const [mentors, setMentors] = useState({});
  const [selectedMentor, setSelectedMentor] = useState({});

  useEffect(() => {
    fetchStartups();
    fetchMentors();
  }, []);

  const fetchStartups = async () => {
    try {

      const response = await api.get("/startups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setStartups(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchMentors = async () => {
    try {

      const response = await api.get("/admin/mentors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setMentors(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const assignMentor = async (startupId) => {

    const mentorId = selectedMentor[startupId];

    if (!mentorId) {
      alert("Please select a mentor");
      return;
    }

    try {

      await api.put(
        "/admin/assign-mentor",
        {
          startupId,
          mentorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Mentor Assigned Successfully");

      fetchStartups();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Manage Startups
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#6D8196] text-white">

            <tr>

              <th className="p-4 text-left">Startup</th>

              <th className="p-4 text-left">Founder</th>

              <th className="p-4 text-left">Industry</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Assign Mentor</th>

            </tr>

          </thead>

          <tbody>

            {startups.map((startup) => (

              <tr
                key={startup._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {startup.startupName}
                </td>

                <td className="p-4">
                  {startup.createdBy?.name}
                </td>

                <td className="p-4">
                  {startup.industry}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      startup.reviewStatus === "Approved"
                        ? "bg-green-100 text-green-700"
                        : startup.reviewStatus === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {startup.reviewStatus}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <select
                      className="border rounded px-3 py-2"
                      value={selectedMentor[startup._id] || ""}
                      onChange={(e) =>
                        setSelectedMentor({
                          ...selectedMentor,
                          [startup._id]: e.target.value,
                        })
                      }
                    >

                      <option value="">
                        Select Mentor
                      </option>

                      {mentors.map((mentor) => (

                        <option
                          key={mentor._id}
                          value={mentor._id}
                        >
                          {mentor.name}
                        </option>

                      ))}

                    </select>

                    <button
                      onClick={() => assignMentor(startup._id)}
                      className="bg-[#6D8196] text-white px-4 py-2 rounded hover:bg-[#4A4A4A]"
                    >
                      Assign
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageStartups;