import React from 'react';

import './styles/glutenfreeselector.css'

const GlutenFreeSelector = ({glutenFree, onInputChange}) => {
  return (
    <div className="gluten-free-selector form-group">
      <label className="group-name" htmlFor="gluten-free">Gluten free</label>
      <input 
        checked={glutenFree}
        onChange={e => onInputChange('glutenFree', e.target.checked)}
        type="checkbox" 
        name="gluten-free" 
        id="gluten-free"/>
    </div>);
};

export default GlutenFreeSelector;
