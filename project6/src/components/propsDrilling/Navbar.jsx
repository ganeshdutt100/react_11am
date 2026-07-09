import React from "react";
import HeroSection from "./HeroSection";

const Navbar = ({ user }) => {
  return (
    <div>
      Navbar
      <HeroSection user={user} />
    </div>
  );
};

export default Navbar;
