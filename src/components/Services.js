import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeader}>OUR PACKAGES</h1>
      <p style={styles.note}>
        ACCESS TO WATER hose & electric outlet is necessary for ALL packages
      </p>
      <div style={styles.packageSection}>
        <div style={styles.package}>
          <div style={styles.packageContent}>
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
          <Link
            to="basePackage"
            smooth={true}
            duration={500}
            style={styles.button}
            onClick={() => highlightPricing("basePackage")}
          >
            View Pricing
          </Link>
        </div>
        <div style={styles.package}>
          <div style={styles.packageContent}>
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
          <Link
            to="interiorPackage"
            smooth={true}
            duration={500}
            style={styles.button}
            onClick={() => highlightPricing("interiorPackage")}
          >
            View Pricing
          </Link>
        </div>
        <div style={styles.package}>
          <div style={styles.packageContent}>
            <h2 style={{ ...styles.header, ...styles.exteriorPackage }}>
              Exterior Only Package
            </h2>
            <ul>
              <li>Hand Wash</li>
              <li>Tire Clean & Shine</li>
              <li>Paint Decontamination (clay bar)</li>
              <li>Spray Sealant (6 months of protection)</li>
            </ul>
          </div>
          <Link
            to="exteriorPackage"
            smooth={true}
            duration={500}
            style={styles.button}
            onClick={() => highlightPricing("exteriorPackage")}
          >
            View Pricing
          </Link>
        </div>
        <div style={styles.package}>
          <div style={styles.packageContent}>
            <h2 style={{ ...styles.header, ...styles.elitePackage }}>
              Elite Package
            </h2>
            <h3>Exterior:</h3>
            <ul>
              <li>Exterior Hand Wash</li>
              <li>Rim Clean & Tire Shine</li>
              <li>Paint Decontamination (clay bar)</li>
              <li>Spray Sealant (6 months of protection)</li>
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
          <Link
            to="elitePackage"
            smooth={true}
            duration={500}
            style={styles.button}
            onClick={() => highlightPricing("elitePackage")}
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

const highlightPricing = (packageName) => {
  console.log(`Highlighting ${packageName}`); // Debug log

  const elements = document.querySelectorAll(".highlight");
  elements.forEach((el) => {
    console.log(`Removing highlight from ${el.id}`); // Debug log
    el.classList.remove("highlight");
  });

  const packageElement = document.getElementById(packageName);
  if (packageElement) {
    console.log(`Adding highlight to ${packageName}`); // Debug log
    packageElement.classList.add("highlight");
    setTimeout(() => {
      console.log(`Removing highlight from ${packageName}`); // Debug log
      packageElement.classList.remove("highlight");
    }, 10000); // Remove highlight after 3 seconds
  } else {
    console.log(`Element with ID ${packageName} not found`); // Debug log
  }
};

const styles = {
  container: {
    maxWidth: "1200px",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    overflow: "hidden",
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  package: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  packageContent: {
    flexGrow: 1,
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  basePackage: {
    color: "#007BFF",
  },
  interiorPackage: {
    color: "#28a745",
  },
  exteriorPackage: {
    color: "#dc3545",
  },
  elitePackage: {
    color: "#ffc107",
  },
  button: {
    display: "block",
    width: "80%",
    padding: "10px",
    margin: "10px auto 0",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
  },
};

export default Services;
