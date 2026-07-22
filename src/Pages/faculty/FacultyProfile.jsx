import { useAuth } from '../../context/AuthContext.jsx';
import { FaChalkboardTeacher, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const FacultyProfile = () => {
  const { user } = useAuth();

  const rawName = user?.name || 'Faculty';
  const name = (rawName !== 'Faculty' && !rawName.startsWith('Dr.') && !rawName.startsWith('Dr '))
    ? `Dr. ${rawName}`
    : rawName;

  const profile = {
    name: name,
    email: user?.email || 'faculty@gmail.com',
    employeeId: 'JJEC/FAC/CSE/012',
    department: 'Computer Science & Engineering',
    designation: 'Assistant Professor',
    joiningDate: '12-Aug-2018',
    qualification: 'Ph.D in Machine Learning, M.Tech (CSE)',
    experience: '8 Years',
    phone: '+91 98765 12345',
    bloodGroup: 'B+',
    address: 'Faculty Quarters, Block A, JJEC Campus, Trichy - 620001',
    publications: '12 International Journals, 5 Conference Papers',
  };

  const initials = profile.name.split(' ').filter(n => n !== 'Dr.' && n !== 'Dr').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'F';

  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
        <p className="text-slate-500 text-sm mt-0.5">Your professional and personal information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center font-black text-emerald-700 text-2xl shadow-lg shrink-0">
            {initials}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <p className="text-emerald-100 text-sm mt-1">{profile.designation} • {profile.department}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-white/20 backdrop-blur px-3 py-0.5 rounded-full text-xs font-semibold">ID: {profile.employeeId}</span>
              <span className="bg-white/20 backdrop-blur px-3 py-0.5 rounded-full text-xs font-semibold">Exp: {profile.experience}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-emerald-50">
            <h3 className="font-bold text-emerald-800 flex items-center gap-2">
              <FaChalkboardTeacher className="text-emerald-600" /> Professional Information
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              ['Employee ID', profile.employeeId],
              ['Department', profile.department],
              ['Designation', profile.designation],
              ['Qualification', profile.qualification],
              ['Experience', profile.experience],
              ['Date of Joining', profile.joiningDate],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center text-sm gap-4">
                <span className="text-slate-500 font-medium whitespace-nowrap">{l}</span>
                <span className="text-slate-800 font-semibold text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-sky-50">
            <h3 className="font-bold text-sky-800 flex items-center gap-2">
              <FaUser className="text-sky-600 text-sm" /> Personal Information
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              ['Email', profile.email],
              ['Phone', profile.phone],
              ['Blood Group', profile.bloodGroup],
              ['Publications', profile.publications],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center text-sm gap-4">
                <span className="text-slate-500 font-medium whitespace-nowrap">{l}</span>
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

export default FacultyProfile;
