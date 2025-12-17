import { Target, Eye } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Vision */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 ml-4">
                Our Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              To be a leading plastic job-work manufacturer recognized for excellence, quality, and sustainability across global markets.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 ml-4">
                Our Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              To deliver high-quality plastic contract manufacturing services that exceed client expectations through innovation, precision, and dedication.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
