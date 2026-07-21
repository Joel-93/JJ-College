import { Link } from 'react-router-dom';
import { FaMicroscope, FaFlask, FaFileAlt, FaAward, FaMoneyBillWave, FaUniversity, FaChalkboardTeacher, FaHandshake, FaRocket, FaBook } from 'react-icons/fa';

const ResearchInnovation = () => {
  const researchCenters = [
    { name: 'Center for AI & Machine Learning', focus: 'Deep learning, NLP, Computer Vision' },
    { name: 'IoT & Embedded Systems Lab', focus: 'Smart devices, Sensors, Edge computing' },
    { name: 'Sustainable Energy Research Center', focus: 'Solar, Wind, Energy storage' },
    { name: 'Advanced Materials Lab', focus: 'Nanomaterials, Composites, Polymers' },
  ];

  const publications = [
    { title: 'Deep Learning for Medical Image Analysis', journal: 'IEEE Transactions', year: '2025' },
    { title: 'IoT-Based Smart Agriculture System', journal: 'Springer Nature', year: '2024' },
    { title: 'Sustainable Energy Solutions for Smart Cities', journal: 'Elsevier', year: '2024' },
    { title: 'AI-Driven Predictive Maintenance in Manufacturing', journal: 'ACM Computing', year: '2023' },
  ];

  const patents = [
    { title: 'Smart Irrigation System Using IoT', status: 'Granted', year: '2025' },
    { title: 'AI-Based Fraud Detection Algorithm', status: 'Filed', year: '2025' },
    { title: 'Energy-Efficient Building Management System', status: 'Granted', year: '2024' },
  ];

  const fundedProjects = [
    { title: 'AI for Healthcare Diagnostics', agency: 'DST', amount: '₹25 Lakhs', year: '2025' },
    { title: 'Smart Grid Optimization', agency: 'MHRD', amount: '₹18 Lakhs', year: '2024' },
    { title: 'Sustainable Infrastructure Development', agency: 'AICTE', amount: '₹12 Lakhs', year: '2024' },
  ];

  const facultyResearch = [
    { name: 'Dr. S. Meena', dept: 'CSE', area: 'Machine Learning & NLP' },
    { name: 'Dr. R. Karthik', dept: 'IT', area: 'Cloud Computing & IoT' },
    { name: 'Dr. P. Vani', dept: 'AI&DS', area: 'Deep Learning & Computer Vision' },
    { name: 'Dr. M. Anand', dept: 'ECE', area: 'Embedded Systems & VLSI' },
    { name: 'Dr. L. Priya', dept: 'EEE', area: 'Renewable Energy & Power Systems' },
  ];

  const industryPartners = [
    'TCS Research', 'IBM Research', 'Microsoft Research', 'Google Research',
    'Intel', 'Samsung', 'Bosch', 'Tata Elxsi', 'L&T Technology Services'
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-indigo-950 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-indigo-900/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Research & <span className="text-amber-400">Innovation</span>
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Driving innovation through cutting-edge research, industry collaboration, and a culture of curiosity and discovery.
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-2">📄</div>
              <p className="text-3xl font-bold text-indigo-900">50+</p>
              <p className="text-sm text-slate-600">Research Papers</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-2">🏛️</div>
              <p className="text-3xl font-bold text-indigo-900">4</p>
              <p className="text-sm text-slate-600">Research Centers</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-2">🤝</div>
              <p className="text-3xl font-bold text-indigo-900">9+</p>
              <p className="text-sm text-slate-600">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Labs */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Innovation Labs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <FaFlask className="text-amber-500 text-xl" />
              <div>
                <p className="font-semibold text-indigo-900">AI & ML Lab</p>
                <p className="text-sm text-slate-600">Deep learning, NLP, Computer Vision</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <FaFlask className="text-amber-500 text-xl" />
              <div>
                <p className="font-semibold text-indigo-900">IoT Lab</p>
                <p className="text-sm text-slate-600">Smart devices, Sensors, Edge computing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <FaFlask className="text-amber-500 text-xl" />
              <div>
                <p className="font-semibold text-indigo-900">Robotics Lab</p>
                <p className="text-sm text-slate-600">Automation, Embedded systems, Control</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <FaFlask className="text-amber-500 text-xl" />
              <div>
                <p className="font-semibold text-indigo-900">Incubation Center</p>
                <p className="text-sm text-slate-600">Startup support, Prototyping, Mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Publications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {publications.map((pub, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <FaFileAlt className="text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium text-indigo-900 text-sm">{pub.title}</p>
                  <p className="text-xs text-slate-600">{pub.journal} • {pub.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Patents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {patents.map((patent, index) => (
              <div key={index} className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <FaAward className="text-amber-500 mt-1" />
                <div>
                  <p className="font-medium text-indigo-900 text-sm">{patent.title}</p>
                  <p className="text-xs text-slate-600">
                    Status: <span className={patent.status === 'Granted' ? 'text-emerald-600' : 'text-amber-600'}>
                      {patent.status}
                    </span> • {patent.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Projects */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Funded Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fundedProjects.map((project, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <FaMoneyBillWave className="text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium text-indigo-900 text-sm">{project.title}</p>
                  <p className="text-xs text-slate-600">{project.agency} • {project.amount} • {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">Research Centers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {researchCenters.map((center, index) => (
              <div key={index} className="bg-indigo-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <FaUniversity className="text-amber-400" />
                  <h3 className="font-bold">{center.name}</h3>
                </div>
                <p className="text-sm text-indigo-200">{center.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Research */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Faculty Research
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facultyResearch.map((faculty, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <FaChalkboardTeacher className="text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium text-indigo-900 text-sm">{faculty.name}</p>
                  <p className="text-xs text-slate-500">{faculty.dept}</p>
                  <p className="text-xs text-slate-600">{faculty.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Collaboration */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Industry Collaboration
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center hover:border-indigo-300 transition"
              >
                <FaHandshake className="text-indigo-600 mx-auto mb-1" />
                <span className="text-xs font-medium text-slate-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Incubation */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Startup Incubation</h2>
            <p className="text-indigo-100 mb-6">
              Our incubation center provides mentorship, funding support, and infrastructure to help students 
              turn their innovative ideas into successful startups.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-indigo-800/50 p-3 rounded-lg">
                <FaRocket className="text-amber-400 text-2xl mx-auto mb-1" />
                <p className="text-xs font-medium">Mentorship</p>
              </div>
              <div className="bg-indigo-800/50 p-3 rounded-lg">
                <FaMoneyBillWave className="text-amber-400 text-2xl mx-auto mb-1" />
                <p className="text-xs font-medium">Funding Support</p>
              </div>
              <div className="bg-indigo-800/50 p-3 rounded-lg">
                <FaFlask className="text-amber-400 text-2xl mx-auto mb-1" />
                <p className="text-xs font-medium">Prototyping Lab</p>
              </div>
              <div className="bg-indigo-800/50 p-3 rounded-lg">
                <FaHandshake className="text-amber-400 text-2xl mx-auto mb-1" />
                <p className="text-xs font-medium">Industry Connect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Join Our Research Community</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Whether you're a student, researcher, or industry partner, we invite you to collaborate 
            with us in pushing the boundaries of innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold px-6 py-3 rounded-lg transition transform hover:-translate-y-0.5"
            >
              Collaborate With Us
            </Link>
            <Link
              to="/admissions"
              className="bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold px-6 py-3 rounded-lg transition"
            >
              Apply for Research Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchInnovation;