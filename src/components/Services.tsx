import { Cog, Wrench, Package, Truck, Box } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: 'Injection Molding',
      description:
        'High-precision plastic injection molding services with capacities ranging from 125 to 650 tons for diverse product requirements.'
    },
    {
      icon: Wrench,
      title: 'Custom Mold Development',
      description:
        'Expert mold design and development tailored to your specifications, ensuring optimal performance and product quality.'
    },
    {
      icon: Box,
      title: 'Product Design Support',
      description:
        'Comprehensive design assistance from concept to production, helping you optimize manufacturability and cost-efficiency.'
    },
    {
      icon: Package,
      title: 'Product Packaging',
      description:
        'Professional packaging solutions to protect your products and meet your branding and distribution requirements.'
    },
    {
      icon: Truck,
      title: 'Transportation Support',
      description:
        'Reliable logistics and transportation services ensuring timely delivery of your manufactured products.'
    },
    {
      icon: Box,
      title: 'Raw Material Supply',
      description:
        'Access to quality raw materials including PP, HDPE, LDPE, ABS, Nylon, PC, and specialized engineering plastics.'
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Products & Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastic manufacturing solutions from design to delivery
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-br from-blue-50 to-white
                p-6 sm:p-8
                rounded-xl
                shadow-lg
                hover:shadow-2xl
                transition
                group
                border border-blue-100
                hover:border-blue-300
                text-center sm:text-left
              "
            >
              {/* Icon */}
              <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-5 sm:mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
