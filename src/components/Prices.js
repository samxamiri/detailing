import React from "react";

const Prices = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>OUR PRICES</h2>
      <div style={styles.table}>
        <div style={styles.columnHeaderPackages}>Packages</div>
        <div style={styles.columnHeader}>Sedan/Hatchback</div>
        <div style={styles.columnHeader}>SUV</div>
        <div style={styles.columnHeader}>Trucks/XL</div>

        <div style={styles.rowTitle}>Base Packages</div>
        <div style={styles.price}>$85</div>
        <div style={styles.price}>$105</div>
        <div style={styles.price}>$115</div>

        <div style={styles.rowTitle}>Interior Only Package</div>
        <div style={styles.price}>$120</div>
        <div style={styles.price}>$140</div>
        <div style={styles.price}>$160</div>

        <div style={styles.rowTitle}>Exterior Only Package</div>
        <div style={styles.price}>$150</div>
        <div style={styles.price}>$170</div>
        <div style={styles.price}>$190</div>

        <div style={styles.rowTitle}>Elite Package</div>
        <div style={styles.price}>$200</div>
        <div style={styles.price}>$220</div>
        <div style={styles.price}>$250</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  table: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  columnHeader: {
    fontWeight: "bold",
    paddingBottom: "10px",
    textAlign: "center",
  },
  columnHeaderPackages: {
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  rowTitle: {
    fontWeight: "bold",
    textAlign: "left",
  },
  price: {
    textAlign: "center",
  },
};

export default Prices;
