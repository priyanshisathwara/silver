import "./ImageGrid.css";

const imagesData = [
  {
    id: 1,
    src: "assets/allied/image1.png",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "assets/allied/image2.png",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "assets/allied/image3.png",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "assets/allied/image4.png",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "assets/allied/image5.png",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "assets/allied/image6.png",
    alt: "Image 6",
  },
  {
    id: 7,
    src: "assets/allied/image.png",
    alt: "Image 7",
  },
];

export default function ImageGrid() {
  return (
    <section className="image-grid-section">
      <div className="image-grid-container">
        {imagesData.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
