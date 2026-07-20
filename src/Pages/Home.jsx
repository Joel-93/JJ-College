import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 sm:py-32 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 drop-shadow-md">
            Welcome to <span className="text-amber-400">JJ Engineering College</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
            Empowering Future Engineers with Quality Education, Innovation, and Excellence.
          </p>
          <div className="mt-8">
            <Link
              to="/admissions"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              Explore Admissions
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-400 text-amber-950 font-bold py-2 overflow-hidden whitespace-nowrap border-y border-amber-500">
        <div className="inline-block animate-marquee uppercase tracking-wider text-sm">
          Admissions Open for Academic Year 2026-27 &nbsp;|&nbsp; 
          Campus Placement Training Started &nbsp;|&nbsp; 
          National Level Technical Symposium Next Month &nbsp;|&nbsp; 
          Hackathon Registration Open &nbsp;|&nbsp; 
          NBA Accreditation Process in Progress &nbsp;|&nbsp;
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-100 pb-2">About Our College</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                JJ Engineering College is one of the leading engineering institutions committed to providing quality technical education. Established with the vision of nurturing future engineers, the college offers undergraduate and postgraduate programs in various engineering disciplines.
              </p>
              <p>
                The institution focuses on academic excellence, research, innovation, entrepreneurship, industry collaboration, and personality development.
              </p>
              <p>
                Students are encouraged to participate in technical symposiums, hackathons, sports, cultural events, and placement training programs.
              </p>
            </div>
          </section>

          <section className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Principal's Message</h2>
            <div className="text-slate-700 space-y-3 italic text-sm sm:text-base">
              <p>"Welcome to JJ Engineering College.</p>
              <p>Our mission is to create responsible engineers with strong technical knowledge, ethical values, and leadership qualities. We believe education should prepare students not only for employment but also for lifelong learning.</p>
              <p>We encourage students to innovate, research, and contribute to society through technology.</p>
              <p>We wish every student a successful academic journey."</p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Why Choose JJ Engineering College?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Experienced Faculty</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Smart Classrooms</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Modern Computer Labs</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> High-Speed Wi-Fi</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Digital Library</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Placement Training</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Industrial Visits</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Internships</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Research Center</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Sports & Culture</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Campus Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Central Library (50k+ Books)</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Advanced Computer Labs</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Language Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Incubation Center</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Seminar Halls</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Boys & Girls Hostels</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Transportation Facility</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Sports Complex</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Medical Center</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> College Cafeteria</li>
            </ul>
          </section>
        </div>

        <section className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 overflow-hidden">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Academic Departments</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Department</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Duration</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Degree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Computer Science and Engineering</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold">B.E</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Information Technology</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">B.Tech</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Artificial Intelligence & Data Science</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">B.Tech</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Electronics and Communication Engineering</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold">B.E</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Electrical and Electronics Engineering</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold">B.E</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Mechanical Engineering</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold">B.E</span></td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium">Civil Engineering</td><td className="px-6 py-4">4 Years</td><td className="px-6 py-4"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold">B.E</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Placement Statistics</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-center">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-sm">Year</th>
                    <th className="px-4 py-3 font-semibold text-sm">Students Placed</th>
                    <th className="px-4 py-3 font-semibold text-sm">Highest Package</th>
                    <th className="px-4 py-3 font-semibold text-sm">Average Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-semibold">2023</td>
                    <td className="px-4 py-3">412</td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">12 LPA</td>
                    <td className="px-4 py-3">4.8 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-semibold">2024</td>
                    <td className="px-4 py-3">438</td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">15 LPA</td>
                    <td className="px-4 py-3">5.4 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-semibold">2025</td>
                    <td className="px-4 py-3">465</td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">18 LPA</td>
                    <td className="px-4 py-3">6.1 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Student Achievements</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>Winner - Smart India Hackathon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>Anna University Rank Holders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>National Coding Competition Winners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>Best Innovative Project Award</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>State Level Sports Champions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
                <span>Published Research Papers in International Journals</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;