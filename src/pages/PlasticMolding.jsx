import React from 'react'
import ProductSlider from '../components/ProductSlider';
import BackBtn from '../components/BackBtn';
import HeroPlasticMolding from '../components/HeroSection';
import Machines from '../components/Machines';

const PlasticMolding = () => {
  return (
    <div>
      <div className='' style={{ marginTop: '100px' }}>
        <HeroPlasticMolding title1={'Comprehensive Plastic Injection'} title2={'Moulding Solutions'} />
        {/* <BackBtn /> */}
        <div>
          <b className='flex justify-center mt-4' style={{ color: '#1515b8', fontSize: '30px' }} >About Injection Moulding</b>
          <p style={{ margin: '0px 20px', textAlign: 'center', fontSize: '25px', padding: '20px' }}>
            Injection molding is Silver Profile core service. For 30+ years, we have manufactured millions of high-quality precision products via injection molding. These products cater to both small businesses and multinational corporations alike.
            We have the capability to mold around 650 tonnes of plastic with efficiency and effectiveness.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start" style={{ borderRadius: '20px', margin: '20px', padding: '20px', background: 'linear-gradient(183deg, rgb(8 47 204 / 37%) 0%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 100%)' }}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            Leading Plastic Manufacturing Excellence
          </h3>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            At Silver Profile, our customers come first. We go beyond traditional molding services to provide end to end support that helps plastic product ideas become reality especially for startups.
            Our team partners closely with each client to understand their unique goals and requirements. As molding experts, we ensure every detail—from design and material selection to manufacturing processes and cost—aligns seamlessly with our clients specifications. With experience in molding with various materials, we deliver customized plastic solutions precisely tailored to each project.
          </p>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img
            src="assets/hero-plastic-molding.png"
            alt="Manufacturing facility"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
      <Machines />
      <ProductSlider />
    </div>
  )
}

export default PlasticMolding