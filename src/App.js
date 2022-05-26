import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [state, setState] = useState(0);
  
  return (
    <div onClick={() => {
      if (!state) {
        setState(1);
        setTimeout(() => {
          console.log("Locked");
          setState(0);
        }, 2000);
      }
    }}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
