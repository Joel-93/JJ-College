import { Link } from 'react-router-dom';
import { FaBriefcase, FaChartLine, FaTrophy, FaUsers, FaBuilding, FaGraduationCap, FaHandshake, FaMoneyBillWave, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const RECRUITERS = [
  { name: 'TCS', logo: '/tcs.jpg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
  { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
  { name: 'Zoho', logo: '/zoho.jpg' },
  { name: 'HCL Tech', logo: '/hcl.png' },
  { name: 'Tech Mahindra', logo: '/tech_mahindra.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Logo_of_Deloitte.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
  { name: 'Flipkart', logo: '/flipkart.jpg' },
  { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
  { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
];

const PlacementCell = () => {
  const processSteps = [
    { step: 1, title: 'Pre-Placement Training', desc: 'Aptitude, coding, and soft skills training begins in the first year.' },
    { step: 2, title: 'Industry Interaction', desc: 'Guest lectures, workshops, and industrial visits for real-world exposure.' },
    { step: 3, title: 'Resume Building', desc: 'Professional resume writing and portfolio development sessions.' },
    { step: 4, title: 'Mock Interviews', desc: 'Simulated interviews with industry experts to build confidence.' },
    { step: 5, title: 'Campus Recruitment', desc: 'Leading companies visit campus for recruitment drives.' },
    { step: 6, title: 'Offer & Onboarding', desc: 'Successful candidates receive offers and onboarding support.' },
  ];

  const alumniStories = [
    { name: 'Ananya Sharma', company: 'Google', role: 'Software Engineer', package: '24 LPA', batch: '2024', initials: 'AS', color: '#4285f4' },
    { name: 'Rahul Verma', company: 'Amazon', role: 'Data Scientist', package: '22 LPA', batch: '2024', initials: 'RV', color: '#ff9900' },
    { name: 'Priya Patel', company: 'Microsoft', role: 'Product Manager', package: '20 LPA', batch: '2023', initials: 'PP', color: '#00a4ef' },
    { name: 'Karthik Raj', company: 'TCS Digital', role: 'Systems Engineer', package: '8.5 LPA', batch: '2025', initials: 'KR', color: '#1e3a5f' },
  ];

  const faqs = [
    { q: 'What is the placement percentage at JJ Engineering College?', a: 'Our placement percentage consistently exceeds 85% with students placed in top MNCs and startups.' },
    { q: 'Does the college provide internship opportunities?', a: 'Yes, students are encouraged to pursue internships in the summer break. The placement cell facilitates internship opportunities with partner companies.' },
    { q: 'What is the highest package offered?', a: 'The highest package offered in 2025 was 18 LPA, and the average package was 6.1 LPA.' },
    { q: 'Is there any training provided for placements?', a: 'Yes, the placement cell conducts comprehensive training programs including aptitude, technical skills, communication, and soft skills development.' },
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
            Placement <span className="text-amber-400">Cell</span>
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Bridging talent with opportunity – our dedicated placement cell ensures every student finds their dream career.
          </p>
        </div>
      </section>

      {/* Placement Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-xl flex flex-col items-center justify-center">
              <FaTrophy className="text-amber-500 text-4xl mb-2" />
              <p className="text-3xl font-bold text-indigo-900">85%+</p>
              <p className="text-sm text-slate-600">Placement Rate</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl flex flex-col items-center justify-center">
              <FaMoneyBillWave className="text-emerald-600 text-4xl mb-2" />
              <p className="text-3xl font-bold text-emerald-600">18 LPA</p>
              <p className="text-sm text-slate-600">Highest Package (2025)</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl flex flex-col items-center justify-center">
              <FaBuilding className="text-indigo-905 text-4xl mb-2" />
              <p className="text-3xl font-bold text-indigo-900">100+</p>
              <p className="text-sm text-slate-600">Recruiting Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Placement Process */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
          Training &amp; Placement Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-amber-400 text-indigo-900 rounded-full flex items-center justify-center font-bold text-sm">{step.step}</span>
                <h3 className="font-bold text-indigo-900">{step.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ REAL Company Logo Wall */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-2 text-center">Our Recruiters</h2>
          <p className="text-slate-500 text-sm text-center mb-8">Top companies that actively recruit from our campus</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {RECRUITERS.map((company) => (
              <div
                key={company.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all duration-200 cursor-default bg-white"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-16 h-10 object-contain mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-semibold text-slate-700 text-center leading-tight">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Placement Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-center">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm tracking-wider">Year</th>
                    <th className="px-6 py-4 font-semibold text-sm tracking-wider">Placed</th>
                    <th className="px-6 py-4 font-semibold text-sm tracking-wider">Highest</th>
                    <th className="px-6 py-4 font-semibold text-sm tracking-wider">Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-semibold">2023</td><td>412</td><td className="text-emerald-600 font-medium">12 LPA</td><td>4.8 LPA</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-semibold">2024</td><td>438</td><td className="text-emerald-600 font-medium">15 LPA</td><td>5.4 LPA</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-semibold">2025</td><td>465</td><td className="text-emerald-600 font-medium">18 LPA</td><td>6.1 LPA</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4">
                <FaTrophy className="text-amber-500 text-3xl" />
                <div>
                  <p className="text-sm text-slate-600">Highest Package 2025</p>
                  <p className="text-2xl font-bold text-emerald-600">18 LPA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaChartLine className="text-indigo-600 text-3xl" />
                <div>
                  <p className="text-sm text-slate-600">Average Package 2025</p>
                  <p className="text-2xl font-bold text-indigo-900">6.1 LPA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-sky-500 text-3xl" />
                <div>
                  <p className="text-sm text-slate-600">Students Placed 2025</p>
                  <p className="text-2xl font-bold text-sky-700">465</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
          Alumni Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {alumniStories.map((alumni, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3" style={{ background: alumni.color }}>
                {alumni.initials}
              </div>
              <p className="font-semibold text-indigo-900 text-center">{alumni.name}</p>
              <p className="text-sm text-slate-600 text-center font-medium">{alumni.company}</p>
              <p className="text-xs text-slate-500 text-center">{alumni.role}</p>
              <div className="flex justify-center gap-2 mt-3 text-xs">
                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">{alumni.package}</span>
                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Batch {alumni.batch}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Internship Opportunities</h2>
            <p className="text-indigo-100 mb-6">Gain real-world experience through our extensive internship network. Students have interned at:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Google', 'Amazon', 'Microsoft', 'TCS'].map((c) => (
                <div key={c} className="bg-indigo-800/50 p-3 rounded-lg"><p className="text-sm font-medium">{c}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition">
                <p className="font-semibold text-indigo-900">{faq.q}</p>
                <p className="text-sm text-slate-600 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Officer */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Contact Placement Officer</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <div>
              <p className="font-semibold text-amber-400">Mr. S. Kumar</p>
              <p className="text-indigo-100">Placement Officer</p>
            </div>
            <div>
              <p className="text-indigo-100 flex items-center justify-center gap-2"><FaEnvelope /> placement@jjec.edu.in</p>
              <p className="text-indigo-100 flex items-center justify-center gap-2 mt-1"><FaPhoneAlt /> +91 9876543212</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold px-6 py-3 rounded-lg transition transform hover:-translate-y-0.5">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementCell;