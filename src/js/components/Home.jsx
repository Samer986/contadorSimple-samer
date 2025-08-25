import React, { useState, useEffect } from 'react';


function SecondsCounter({ seconds }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-8 text-center">
       
        <div className="text-[8rem]">
          <h1>Contador</h1>
		  <h2>🕐</h2>
        </div>
        
        
        <div className="text-[12rem] font-black text-gray-800 leading-none">
          {seconds}
        </div>
      </div>
    </div>
  );
}


function App() {
  
  const [seconds, setSeconds] = useState(0);

  
  useEffect(() => {
   
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <SecondsCounter seconds={seconds} />
  );
}

export default App;