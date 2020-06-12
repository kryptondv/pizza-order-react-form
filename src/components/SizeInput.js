import React from 'react';

const SizeInput = ({ currentSize, onInputChange, size, price }) => {

  const onInputChangeLocal = e => {
    onInputChange('size', e.target.id);
  };

  return (
    <span>
      <input
        onChange={onInputChangeLocal}
        className="size-radio"
        type="radio"
        id={size}
        name={size}
        checked={currentSize === size}
      />
      <label className="size-radio-label" htmlFor={size}>
        {size} - {price[size]}$
      </label>
    </span>
  );
};

export default SizeInput;