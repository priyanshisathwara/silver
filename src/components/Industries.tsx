import { Car, Truck, Pill, Plane, FlaskConical, Flame, Tractor, Factory, Box } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Plane, name: 'Aerospace Products', color: 'blue' },
    { icon: Pill, name: 'Pharma Sector', color: 'blue' },
    { icon: FlaskConical, name: 'Lab Equipments', color: 'blue' },
    { icon: Flame, name: 'Fire Safety Equipments', color: 'blue' },
    { icon: Car, name: 'Automobile Car Parts Manufacturing', color: 'blue' },
    { icon: Tractor, name: 'Agriculture', color: 'blue' },
    { icon: Box, name: 'Cold Storage', color: 'blue' },
    { icon: Box, name: 'Food Processing', color: 'blue' },
    { icon: Truck, name: 'Logistics', color: 'blue' }, // if Truck icon available
    { icon: Box, name: 'Retail', color: 'blue' },
    { icon: Factory, name: 'Industrial Manufacturing', color: 'blue' }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering precision plastic solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center group hover:transform hover:-translate-y-2 duration-300">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition">
                <industry.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
