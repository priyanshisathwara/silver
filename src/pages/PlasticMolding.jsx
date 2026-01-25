import React from 'react'
import ProductSlider from '../components/ProductSlider';
import BackBtn from '../components/BackBtn';

const PlasticMolding = () => {
  return (
    <div>
      <div className='' style={{marginTop: '120px'}}>
      <BackBtn />
        <b className='flex justify-center' style={{color: '#1515b8', fontSize: '30px'}} >About: Injection Moulding</b>
        <p style={{ margin: '0px 20px', textAlign: 'center'}}>
        Injection molding is Silver Profile core service. For years, we have manufactured millions of high-quality precision products via injection molding. These products cater to both small businesses and multinational corporations alike.
        We operate tons of injection molding machines, across India. This gives us the capability to mold around 1000 tonnes of plastic with efficiency and effectiveness.</p>
      </div>
      <ProductSlider />
    </div>
  )
}

export default PlasticMolding