import React from 'react';
import TopSellers from './TopSellers';
import CakeFlavors from './CakeFlavors';
import FrostingFlavors from './FrostingFlavors';

const Menu = () => {
  return (
    <div className='menu'>
      <TopSellers />
      <CakeFlavors />
      <FrostingFlavors />
    </div>
  );
};

export default Menu;
