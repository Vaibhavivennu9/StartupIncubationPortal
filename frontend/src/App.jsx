import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";

// Founder Pages
import Dashboard from "./pages/founder/Dashboard";
import RegisterStartup from "./pages/founder/RegisterStartup";

// Layout
import FounderLayout from "./layouts/FounderLayout";
import MyStartup from "./pages/founder/MyStartup";
import FundingStatus from "./pages/founder/FundingStatus";
import MentorSessions from "./pages/founder/MentorSessions";
import Notifications from "./pages/founder/Notifications";
import FounderProfile from "./pages/founder/Profile";
import MentorLayout from "./layouts/MentorLayout";
import MentorDashboard from "./pages/mentor/Dashboard";
import AssignedStartups from "./pages/mentor/AssignedStartups";
import ReviewStartup from "./pages/mentor/ReviewStartup";
import ScheduleSession from "./pages/mentor/ScheduleSession";
import Feedback from "./pages/mentor/Feedback";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageStartups from "./pages/admin/ManageStartups";
import ManageMentors from "./pages/admin/ManageMentors";
import Applications from "./pages/admin/Applications";
import Reports from "./pages/admin/Reports";
import AdminProfile from "./pages/admin/Profile";
import MentorProfile from "./pages/mentor/Profile";
function App() {
  return (
    <Routes>

      {/* ================= Public Routes ================= */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/verify-otp" element ={<VerifyOtp />}/>

      {/* ================= Founder Routes ================= */}

      <Route
        path="/founder/dashboard"
        element={
          <FounderLayout>
            <Dashboard />
          </FounderLayout>
        }
      />

      <Route
        path="/founder/register-startup"
        element={
          <FounderLayout>
            <RegisterStartup />
          </FounderLayout>
        }
      />
      <Route
  path="/founder/my-startup"
  element={
    <FounderLayout>
      <MyStartup />
    </FounderLayout>
  }
/>
<Route
  path="/founder/funding-status"
  element={
    <FounderLayout>
      <FundingStatus />
    </FounderLayout>
  }
/>
<Route
  path="/founder/mentor-sessions"
  element={
    <FounderLayout>
      <MentorSessions />
    </FounderLayout>
  }
/>
<Route
  path="/founder/notifications"
  element={
    <FounderLayout>
      <Notifications />
    </FounderLayout>
  }
/>
<Route
  path="/founder/profile"
  element={
    <FounderLayout>
      <FounderProfile />
    </FounderLayout>
  }
/>
<Route
  path="/mentor/dashboard"
  element={
    <MentorLayout>
      <MentorDashboard />
    </MentorLayout>
  }
/>
<Route
  path="/mentor/assigned-startups"
  element={
    <MentorLayout>
      <AssignedStartups />
    </MentorLayout>
  }
/>
<Route
  path="/mentor/review-startup"
  element={
    <MentorLayout>
      <ReviewStartup />
    </MentorLayout>
  }
/>
<Route
  path="/mentor/schedule-session"
  element={
    <MentorLayout>
      <ScheduleSession />
    </MentorLayout>
  }
/>
<Route
  path="/mentor/feedback"
  element={
    <MentorLayout>
      <Feedback />
    </MentorLayout>
  }
/>
<Route
  path="/mentor/profile"
  element={
    <MentorLayout>
      <MentorProfile />
    </MentorLayout>
  }
/>
<Route
  path="/admin/dashboard"
  element={
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  }
/>
<Route
  path="/admin/manage-startups"
  element={
    <AdminLayout>
      <ManageStartups />
    </AdminLayout>
  }
/>
<Route
  path="/admin/manage-mentors"
  element={
    <AdminLayout>
      <ManageMentors />
    </AdminLayout>
  }
/>
<Route
  path="/admin/applications"
  element={
    <AdminLayout>
      <Applications />
    </AdminLayout>
  }
/>
<Route
  path="/admin/reports"
  element={
    <AdminLayout>
      <Reports />
    </AdminLayout>
  }
/>
<Route
  path="/admin/profile"
  element={
    <AdminLayout>
      <AdminProfile />
    </AdminLayout>
  }
/>
    </Routes>
  );
}

export default App;