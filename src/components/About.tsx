import { Award, Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Silver Profile</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Plastic Manufacturing Excellence
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Since 1993, Silver Profile Pvt Ltd has been at the forefront of plastic injection molding and contract manufacturing. With over 30 years of industry experience, we deliver precision-engineered solutions that meet the highest quality standards.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SILVER PROFILE is committed to sustainability and utilizes eco-friendly materials and processes in all our projects.
            </p>

            {/* Leadership Team */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Leadership Team</h4>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Name:</strong> VISHNUBHAI PATEL</li>
                <li><strong>Designation:</strong> Director</li>
                <li><strong>Team Members:</strong> JAGDISHBHAI, Rutvik Patel</li>
              </ul>
            </div>

            {/* Contact / Call to Action */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h4>
              <p>Rutvik Patel</p>
               <a href="tel:+918000985055" className="text-blue-600 hover:text-blue-700 transition">
                      📞  +91 8000985055
                    </a>
              <p>📧 <a href="mailto:silvercool1994@gmail.com" className="text-blue-600 hover:underline">silvercool1994@gmail.com</a></p>
            </div>

            {/* Tagline / Hashtags */}
            <div className="text-gray-600 space-x-2">
              <span>#Silverprofile</span>
              <span>#PlasticManufacturing</span>
              <span>#InjectionMolding</span>
              <span>#ISOCertified</span>
              <span>#30YearsExperience</span>
              <span>#ManufacturingPartner</span>
              <span>#MakeInIndia</span>
              <span>#IndustrialSolutions</span>
              <span>#JobWork</span>
            </div>

            {/* Features / Achievements */}
            <div className="grid grid-cols-3 gap-6 mt-8">
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

          {/* Right Side: Image */}
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
