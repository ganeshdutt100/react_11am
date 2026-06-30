import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = () => {
    const totalSeconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    const displaySeconds = String(totalSeconds).padStart(2, "0");
    const displayMs = String(milliseconds).padStart(2, "0");

    return `${displaySeconds} : ${displayMs}`;
  };

  return (
    <div>
      <h1>Timer : {formatTime()}</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button
        className="ml-5"
        onClick={() => {
          setTime(0);
          setIsActive(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
