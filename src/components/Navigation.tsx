import { useState } from 'react';
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

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Factory className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SILVER PROFILE</h1>
              <p className="text-xs text-gray-600">PVT LTD</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition">Services</button>
            <button onClick={() => scrollToSection('machines')} className="text-gray-700 hover:text-blue-600 font-medium transition">Machines</button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-600 font-medium transition">Industries</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">Services</button>
            <button onClick={() => scrollToSection('machines')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">Machines</button>
            <button onClick={() => scrollToSection('industries')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">Industries</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
