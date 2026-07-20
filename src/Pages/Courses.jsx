const Courses = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-indigo-950 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-amber-400 mb-4 tracking-tight">Courses Offered</h2>
          <p className="text-base sm:text-lg text-indigo-100 leading-relaxed max-w-3xl mx-auto font-light">
            JJ Engineering College offers high-quality Undergraduate and Postgraduate Engineering programmes designed according to Anna University regulations. Students receive strong theoretical knowledge, practical exposure, industrial training, and complete placement support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* UG & PG Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Undergraduate Programmes (UG)</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Programme</th>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Degree</th>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Duration</th>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Annual Intake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Computer Science and Engineering</td><td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold">B.E.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">120</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Information Technology</td><td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-bold">B.Tech.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">120</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Artificial Intelligence & Data Science</td><td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-bold">B.Tech.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">60</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Electronics and Communication Engineering</td><td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold">B.E.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">90</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Electrical and Electronics Engineering</td><td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold">B.E.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">60</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Mechanical Engineering</td><td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold">B.E.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">60</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Civil Engineering</td><td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold">B.E.</span></td><td className="px-4 py-3">4 Years</td><td className="px-4 py-3 font-semibold text-slate-600">60</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Postgraduate (PG)</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Programme</th>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Degree</th>
                    <th className="px-4 py-3 font-semibold text-sm tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Computer Science Engineering</td><td className="px-4 py-3"><span className="bg-indigo-900 text-white px-2 py-0.5 rounded text-xs font-bold">M.E.</span></td><td className="px-4 py-3 w-24">2 Years</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Power Systems Engineering</td><td className="px-4 py-3"><span className="bg-indigo-900 text-white px-2 py-0.5 rounded text-xs font-bold">M.E.</span></td><td className="px-4 py-3 w-24">2 Years</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Structural Engineering</td><td className="px-4 py-3"><span className="bg-indigo-900 text-white px-2 py-0.5 rounded text-xs font-bold">M.E.</span></td><td className="px-4 py-3 w-24">2 Years</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Business Administration</td><td className="px-4 py-3"><span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-xs font-bold">MBA</span></td><td className="px-4 py-3 w-24">2 Years</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Department Highlights */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Department Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-amber-400 pl-2">Computer Science and Engineering</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Programming Languages</li><li>Artificial Intelligence</li><li>Machine Learning</li><li>Cloud Computing</li><li>Cyber Security</li><li>Software Engineering</li><li>Database Management</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-amber-400 pl-2">Information Technology</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Web Development</li><li>Mobile Application Development</li><li>Networking</li><li>Cloud Technologies</li><li>Data Analytics</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-amber-400 pl-2">Artificial Intelligence & Data Science</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Deep Learning</li><li>Machine Learning</li><li>Python Programming</li><li>Data Mining</li><li>Big Data Analytics</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-indigo-600 pl-2">Electronics & Communication</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Embedded Systems</li><li>VLSI Design</li><li>Communication Systems</li><li>Signal Processing</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-indigo-600 pl-2">Electrical & Electronics</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Power Systems</li><li>Electrical Machines</li><li>Control Systems</li><li>Renewable Energy</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-indigo-600 pl-2">Mechanical Engineering</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>CAD/CAM</li><li>Manufacturing Technology</li><li>Thermal Engineering</li><li>Robotics</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 md:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-indigo-950 mb-3 text-lg border-l-4 border-indigo-600 pl-2">Civil Engineering</h3>
              <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4">
                <li>Structural Engineering</li><li>Surveying</li><li>Construction Management</li><li>Environmental Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Laboratory & Skill Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Laboratory Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Programming Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Internet Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Database Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> AI & ML Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Networking Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Cloud Computing Lab</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Language Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Electronics Laboratory</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Electrical Machines Lab</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Mechanical Workshop</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Civil Survey Laboratory</li>
            </ul>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Skill Development Programmes</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Python Programming</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Java Programming</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Full Stack Development</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> UI/UX Design</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Artificial Intelligence</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Data Science</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Internet of Things</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Robotics</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Cloud Computing</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Communication Skills</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Aptitude Training</li>
            </ul>
          </section>
        </div>

        {/* Career Opportunities & Recruiters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Career Opportunities</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-sm w-32">Course</th>
                    <th className="px-4 py-3 font-semibold text-sm">Target Careers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">CSE</td><td className="px-4 py-3">Software Engineer, Web Developer, AI Engineer, Data Engineer</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">IT</td><td className="px-4 py-3">System Analyst, Full Stack Developer, Cloud Engineer</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">AI & DS</td><td className="px-4 py-3">Machine Learning Engineer, Data Scientist</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">ECE</td><td className="px-4 py-3">Embedded Engineer, Network Engineer</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">EEE</td><td className="px-4 py-3">Electrical Engineer, Power Plant Engineer</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">Mechanical</td><td className="px-4 py-3">Design Engineer, Production Engineer</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3 font-bold text-indigo-950">Civil</td><td className="px-4 py-3">Site Engineer, Structural Engineer</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Top Recruiters</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">TCS</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Infosys</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Wipro</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Accenture</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Cognizant</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Capgemini</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Zoho</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">HCL Tech</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Tech Mahindra</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">IBM</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Amazon</div>
              <div className="bg-slate-50 p-2 text-center rounded border font-medium text-sm text-slate-700">Deloitte</div>
            </div>
          </section>
        </div>

        {/* Course Features & Why Study */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Course Features</h2>
            <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Outcome Based Education</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Industry Expert Lectures</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Internship Support</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Research Opportunities</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Project-Based Learning</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Innovation Centre</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Entrepreneurship Development Cell</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Placement Training from First Year</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Professional Certification Courses</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-black">★</span> Soft Skill Development</li>
            </ul>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Why Study at JJ Engineering College?</h2>
            <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Experienced Faculty</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Modern Laboratories</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Excellent Placement Cell</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Smart Classrooms</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Digital Library</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Innovation Hub</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Industry Collaboration</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Internship Opportunities</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Scholarship Support</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-black">✔</span> Safe and Green Campus</li>
            </ul>
          </section>
        </div>

        {/* Eligibility */}
        <section className="bg-indigo-50 p-6 sm:p-8 rounded-2xl border border-indigo-100 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Eligibility Criteria</h2>
          <div className="text-slate-700 space-y-3 text-sm sm:text-base leading-relaxed">
            <p className="font-medium">
              Candidates should have passed the Higher Secondary Examination (10+2) with Physics, Chemistry, and Mathematics from a recognized board.
            </p>
            <p className="text-slate-500 italic text-xs sm:text-sm">
              * Admissions are carried out strictly based on Government norms and Anna University regulations.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;