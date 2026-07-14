import { useEffect, useState } from "react";
import api from "../../services/api";

import StatCard from "../../components/dashboard/StatCard";
import AssignedStartupCard from "../../components/mentor/AssignedStartupCard";

import {
  FaUsers,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Dashboard = () => {

  const [dashboard, setDashboard] = useState({
    assignedStartups: 0,
    pendingReviews: 0,
    completedReviews: 0,
    startups: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {

      const response = await api.get("/mentor/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);

      setDashboard(response.data);

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
        Mentor Dashboard
      </h1>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Assigned Startups"
          value={dashboard.assignedStartups}
          icon={<FaUsers />}
          color="#6D8196"
        />

        <StatCard
          title="Pending Reviews"
          value={dashboard.pendingReviews}
          icon={<FaClipboardCheck />}
          color="#F4A261"
        />

        <StatCard
          title="Today's Sessions"
          value="0"
          icon={<FaCalendarAlt />}
          color="#7BAE7F"
        />

        <StatCard
          title="Completed Reviews"
          value={dashboard.completedReviews}
          icon={<FaCheckCircle />}
          color="#E76F51"
        />

      </div>

      {/* Assigned Startups */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">
          Assigned Startups
        </h2>

        {dashboard.startups.length === 0 ? (

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            No startups assigned yet.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {dashboard.startups.map((startup) => (

              <AssignedStartupCard
                key={startup._id}
                startup={startup}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Dashboard;