import { Link } from "react-router-dom";
import { FaBuilding, FaUser, FaIndustry, FaMoneyBillWave } from "react-icons/fa";

const AssignedStartupCard = ({ startup }) => {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold text-[#4A4A4A]">
          {startup.startupName}
        </h2>

        <span className="bg-[#6D8196] text-white px-3 py-1 rounded-full text-sm">
          {startup.stage}
        </span>

      </div>

      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <FaIndustry className="text-[#6D8196]" />
          <span>
            <strong>Industry:</strong> {startup.industry}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaUser className="text-[#6D8196]" />
          <span>
            <strong>Founder:</strong> {startup.createdBy?.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMoneyBillWave className="text-[#6D8196]" />
          <span>
            <strong>Funding:</strong> ₹
            {startup.fundingRequired?.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaBuilding className="text-[#6D8196]" />
          <span>
            <strong>Status:</strong> {startup.reviewStatus}
          </span>
        </div>

      </div>

      <Link
        to={`/mentor/review-startup/${startup._id}`}
        className="block mt-6 bg-[#6D8196] text-white text-center py-3 rounded-lg hover:bg-[#4A4A4A] transition"
      >
        Review Startup
      </Link>

    </div>
  );
};

export default AssignedStartupCard;