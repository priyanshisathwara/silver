import React from 'react'
import BackBtn from '../components/BackBtn';
import ImageGrid from '../components/ImageGrid';

const AlliedServices = () => {
  return (
    <div>
      <div className='' style={{marginTop: '120px'}}>
      <BackBtn />
        <b className='flex justify-center' style={{color: '#1515b8', fontSize: '30px'}} >End to End Solutions</b>
        <p style={{ margin: '0px 20px', textAlign: 'center'}}>
        At Silver Profile, while we are widely recognized as a leading injection molding company, our capabilities extend far beyond injection molding alone. Over the past decades, we have grown in a carefully planned and balanced manner, ensuring that every service we offer receives the same level of focus and precision. This approach enables us to confidently serve both small businesses and some of India's largest companies.</p>
      </div>
      <ImageGrid />
    </div>
  )
}

export default AlliedServices