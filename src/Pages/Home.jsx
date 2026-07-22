import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaNewspaper, FaImages } from 'react-icons/fa';

const API = 'https://jj-college-5poa.onrender.com/api';

const categoryColors = {
  Academics: 'bg-indigo-100 text-indigo-800',
  Events: 'bg-amber-100 text-amber-800',
  Sports: 'bg-emerald-100 text-emerald-800',
  Research: 'bg-purple-100 text-purple-800',
  Placement: 'bg-sky-100 text-sky-800',
  General: 'bg-slate-100 text-slate-700',
};

const galleryCategoryColors = {
  Campus: 'bg-indigo-100 text-indigo-800',
  Sports: 'bg-emerald-100 text-emerald-800',
  Symposium: 'bg-purple-100 text-purple-800',
  NSS: 'bg-amber-100 text-amber-800',
  'Cultural Fest': 'bg-pink-100 text-pink-800',
  Convocation: 'bg-sky-100 text-sky-800',
};

const Home = () => {
  const btnRef = useRef(null);
  const zoneRef = useRef(null);

  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [galleryLoading, setGalleryLoading] = useState(true);

  useEffect(() => {
    const btn = btnRef.current;
    const zone = zoneRef.current;
    if (!btn || !zone) return;

    const strength = 0.35;

    // wiggle loop
    const wiggle = gsap.to(btn, {
      rotation: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // magnetic pull — overwrite: "auto" keeps the wiggle!
    const onMouseMove = (e) => {
      const rect = zone.getBoundingClientRect();
      const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
      const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });
    };

    zone.addEventListener("mousemove", onMouseMove);
    zone.addEventListener("mouseleave", onMouseLeave);

    return () => {
      zone.removeEventListener("mousemove", onMouseMove);
      zone.removeEventListener("mouseleave", onMouseLeave);
      wiggle.kill();
    };
  }, []);

  // Fetch news, events, gallery for home preview
  useEffect(() => {
    axios.get(`${API}/news/latest`).then(r => { if (r.data.success) setNews(r.data.data); }).catch(() => {}).finally(() => setNewsLoading(false));
    axios.get(`${API}/events/upcoming`).then(r => { if (r.data.success) setEvents(r.data.data); }).catch(() => {}).finally(() => setEventsLoading(false));
    axios.get(`${API}/gallery/preview`).then(r => { if (r.data.success) setGallery(r.data.data); }).catch(() => {}).finally(() => setGalleryLoading(false));
  }, []);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const isUpcoming = (d) => new Date(d) >= new Date();

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
            <div ref={zoneRef} className="inline-block p-10 cursor-pointer">
              <Link
                ref={btnRef}
                to="/admissions"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg"
              >
                Explore Admissions
              </Link>
            </div>
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

        {/* ===== LATEST NEWS SECTION ===== */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center">
                <FaNewspaper className="text-amber-400 text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-900">Latest News & Announcements</h2>
                <p className="text-slate-500 text-sm">Stay informed with the latest from our campus</p>
              </div>
            </div>
            <Link to="/news" className="hidden sm:flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              View All News <span>→</span>
            </Link>
          </div>

          {newsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
                  <div className="h-44 bg-slate-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                    <div className="h-5 bg-slate-200 rounded w-4/5" />
                    <div className="h-3 bg-slate-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : news.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400">
              <FaNewspaper className="text-5xl mx-auto mb-4 text-slate-200" />
              <p className="font-medium">No news yet</p>
              <p className="text-sm mt-1">News and announcements will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.map(item => (
                <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div className="relative overflow-hidden h-44">
                    <img src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80'; }} />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>{item.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-slate-400 mb-1.5">{formatDate(item.publishDate)}</p>
                    <h3 className="font-bold text-indigo-900 text-sm leading-snug mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 flex-1">{item.description}</p>
                    <Link to="/news" className="mt-4 text-indigo-700 text-xs font-semibold hover:text-indigo-900 inline-flex items-center gap-1">Read More <span>→</span></Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-4 sm:hidden">
            <Link to="/news" className="inline-flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">View All News →</Link>
          </div>
        </section>

        {/* ===== UPCOMING EVENTS SECTION ===== */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                <FaCalendarAlt className="text-indigo-900 text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-900">Upcoming Events</h2>
                <p className="text-slate-500 text-sm">Don't miss what's happening on campus</p>
              </div>
            </div>
            <Link to="/events" className="hidden sm:flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              View All Events <span>→</span>
            </Link>
          </div>

          {eventsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
                  <div className="h-44 bg-slate-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-slate-200 rounded w-4/5" />
                    <div className="h-3 bg-slate-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400">
              <FaCalendarAlt className="text-5xl mx-auto mb-4 text-slate-200" />
              <p className="font-medium">No upcoming events</p>
              <p className="text-sm mt-1">Events will appear here when added.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.map(item => (
                <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div className="relative overflow-hidden h-44">
                    <img src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80'; }} />
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${isUpcoming(item.date) ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                        {isUpcoming(item.date) ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-indigo-900 text-sm leading-snug mb-3 line-clamp-2">{item.title}</h3>
                    <div className="space-y-1 text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-2"><FaCalendarAlt className="text-amber-500 shrink-0" /><span>{formatDate(item.date)}</span></div>
                      <div className="flex items-center gap-2"><FaClock className="text-indigo-500 shrink-0" /><span>{item.time}</span></div>
                      <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500 shrink-0" /><span className="truncate">{item.venue}</span></div>
                    </div>
                    <Link to="/events" className="mt-auto inline-block bg-indigo-900 hover:bg-indigo-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition">View Details</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-4 sm:hidden">
            <Link to="/events" className="inline-flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">View All Events →</Link>
          </div>
        </section>

        {/* ===== CAMPUS GALLERY PREVIEW SECTION ===== */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-700 rounded-xl flex items-center justify-center">
                <FaImages className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-900">Campus Gallery</h2>
                <p className="text-slate-500 text-sm">Glimpses of life at JJ Engineering College</p>
              </div>
            </div>
            <Link to="/gallery" className="hidden sm:flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              View Gallery <span>→</span>
            </Link>
          </div>

          {galleryLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(i => <div key={i} className="h-44 bg-slate-200 rounded-xl animate-pulse" />)}
            </div>
          ) : gallery.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400">
              <FaImages className="text-5xl mx-auto mb-4 text-slate-200" />
              <p className="font-medium">Gallery is empty</p>
              <p className="text-sm mt-1">Photos will appear here when added by admin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gallery.map(item => (
                <Link to="/gallery" key={item._id} className="relative rounded-xl overflow-hidden cursor-pointer group h-44 shadow-sm hover:shadow-xl transition-all duration-300 block">
                  <img src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <p className="text-white font-bold text-xs leading-tight">{item.title}</p>
                    <span className={`mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${galleryCategoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>{item.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-4">
            <Link to="/gallery" className="inline-flex items-center gap-1 text-indigo-700 font-semibold text-sm hover:text-indigo-900 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition sm:hidden">View Gallery →</Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;