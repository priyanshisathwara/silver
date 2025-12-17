import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        flex items-center justify-center
        bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg')]
          bg-cover bg-center
          opacity-20
        "
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight">
          Trusted Plastic Manufacturing
          <br className="hidden sm:block" />
          Since 1993
        </h1>

        <p className="text-base sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          ISO 9001:2015 Certified • 30+ Years of Excellence in Injection Molding & Contract Manufacturing
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="
              group
              w-full sm:w-auto
              bg-blue-600 text-white
              px-6 sm:px-8 py-3 sm:py-4
              rounded-lg font-semibold text-base sm:text-lg
              hover:bg-blue-700 transition
              flex items-center justify-center gap-2
              shadow-lg hover:shadow-xl
              transform hover:-translate-y-1
            "
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>

          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="
              w-full sm:w-auto
              bg-white text-blue-900
              px-6 sm:px-8 py-3 sm:py-4
              rounded-lg font-semibold text-base sm:text-lg
              hover:bg-gray-100 transition
              shadow-lg hover:shadow-xl
              transform hover:-translate-y-1
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
