import "./ImageGrid.css";

const imagesData = [
  {
    id: 1,
    src: "assets/allied/image2.png",
    alt: "Rubber compression molding",
    title: "Rubber Compression Molding",
    desc: "Along with plastic injection molding, We also offer Runner Compression Molding to shape runner components, Which can later be integrated with injection-molded plastic component."
  },
  {
    id: 2,
    src: "assets/allied/image5.png",
    alt: "Product Design Support",
    title: "Product Design Support",
    desc: "Comprehensive design assistance from concept to production, helping you optimize manufacturability and cost-efficiency."
  },
  {
    id: 3,
    src: "assets/allied/image6.png",
    alt: "Custom mold development",
    title: "Custom Mold Development",
    desc: "Our Mold design services created customized molds according to the requirements using advanced software and tools."
  },
  {
    id: 4,
    src: "assets/allied/image4.png",
    alt: "Product packaging",
    title: "Product Packaging",
    desc: "Professional packaging solutions to protect your products and meet your branding and distribution requirements."
  },
  {
    id: 5,
    src: "assets/allied/image3.png",
    alt: "Raw material supply",
    title: "Raw Material Supply",
    desc: "Access to quality raw materials including PP, HDPE, LDPE, ABS, Nylon, PC, and specialized engineering plastics."
  },
  {
    id: 6,
    src: "assets/allied/image1.png",
    alt: "Transportation Support",
    title: "Transportation Support",
    desc: "Reliable logistics and transportation services ensuring timely delivery of your manufactured products."
  }
];

export default function ImageGrid() {
  return (
    <section className="image-grid-section">
      <div className="image-grid-container">
        {imagesData.map((image) => (
          <div className="image-card" key={image.id} style={{padding: '20px'}}>
            <img src={image.src} alt={image.alt} style={{height: '300px', marginBottom: '20px'}} />
            <b>{image.title}</b>
            <p style={{fontSize: '15px', marginTop: '12px'}}>{image.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
