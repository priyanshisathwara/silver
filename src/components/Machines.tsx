import { Cpu } from 'lucide-react';

export default function Machines() {
  const machines = [
    { capacity: '650', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' },
    { capacity: '450', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' },
    { capacity: '380', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' },
    { capacity: '300', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' },
    { capacity: '200', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' },
    { capacity: '125', icon: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg' }
  ];

  return (
    <section id="machines" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Machines & Capacity</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art injection molding machines ranging from 125 to 650 tons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg')] bg-cover bg-center opacity-20"></div>
                <Cpu className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{machine.capacity} Ton</h3>
                <p className="text-gray-600">Injection Molding Machine</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2 text-lg">Materials We Process:</h4>
          <p className="text-gray-700">
            PP, HDPE, LDPE, ABS, Nylon, PC (Polycarbonate), Delrin, FR Materials, and more
          </p>
        </div>
      </div>
    </section>
  );
}
