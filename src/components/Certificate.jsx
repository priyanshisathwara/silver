import React from 'react'

const Certificate = () => {
  return (
        <section
      id="contact"
      className="py-14 md:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            QUALITY AND MANAGEMENT CERTIFICATION
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <div className="flex justify-center">
            <div className="bg-blue-600 p-4 w-fit">
                <img src="assets/certification.png" style={{height: '400px'}}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate