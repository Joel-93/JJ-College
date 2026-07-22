import { useAuth } from '../../context/AuthContext.jsx';
import { FaGraduationCap, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const StudentProfile = () => {
  const { user } = useAuth();

  const profile = {
    name: user?.name || 'Student',
    email: user?.email || 'student@gmail.com',
    rollNo: 'CSE2024042',
    regNo: 'JJEC/2024/CSE/042',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    section: 'A',
    semester: '5',
    batch: '2024–2028',
    dob: '15-Mar-2005',
    phone: '+91 98765 43210',
    parentName: 'Mr. Kumar S.',
    parentPhone: '+91 98765 43211',
    bloodGroup: 'O+',
    address: 'No. 12, Gandhi Street, Trichy, Tamil Nadu - 620001',
  };

  const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
        <p className="text-slate-500 text-sm mt-0.5">Your personal and academic information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center font-black text-sky-700 text-2xl shadow-lg shrink-0">
            {initials}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <p className="text-sky-100 text-sm mt-1">{profile.department}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-white/20 backdrop-blur px-3 py-0.5 rounded-full text-xs font-semibold">{profile.year}</span>
              <span className="bg-white/20 backdrop-blur px-3 py-0.5 rounded-full text-xs font-semibold">Section {profile.section}</span>
              <span className="bg-white/20 backdrop-blur px-3 py-0.5 rounded-full text-xs font-semibold">Batch {profile.batch}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-sky-50">
            <h3 className="font-bold text-sky-800 flex items-center gap-2">
              <FaGraduationCap className="text-sky-600 text-lg" /> Academic Information
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              ['Roll Number', profile.rollNo],
              ['Registration No', profile.regNo],
              ['Department', profile.department],
              ['Year / Semester', `${profile.year} / Sem ${profile.semester}`],
              ['Section', profile.section],
              ['Batch', profile.batch],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">{l}</span>
                <span className="text-slate-800 font-semibold text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-emerald-50">
            <h3 className="font-bold text-emerald-800 flex items-center gap-2">
              <FaUser className="text-emerald-600 text-base" /> Personal Information
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              ['Email', profile.email],
              ['Phone', profile.phone],
              ['Date of Birth', profile.dob],
              ['Blood Group', profile.bloodGroup],
              ['Parent / Guardian', profile.parentName],
              ['Parent Phone', profile.parentPhone],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">{l}</span>
                <span className="text-slate-800 font-semibold text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-700 mb-2 text-sm flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" /> Address
        </h3>
        <p className="text-slate-600 text-sm">{profile.address}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
