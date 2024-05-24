import React from "react";

const Services = () => {
  return (
    <div style={styles.container}>
      <div style={styles.serviceSection}>
        <h2 style={styles.header}>Interior:</h2>
        <div style={styles.serviceDetail}>
          <h3>Shampoo Carpets and Seats</h3>
          <p>
            Shampoo carpets with top of the line carpet cleaner for a deep clean
            followed by hot water extraction to remove all dirt, grime, and
            stains.
          </p>
        </div>
        <div style={styles.serviceDetail}>
          <h3>Hot Water Extraction for Deep Clean</h3>
          <p>
            All carpets and fabrics get extracted after being cleaned with our
            dedicated fabric/carpet cleaner for a long lasting fresh scent.
          </p>
        </div>
        <div style={styles.serviceDetail}>
          <h3>Vacuum</h3>
          <p>
            All residue is removed from the car with the help of a vacuum,
            allowing a deep clean to be performed without anything in the way.
          </p>
        </div>
        <div style={styles.serviceDetail}>
          <h3>Full Interior Cleaning</h3>
          <p>
            All of interior is detailed and cleaned using a dedicated interior
            cleaner with the help of microfiber towels and detailing brushes for
            all hard to reach places.
          </p>
        </div>
      </div>
      <div style={styles.serviceSection}>
        <h2 style={styles.header}>Exterior:</h2>
        <div style={styles.serviceDetail}>
          <h3>Snow Foam Pre-Soak</h3>
          <p>
            A pre-wash with snow foam lifts dirt and allows it to float away
            without being rubbed into the vehicle's finish.
          </p>
        </div>
        <div style={styles.serviceDetail}>
          <h3>Contact Wash With Wash Mitt</h3>
          <p>
            The wash mitt gently removes any remaining dirt and contaminants,
            providing a deep clean without scratching the surface.
          </p>
        </div>
        <div style={styles.serviceDetail}>
          <h3>Dedicated Hybrid Ceramic Wax Protection</h3>
          <p>
            Dedicated Hybrid Ceramic Wax Protection with Meguiar's Hybrid
            Ceramic Wax offers easy application and durable, glossy protection.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff",
    margin: "0 auto",
    maxWidth: "1200px",
  },
  serviceSection: {
    flex: 1,
    margin: "0 10px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  serviceDetail: {
    marginBottom: "10px",
  },
};

export default Services;
