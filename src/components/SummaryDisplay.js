import React from 'react';

import './styles/summarydisplay.css'

const SummaryDisplay = ({ pizza, orderConfirmed }) => {
  return (
    <div className={`summary form-group ${orderConfirmed && 'order-confirmed'}`}>
      <h2 className="group-name">
        <span className="green">Your</span> pizza
      </h2>
      <div className="summary-details">{pizza.size}</div>
      <div className="summary-details">{pizza.topping}</div>
      {pizza.glutenFree && 
        <div className="summary-details">gluten free</div>
      }
      {pizza.specialInstructions && (
        <div className="summary-details">{pizza.specialInstructions}</div>
      )}
    </div>
  );
};

export default SummaryDisplay;
