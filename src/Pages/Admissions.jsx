const Admissions = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-indigo-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-amber-600 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Admissions <span className="text-amber-400">2026-2027</span>
          </h2>
          <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            JJ Engineering College welcomes students who aspire to build a successful career in Engineering and Technology. Admissions are offered for Undergraduate and Postgraduate programmes based on Government regulations and Anna University norms.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <section className="bg-amber-400 text-amber-950 font-bold py-2 overflow-hidden whitespace-nowrap border-y border-amber-500">
        <div className="inline-block animate-marquee uppercase tracking-wider text-sm">
          Admissions Open for Academic Year 2026-27 &nbsp;|&nbsp; Counseling Code: [Enquiry Active] &nbsp;|&nbsp; Scholarships available for Merit & Sports &nbsp;|&nbsp;
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 space-y-12">
        {/* Eligibility & Procedure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Eligibility Criteria</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-amber-600 mb-3">Undergraduate Programmes (B.E. / B.Tech.)</h3>
                <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Passed Higher Secondary Examination (10+2).</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Physics, Chemistry and Mathematics are compulsory subjects.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Minimum qualifying marks as prescribed by Anna University.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Admissions through Tamil Nadu Engineering Counselling (TNEA).</li>
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-lg font-bold text-amber-600 mb-3">Postgraduate Programmes (M.E. / MBA)</h3>
                <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Completed Bachelor's Degree from a recognized University.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">✓</span> Valid entrance examination score wherever applicable.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-indigo-50 p-6 sm:p-8 rounded-2xl border border-indigo-100 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Admission Procedure</h2>
            <ol className="relative border-l border-indigo-200 ml-3 space-y-4 text-slate-700 text-sm sm:text-base">
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">1</span>
                <p className="font-semibold">Fill the admission enquiry form</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">2</span>
                <p className="font-semibold">Submit required documents</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">3</span>
                <p className="font-semibold">Verify original certificates</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">4</span>
                <p className="font-semibold">Attend counselling (if applicable)</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">5</span>
                <p className="font-semibold">Course selection</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">6</span>
                <p className="font-semibold">Fee payment</p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">7</span>
                <p className="font-semibold">Admission confirmation</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 text-amber-400 text-xs font-bold rounded-full -left-3">8</span>
                <p className="font-semibold">Receive student ID and orientation schedule</p>
              </li>
            </ol>
          </section>
        </div>

        {/* Documents & Scholarships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Documents Required</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> 10th Mark Sheet</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> 12th Mark Sheet</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Transfer Certificate (TC)</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Community Certificate</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Nativity Certificate</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> [Identity Copy Omitted]</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Passport Size Photos</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Migration Certificate</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Income Certificate</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">•</span> Medical Fitness Certificate</li>
            </ul>
          </section>
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Scholarships Available</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Government Scholarship</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> First Graduate Support</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> BC / MBC / SC / ST Allocation</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Merit Scholarship</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Sports Excellence Merits</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Minority Scholarships</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Single Girl Child Allocation</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Educational Loan Schemes</li>
            </ul>
          </section>
        </div>

        {/* Fee & Dates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Fee Structure (Sample)</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-indigo-900 text-white text-sm">
                  <tr>
                    <th className="px-6 py-4 font-semibold tracking-wider">Programme</th>
                    <th className="px-6 py-4 font-semibold tracking-wider text-center">Duration</th>
                    <th className="px-6 py-4 font-semibold tracking-wider text-right">Tuition Fee / Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.E Computer Science Engineering</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹75,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.Tech Information Technology</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹75,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.Tech AI & Data Science</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹80,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.E ECE</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹72,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.E Mechanical</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹70,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">B.E Civil</td><td className="px-6 py-3.5 text-center">4 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹70,000</td></tr>
                  <tr className="hover:bg-slate-50 transition"><td className="px-6 py-3.5 font-medium">MBA</td><td className="px-6 py-3.5 text-center">2 Years</td><td className="px-6 py-3.5 text-right font-semibold text-emerald-600">₹90,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Important Dates</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-center">
                <thead className="bg-slate-100 text-slate-700 text-sm">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Event</th>
                    <th className="px-4 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600 text-sm">
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3.5 font-medium text-left">Application Starts</td><td className="px-4 py-3.5 text-amber-600 font-semibold">May 2026</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3.5 text-left">Last Date to Apply</td><td className="px-4 py-3.5 text-amber-600 font-semibold">June 2026</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3.5 text-left">Certificate Verification</td><td className="px-4 py-3.5 text-slate-700">July 2026</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3.5 text-left">Counselling Timeline</td><td className="px-4 py-3.5 text-slate-700">July 2026</td></tr>
                  <tr className="hover:bg-slate-50"><td className="px-4 py-3.5 text-left font-medium text-indigo-900">Classes Begin</td><td className="px-4 py-3.5 text-indigo-900 font-bold bg-indigo-50">August 2026</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Form & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <section className="lg:col-span-1 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">Enquiry Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Select Course</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>B.E Computer Science Engineering</option>
                  <option>B.Tech Information Technology</option>
                  <option>B.Tech AI & Data Science</option>
                  <option>B.E Electronics & Communication</option>
                  <option>B.E Electrical & Electronics</option>
                  <option>B.E Mechanical Engineering</option>
                  <option>B.E Civil Engineering</option>
                  <option>MBA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Your Message</label>
                <textarea rows="4" placeholder="Write your enquiry here" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg text-sm transition">Submit</button>
                <button type="reset" className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-4 rounded-lg text-sm transition">Reset</button>
              </div>
            </form>
          </section>

          <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-900">
                <h4 className="font-bold text-indigo-950 mb-1">1. Is the college affiliated to Anna University?</h4>
                <p className="text-sm text-slate-600">Yes. JJ Engineering College is permanently affiliated with Anna University.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-900">
                <h4 className="font-bold text-indigo-950 mb-1">2. Does the college provide hostel facilities?</h4>
                <p className="text-sm text-slate-600">Yes. Well-furnished, separate hostel infrastructure setups are functional on-site for both boys and girls.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-900">
                <h4 className="font-bold text-indigo-950 mb-1">3. Are placement opportunities available?</h4>
                <p className="text-sm text-slate-600">Yes. The Dedicated Placement Cell runs structured alignment trainings and corporate recruitment drives yearly.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-900">
                <h4 className="font-bold text-indigo-950 mb-1">4. Is campus transport available?</h4>
                <p className="text-sm text-slate-600">Yes. Dedicated institutional buses connect smoothly with all primary regional cities and towns nearby.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-900">
                <h4 className="font-bold text-indigo-950 mb-1">5. How can I apply?</h4>
                <p className="text-sm text-slate-600">Candidates can complete state allocations via TNEA counseling or coordinate directly with our general Admissions Office.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Admissions;