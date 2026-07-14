import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";

const Profile = () => {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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

      setProfile(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <h2 className="text-2xl font-bold p-8">
        Loading...
      </h2>
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Profile Icon */}
          <div className="flex justify-center items-center w-36 h-36 rounded-full bg-[#6D8196] text-white">
            <FaUserCircle size={90} />
          </div>

          {/* Profile Details */}
          <div className="flex-1">

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaUserCircle className="text-[#6D8196] text-xl" />
                <div>
                  <p className="text-gray-500">Name</p>
                  <h2 className="font-semibold text-lg">
                    {profile.name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#6D8196] text-xl" />
                <div>
                  <p className="text-gray-500">Email</p>
                  <h2 className="font-semibold">
                    {profile.email}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-[#6D8196] text-xl" />
                <div>
                  <p className="text-gray-500">Phone</p>
                  <h2 className="font-semibold">
                    {profile.phone || "Not Available"}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaBuilding className="text-[#6D8196] text-xl" />
                <div>
                  <p className="text-gray-500">Startup</p>
                  <h2 className="font-semibold">
                    {profile.startupName || "Not Registered"}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaUserCircle className="text-[#6D8196] text-xl" />
                <div>
                  <p className="text-gray-500">Role</p>
                  <h2 className="font-semibold capitalize">
                    {profile.role}
                  </h2>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;