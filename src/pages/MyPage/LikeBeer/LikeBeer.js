import React from 'react';

const LikeBeer = ({ beer }) => {
  const { img, feature } = beer;
  return (
    <div>
      <div>{feature}</div>
      <img src={img} alt="" />
    </div>
  );
};

export default LikeBeer;
