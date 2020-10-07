import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
 
import Example from "./chartU";
const ENDPOINT = "http://192.168.0.16:4001";

function App() {
  const [dataarray, setDataarray] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setDataarray(prevDataarray => {
        prevDataarray[prevDataarray.length] = data;
        return prevDataarray;
      });
      setCount(prevCount => prevCount + 1);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return (
    <p>
      <div>{count}</div>
      <Example value={dataarray.map((val, index) => {return {name: index , value: val};})}/>
    </p>
  );
}

export default App;