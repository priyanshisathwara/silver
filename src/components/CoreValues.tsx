import { Shield, Lightbulb, Award, Leaf } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description:
        "We maintain the highest standards in every product we manufacture, ensuring excellence in every detail.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Transparency and ethical practices guide our relationships with clients, partners, and stakeholders.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuous improvement and cutting-edge technology drive our manufacturing processes forward.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible manufacturing and sustainable business practices.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our business and define our commitment to excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group transition duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-50 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition">
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
