import { Factory, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">

          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
              <Factory className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
              <div>
                <h3 className="text-xl font-bold">SILVER PROFILE</h3>
                <p className="text-sm text-gray-400">PVT LTD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted plastic manufacturing excellence since 1993. ISO 9001:2015 certified.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'machines', 'industries', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Injection Molding</li>
              <li>Custom Mold Development</li>
              <li>Product Design Support</li>
              <li>Product Packaging</li>
              <li>Transportation Support</li>
              <li>Raw Material Supply</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <p className="text-gray-400 leading-relaxed">
                  194/6, Dantali Industrial Estate, Gota-Vadsar Road, Kalol, Gandhinagar - 382721
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:silvercool1994@gmail.com" className="text-gray-400 hover:text-white transition">
                  silvercool1994@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918000985055" className="text-gray-400 hover:text-white transition">
                  +91 8000985055
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Silver Profile Pvt Ltd. All rights reserved.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
