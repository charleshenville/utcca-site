import React from 'react';
import styles from './gear.module.css'; // Import the CSS module


const Gear = () => {
  return (
    <div className={styles.gearContainer}>
      <i className={`fas fa-cog ${styles.faSpin}`}></i>
    </div>
  );
};

export default Gear;
