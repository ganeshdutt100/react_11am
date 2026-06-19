import React from "react";
import { useState } from "react";
// Syntax
//const [data , setData] =  useState(1)
const UseState = () => {
  const [data, setData] = useState(10);

  const add = () => {
    setData(data + 1);
  };
  const sub = () => {
    setData(data - 1);
  };

  return (
    <div>
      <button onClick={() => setData(data + 1)}>add</button>
      <button onClick={add}>add</button>
      <p>{data}</p>
      <button onClick={sub}>sub</button>
    </div>
  );
};

export default UseState;
