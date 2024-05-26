import React from "react";

import ImageCarousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <div style={styles.mainHeader}>
        <h1 style={styles.mainTitle}>MTL Mobile Detailing</h1>
        <p style={styles.subtitle}>
          Top-Quality Mobile Detailing Services for Interior, Exterior, or Both
          – Serving Montreal!
        </p>
      </div>
      <ImageCarousel />
    </div>
  );
};

const styles = {
  mainHeader: {
    textAlign: "center", // Center the text
    padding: "50px 20px", // Add some padding for spacing
    backgroundColor: "#ffffff", // Background color of the section
    color: "#000000", // Text color
  },
  mainTitle: {
    fontSize: "48px", // Large font size for the main title
    fontWeight: "bold", // Bold font weight
    margin: "20px 0", // Margin to space out from subtitle
  },
  subtitle: {
    fontSize: "24px", // Smaller font size for the subtitle
    margin: "0", // Remove default margin
  },
  section: {
    padding: "20px 0", // Add padding to each section for spacing
  },
};

export default Home;
