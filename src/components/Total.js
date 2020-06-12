import React from 'react';

import './styles/total.css'

const Total = ({ total }) => {

  return (
    <div className="total">
      <h2 className="group-name">Total:</h2>
      <span className="green total-ammount">{total} $</span>
    </div>
  );
};

export default Total;