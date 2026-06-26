import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   //  Side Effect
  //   console.log(`render counter ${count}`);
  // }, [count]);
  useEffect(() => {
    // console.log("Mount");
    const timer = setInterval(() => {
      console.log("Value");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("Value Stoped");
    };
  }, []);

  return (
    <div>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>ADD</button>
      {count} */}
    </div>
  );
};

export default UseEffect;
