import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t-4 border-indigo-950">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">JJ Engineering College</h3>
          <p className="text-sm leading-relaxed">
            Trichy - Pudukkottai Main Road,<br />
            Ammapettai,<br />
            Tamil Nadu - 620009
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
          <p className="text-sm space-y-2">
            <span className="block"><strong>Email:</strong> info@jjec.edu.in</span>
            <span className="block"><strong>Phone:</strong> +91 9876543210</span>
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link to="/about" className="hover:text-amber-400 transition">About Us</Link>
              <Link to="/courses" className="hover:text-amber-400 transition">Departments</Link>
              <Link to="/admissions" className="hover:text-amber-400 transition">Admissions 2026</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-6 md:mt-0">
            &copy; 2026 JJ Engineering College. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;