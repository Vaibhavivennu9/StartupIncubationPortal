import {
  FaRocket,
  FaUserTie,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const Reports = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Reports
      </h1>

      {/* Report Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <FaRocket className="text-5xl text-[#6D8196] mx-auto mb-4" />
          <h2 className="text-3xl font-bold">48</h2>
          <p className="text-gray-500">Total Startups</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <FaUserTie className="text-5xl text-[#7BAE7F] mx-auto mb-4" />
          <h2 className="text-3xl font-bold">15</h2>
          <p className="text-gray-500">Total Mentors</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <FaCheckCircle className="text-5xl text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">36</h2>
          <p className="text-gray-500">Approved Startups</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <FaClock className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-gray-500">Pending Applications</p>
        </div>

      </div>

      {/* Report Summary */}

      <div className="bg-white shadow-md rounded-xl p-8 mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Monthly Report Summary
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">

          <li>Total Registered Startups : 48</li>

          <li>Applications Approved : 36</li>

          <li>Applications Pending : 12</li>

          <li>Registered Mentors : 15</li>

          <li>Total Funding Distributed : ₹2.4 Crores</li>

        </ul>

      </div>

    </div>
  );
};

export default Reports;