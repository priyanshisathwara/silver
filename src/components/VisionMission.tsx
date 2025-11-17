import { Target, Eye } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a leading plastic job-work manufacturer recognized for excellence, quality, and sustainability across global markets.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver high-quality plastic contract manufacturing services that exceed client expectations through innovation, precision, and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
