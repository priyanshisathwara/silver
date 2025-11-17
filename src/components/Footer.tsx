import { Factory, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Factory className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
              <div>
                <h3 className="text-xl font-bold">SILVER PROFILE</h3>
                <p className="text-sm text-gray-400">PVT LTD</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Trusted plastic manufacturing excellence since 1993. ISO 9001:2015 certified.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition">Services</button></li>
              <li><button onClick={() => scrollToSection('machines')} className="text-gray-400 hover:text-white transition">Machines</button></li>
              <li><button onClick={() => scrollToSection('industries')} className="text-gray-400 hover:text-white transition">Industries</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Injection Molding</li>
              <li>Custom Mold Development</li>
              <li>Product Design Support</li>
              <li>Product Packaging</li>
              <li>Transportation Support</li>
              <li>Raw Material Supply</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  194/6, Dantali Industrial Estate, Gota-Vadsar Road, Kalol, Gandhinagar - 382721
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:silvercool1994@gmail.com" className="text-gray-400 hover:text-white transition text-sm">
                  silvercool1994@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919999999999" className="text-gray-400 hover:text-white transition text-sm">
                  +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Silver Profile Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
