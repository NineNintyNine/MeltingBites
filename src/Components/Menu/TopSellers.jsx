import React from 'react';
import topSellers from '../Assets/topSellersData';
import FlavorCard from './FlavorCard';

const TopSellers = () => {
  return (
    <section className="menu-section">
      <h1 className='about-header'>Menu</h1>
      <h2>Top Sellers</h2>
      <div className="card-grid">
        {topSellers.map((item, index) => (
          <FlavorCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
