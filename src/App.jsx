import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import PublicCourses from './Pages/Courses.jsx';
import PublicAdmissions from './Pages/Admissions.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import DashboardLayout from './Pages/dashboard/DashboardLayout.jsx';
import Overview from './Pages/dashboard/Overview.jsx';
import Enquiries from './Pages/dashboard/Enquiries.jsx';
import Courses from './Pages/dashboard/Courses.jsx';
import Admissions from './Pages/dashboard/Admissions.jsx';
import Users from './Pages/dashboard/Users.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<PublicCourses />} />
            <Route path="/admissions" element={<PublicAdmissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Protected dashboard routes */}
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
              <Route path="courses" element={<Courses />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;