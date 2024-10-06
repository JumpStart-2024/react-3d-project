import "./App.css";
import ThreeDModel from "./ThreeDModel";
import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate an API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  
  return (
    <div className="App">
      {loading ? (
        <div className="column">
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "24px",
            marginTop: '50px'
            
          }}>
            Loading...
          
          </div>
          <BounceLoader size={50} color={"#F37A24"} loading={loading} />
        </div>
         
      ) : (
        <div>
          <ThreeDModel />
        </div>
      )}
    </div>
  );
}

export default App;
