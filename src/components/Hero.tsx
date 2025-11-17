import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Trusted Plastic Manufacturing<br />Since 1993
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          ISO 9001:2015 Certified | 30+ Years of Excellence in Injection Molding & Contract Manufacturing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
