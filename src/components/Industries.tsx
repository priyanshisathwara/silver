import {
  Car,
  Truck,
  Pill,
  Plane,
  FlaskConical,
  Flame,
  Tractor,
  Factory,
  Box,
} from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Plane, name: 'Aerospace Products' },
    { icon: Pill, name: 'Pharma Sector' },
    { icon: FlaskConical, name: 'Lab Equipments' },
    { icon: Flame, name: 'Fire Safety Equipments' },
    { icon: Car, name: 'Automobile Parts' },
    { icon: Tractor, name: 'Agriculture' },
    { icon: Box, name: 'Cold Storage' },
    { icon: Box, name: 'Food Processing' },
    { icon: Truck, name: 'Logistics' },
    { icon: Box, name: 'Retail' },
    { icon: Factory, name: 'Industrial Manufacturing' },
  ];

  return (
    <section
      id="industries"
      className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Industries We Serve
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering precision plastic solutions across diverse sectors
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="
                bg-white
                p-4 sm:p-6
                rounded-xl
                shadow-md hover:shadow-xl
                transition
                text-center
                group
                hover:-translate-y-2
                duration-300
              "
            >
              <div
                className="
                  bg-blue-50
                  w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  rounded-full
                  flex items-center justify-center
                  mx-auto mb-3 sm:mb-4
                  group-hover:bg-blue-600
                  transition
                "
              >
                <industry.icon
                  className="
                    w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10
                    text-blue-600 group-hover:text-white
                    transition
                  "
                />
              </div>

              <h3 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base leading-snug">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
