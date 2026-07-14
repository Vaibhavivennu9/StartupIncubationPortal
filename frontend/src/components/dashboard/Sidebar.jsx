import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRocket,
  FaFolderOpen,
  FaMoneyBillWave,
  FaUserTie,
  FaBell,
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
    <div className="w-64 min-h-screen bg-[#6D8196] text-white flex flex-col">

      {/* Logo */}
      <div className="text-3xl font-bold text-center py-8 border-b border-white/30">
        StartupHub
      </div>

      {/* Menu */}
      <nav className="flex flex-col mt-6 flex-1">

        <Link
          to="/founder/dashboard"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/founder/register-startup"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaRocket />
          <span>Register Startup</span>
        </Link>

        <Link
          to="/founder/my-startup"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaFolderOpen />
          <span>My Startup</span>
        </Link>

        <Link
          to="/founder/funding-status"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaMoneyBillWave />
          <span>Funding Status</span>
        </Link>

        <Link
          to="/founder/mentor-sessions"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaUserTie />
          <span>Mentor Sessions</span>
        </Link>

        <Link
          to="/founder/notifications"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaBell />
          <span>Notifications</span>
        </Link>

        <Link
          to="/founder/profile"
          className="flex items-center gap-4 px-6 py-4 hover:bg-[#4A4A4A] transition"
        >
          <FaUserCircle />
          <span>Profile</span>
        </Link>

        {/* Logout */}
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