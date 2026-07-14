import { useEffect, useState } from "react";
import api from "../../services/api";

const ManageMentors = () => {

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors();
  }, []);

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

  return (

    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Manage Mentors
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#6D8196] text-white">

            <tr>

              <th className="p-4 text-left">Mentor</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Assigned Startups</th>

              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {mentors.map((mentor) => (

              <tr
                key={mentor._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {mentor.name}
                </td>

                <td className="p-4">
                  {mentor.email}
                </td>

                <td className="p-4">
                  {mentor.assignedStartups}
                </td>

                <td className="p-4 text-center">

                  <button
                    className="bg-[#6D8196] text-white px-4 py-2 rounded hover:bg-[#4A4A4A]"
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ManageMentors;