import { useEffect, useState } from "react";
import api from "../../services/api";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
  });

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
    <div className="p-8">

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Mentor Profile
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              value={profile.name}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Role
            </label>

            <input
              type="text"
              value={profile.role}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100 capitalize"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Status
            </label>

            <input
              type="text"
              value={profile.isVerified ? "Verified" : "Not Verified"}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;