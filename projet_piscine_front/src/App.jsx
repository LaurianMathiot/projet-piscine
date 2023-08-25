import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MentionsLegales from "./pages/public/MentionsLegales";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboardFiles from "./pages/admin/AdminDashboardFiles";
import AdminDashboardUsers from "./pages/admin/AdminDashboardUsers";
import UserDashboardBills from "./pages/user/UserDashboardBills";
import UserDashboardUpdate from "./pages/user/UserDashboardUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route
          path="/admin-dashboard/files"
          element={<AdminDashboardFiles />}
        />
        <Route
          path="/admin-dashboard/users"
          element={<AdminDashboardUsers />}
        />
        <Route path="/user-dashboard/bills" element={<UserDashboardBills />} />
        <Route
          path="/user-dashboard/update"
          element={<UserDashboardUpdate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
