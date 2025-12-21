import { Award, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Silver Profile
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Leading Plastic Manufacturing Excellence
            </h3>

            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Since 1993, Silver Profile Pvt Ltd has been at the forefront of plastic
              injection molding and contract manufacturing. With over 30 years of
              industry experience, we deliver precision-engineered solutions that
              meet the highest quality standards.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              SILVER PROFILE is committed to sustainability and utilizes eco-friendly
              materials and processes in all our projects.
            </p>

             Leadership
            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Leadership Team
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                <li><strong>Name:</strong> Vishnubhai Patel, Arvindbhai Patel</li>
                <li><strong>Designation:</strong> Director</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">Rutvik Patel</p>

              <a
                href="tel:+918000985055"
                className="block text-blue-600 hover:text-blue-700 transition text-sm sm:text-base"
              >
                📞 +91 8000985055
              </a>

              <p className="text-sm sm:text-base">
                📧{" "}
                <a
                  href="mailto:silvercool1994@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  silvercool1994@gmail.com
                </a>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600">
              {[
                "#Silverprofile",
                "#PlasticManufacturing",
                "#InjectionMolding",
                "#ISOCertified",
                "#30YearsExperience",
                "#ManufacturingPartner",
                "#MakeInIndia",
                "#IndustrialSolutions",
                "#JobWork",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  ISO Certified
                </p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  Expert Team
                </p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  75+ Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 md:mt-0">
            <img
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg"
              alt="Manufacturing facility"
              className="rounded-lg shadow-2xl w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-xl">
              <p className="text-3xl md:text-5xl font-bold mb-1">30+</p>
              <p className="text-sm md:text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
