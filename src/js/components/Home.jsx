import React, { useState, useEffect } from 'react';

const SecondsCounter = ({ seconds }) => {

  const formatSeconds = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  const digits = formatSeconds(seconds);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        {/* Icono de reloj */}
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#000',
          border: '6px solid white',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '10px'
        }}>
          <div style={{
            color: 'white',
            fontSize: '40px'
          }}>🕐</div>
        </div>

        {/* Dígitos */}
        {digits.map((digit, index) => (
          <div key={index} style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#000',
            border: '6px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{
              color: 'white',
              fontSize: '50px',
              fontWeight: 'bold',
              fontFamily: 'monospace'
            }}>
              {digit}
            </span>
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