import React from "react";
import Home from "./Home";
import Services from "./Services";
import Prices from "./Prices";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <div style={styles.mainContainer}>
      <Home />
      <Services />
      <Prices />
      <Contact />
    </div>
  );
};

const styles = {
  mainContainer: {
    maxWidth: "1200px", // Set a max width or width that fits your design
    margin: "auto", // Center the container
    padding: "10px", // Add padding as necessary
    backgroundColor: "#f0f0f0", // Optional background color
  },
};

export default MainContent;
