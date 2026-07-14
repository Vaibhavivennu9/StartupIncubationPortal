import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaClipboardCheck,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    navigate("/login");

  };

  return (
    <div className="w-64 min-h-screen bg-[#6D8196] text-white shadow-lg flex flex-col">

      {/* Logo */}
      <div className="text-2xl font-bold text-center py-6 border-b border-gray-500">
        Mentor Panel
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col flex-1">

        <Link
          to="/mentor/dashboard"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/mentor/assigned-startups"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaUsers />
          <span>Assigned Startups</span>
        </Link>

        <Link
          to="/mentor/review-startup"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaClipboardCheck />
          <span>Review Startup</span>
        </Link>

        <Link
          to="/mentor/profile"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A]"
        >
          <FaUserCircle />
          <span>Profile</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-4 mt-auto hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </nav>

    </div>
  );
};

export default Sidebar;