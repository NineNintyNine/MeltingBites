import React from 'react';
import './Menu.css';

const FlavorCard = ({ title, description }) => {
  return (
    <div className="flavor-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FlavorCard;
