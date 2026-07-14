import { Link,useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaRocket,
  FaUserTie,
  FaFileAlt,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate =useNavigate();
  const handleLogout=()=>{
   localStorage.removeItem("token");
   navigate("/login");
  };
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#6D8196] text-white">

      <div className="text-3xl font-bold p-6 border-b">
        Admin
      </div>

      <nav className="mt-6 flex flex-col">

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaChartPie />
          Dashboard
        </Link>

        <Link
          to="/admin/manage-startups"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaRocket />
          Manage Startups
        </Link>

        <Link
          to="/admin/manage-mentors"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaUserTie />
          Manage Mentors
        </Link>

        <Link
          to="/admin/applications"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaFileAlt />
          Applications
        </Link>

        <Link
          to="/admin/reports"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaChartBar />
          Reports
        </Link>

        <Link
          to="/admin/profile"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaUserCircle />
          Profile
        </Link>
        <button
        onClick={handleLogout}
        className="px-6 py-4 flex gap-4 mt-auto hover:bg-red-600">
          <FaSignOutAlt/>
          Logout
        </button>

      </nav>

    </div>
  );
};

export default Sidebar;