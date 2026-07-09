import React, { useState } from "react";
import Navbar from "../components/propsDrilling/Navbar";

const PropsDrilling = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 25,
    city: "Delhi",
  });
  return (
    <div>
      <Navbar user={user}></Navbar>
    </div>
  );
};

export default PropsDrilling;
