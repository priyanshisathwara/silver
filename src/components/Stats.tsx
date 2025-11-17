import { TrendingUp, CheckCircle, Settings, Calendar } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Calendar, value: '30+', label: 'Years Experience', color: 'blue' },
    { icon: CheckCircle, value: '75+', label: 'Industrial Projects', color: 'blue' },
    { icon: Settings, value: '6', label: 'High-Capacity Machines', color: 'blue' },
    { icon: TrendingUp, value: '100%', label: 'Quality Commitment', color: 'blue' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="w-10 h-10" />
              </div>
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
