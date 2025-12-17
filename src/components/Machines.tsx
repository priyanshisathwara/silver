import { Cpu } from 'lucide-react';

export default function Machines() {
  const machines = [
    { capacity: '650' },
    { capacity: '450' },
    { capacity: '380' },
    { capacity: '300' },
    { capacity: '200' },
    { capacity: '125' },
  ];

  return (
    <section
      id="machines"
      className="py-14 sm:py-16 lg:py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Machines & Capacity
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art injection molding machines ranging from 125 to 650 tons
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                transition
                hover:shadow-2xl
                group
              "
            >
              {/* Image / Icon */}
              <div
                className="
                  relative
                  h-40 sm:h-44 lg:h-48
                  bg-gradient-to-br from-blue-600 to-blue-800
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg')] bg-cover bg-center opacity-20"></div>

                <Cpu
                  className="
                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                    text-white
                    relative z-10
                    group-hover:scale-110
                    transition
                  "
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {machine.capacity} Ton
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  Injection Molding Machine
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Materials */}
        <div className="mt-10 sm:mt-12 bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
            Materials We Process:
          </h4>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            PP, HDPE, LDPE, ABS, Nylon, PC (Polycarbonate), Delrin, FR Materials, and more
          </p>
        </div>
      </div>
    </section>
  );
}
