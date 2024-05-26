import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header style={styles.headerStyle}>
      <div style={styles.logoContainer}>
        <img src={"/images/logo.jpg"} alt="Logo" style={styles.logoStyle} />
        <h1 style={styles.titleStyle}>Sam's Mobile Detailing MTL</h1>
      </div>
      <nav style={styles.navStyle}>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={styles.linkStyle}
        >
          Contact Us
        </Link>
        <Link to="prices" smooth={true} duration={500} style={styles.linkStyle}>
          Prices
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 10%", // Adjust padding as needed
    backgroundColor: "#fff", // Set the background color if needed
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional shadow
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoStyle: {
    width: "95px", // Adjust the width of the logo as needed
    height: "95px", // Adjust the height of the logo as needed
    marginRight: "20px", // Space between the logo and the title
  },
  titleStyle: {
    margin: 0, // Removes default margin
    fontSize: "24px", // Adjust font size as needed
  },
  navStyle: {
    display: "flex",
    gap: "20px", // Adjust spacing between links
  },
  linkStyle: {
    textDecoration: "none",
    color: "black", // Adjust link color as needed
    fontSize: "18px", // Adjust font size as needed
  },
};

export default Header;
