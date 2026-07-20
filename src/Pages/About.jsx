const About = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200"
            alt="College Campus Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            About <span className="text-amber-400">Our Institution</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our legacy of academic excellence, innovative research, and student-centric empowerment.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <section className="bg-amber-400 text-amber-950 font-bold py-2 overflow-hidden whitespace-nowrap border-y border-amber-500">
        <div className="inline-block animate-marquee uppercase tracking-wider text-sm">
          Nurturing Tech Leaders Since Inception &nbsp;|&nbsp; 50,000+ Volume Digital Library &nbsp;|&nbsp; Industry-Linked Research Laboratories &nbsp;|&nbsp;
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* History and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-100 pb-2">About JJ Engineering College</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  JJ Engineering College is a premier institution dedicated to providing quality engineering education and producing competent professionals. The institution is committed to academic excellence, research, innovation, entrepreneurship, leadership, and ethical values.
                </p>
                <p>
                  Since its establishment, the college has consistently focused on developing technically skilled graduates capable of meeting global industry standards. The institution encourages innovation, practical learning, industrial exposure, and personality development.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-100 pb-2">Our History</h2>
              <p className="text-slate-600 leading-relaxed">
                JJ Engineering College was established with the vision of creating an excellent center for technical education in Tamil Nadu. Over the years, the institution has grown by introducing modern laboratories, experienced faculty members, research facilities, digital learning resources, and industry collaborations. Thousands of graduates from the college are now working in reputed multinational companies, government organizations, startups, and higher education institutions across India and abroad.
              </p>
            </div>
          </section>

          {/* Vision and Mission Stack */}
          <div className="space-y-6">
            <section className="bg-indigo-900 text-white p-8 rounded-2xl shadow-md border border-indigo-950">
              <h2 className="text-2xl font-bold text-amber-400 mb-3">Our Vision</h2>
              <p className="text-indigo-100 text-sm sm:text-base font-light leading-relaxed">
                To become a globally recognized institution for engineering education, research, innovation, and entrepreneurship by producing technically competent, socially responsible, and ethically strong engineers.
              </p>
            </section>
            <section className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 shadow-sm">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Our Mission</h2>
              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base font-medium">
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Provide high-quality engineering education.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Promote innovation and research culture.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Develop leadership & communication skills.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Strengthen industry-institute interaction.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Encourage entrepreneurship among students.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Promote ethical values & social responsibility.</li>
                <li className="flex items-start gap-2.5"><span className="text-indigo-600 font-bold">✓</span> Provide excellent placement opportunities.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Core Values */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 max-w-sm mx-auto">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Integrity</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Innovation</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Excellence</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Leadership</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Respect</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Professional Ethics</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Team Work</div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-indigo-900">Continuous Learning</div>
          </div>
        </section>

        {/* Leadership Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-100 pb-2">Chairman's Message</h2>
            <div className="text-slate-600 space-y-4 italic leading-relaxed">
              <p>"Education is the strongest foundation for building a successful career. At JJ Engineering College, we continuously strive to create an environment where students can discover their talents, strengthen their technical knowledge, and become responsible citizens."</p>
              <p>"We believe that every student has the potential to achieve excellence through dedication, discipline, and innovation."</p>
            </div>
          </section>
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-100 pb-2">Principal's Message</h2>
            <div className="text-slate-600 space-y-4 italic leading-relaxed">
              <p>"Our institution is committed to providing world-class engineering education through experienced faculty, advanced laboratories, innovative teaching methods, and industry-oriented training."</p>
              <p>"Along with academics, we encourage students to participate in technical events, hackathons, internships, research projects, sports, and cultural activities to ensure their overall development."</p>
            </div>
          </section>
        </div>

        {/* Infrastructure & Library */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Infrastructure Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Modern Smart Classrooms</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Fully Equipped Labs</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Central Digital Library</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Seminar & Conf. Halls</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Incubation Center</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Advanced Computer Centers</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Wi-Fi Enabled Campus</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Green Campus Landscape</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Logistics & Transport</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> 24/7 Medical Center</li>
            </ul>
          </section>
          <section className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100/80 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Central Resource Library</h2>
              <div className="text-slate-600 space-y-4 leading-relaxed">
                <p>
                  The Central Library houses more than 50,000 books, national and international journals, magazines, newspapers, e-books, digital resources, and online learning platforms.
                </p>
                <p>
                  Students have complete access to an outstanding, quiet reading environment supported by dedicated high-speed infrastructure lines.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-indigo-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">Total Volumes Available</span>
              <span className="bg-amber-400 text-amber-950 font-black px-3 py-1 rounded text-sm">50,000+ Books</span>
            </div>
          </section>
        </div>

        {/* Academic Laboratories Table */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Academic Laboratories</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider w-1/3">Department</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Laboratories Setup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium text-indigo-950">Computer Science Engineering</td><td className="px-6 py-4 text-sm">Programming Lab, AI Lab, Database Lab, Cloud Computing Lab</td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium text-indigo-950">Information Technology</td><td className="px-6 py-4 text-sm">Networking Lab, Web Technology Lab</td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium text-indigo-950">Electronics & Communication</td><td className="px-6 py-4 text-sm">Embedded Systems Lab, Communication Lab</td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium text-indigo-950">Mechanical Engineering</td><td className="px-6 py-4 text-sm">CAD Lab, Manufacturing Lab</td></tr>
                <tr className="hover:bg-slate-50 transition"><td className="px-6 py-4 font-medium text-indigo-950">Civil Engineering</td><td className="px-6 py-4 text-sm">Survey Lab, Structural Engineering Lab</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Training, Research, Campus Life */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-50 pb-2">Training & Placement</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Aptitude Assessment Modules</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Advanced Coding Bootcamps</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Soft Skills & Executive Presence</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Resume Architecture Reviews</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Simulated Mock Panels</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Technical Domain Workshops</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Structured Internships</li>
            </ul>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-50 pb-2">Research & Development</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The college encourages faculty members and students to participate actively in funded research projects, patent filings, innovation challenges, corporate startup incubation paradigms, national conferences, and high-impact international journal publications.
            </p>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-50 pb-2">Vibrant Campus Life</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Students run and organize technical symposiums, hackathons, sports championships, NSS/NCC chapters, cultural festivals, and community development actions. This balanced ecosystems grows critical leadership attributes alongside core academic benchmarks.
            </p>
          </section>
        </div>

        {/* Achievements */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Institutional Milestones & Achievements</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>NBA Accreditation Protocols in Progress</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>NAAC Continuous Quality Benchmarks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Consistently High University Examination Ranks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Outstanding Campus Annual Placement Footprint</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>National Smart India Hackathon Winners</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Reputed National Innovation Project Awards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Extensive Research Citations & Publications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Strategic Corporate and Industrial Tie-ups</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-1 text-xs shrink-0 mt-0.5">★</span>
              <span>Active Institutional Global Alumni Matrix</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;