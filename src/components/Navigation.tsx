import { useState, useEffect } from 'react';
import { Menu, X, Factory } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" strokeWidth={2.5} />
            <div>
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
            {['home', 'about', 'services', 'machines', 'industries', 'contact'].map((item) => (
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
        className={`
          md:hidden
          fixed
          top-16
          left-0
          w-full
          bg-white
          border-t
          shadow-lg
          transform
          transition-all
          duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className="px-4 py-4 space-y-3">
          {['home', 'about', 'services', 'machines', 'industries', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="
                block
                w-full
                text-left
                py-3
                px-2
                text-gray-700
                font-medium
                rounded-lg
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
