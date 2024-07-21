import './App.css';
import ThreeDModel from './ThreeDModel';
import React, { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

function App() {

  const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        // Simulate an API call
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
  return (
    
    <div className="App">
      {
        loading ? 
        <BounceLoader size={30} color={'#F37A24'} loading={loading} />
        : 
        <div>
         
          <ThreeDModel />
        </div>
      }
      
    </div>
  );
}



export default App;
