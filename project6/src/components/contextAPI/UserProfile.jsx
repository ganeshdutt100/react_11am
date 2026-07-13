import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <p> user not found</p>;
  }
  return (
    <div>
      <h2>UserProfile</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>
    </div>
  );
};

export default UserProfile;
