import { Cog, Wrench, Package, Truck, Box } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: 'Injection Molding',
      description: 'High-precision plastic injection molding services with capacities ranging from 125 to 650 tons for diverse product requirements.'
    },
    {
      icon: Wrench,
      title: 'Custom Mold Development',
      description: 'Expert mold design and development tailored to your specifications, ensuring optimal performance and product quality.'
    },
    {
      icon: Box,
      title: 'Product Design Support',
      description: 'Comprehensive design assistance from concept to production, helping you optimize manufacturability and cost-efficiency.'
    },
    {
      icon: Package,
      title: 'Product Packaging',
      description: 'Professional packaging solutions to protect your products and meet your branding and distribution requirements.'
    },
    {
      icon: Truck,
      title: 'Transportation Support',
      description: 'Reliable logistics and transportation services ensuring timely delivery of your manufactured products.'
    },
    {
      icon: Box,
      title: 'Raw Material Supply',
      description: 'Access to quality raw materials including PP, HDPE, LDPE, ABS, Nylon, PC, and specialized engineering plastics.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Products & Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastic manufacturing solutions from design to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group border border-blue-100 hover:border-blue-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
