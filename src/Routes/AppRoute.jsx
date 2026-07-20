import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Public Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Admissions from "../Pages/Admissions";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";

// Dashboard Layout + sub-pages
import DashboardLayout from "../Pages/dashboard/DashboardLayout";
import Overview       from "../Pages/dashboard/Overview";
import Enquiries      from "../Pages/dashboard/Enquiries";
import DashCourses    from "../Pages/dashboard/Courses";
import DashAdmissions from "../Pages/dashboard/Admissions";
import Users          from "../Pages/dashboard/Users";

// Protected Route
import ProtectedRoute from "../Components/ProtectedRoute";

// Public layout wrapper (with Header + Footer)
const PublicLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes — wrapped with Header + Footer */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/courses" element={<PublicLayout><Courses /></PublicLayout>} />
      <Route path="/admissions" element={<PublicLayout><Admissions /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

      {/* Protected Dashboard — full-screen, no public Header/Footer */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="courses" element={<DashCourses />} />
        <Route path="admissions" element={<DashAdmissions />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;