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
        }, 8000);
      }, []);
  return (
    
    <div className="App">
    {
    loading ? 
    (
      <BounceLoader size={30} color={'#F37A24'} loading={loading} />
    ) : 
    
    (<body>
      <h1> Freedom Company & FabLab</h1>
      <div class = "border"></div>
      <ThreeDModel />
      <h1>Welcome to our store!</h1>
      <p> We focus on sustainable fashion. Click around our store to learn more!</p>

    </body>
    )
      
    }
      
    </div>
  );
}



export default App;
