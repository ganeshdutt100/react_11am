import React from "react";

const UserProfileCard = ({ user }) => {
  return (
    <div>
      UserProfileCard
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>City : {user.city}</p>
    </div>
  );
};

export default UserProfileCard;
