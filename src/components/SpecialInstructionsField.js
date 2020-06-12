import React from 'react';

import './styles/specialinstructionsfield.css'

const SpecialInstructionsField = ({ instructions, onInputChange }) => {
  return (
    <div className="special-instructions-container form-group"> 
      <h2 className="group-name">Special instructions</h2>
      <textarea 
        className="special-instructions"
        onChange={e => onInputChange('specialInstructions',e.target.value)}
        name="special-instructions" 
        id="special-instructions"
        value={instructions}></textarea>
    </div>);
};

export default SpecialInstructionsField;
