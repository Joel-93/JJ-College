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
import Departments from "../Pages/Departments";
import PlacementCell from "../Pages/PlacementCell";
import CampusLife from "../Pages/CampusLife";
import ResearchInnovation from "../Pages/ResearchInnovation";

// Dashboard Layout + sub-pages
import DashboardLayout from "../Pages/dashboard/DashboardLayout";
import Overview       from "../Pages/dashboard/Overview";
import Enquiries      from "../Pages/dashboard/Enquiries";
import DashCourses    from "../Pages/dashboard/Courses";
import DashAdmissions from "../Pages/dashboard/Admissions";
import Users          from "../Pages/dashboard/Users";

// Student Dashboard
import StudentLayout from "../Pages/student/StudentLayout";
import StudentOverview from "../Pages/student/StudentOverview";
import StudentCourses from "../Pages/student/StudentCourses";
import StudentResults from "../Pages/student/StudentResults";
import StudentTimetable from "../Pages/student/StudentTimetable";
import StudentProfile from "../Pages/student/StudentProfile";

// Faculty Dashboard
import FacultyLayout from "../Pages/faculty/FacultyLayout";
import FacultyOverview from "../Pages/faculty/FacultyOverview";
import FacultyClasses from "../Pages/faculty/FacultyClasses";
import FacultyStudents from "../Pages/faculty/FacultyStudents";
import FacultyAttendance from "../Pages/faculty/FacultyAttendance";
import FacultyProfile from "../Pages/faculty/FacultyProfile";

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
      <Route path="/departments" element={<PublicLayout><Departments /></PublicLayout>} />
      <Route path="/placement" element={<PublicLayout><PlacementCell /></PublicLayout>} />
      <Route path="/campus-life" element={<PublicLayout><CampusLife /></PublicLayout>} />
      <Route path="/research" element={<PublicLayout><ResearchInnovation /></PublicLayout>} />
      <Route path="/admissions" element={<PublicLayout><Admissions /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

      {/* Protected Admin Dashboard */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<Overview />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="courses" element={<DashCourses />} />
        <Route path="admissions" element={<DashAdmissions />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* Protected Student Dashboard */}
      <Route path="/student" element={<ProtectedRoute><StudentLayout /></ProtectedRoute>}>
        <Route index element={<StudentOverview />} />
        <Route path="courses" element={<StudentCourses />} />
        <Route path="results" element={<StudentResults />} />
        <Route path="timetable" element={<StudentTimetable />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* Protected Faculty Dashboard */}
      <Route path="/faculty" element={<ProtectedRoute><FacultyLayout /></ProtectedRoute>}>
        <Route index element={<FacultyOverview />} />
        <Route path="classes" element={<FacultyClasses />} />
        <Route path="students" element={<FacultyStudents />} />
        <Route path="attendance" element={<FacultyAttendance />} />
        <Route path="profile" element={<FacultyProfile />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;