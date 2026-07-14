import { useEffect, useState } from "react";
import api from "../../services/api";

const Applications = () => {

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {

    try {

      const response = await api.get("/startups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setApplications(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await api.put(
        `/admin/application/${id}`,
        {
          reviewStatus: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(`Application ${status}`);

      fetchApplications();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Startup Applications
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#6D8196] text-white">

            <tr>
              <th className="p-4 text-left">Startup</th>
              <th className="p-4 text-left">Founder</th>
              <th className="p-4 text-left">Industry</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {applications.map((app) => (

              <tr
                key={app._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {app.startupName}
                </td>

                <td className="p-4">
                  {app.createdBy?.name}
                </td>

                <td className="p-4">
                  {app.industry}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      app.reviewStatus === "Approved"
                        ? "bg-green-100 text-green-700"
                        : app.reviewStatus === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {app.reviewStatus}
                  </span>

                </td>

                <td className="p-4 flex justify-center gap-3">

                  <button
                    onClick={() => updateStatus(app._id, "Approved")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(app._id, "Rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Reject
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

export default Applications;