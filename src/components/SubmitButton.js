import React, { useState } from 'react';
import './styles/submitbutton.css'


const SubmitButton = ({ onFormSubmit, orderConfirmed }) => {

  const [success, setSuccess] = useState(false);

  const renderButtonContent = () => {
    if(orderConfirmed) {
      setTimeout(() => {
        setSuccess(true)
      }, 3500);
    }
    
    return(
      orderConfirmed ? 
      <div className="loader" />
      : 'Send order'
    )
  }

  return (
    <button onClick={onFormSubmit} className={`submit-btn ${success && 'success'}`}>
    {success ? <span>Thank You!</span> :renderButtonContent()}
    </button>
  );
};

export default SubmitButton;
