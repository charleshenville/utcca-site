import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './gear.module.css'; // Import the CSS for the spinning animation

const Gear = () => {
  return (
    <div className="gear-container">
      <i className="fas fa-cog fa-spin"></i>
    </div>
  );
};

export default Gear;
