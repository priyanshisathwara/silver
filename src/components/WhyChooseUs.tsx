import { Award, Users, Zap, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'ISO 9001:2015 Certified',
      description: 'Internationally recognized quality management system ensuring consistent excellence in every project.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled professionals with decades of expertise in plastic manufacturing and engineering solutions.'
    },
    {
      icon: Zap,
      title: '30+ Years of Excellence',
      description: 'Three decades of proven track record in delivering high-quality plastic manufacturing solutions.'
    },
    {
      icon: Shield,
      title: 'High Precision Manufacturing',
      description: 'Advanced machinery and rigorous quality control for precision-engineered plastic components.'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Silver Profile?
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for precision plastic manufacturing solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 
                         bg-gradient-to-br from-blue-50 to-white rounded-xl 
                         shadow-lg hover:shadow-xl transition border-l-4 border-blue-600"
            >
              <div className="flex-shrink-0">
                <div className="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
