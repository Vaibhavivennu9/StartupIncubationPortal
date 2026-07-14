import { useEffect, useState } from "react";
import api from "../../services/api";

import StatCard from "../../components/admin/StatCard";

import {
  FaRocket,
  FaUserTie,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

const Dashboard = () => {

  const [dashboard, setDashboard] = useState({
    totalStartups: 0,
    totalMentors: 0,
    totalFounders: 0,
    totalFunding: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const response = await api.get("/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setDashboard(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Startups"
          value={dashboard.totalStartups}
          icon={<FaRocket />}
          color="#6D8196"
        />

        <StatCard
          title="Mentors"
          value={dashboard.totalMentors}
          icon={<FaUserTie />}
          color="#7BAE7F"
        />

        <StatCard
          title="Founders"
          value={dashboard.totalFounders}
          icon={<FaUsers />}
          color="#F4A261"
        />

        <StatCard
          title="Funding"
          value={`₹${dashboard.totalFunding.toLocaleString("en-IN")}`}
          icon={<FaMoneyBillWave />}
          color="#E76F51"
        />

      </div>

    </div>

  );
};

export default Dashboard;