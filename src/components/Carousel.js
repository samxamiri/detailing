import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images, title, description }) => {
  return (
    <div style={styles.carouselContainer}>
      <h2 style={styles.carouselTitle}>{title}</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index} style={styles.slide}>
            <img
              src={image.src}
              alt={image.alt}
              style={styles.image}
              onError={(e) => console.log("Error loading image:", e)}
            />
            <div style={styles.caption}>
              <p style={styles.legend}>{title}</p>
              <p style={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const App = () => {
  const interiorImages = [
    {
      src: "/images/leatherbefore.jpg", // Corrected path
      alt: "Interior Before and After",
    },
    {
      src: "/images/leatherafter.jpg", // Corrected path
      alt: "Interior Before and After",
    },
    // Add more interior images as needed
  ];

  const exteriorImages = [
    {
      src: "/images/enginebefore.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
    {
      src: "/images/engineafter.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
    {
      src: "/images/cornerbefore.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
    {
      src: "/images/cornerafter.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
    {
      src: "/images/windshieldbefore.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
    {
      src: "/images/windshieldafter.jpg", // Corrected path
      alt: "Exterior Before and After",
    },
  ];

  return (
    <div style={styles.appContainer}>
      <div style={styles.row}>
        <ImageCarousel
          images={interiorImages}
          title="Interior Before & After"
          description="Showcase of my interior work!"
        />
        <ImageCarousel
          images={exteriorImages}
          title="Exterior Before & After"
          description="Showcase of my exterior work!"
        />
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    maxWidth: "1200px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    overflow: "hidden",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  carouselContainer: {
    flex: "1",
    margin: "10px",
    minWidth: "calc(50% - 20px)",
    boxSizing: "border-box",
  },
  carouselTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  slide: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  caption: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  },
  legend: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0",
  },
  description: {
    fontSize: "16px",
    margin: "0",
  },
};

export default App;
