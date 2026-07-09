import React, { useState } from "react";
import { UserContext } from "../components/contextAPI/UserContext";
import Navbar from "../components/propsDrilling/Navbar";

const ContextData = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 25,
    city: "Delhi",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>Page 1 : Main File </h1>
        <Navbar />
      </UserContext.Provider>
    </div>
  );
};

export default ContextData;
