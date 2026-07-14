import { useEffect, useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import api from "../services/api";

const DashboardHeader = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="bg-white shadow-md rounded-xl px-8 py-6 flex justify-between items-center">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-[#4A4A4A]">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's an overview of your mentoring activities.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 outline-none"
        />

        <FaBell
          size={24}
          className="text-gray-500 cursor-pointer"
        />

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={42}
            className="text-[#6D8196]"
          />

          <div>

            <h3 className="font-semibold text-lg">
              {user?.name || "Mentor"}
            </h3>

            <p className="text-gray-500 capitalize">
              {user?.role || "Mentor"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;