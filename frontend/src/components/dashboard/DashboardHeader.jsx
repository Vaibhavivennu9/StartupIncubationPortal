import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-md p-5 mb-8">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-[#4A4A4A]">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Here's an overview of your startup progress.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
        <div className="flex items-center border rounded-lg px-3 py-2">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none"
          />

        </div>

        {/* Notification */}
        <button className="text-2xl text-[#6D8196] hover:text-[#4A4A4A]">
          <FaBell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">

          <FaUserCircle className="text-4xl text-[#6D8196]" />

          <div>
            <p className="font-semibold text-[#4A4A4A]">
              Founder
            </p>

            <p className="text-sm text-gray-500">
              Startup Owner
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;