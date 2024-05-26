import React from "react";
import { Element } from "react-scroll";

const Prices = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>OUR PRICES</h2>
      <Element
        name="basePackage"
        id="basePackage"
        style={styles.pricingSection}
      >
        <div style={styles.columnHeaderPackages}>Packages</div>
        <div style={styles.columnHeader}>Sedan/Hatchback</div>
        <div style={styles.columnHeader}>SUV</div>
        <div style={styles.columnHeader}>Trucks/XL</div>

        <div style={styles.rowTitle}>Base Packages</div>
        <div style={styles.price}>$85</div>
        <div style={styles.price}>$105</div>
        <div style={styles.price}>$115</div>
      </Element>
      <Element
        name="interiorPackage"
        id="interiorPackage"
        style={styles.pricingSection}
      >
        <div style={styles.rowTitle}>Interior Only Package</div>
        <div style={styles.price}>$120</div>
        <div style={styles.price}>$140</div>
        <div style={styles.price}>$160</div>
      </Element>
      <Element
        name="exteriorPackage"
        id="exteriorPackage"
        style={styles.pricingSection}
      >
        <div style={styles.rowTitle}>Exterior Only Package</div>
        <div style={styles.price}>$150</div>
        <div style={styles.price}>$170</div>
        <div style={styles.price}>$190</div>
      </Element>
      <Element
        name="elitePackage"
        id="elitePackage"
        style={styles.pricingSection}
      >
        <div style={styles.rowTitle}>Elite Package</div>
        <div style={styles.price}>$200</div>
        <div style={styles.price}>$220</div>
        <div style={styles.price}>$250</div>
      </Element>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    overflow: "hidden",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  pricingSection: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxSizing: "border-box",
    marginBottom: "20px",
  },
  columnHeader: {
    fontWeight: "bold",
    paddingBottom: "10px",
    borderBottom: "2px solid #ddd",
    color: "#333",
  },
  columnHeaderPackages: {
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: "10px",
    borderBottom: "2px solid #ddd",
    color: "#333",
  },
  rowTitle: {
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#555",
  },
  price: {
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#555",
  },
};

export default Prices;
