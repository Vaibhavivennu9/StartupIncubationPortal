import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-[#4A4A4A]">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Administrator.
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center border rounded-lg px-4 py-2">

          <FaSearch className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
          />

        </div>

        <FaBell className="text-xl text-gray-600" />

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-[#6D8196]" />

          <div>
            <h2 className="font-bold">Admin</h2>
            <p className="text-sm text-gray-500">
              System Administrator
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;