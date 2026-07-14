import { useEffect, useState } from "react";
import StartupInfoCard from "../../components/dashboard/StartupInfoCard";
import api from "../../services/api";

const MyStartup = () => {

  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStartup();
  }, []);

  const fetchStartup = async () => {

    try {

      const response = await api.get("/startups/my-startup", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setStartup(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <h2 className="text-2xl font-bold p-10">
        Loading...
      </h2>
    );
  }

  if (!startup) {
    return (
      <h2 className="text-2xl font-bold p-10">
        No Startup Found
      </h2>
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        My Startup
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <StartupInfoCard
          title="Startup Name"
          value={startup.startupName}
        />

        <StartupInfoCard
          title="Industry"
          value={startup.industry}
        />

        <StartupInfoCard
          title="Founder"
          value={startup.createdBy?.name}
        />

        <StartupInfoCard
          title="Team Size"
          value={startup.teamSize}
        />

        <StartupInfoCard
          title="Funding Required"
          value={`₹${startup.fundingRequired || 0}`}
        />

        <StartupInfoCard
          title="Current Stage"
          value={startup.stage}
        />

        <StartupInfoCard
          title="Website"
          value={startup.website || "Not Available"}
        />

        <StartupInfoCard
          title="Location"
          value={startup.location || "Not Available"}
        />

      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">

        <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">
          Description
        </h2>

        <p className="text-gray-700 leading-7">
          {startup.description}
        </p>

      </div>

    </div>
  );
};

export default MyStartup;