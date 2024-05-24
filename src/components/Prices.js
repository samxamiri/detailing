import React from "react";

const Prices = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>OUR PRICES</h2>
      <div style={styles.table}>
        <div style={styles.columnHeaderPackages}>Packages</div>
        <div style={styles.columnHeader}>Sedan/Hatchback</div>
        <div style={styles.columnHeader}>SUV</div>
        <div style={styles.columnHeader}>Trucks</div>

        <div style={styles.rowTitle}>Interior</div>
        <div style={styles.price}>$70</div>
        <div style={styles.price}>$80</div>
        <div style={styles.price}>$90</div>

        <div style={styles.rowTitle}>Exterior</div>
        <div style={styles.price}>$40</div>
        <div style={styles.price}>$50</div>
        <div style={styles.price}>$60</div>

        <div style={styles.rowTitle}>Interior + Exterior</div>
        <div style={styles.price}>$100</div>
        <div style={styles.price}>$120</div>
        <div style={styles.price}>$140</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%", // Use 100% width to take up all available space
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
    gridTemplateColumns: "repeat(4, 1fr)", // Keeps the four columns
    gap: "10px",
  },
  columnHeader: {
    fontWeight: "bold",
    paddingBottom: "10px",
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
