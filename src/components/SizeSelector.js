import React from 'react';

import './styles/sizeselector.css';
import SizeInput from './SizeInput';

const SizeSelector = ({ currentSize, onInputChange, price }) => {


  return (
    <div className="size-selector form-group">
      <h2 className="group-name">Size</h2>
      <SizeInput
        size="small"
        currentSize={currentSize}
        onInputChange={onInputChange}
        price={price}
      />
      <SizeInput
        size="medium"
        currentSize={currentSize}
        onInputChange={onInputChange}
        price={price}
      />
      <SizeInput
        size="large"
        currentSize={currentSize}
        onInputChange={onInputChange}
        price={price}
      />
    </div>
  );
};

export default SizeSelector;
