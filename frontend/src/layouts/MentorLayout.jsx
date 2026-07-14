import Sidebar from "../components/mentor/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const MentorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#FFFFE3]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MentorLayout;