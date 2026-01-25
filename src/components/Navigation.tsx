import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Mail, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = ['home', 'about', 'services', 'machines', 'industries', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className='hidden lg:flex gap-4 justify-end gap-4 text-white' style={{ paddingTop:'5px', paddingBottom:'5px', backgroundColor: '#0000c9', paddingRight: '20px' }}>
        <div> <a className='flex gap-1' href='https://maps.app.goo.gl/fPqSLPqtF3UzfP4C7'> <MapPin className='' /> Kalol, gujarat, 382722 </a></div>
        < br />
        <p className="flex gap-2 text-white">
          <Mail />
          <a
            href="mailto:silvercool1994@gmail.com"
            className="text-white"
          >
            silvercool1994@gmail.com
          </a>
        </p>
        <div> <a className='flex gap-1' href="tel:+918000985055"> <Phone className='' />+91 8000985055</a></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            {/* <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" strokeWidth={2.5} /> */}
            <img src='src/assets/logo-2.png' style={{ marginRight: '10px', height: '50px' }}></img>
            <div style={{ marginLeft: '0px' }}>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-none">
                SILVER PROFILE
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600">
                PVT LTD
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Close Button at top-right inside mobile menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
