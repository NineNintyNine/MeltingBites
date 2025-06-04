import React from 'react';
import frostingFlavors from '../Assets/frostingFlavorsData';
import FlavorCard from './FlavorCard';

const FrostingFlavors = () => {
  return (
    <section className="menu-section">
      <h2>Frosting Flavors</h2>
      <div className="card-grid">
        {frostingFlavors.map((item, index) => (
          <FlavorCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default FrostingFlavors;
