import React, { useState, useEffect } from 'react';
import './SecondsCounter.css';

const SecondsCounter = ({ seconds }) => {
  const formatSeconds = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  const digits = formatSeconds(seconds);

  return (
    <div className="counter-container">
      <div className="counter-inner">
        
        <div className="clock-icon">
          <div className="clock-emoji">🕐</div>
        </div>

        
        {digits.map((digit, index) => (
          <div key={index} className="digit-box">
            <span className="digit">{digit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

export default App;
