import { Cog, Wrench, Package, Truck, Box } from 'lucide-react';
import './Services.css';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: 'assets/plastic-molding.webp',
      title: 'Plastic Molding',
      description:
        'High-precision plastic injection molding services with capacities ranging from 125 to 650 tons for diverse product requirements.',
      url: '/plastic-molding'
    },
    {
      icon: 'assets/allied-service.webp',
      title: 'Allied Services',
      description:
        'We offer comprehensive end to end solutions beyond just injection molding.',
      url: '/allied-service'
    },
    // {
    //   icon: Box,
    //   title: 'Product Design Support',
    //   description:
    //     'Comprehensive design assistance from concept to production, helping you optimize manufacturability and cost-efficiency.'
    // },
    // {
    //   icon: Package,
    //   title: 'Product Packaging',
    //   description:
    //     'Professional packaging solutions to protect your products and meet your branding and distribution requirements.'
    // },
    // {
    //   icon: Truck,
    //   title: 'Transportation Support',
    //   description:
    //     'Reliable logistics and transportation services ensuring timely delivery of your manufactured products.'
    // },
    // {
    //   icon: Box,
    //   title: 'Raw Material Supply',
    //   description:
    //     'Access to quality raw materials including PP, HDPE, LDPE, ABS, Nylon, PC, and specialized engineering plastics.'
    // },
    // {
    //   icon: Box,
    //   title: 'Rubber Compression Molding',
    //   description:
    //     'Along with plastic injection molding, We also offer Rubber Compression Molding to shape rubber components, Which can later be integrated with injection-molded plastic component.'
    // },
    // {
    //   icon: Box,
    //   title: 'Mold Designing',
    //   description:
    //     'Our Mold design services created customized molds according to the requirements using advanced software and tools.'
    // }
  ];

  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastic manufacturing solutions from design to delivery
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto place-items-center">
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
                flex flex-col
                h-full
              "
            >

              <img src={service.icon} style={{ height: '400px', width: '100%', borderRadius: '5px' }}></img>

              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ marginTop: "20px" }}
              >
                {service.title}
              </h3>

              <div className="flex flex-col flex-grow">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

              <Link to={service.url}>
                <div className="mt-auto pt-6">
                  <button className="service-btn">
                    <i className="service-animation"></i>
                    Learn More
                    <i className="service-animation"></i>
                  </button>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
