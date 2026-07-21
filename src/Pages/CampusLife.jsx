import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaDumbbell, FaFlask, FaUtensils, FaVideo, FaBus, FaHeartbeat, FaUsers, FaCamera, FaExpand } from 'react-icons/fa';
import { useState } from 'react';

const CampusLife = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const facilities = [
    { icon: <FaHome className="text-amber-500 text-2xl" />, name: 'Hostel', desc: 'Separate boys & girls hostels with modern amenities, Wi-Fi, and 24/7 security.' },
    { icon: <FaBook className="text-amber-500 text-2xl" />, name: 'Central Library', desc: '50,000+ books, digital resources, e-journals, and quiet study spaces.' },
    { icon: <FaDumbbell className="text-amber-500 text-2xl" />, name: 'Sports Complex', desc: 'Cricket, football, basketball, tennis, badminton, and fully equipped gym.' },
    { icon: <FaFlask className="text-amber-500 text-2xl" />, name: 'Innovation Labs', desc: 'State-of-the-art labs for AI, IoT, robotics research and prototyping.' },
    { icon: <FaUtensils className="text-amber-500 text-2xl" />, name: 'Cafeteria', desc: 'Hygienic multi-cuisine food court serving 2,000+ students and staff daily.' },
    { icon: <FaVideo className="text-amber-500 text-2xl" />, name: 'Auditorium', desc: '1,000-seat auditorium for events, seminars, and cultural programs.' },
    { icon: <FaBus className="text-amber-500 text-2xl" />, name: 'Transportation', desc: 'Fleet of 20+ buses connecting all major city routes and suburbs.' },
    { icon: <FaHeartbeat className="text-amber-500 text-2xl" />, name: 'Medical Center', desc: '24/7 medical facility with qualified doctors, nurses, and emergency care.' },
  ];

  const clubs = [
    { name: 'Coding Club', icon: '💻', desc: 'Competitive programming, hackathons, and tech workshops.' },
    { name: 'Robotics Club', icon: '🤖', desc: 'Build robots, participate in national competitions.' },
    { name: 'Music & Arts Club', icon: '🎵', desc: 'Music, dance, drama, and creative arts.' },
    { name: 'Sports Club', icon: '⚽', desc: 'Organize tournaments and fitness activities.' },
    { name: 'NSS', icon: '🤝', desc: 'Community service and social outreach programs.' },
    { name: 'Entrepreneurship Cell', icon: '🚀', desc: 'Startup incubation, pitch competitions, and mentoring.' },
  ];

  // Premium gallery using gradient cards with rich visual designs
  const gallery = [
    {
      title: 'Main Building',
      subtitle: 'Iconic Architecture',
      gradient: 'from-indigo-900 via-indigo-800 to-blue-900',
      icon: '🏛️',
      detail: 'Our 4-storey main building spans 2 lakh sq.ft with modern lecture halls, faculty offices, and administration.',
      tag: 'Infrastructure',
      tagColor: 'bg-indigo-200 text-indigo-900',
    },
    {
      title: 'Central Library',
      subtitle: 'Knowledge Hub',
      gradient: 'from-amber-700 via-amber-800 to-yellow-900',
      icon: '📚',
      detail: 'Home to 50,000+ books, 200+ journals, and a digital resource center with 24/7 access for students.',
      tag: 'Academics',
      tagColor: 'bg-amber-200 text-amber-900',
    },
    {
      title: 'Cricket Ground',
      subtitle: 'Champions Arena',
      gradient: 'from-emerald-800 via-green-800 to-teal-900',
      icon: '🏏',
      detail: 'Full-size cricket ground with turf wicket, practice nets, and stands for 500 spectators.',
      tag: 'Sports',
      tagColor: 'bg-emerald-200 text-emerald-900',
    },
    {
      title: 'AI & ML Lab',
      subtitle: 'Research Excellence',
      gradient: 'from-purple-900 via-purple-800 to-violet-900',
      icon: '🤖',
      detail: 'Equipped with GPU workstations, cloud computing access, and tools for deep learning research.',
      tag: 'Technology',
      tagColor: 'bg-purple-200 text-purple-900',
    },
    {
      title: 'Student Cafeteria',
      subtitle: 'Culinary Delight',
      gradient: 'from-orange-700 via-red-800 to-rose-900',
      icon: '🍽️',
      detail: 'Serves 1,500+ meals daily with North Indian, South Indian, Chinese, and continental options.',
      tag: 'Dining',
      tagColor: 'bg-orange-200 text-orange-900',
    },
    {
      title: 'Grand Auditorium',
      subtitle: 'Cultural Heart',
      gradient: 'from-slate-800 via-slate-700 to-zinc-900',
      icon: '🎭',
      detail: '1,000-seat AC auditorium with professional sound & lighting, used for cultural fests and convocations.',
      tag: 'Events',
      tagColor: 'bg-slate-200 text-slate-900',
    },
    {
      title: 'Boys Hostel Block',
      subtitle: 'Home Away from Home',
      gradient: 'from-blue-800 via-blue-900 to-cyan-900',
      icon: '🏠',
      detail: '5-storey hostel with 500+ rooms, common room, TV lounge, and 24-hour hot water supply.',
      tag: 'Accommodation',
      tagColor: 'bg-blue-200 text-blue-900',
    },
    {
      title: 'Basketball Court',
      subtitle: 'Sporting Excellence',
      gradient: 'from-rose-700 via-red-800 to-pink-900',
      icon: '🏀',
      detail: 'Regulation NBA-size indoor court with professional flooring, bleachers, and scoreboards.',
      tag: 'Sports',
      tagColor: 'bg-rose-200 text-rose-900',
    },
    {
      title: 'Convocation Hall',
      subtitle: 'Milestone Moments',
      gradient: 'from-yellow-700 via-amber-800 to-orange-900',
      icon: '🎓',
      detail: 'Annual convocation ceremonies hosted here with 2,000+ capacity for graduates and families.',
      tag: 'Ceremonial',
      tagColor: 'bg-yellow-200 text-yellow-900',
    },
    {
      title: 'Innovation Hub',
      subtitle: 'Startup Incubator',
      gradient: 'from-teal-800 via-cyan-900 to-sky-900',
      icon: '🚀',
      detail: 'Fully equipped co-working space with mentors, prototyping tools, and investor networking events.',
      tag: 'Innovation',
      tagColor: 'bg-teal-200 text-teal-900',
    },
    {
      title: 'Medical Center',
      subtitle: '24/7 Healthcare',
      gradient: 'from-green-800 via-emerald-900 to-teal-900',
      icon: '🏥',
      detail: 'MBBS doctors on campus, emergency care, pharmacy, and ambulance service round the clock.',
      tag: 'Healthcare',
      tagColor: 'bg-green-200 text-green-900',
    },
    {
      title: 'Annual Tech Fest',
      subtitle: 'TEKFUSION 2025',
      gradient: 'from-fuchsia-800 via-purple-900 to-indigo-900',
      icon: '🎆',
      detail: '3-day mega tech festival with 5,000+ participants, hackathons, exhibitions, and guest speakers.',
      tag: 'Events',
      tagColor: 'bg-fuchsia-200 text-fuchsia-900',
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-indigo-950 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-90"></div>
        {/* Decorative dots */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-amber-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-sky-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-amber-400/30">
            50 Acres of Lush Campus
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Campus <span className="text-amber-400">Life</span>
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Experience a vibrant campus community with world-class facilities, extracurricular activities, and a nurturing environment.
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Campus Overview</h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Spread across 50 acres of lush greenery, our campus provides a serene and conducive environment
            for learning and personal growth. With modern infrastructure, world-class amenities, and a
            vibrant student community, JJ Engineering College offers an enriching campus life experience.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[['50', 'Acres Campus'], ['10+', 'Facilities'], ['2,200+', 'Students'], ['24/7', 'Security & Medical']].map(([v, l]) => (
              <div key={l} className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-100">
                <p className="text-2xl font-bold text-indigo-900">{v}</p>
                <p className="text-sm text-slate-600">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
          Campus Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-amber-50 transition shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="font-bold text-indigo-900 mb-1">{facility.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Clubs */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-amber-400 mb-2 text-center">Student Clubs & Organizations</h2>
          <p className="text-indigo-200 text-center text-sm mb-8">Join 30+ clubs and make your campus life memorable</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-xl text-center hover:bg-white/20 transition cursor-default border border-white/10">
                <div className="text-3xl mb-2">{club.icon}</div>
                <p className="text-sm font-semibold">{club.name}</p>
                <p className="text-xs text-indigo-200 mt-1 leading-tight">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ PREMIUM Campus Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-2">Campus Gallery</h2>
          <p className="text-slate-500 text-sm">A visual tour of life at JJ Engineering College</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {gallery.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
              style={{ minHeight: '220px' }}
              onClick={() => setActiveGallery(activeGallery === index ? null : index)}
            >
              {/* Gradient background simulating photo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>

              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)'
                }}
              ></div>

              {/* Main icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 select-none">
                  {item.icon}
                </span>
              </div>

              {/* Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition">
                <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <FaExpand className="text-white text-xs" />
                </div>
              </div>

              {/* Bottom gradient info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                <p className="text-white/70 text-xs">{item.subtitle}</p>

                {/* Detail text slides in on click/hover */}
                {activeGallery === index && (
                  <p className="text-white/80 text-xs mt-2 leading-relaxed border-t border-white/20 pt-2">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">Click any card to see more details</p>
      </section>

      {/* Campus Tour CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <div className="text-4xl mb-4">🎥</div>
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Visit Our Campus</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Schedule a campus tour and experience the JJ Engineering College community firsthand.
            Meet our students, explore our facilities, and discover why we're the right choice for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-block bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold px-8 py-3 rounded-lg transition transform hover:-translate-y-0.5">
              Book a Campus Tour
            </Link>
            <Link to="/departments" className="inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-bold px-8 py-3 rounded-lg transition">
              View Departments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusLife;