import { TrendingUp, CheckCircle, Settings, Calendar } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Calendar, value: '30+', label: 'Years Experience' },
    { icon: CheckCircle, value: '75+', label: 'Industrial Projects' },
    { icon: Settings, value: '6', label: 'High-Capacity Machines' },
    { icon: TrendingUp, value: '100%', label: 'Quality Commitment' }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              {/* Icon */}
              <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>

              {/* Value */}
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm sm:text-lg lg:text-xl text-blue-100 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
