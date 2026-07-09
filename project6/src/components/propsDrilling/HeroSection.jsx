import React from "react";
import UserProfileCard from "./UserProfileCard";

const HeroSection = ({ user }) => {
  return (
    <div>
      HeroSection
      <UserProfileCard user={user} />
    </div>
  );
};

export default HeroSection;
