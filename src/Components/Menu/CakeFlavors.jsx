import React from 'react';
import cakeFlavors from '../Assets/cakeFlavorsData';
import FlavorCard from './FlavorCard';

const CakeFlavors = () => {
  return (
    <section className="menu-section">
      <h2>Cake Flavors</h2>
      <h3>"Mix-n-Match,Choose any cake flavor to go with any buttercream/frosting flavor"</h3>
      <div className="card-grid">
        {cakeFlavors.map((item, index) => (
          <FlavorCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default CakeFlavors;
