import React from "react";

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeader}>OUR PACKAGES</h1>
      <p style={styles.note}>
        ACCESS TO WATER hose & electric outlet is necessary for ALL packages
      </p>
      <div style={styles.packageSection}>
        <div style={styles.package}>
          <h2 style={{ ...styles.header, ...styles.basePackage }}>
            Base Package
          </h2>
          <h3>Exterior:</h3>
          <ul>
            <li>Exterior Hand Wash</li>
            <li>Rim Clean & Tire Shine</li>
            <li>Spray Wax (up to 3 months of protection)</li>
          </ul>
          <h3>Interior:</h3>
          <ul>
            <li>Vacuum</li>
            <li>
              Interior Wipe Down (dashboard, door panels, center console, cup
              holders)
            </li>
            <li>Clean Windows, Floor Mats & Door Jams</li>
          </ul>
        </div>
        <div style={styles.package}>
          <h2 style={{ ...styles.header, ...styles.interiorPackage }}>
            Interior Only Package
          </h2>
          <ul>
            <li>
              Interior Wipe Down (dashboard, door panels, center console, cup
              holders)
            </li>
            <li>Deep Vacuum</li>
            <li>Clean Windows, Floor Mats & Door Jams</li>
            <li>Carpet & Seat Shampoo + Extraction</li>
            <li>Leather Cleaner and Conditioner (if applicable)</li>
          </ul>
        </div>
        <div style={styles.package}>
          <h2 style={{ ...styles.header, ...styles.exteriorPackage }}>
            Exterior Only Package
          </h2>
          <ul>
            <li>Hand Wash</li>
            <li>Tire Clean & Shine</li>
            <li>Paint Decontamination (clay bar)</li>
            <li>Spray Sealant (8 months of protection)</li>
            <li>Liquid Wax</li>
          </ul>
        </div>
        <div style={styles.package}>
          <h2 style={{ ...styles.header, ...styles.elitePackage }}>
            Elite Package
          </h2>
          <h3>Exterior:</h3>
          <ul>
            <li>Exterior Hand Wash</li>
            <li>Rim Clean & Tire Shine</li>
            <li>Paint Decontamination (clay bar)</li>
            <li>Spray Sealant (8 months of protection)</li>
            <li>Liquid Wax</li>
          </ul>
          <h3>Interior:</h3>
          <ul>
            <li>
              Interior Wipe Down (dashboard, door panels, center console, cup
              holders)
            </li>
            <li>Deep Vacuum</li>
            <li>Clean Windows, Floor Mats & Door Jams</li>
            <li>Carpet & Seat Shampoo + Extraction</li>
            <li>Leather Cleaner, Conditioner & Protection (if applicable)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  mainHeader: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  note: {
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  packageSection: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  package: {
    flexBasis: "24%",
    padding: "10px",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  basePackage: {
    color: "#007BFF", // Blue color for Base Package
  },
  interiorPackage: {
    color: "#28a745", // Green color for Interior Only Package
  },
  exteriorPackage: {
    color: "#dc3545", // Red color for Exterior Only Package
  },
  elitePackage: {
    color: "#ffc107", // Yellow color for Elite Package
  },
};

export default Services;
