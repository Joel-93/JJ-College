import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    city: false,
    course: false,
    message: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    setErrors(prev => ({ ...prev, [id]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, city, course, message } = formData;
    let newErrors = {
      fullName: false,
      email: false,
      phone: false,
      city: false,
      course: false,
      message: false
    };
    let isValid = true;

    // Validate Name
    if (fullName.trim().length < 2) {
      newErrors.fullName = true;
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      newErrors.email = true;
      isValid = false;
    }

    // Validate Phone
    const phoneDigits = phone.replace(/\D/g, '');
    let phoneValid = false;
    if (phoneDigits.length === 10) phoneValid = true;
    else if (phoneDigits.length === 12 && phoneDigits.startsWith('91')) phoneValid = true;
    else if (phoneDigits.length === 11 && phoneDigits.startsWith('0')) {
      const sub = phoneDigits.substring(1);
      if (sub.length === 10) phoneValid = true;
    }
    if (!phoneValid) {
      newErrors.phone = true;
      isValid = false;
    }

    // Validate City
    if (city.trim().length < 2) {
      newErrors.city = true;
      isValid = false;
    }

    // Validate Course
    if (course === '' || course === '-- Select a Course --') {
      newErrors.course = true;
      isValid = false;
    }

    // Validate Message
    if (message.trim().length < 10) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert('✅ Your enquiry has been submitted successfully! We will contact you soon.');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        course: '',
        message: ''
      });
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.text-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="relative bg-indigo-950 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-amber-400 mb-4 tracking-tight">Contact Us</h2>
          <p className="text-base sm:text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto font-light">
            We are always happy to assist students, parents, alumni, and visitors. Feel free to contact us for admissions, academic information, placements, or general enquiries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid: Address & Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Quick Contacts & Address Info Column */}
          <div className="space-y-8 lg:col-span-1">
            <section className="bg-indigo-900 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-indigo-950">
              <h2 className="text-xl font-bold text-amber-400 mb-4 pb-2 border-b border-indigo-800">College Address</h2>
              <p className="text-indigo-100 leading-relaxed text-sm sm:text-base">
                <strong className="text-white text-lg block mb-2">JJ Engineering College</strong>
                Trichy - Pudukkottai Main Road,<br />
                Ammapettai,<br />
                Tiruchirappalli,<br />
                Tamil Nadu - 620009,<br />
                India.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-indigo-900 mb-3">Placement Cell Contact</h2>
              <div className="text-slate-600 text-sm space-y-2">
                <p><strong className="text-slate-800 block text-base font-semibold">Mr. S. Kumar</strong> Placement Officer</p>
                <p className="pt-1"><strong>Email :</strong> <a href="mailto:placement@jjec.edu.in" className="text-indigo-600 hover:underline">placement@jjec.edu.in</a></p>
                <p><strong>Phone :</strong> +91 9876543212</p>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <h2 className="text-xl font-bold text-indigo-900 mb-4 pb-1 border-b border-slate-100">Office Hours</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-100 text-sm">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Day</th>
                      <th className="px-3 py-2 font-semibold">Working Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr><td className="px-3 py-2 font-medium text-slate-800">Monday - Friday</td><td className="px-3 py-2">9:00 AM - 5:00 PM</td></tr>
                    <tr><td className="px-3 py-2 font-medium text-slate-800">Saturday</td><td className="px-3 py-2">9:00 AM - 1:00 PM</td></tr>
                    <tr className="bg-rose-50/50 text-rose-700"><td className="px-3 py-2 font-medium">Sunday</td><td className="px-3 py-2 font-semibold">Holiday</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Enquiry Form Section with JS Validation */}
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Admission Enquiry Form</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your Full Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <span className="text-red-500 text-xs block mt-1">Please enter your full name (min 2 characters).</span>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-red-500 text-xs block mt-1">Please enter a valid email address.</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="text-red-500 text-xs block mt-1">Enter 10-digit phone number.</span>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your City"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <span className="text-red-500 text-xs block mt-1">Please enter your city.</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Select Course <span className="text-red-500">*</span></label>
                <select
                  id="course"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-600"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">-- Select a Course --</option>
                  <option>B.E Computer Science Engineering</option>
                  <option>B.Tech Information Technology</option>
                  <option>B.Tech Artificial Intelligence & Data Science</option>
                  <option>B.E Electronics & Communication Engineering</option>
                  <option>B.E Electrical & Electronics Engineering</option>
                  <option>B.E Mechanical Engineering</option>
                  <option>B.E Civil Engineering</option>
                  <option>MBA</option>
                </select>
                {errors.course && <span className="text-red-500 text-xs block mt-1">Please select a course.</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message here"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs block mt-1">Message must be at least 10 characters.</span>}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-2.5 rounded-lg shadow-md transition transform hover:-translate-y-0.5 text-sm">Send Message</button>
                <button type="reset" className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold px-4 py-2.5 rounded-lg transition text-sm" onClick={() => {
                  setFormData({ fullName: '', email: '', phone: '', city: '', course: '', message: '' });
                  setErrors({ fullName: false, email: false, phone: false, city: false, course: false, message: false });
                }}>Clear</button>
              </div>
            </form>
          </section>
        </div>

        {/* Directories Section (Phones & Emails side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Administrative Helplines</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-indigo-900 text-white text-sm">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Department</th>
                    <th className="px-4 py-3 font-semibold">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Admission Office</td><td className="px-4 py-3 text-indigo-600 font-semibold">+91 9876543210</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Principal Office</td><td className="px-4 py-3 text-indigo-600 font-semibold">+91 9876543211</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Placement Cell</td><td className="px-4 py-3 text-indigo-600 font-semibold">+91 9876543212</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Examination Cell</td><td className="px-4 py-3 text-indigo-600 font-semibold">+91 9876543213</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-4 py-3 font-medium">Hostel Office</td><td className="px-4 py-3 text-indigo-600 font-semibold">+91 9876543214</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Email Directory</h2>
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2 gap-1">
                <span className="font-medium text-slate-900">General Enquiry</span>
                <a href="mailto:info@jjec.edu.in" className="text-indigo-600 hover:underline font-medium">info@jjec.edu.in</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2 gap-1">
                <span className="font-medium text-slate-900">Admissions Desk</span>
                <a href="mailto:admissions@jjec.edu.in" className="text-indigo-600 hover:underline font-medium">admissions@jjec.edu.in</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2 gap-1">
                <span className="font-medium text-slate-900">Principal's Office</span>
                <a href="mailto:principal@jjec.edu.in" className="text-indigo-600 hover:underline font-medium">principal@jjec.edu.in</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2 gap-1">
                <span className="font-medium text-slate-900">Placement Cell</span>
                <a href="mailto:placement@jjec.edu.in" className="text-indigo-600 hover:underline font-medium">placement@jjec.edu.in</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-1 gap-1">
                <span className="font-medium text-slate-900">Examinations Branch</span>
                <a href="mailto:examcell@jjec.edu.in" className="text-indigo-600 hover:underline font-medium">examcell@jjec.edu.in</a>
              </li>
            </ul>
          </section>
        </div>

        {/* Department Contacts & Logistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:col-span-1">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-slate-100 pb-1">Departments Desk</h2>
            <ul className="space-y-2 text-slate-600 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Computer Science</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Information Technology</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> AI & Data Science</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Electronics & Comm.</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Electrical & Electronics</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Mechanical Engineering</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Civil Engineering</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">•</span> MBA Desk</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-slate-100 pb-1">Transportation & Commute</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The college operates a widespread network of bus facilities connecting major hubs, intersections, and suburbs throughout Tiruchirappalli and neighboring zones. Students can comfortably and safely commute daily directly from nearby regional locations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 font-semibold">
              <span className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Campus Visit Booking</span>
              <span className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Hostel Enquiry</span>
              <span className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Transport Registration</span>
              <span className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Student Assistance Desk</span>
            </div>
          </section>
        </div>

        {/* Campus Facilities Grid */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Why Contact Us? & Campus Facilities Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-indigo-950 mb-1">Inquiry Support</h3>
              <ul className="space-y-1 list-disc pl-4 text-slate-600">
                <li>Admission Guidance</li>
                <li>Scholarship Information</li>
                <li>Placement Assistance</li>
                <li>Industrial Collaboration</li>
                <li>Internship Inquiries</li>
                <li>Research Programs</li>
              </ul>
            </div>
            <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-indigo-950 mb-1">Academic Eco-System</h3>
              <ul className="space-y-1 list-disc pl-4 text-slate-600">
                <li>Smart Classrooms</li>
                <li>Digital Library (50k+ Books)</li>
                <li>High-Speed Wi-Fi Architecture</li>
                <li>Modern Scientific Laboratories</li>
                <li>Incubation & Innovation Hubs</li>
                <li>Dedicated Research Centre</li>
              </ul>
            </div>
            <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-indigo-950 mb-1">Infrastructure & Comforts</h3>
              <ul className="space-y-1 list-disc pl-4 text-slate-600">
                <li>Multi-Sport Complex Arena</li>
                <li>Fitness Gymnasium</li>
                <li>Hygiene Focused Cafeteria</li>
                <li>24/7 Medical Care Unit</li>
                <li>Secure Boys Hostel Blocks</li>
                <li>Secure Girls Hostel Blocks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Geo & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <section className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2 flex flex-col justify-between">
            <div className="p-2">
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Location Map</h2>
              <p className="text-slate-600 text-sm mb-4">
                JJ Engineering College is strategically situated along the Trichy - Pudukkottai Main Road, Ammapettai, Tiruchirappalli, Tamil Nadu.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 h-80 lg:h-full">
              <iframe
                src="https://www.google.com/maps?q=JJ+Engineering+College+Trichy&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="College Map"
              ></iframe>
            </div>
          </section>

          <section className="bg-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-amber-400 mb-4 pb-1 border-b border-indigo-900">Follow Us Online</h2>
              <p className="text-xs text-indigo-200 mb-6 leading-relaxed">Stay seamlessly updated on announcements, symposium notifications, hackathon roll-outs, and campus achievements.</p>
              <ul className="space-y-3 font-medium text-sm sm:text-base">
                <li><a href="https://facebook.com/jjec" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition"><span>f</span> <span className="hover:underline">facebook.com/jjec</span></a></li>
                <li><a href="https://instagram.com/jjec" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition"><span>📸</span> <span className="hover:underline">instagram.com/jjec</span></a></li>
                <li><a href="https://linkedin.com/company/jjec" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition"><span>in</span> <span className="hover:underline">linkedin.com/company/jjec</span></a></li>
                <li><a href="https://youtube.com/jjec" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition"><span>▶</span> <span className="hover:underline">youtube.com/jjec</span></a></li>
                <li><a href="https://x.com/jjec" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition"><span>𝕏</span> <span className="hover:underline">x.com/jjec</span></a></li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-indigo-900 text-center text-xs text-indigo-300">
              Official College Handles
            </div>
          </section>
        </div>

        {/* FAQ Area */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 flex items-start gap-2"><span className="text-amber-500 font-extrabold">Q.</span> How can I visit the campus?</h3>
              <p className="text-slate-600 text-sm sm:text-base pl-6 leading-relaxed">Visitors can comfortably coordinate directly with the Admission Office to pre-book and set up a guided campus visit or technical lab walkthrough during operational hours.</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 flex items-start gap-2"><span className="text-amber-500 font-extrabold">Q.</span> Does the college provide residential hostel facilities?</h3>
              <p className="text-slate-600 text-sm sm:text-base pl-6 leading-relaxed">Yes, completely secure, modern residential housing facilities are active on campus with standalone blocks assigned separately for boys and girls.</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 flex items-start gap-2"><span className="text-amber-500 font-extrabold">Q.</span> How can I apply for admission programs?</h3>
              <p className="text-slate-600 text-sm sm:text-base pl-6 leading-relaxed">Eligible candidates can apply through the standard statewide TNEA engineering counseling workflows or reach out to our Admission Desks regarding specialized management pathways.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;