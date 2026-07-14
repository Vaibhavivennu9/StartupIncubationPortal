import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const FounderLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#FFFFE3]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">

        {/* Header */}
        <DashboardHeader />

        {/* Dynamic Page Content */}
        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
};

export default FounderLayout;