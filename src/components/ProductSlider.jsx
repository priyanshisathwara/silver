import { useRef, useState, useEffect } from "react";
import "./ProductSlider.css";

const products = [
  { image: "assets/products/product1.jpeg" },
  { image: "assets/products/product2.jpeg" },
  { image: "assets/products/product3.jpeg" },
  { image: "assets/products/product4.jpeg" },
  { image: "assets/products/product5.jpeg" },
  { image: "assets/products/product6.jpeg" },
  { image: "assets/products/product7.jpeg" },
  { image: "assets/products/product8.jpeg" },
  { image: "assets/products/product9.jpeg" },
  { image: "assets/products/product10.jpeg" },
  { image: "assets/products/product11.jpeg" },
  { image: "assets/products/product12.jpeg" },
  { image: "assets/products/product13.jpeg" },
];

const ProductSlider = () => {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
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

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setStartX(0);
    sliderRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const distance = e.clientX - startX;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const distance = e.touches[0].clientX - startX;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <>
      <h2
        className="flex justify-center"
        style={{ color: "#1515b8", marginTop: "30px", fontSize: "30px" }}
      >
        Our Products
      </h2>

      <div
        className="product-slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt="Product"
              onClick={() => setActiveImage(product.image)}
              className="cursor-pointer"
            />
          </div>
        ))}
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
    </>
  );
};

export default ProductSlider;
