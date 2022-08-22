import React from 'react';

const TestResult = ({ result }) => {
  const { img, feature } = result;
  return (
    <div>
      <div>{feature}</div>
      <img src={img} alt="" />
    </div>
  );
};

export default TestResult;
