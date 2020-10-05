import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Example from "./chartU";
const ENDPOINT = "http://192.168.0.16:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return (
    <p>
      {/* It's <time dateTime={response}>{response}</time> */}
      <div>{response}</div>
      <Example value={response}/>
    </p>
  );
}

export default App;