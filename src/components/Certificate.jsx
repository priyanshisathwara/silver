import React, { useEffect, useState } from 'react'

const Certificate = () => {
  const [activeImage, setActiveImage] = useState(null);
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveImage(null);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

  return (
        <section
      id="certificate"
      className="py-14 md:py-8 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            QUALITY AND MANAGEMENT CERTIFICATION
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We ensure that our processes are environmentally sound and socially responsible, and that our products are safe and of high quality.
          </p>
          <div className="flex justify-center gap-4" style={{marginTop: '30px'}}>
            <div className="bg-blue-600 p-2 w-fit" onClick={() => setActiveImage('assets/certification.png')}>
                <img src="assets/certification.png" style={{height: '400px'}}></img>
            </div>
            <div className="bg-blue-600 p-2 w-fit" onClick={() => setActiveImage('assets/certification1.png')}>
                <img src="assets/certification1.png" style={{height: '400px'}}></img>
            </div>
          </div>
        </div>

        {activeImage && (
        <div className="image-modal" onClick={() => setActiveImage(null)}>
          <button
            className="image-modal-close"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
          <img
            src={activeImage}
            alt="Full View"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      </div>
    </section>
  )
}

export default Certificate