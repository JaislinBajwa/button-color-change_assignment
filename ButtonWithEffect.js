import React, { useState, useEffect } from 'react';
import './index.css';

const ButtonWithEffect = () => {
  const [buttonColor, setButtonColor] = useState('blue');
  const [conditionMet, setConditionMet] = useState(false);

  useEffect(() => {
    if (conditionMet) {
      setButtonColor('green');
    } else {
      setButtonColor('blue');
    }
  }, [conditionMet]);

  const handleButtonClick = () => {
    // Simulate a condition that changes based on the current color
    setConditionMet(buttonColor === 'blue');
  };

  return (
    <div className="button-container">
      <button style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonWithEffect;

