import React from 'react';

import './styles/toppingselector.css'

const ToppingSelector = ({ topping, onInputChange, currentSize, price }) => {

  return (
    <div className="topping-selector form-group">
      <h2 className="group-name">Topping</h2>
      <select
        onChange={e => onInputChange('topping', e.target.value)}
        value={topping}
        name="topping"
        id="topping"
      >
        <optgroup>
          <option value="" disabled>
            Select your option
          </option>
          <option value="pepperoni">
            pepperoni {price.pepperoni[currentSize]}$
          </option>
          <option value="spinache">
            spinache {price.spinache[currentSize]}$
          </option>
          <option value="tuna">
            tuna {price.tuna[currentSize]}$</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ToppingSelector;
