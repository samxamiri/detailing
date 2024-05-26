import React from "react";

const Contact = () => {
  return (
    <div style={styles.container} className="Contact">
      <h2 style={styles.header}>Contact Information</h2>
      <p style={styles.info}>
        <strong>Phone Number:</strong> 514-772-4554
      </p>
      <p style={styles.info}>
        <strong>Instagram:</strong> sams.mobiledetailing
      </p>
    </div>
  );
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
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  info: {
    fontSize: "18px",
    lineHeight: "1.5",
    margin: "5px 0",
  },
};

export default Contact;
