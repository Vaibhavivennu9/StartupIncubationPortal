import Sidebar from "../components/admin/Sidebar";
import DashboardHeader from "../components/admin/DashboardHeader";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#FFFFE3]">

      <Sidebar />

      <div className="flex-1 ml-64">

        <DashboardHeader />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  );
};

export default AdminLayout;