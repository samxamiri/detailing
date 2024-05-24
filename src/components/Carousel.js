import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <div style={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        dynamicHeight={true}
      >
        <div style={styles.slide}>
          <img
            src="path/to/your/interior_before_after.jpg"
            alt="Interior Before and After"
          />
          <p style={styles.legend}>Interior Before & After</p>
          <p style={styles.description}>Showcase of my interior work!</p>
        </div>
        <div style={styles.slide}>
          <img
            src="path/to/your/exterior_before_after.jpg"
            alt="Exterior Before and After"
          />
          <p style={styles.legend}>Exterior Before & After</p>
          <p style={styles.description}>Showcase of my exterior work!</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

const styles = {
  carouselContainer: {
    textAlign: "center",
    maxWidth: "1200px", // Adjust based on your layout needs
    margin: "auto",
    backgroundColor: "#fff", // Adjust background color as needed
    padding: "20px 0",
  },
  slide: {
    position: "relative",
    textAlign: "center",
  },
  legend: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0 5px 0", // Spacing around the title
  },
  description: {
    fontSize: "16px",
    color: "#666", // Lighter text color for the description
  },
};

export default ImageCarousel;
