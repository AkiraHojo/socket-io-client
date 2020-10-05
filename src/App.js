import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Example from "./chartU";
const ENDPOINT = "http://192.168.0.16:4001";

function App() {
  const [response, setResponse] = useState("");
  const [count, setCount] = useState(0);
  const [dataarray, setDataarray] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
      setDataarray((prevDataarray) => {
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
      {/* It's <time dateTime={response}>{response}</time> */}
      <div>{response}</div>
      <div>{count}</div>
      <div>{dataarray.map(value => value + ",")}</div>
      <Example value={response}/>
      {/* <button onClick={() => {setCount(count+1)}}>button</button> */}
    </p>
  );
}

export default App;