import { useEffect, useState } from "react";
import api from "../../services/api";

import StatCard from "../../components/dashboard/StatCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import UpcomingSessions from "../../components/dashboard/UpcomingSessions";
import StartupProgress from "../../components/dashboard/StartupProgress";

import {
  FaRocket,
  FaMoneyBillWave,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const [startup, setStartup] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
    fetchStartup();
}, []);

const fetchStartup = async () => {

    try {

        const response = await api.get("/startups/my-startup", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        setStartup(response.data);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};
if (loading) {
    return <h2 className="text-2xl font-bold">Loading...</h2>;
}
  return (
  <>
    {/* Statistics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <StatCard
        title="Registered Startup"
        value={startup?.startupName}
        icon={<FaRocket />}
        color="#6D8196"
      />

      <StatCard
        title="Funding Required"
        value={`₹${startup?.fundingRequired?.toLocaleString("en-IN")}`}
        icon={<FaMoneyBillWave />}
        color="#7BAE7F"
      />

      <StatCard
        title="Assigned Mentor"
        value="Not Assigned"
        icon={<FaUserTie />}
        color="#F4A261"
      />

      <StatCard
        title="Next Session"
        value="Not Scheduled"
        icon={<FaCalendarAlt />}
        color="#E76F51"
      />

    </div>

    {/* Recent Activity & Upcoming Sessions */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <RecentActivity />
      <UpcomingSessions />
    </div>

    {/* Startup Progress */}
    <StartupProgress />
  </>
);
}
export default Dashboard;