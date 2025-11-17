import { Award, Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Silver Profile</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Plastic Manufacturing Excellence
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since 1993, Silver Profile Pvt Ltd has been at the forefront of plastic injection molding and contract manufacturing. With over 30 years of industry experience, we deliver precision-engineered solutions that meet the highest quality standards.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our ISO 9001:2015 certification reflects our commitment to quality, and our extensive portfolio of 75+ industrial projects demonstrates our capability to serve diverse industries with excellence.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">ISO Certified</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Expert Team</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">75+ Projects</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg"
              alt="Manufacturing facility"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-5xl font-bold mb-1">30+</p>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
